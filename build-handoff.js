/* Assembles ONE shareable handoff package for the web team.
 * Run: node build-handoff.js   (then zip the printed folder)
 */
const fs = require('fs');
const path = require('path');
const os = require('os');
const { execSync } = require('child_process');

const ROOT = __dirname;
const run = c => execSync(c, { cwd: ROOT, stdio: 'pipe' }).toString();

// make sure every generated artefact is current
run('node build-embeds.js');
run('node build-md.js');
run('node build-photo-pack.js');

global.window = {};
require('./people.js');
const PEOPLE = window.PEOPLE;

const OUT = path.join(os.tmpdir(), 'Lexis Meet the Team');
fs.rmSync(OUT, { recursive: true, force: true });
const mk = p => { fs.mkdirSync(p, { recursive: true }); return p; };
mk(OUT);

const copyDir = (src, dst) => {
  mk(dst);
  fs.readdirSync(src).forEach(f => {
    const s = path.join(src, f), d = path.join(dst, f);
    fs.statSync(s).isDirectory() ? copyDir(s, d) : fs.copyFileSync(s, d);
  });
};

// 1. photos (named by person) + contact sheet + manifest, from the photo pack
const PACK = path.join(os.tmpdir(), 'Lexis Team Photos');
copyDir(PACK, path.join(OUT, 'photos'));
['contact-sheet.jpg', 'manifest.csv'].forEach(f => {
  fs.renameSync(path.join(OUT, 'photos', f), path.join(OUT, f));
});
fs.rmSync(path.join(OUT, 'photos', 'README.txt'), { force: true });

// 2. content
fs.copyFileSync(path.join(ROOT, 'Meet the Team.md'), path.join(OUT, 'Meet the Team.md'));

// 3. machine-readable data for the developer
const json = PEOPLE.map(p => ({
  slug: p.slug, name: p.name, role: p.role, campus: p.campus, department: p.dept || null,
  based: p.campusLabel || null, email: p.email || null, languages: p.languages || null,
  hometown: p.hometown || null, inAustraliaSince: p.since || null,
  photo: p.photo ? 'photos/' + p.name.replace(/[\\/:*?"<>|]/g, '') + '.jpg' : null,
  bio: p.bio || null, questions: [p.q1, p.q2, p.q3].filter(Boolean)
}));
fs.writeFileSync(path.join(OUT, 'team.json'), JSON.stringify(json, null, 2), 'utf8');

// 4. paste-ready campus embeds
copyDir(path.join(ROOT, 'embeds'), path.join(OUT, 'campus-embeds'));

// 5. working reference site
const REF = mk(path.join(OUT, 'reference-site'));
['index.html', 'people.js'].forEach(f => fs.copyFileSync(path.join(ROOT, f), path.join(REF, f)));
copyDir(path.join(ROOT, 'assets'), path.join(REF, 'assets'));

// 6. README
const noPhoto = PEOPLE.filter(p => !p.photo).map(p => p.name);
const counts = {};
PEOPLE.forEach(p => counts[p.campus] = (counts[p.campus] || 0) + 1);
fs.writeFileSync(path.join(OUT, 'README.md'), `# Lexis English — Meet the Team (handoff pack)

Everything needed to build the Meet the Team section into **2025.lexisenglish.com**.
**${PEOPLE.length} staff** · ${Object.entries(counts).map(([k, v]) => `${k} ${v}`).join(' · ')}

Generated ${new Date().toISOString().slice(0, 10)}.

## What's in here

| Folder / file | What it is |
|---|---|
| \`contact-sheet.jpg\` | One image of everyone — quick visual index |
| \`manifest.csv\` | Who's who: name, role, campus, department, email, photo filename (opens in Excel) |
| \`team.json\` | **Machine-readable data** — the best source for a developer |
| \`Meet the Team.md\` | Full human-readable content: bios + Q&As per person |
| \`photos/\` | ${PEOPLE.filter(p => p.photo).length} headshots named by person, 640×800 (4:5), web-optimised JPEG |
| \`campus-embeds/\` | **Paste-ready** \`<section>\` per campus — drop into the matching WordPress page |
| \`reference-site/\` | The complete working directory (open \`index.html\`) — filters, search, profile modals |

## Using the campus embeds

Each \`campus-embeds/<campus>.html\` is a self-contained block (scoped CSS, no dependencies)
for that campus page. Open \`campus-embeds/preview.html\` to see them all.

They currently load photos from GitHub Pages. To serve them from your own site instead,
upload \`photos/\` to the Media Library and regenerate with:

    ASSET_BASE=https://2025.lexisenglish.com/wp-content/uploads/2026/07/ node build-embeds.js

Campus pages show **only that campus's own staff**. Head Office staff appear only in
\`head-office.html\`, and carry no campus reference.

## Design (matches 2025.lexisenglish.com)

- **Headings:** Clash Display 600 (Fontshare), letter-spacing -0.015em, sentence case
- **Body:** Inter, 17px
- **Colours:** page \`#F7F8F9\` · ink \`#221F1F\` · orange \`#F59120\` · gray \`#F9F9F9\` · cream \`#FBF6EE\`
- **Container** 1140px · **cards** radius 18px, shadow \`0 8px 22px rgba(34,31,31,.05)\`, 4:5 photos
- Language flags are **inline SVG** (not emoji — Windows/Chrome don't render flag emoji).
  English uses the Australian flag.
- Tiles use fixed-height name/role blocks so every card lines up across a row.

## Open items

- **No photo yet (${noPhoto.length}):** ${noPhoto.join(', ')} — these render a branded initials avatar.
- **Some emails are shared inboxes**, not personal (e.g. Issi *and* Valerie both use
  \`sydneyadmin@\`; Kaitlyn \`brisbaneadmin@\`; Maria \`homestay@\`). Taken from Company Directory.xlsx.
- **Olga Kuperman's job title** was blank on her form — currently "Student Services" (please confirm).
- **Robert Dillewaard** was typed "Rober" on his form — corrected.
- The Company Directory lists different positions for a few people than the website
  (e.g. Alana as "Campus Manager"); website titles were kept per the agreed naming rules.
`, 'utf8');

console.log('handoff folder:', OUT);
console.log('people:', PEOPLE.length, '| photos:', PEOPLE.filter(p => p.photo).length, '| no photo:', noPhoto.join(', '));

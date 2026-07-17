/* Builds a shareable photo pack (no GitHub needed):
 *   - every processed headshot, renamed to the person's real name
 *   - manifest.csv (name, role, campus, email, file)
 *   - contact-sheet.jpg (one image showing everyone)
 * Run: node build-photo-pack.js
 */
const fs = require('fs');
const path = require('path');
const sharp = require('C:/Users/MikeCarlise/Claude/lexis-team-tmp/node_modules/sharp');

global.window = {};
require('./people.js');
const PEOPLE = window.PEOPLE;

const ASSETS = path.join(__dirname, 'assets');
const OUT = path.join(require('os').tmpdir(), 'Lexis Team Photos');
fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT, { recursive: true });

const withPhoto = PEOPLE.filter(p => p.photo);
const noPhoto = PEOPLE.filter(p => !p.photo);

// 1) copy with friendly filenames
const rows = [['Name','Role','Campus / Team','Department','Email','Photo file']];
withPhoto.forEach(p => {
  const safe = p.name.replace(/[\\/:*?"<>|]/g, '');
  const dest = path.join(OUT, `${safe}.jpg`);
  fs.copyFileSync(path.join(ASSETS, p.photo), dest);
  rows.push([p.name, p.role, p.campus, p.dept || '', p.email || '', `${safe}.jpg`]);
});
noPhoto.forEach(p => rows.push([p.name, p.role, p.campus, p.dept || '', p.email || '', 'NO PHOTO SUPPLIED']));

const csv = rows.map(r => r.map(v => `"${String(v).replace(/"/g,'""')}"`).join(',')).join('\r\n');
fs.writeFileSync(path.join(OUT, 'manifest.csv'), '﻿' + csv, 'utf8');

// 2) contact sheet
(async () => {
  const COLS = 5, TW = 240, TH = 300, LABEL = 30, PAD = 12;
  const rowsN = Math.ceil(withPhoto.length / COLS);
  const W = COLS * TW + PAD * (COLS + 1);
  const H = rowsN * (TH + LABEL) + PAD * (rowsN + 1) + 60;

  const tiles = [];
  for (let i = 0; i < withPhoto.length; i++) {
    const p = withPhoto[i];
    const c = i % COLS, r = Math.floor(i / COLS);
    const x = PAD + c * (TW + PAD);
    const y = 60 + PAD + r * (TH + LABEL + PAD);
    const buf = await sharp(path.join(ASSETS, p.photo)).resize(TW, TH, { fit: 'cover' }).jpeg({ quality: 80 }).toBuffer();
    tiles.push({ input: buf, top: y, left: x });
    const label = `<svg width="${TW}" height="${LABEL}"><text x="0" y="19" font-family="Arial,Helvetica,sans-serif" font-size="14" font-weight="600" fill="#221F1F">${p.name.replace(/&/g,'&amp;')}</text></svg>`;
    tiles.push({ input: Buffer.from(label), top: y + TH + 4, left: x });
  }
  const title = `<svg width="${W}" height="60"><text x="${PAD}" y="38" font-family="Arial,Helvetica,sans-serif" font-size="26" font-weight="700" fill="#221F1F">Lexis English — Meet the Team (${withPhoto.length} photos)</text></svg>`;
  tiles.push({ input: Buffer.from(title), top: 0, left: 0 });

  await sharp({ create: { width: W, height: H, channels: 3, background: '#F7F8F9' } })
    .composite(tiles).jpeg({ quality: 86 }).toFile(path.join(OUT, 'contact-sheet.jpg'));

  // 3) readme
  fs.writeFileSync(path.join(OUT, 'README.txt'),
`LEXIS ENGLISH — MEET THE TEAM PHOTOS
${withPhoto.length} photos, named by staff member. All 640x800 (4:5), web-optimised JPEG.

  manifest.csv      who's who: name, role, campus, department, email, filename
  contact-sheet.jpg one image showing everyone (quick visual index)

No photo supplied yet (${noPhoto.length}): ${noPhoto.map(p=>p.name).join(', ') || 'none'}

To use these on the website instead of the GitHub-hosted copies:
bulk-upload this folder to the WordPress Media Library, then in build-embeds.js
set ASSET_BASE to your media URL and re-run "node build-embeds.js".
`, 'utf8');

  console.log('pack folder:', OUT);
  console.log('photos:', withPhoto.length, '| no photo:', noPhoto.length, '->', noPhoto.map(p=>p.name).join(', '));
})();

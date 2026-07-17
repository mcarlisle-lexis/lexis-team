/* Exports the whole team directory to a single Markdown file.
 * Run: node build-md.js   -> writes "Meet the Team.md" to Downloads (and ./Meet the Team.md)
 */
const fs = require('fs');
const path = require('path');

global.window = {};
require('./people.js');
const PEOPLE = window.PEOPLE;

const ASSET_BASE = 'https://mcarlisle-lexis.github.io/lexis-team/assets/';
const CAMPUS_ORDER = ["Sydney","Brisbane","Perth","Sunshine Coast","Byron Bay","Noosa"];
const TEAM_ORDER = ["Head Office"];

const QS = [
  "What do you do at Lexis?",
  "What should students know before they arrive?",
  "What's your favourite thing about your campus?"
];

function person(p){
  const L = [];
  L.push(`### ${p.name}`);
  L.push(`**${p.role}**${p.dept ? ` · ${p.dept}` : ''}`);
  L.push('');

  const meta = [];
  if (p.email)     meta.push(`- **Email:** [${p.email}](mailto:${p.email})`);
  if (p.languages) meta.push(`- **Speaks:** ${p.languages}`);
  if (p.hometown)  meta.push(`- **Hometown:** ${p.hometown}`);
  if (p.since)     meta.push(`- **In Australia:** ${p.since}`);
  if (p.campusLabel) meta.push(`- **Based:** ${p.campusLabel}`);
  meta.push(`- **Photo:** ${p.photo ? ASSET_BASE + p.photo : '_none supplied — initials avatar_'}`);
  L.push(meta.join('\n'));
  L.push('');

  if (p.bio) { L.push(p.bio); L.push(''); }

  const qs = [p.q1, p.q2, p.q3];
  if (qs.some(Boolean)) {
    qs.forEach((a, i) => {
      if (!a) return;
      L.push(`**${i+1}. ${QS[i]}**`);
      L.push('');
      L.push(`> ${a}`);
      L.push('');
    });
  } else if (!p.bio) {
    L.push('_Full profile coming soon._');
    L.push('');
  }
  return L.join('\n');
}

function section(title, members, blurb){
  const L = [`## ${title}`, ''];
  if (blurb) { L.push(blurb); L.push(''); }
  L.push(members.map(person).join('\n---\n\n'));
  L.push('');
  return L.join('\n');
}

const today = new Date().toISOString().slice(0,10);
const out = [];
out.push('# Meet the Team — Lexis English');
out.push('');
out.push('The friendly faces behind every Lexis campus — the people who help you choose a course, settle in, find a home, and make the most of your time in Australia.');
out.push('');
out.push(`**${PEOPLE.length} people** · ${CAMPUS_ORDER.filter(c=>PEOPLE.some(p=>p.campus===c)).length} campuses · Head Office`);
out.push('');
out.push(`Live directory: <https://mcarlisle-lexis.github.io/lexis-team/>`);
out.push('');
out.push(`_Generated ${today} from people.js._`);
out.push('');

// Contents
out.push('## Contents');
out.push('');
[...CAMPUS_ORDER, ...TEAM_ORDER].forEach(c=>{
  const n = PEOPLE.filter(p=>p.campus===c).length;
  if (n) out.push(`- [${c}](#${c.toLowerCase().replace(/\s+/g,'-')}) — ${n}`);
});
out.push('');
out.push('---');
out.push('');

[...CAMPUS_ORDER, ...TEAM_ORDER].forEach(c=>{
  const m = PEOPLE.filter(p=>p.campus===c);
  if (!m.length) return;
  out.push(section(c, m));
  out.push('---');
  out.push('');
});

const md = out.join('\n');
const targets = [
  'C:/Users/MikeCarlise/Downloads/Meet the Team.md',
  path.join(__dirname, 'Meet the Team.md')
];
targets.forEach(t => { fs.writeFileSync(t, md, 'utf8'); console.log('wrote', t, '(' + Math.round(md.length/1024) + ' KB)'); });
console.log('people:', PEOPLE.length);

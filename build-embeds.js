/* Generates paste-ready per-campus team sections for the WordPress campus pages.
 * Each embed is a self-contained <section class="lexis-section"> with scoped styles
 * and absolute image URLs, matching 2025.lexisenglish.com. Run: node build-embeds.js
 */
const fs = require('fs');
const path = require('path');

global.window = {};
require('./people.js');
const PEOPLE = window.PEOPLE;

const ASSET_BASE = 'https://mcarlisle-lexis.github.io/lexis-team/assets/';
const FULL_DIR   = 'https://mcarlisle-lexis.github.io/lexis-team/';

const CAMPUS_COLOR = {
  "Sydney":"#2E86AB", "Brisbane":"#F59120", "Perth":"#C1436D",
  "Sunshine Coast":"#E0A020", "Byron Bay":"#2FA98B", "Noosa":"#7A6FB0", "Head Office":"#5B6CF0"
};

const esc = s => (s==null?"":String(s)).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const initials = p => p.name.split(/\s+/).map(w=>w[0]).slice(0,2).join("").toUpperCase();
function shade(hex,amt){let n=parseInt(hex.slice(1),16);let r=Math.max(0,Math.min(255,(n>>16)+amt));let g=Math.max(0,Math.min(255,((n>>8)&255)+amt));let b=Math.max(0,Math.min(255,(n&255)+amt));return `rgb(${r},${g},${b})`;}
const grad = c => `linear-gradient(145deg, ${c}, ${shade(c,-28)})`;

/* ---- flags (identical to the main directory) ---- */
const starPts=(cx,cy,ro,spikes)=>{const ri=ro*0.4,step=Math.PI/spikes;let d="M",rot=-Math.PI/2;for(let i=0;i<spikes*2;i++){const r=i%2?ri:ro;d+=(cx+Math.cos(rot)*r).toFixed(2)+","+(cy+Math.sin(rot)*r).toFixed(2)+" ";rot+=step;}return d+"Z";};
const star=(cx,cy,ro,spikes)=>`<path d="${starPts(cx,cy,ro,spikes||5)}" fill="#fff"/>`;
const trigram=(cx,cy,rot,bits)=>{const L=3.4,bh=0.62,vg=1.05,brk=0.9,seg=(L-brk)/2;let bars="";bits.forEach((b,i)=>{const y=(cy+(i-1)*vg-bh/2).toFixed(2);if(b)bars+=`<rect x="${(cx-L/2).toFixed(2)}" y="${y}" width="${L}" height="${bh}"/>`;else bars+=`<rect x="${(cx-L/2).toFixed(2)}" y="${y}" width="${seg}" height="${bh}"/><rect x="${(cx+brk/2).toFixed(2)}" y="${y}" width="${seg}" height="${bh}"/>`;});return `<g fill="#0A0A0A" transform="rotate(${rot} ${cx} ${cy})">${bars}</g>`;};
const FLAG={
  gb:'<rect width="24" height="18" fill="#012169"/><path d="M0,0 24,18 M24,0 0,18" stroke="#fff" stroke-width="3.6"/><path d="M0,0 24,18 M24,0 0,18" stroke="#C8102E" stroke-width="1.8"/><rect x="9.6" width="4.8" height="18" fill="#fff"/><rect y="6.6" width="24" height="4.8" fill="#fff"/><rect x="10.8" width="2.4" height="18" fill="#C8102E"/><rect y="7.8" width="24" height="2.4" fill="#C8102E"/>',
  jp:'<rect width="24" height="18" fill="#fff"/><circle cx="12" cy="9" r="5" fill="#BC002D"/>',
  cn:'<rect width="24" height="18" fill="#DE2910"/><path d="M6,3.2 6.8,5.6 9.3,5.6 7.3,7.1 8,9.5 6,8 4,9.5 4.7,7.1 2.7,5.6 5.2,5.6z" fill="#FFDE00"/>',
  br:'<rect width="24" height="18" fill="#009B3A"/><path d="M12,2 22,9 12,16 2,9z" fill="#FEDF00"/><circle cx="12" cy="9" r="3.1" fill="#002776"/>',
  es:'<rect width="24" height="18" fill="#AA151B"/><rect y="4.5" width="24" height="9" fill="#F1BF00"/>',
  it:'<rect width="24" height="18" fill="#fff"/><rect width="8" height="18" fill="#009246"/><rect x="16" width="8" height="18" fill="#CE2B37"/>',
  fr:'<rect width="24" height="18" fill="#fff"/><rect width="8" height="18" fill="#0055A4"/><rect x="16" width="8" height="18" fill="#EF4135"/>',
  nl:'<rect width="24" height="18" fill="#fff"/><rect width="24" height="6" fill="#AE1C28"/><rect y="12" width="24" height="6" fill="#21468B"/>',
  de:'<rect width="24" height="18" fill="#000"/><rect y="6" width="24" height="6" fill="#DD0000"/><rect y="12" width="24" height="6" fill="#FFCE00"/>',
  ru:'<rect width="24" height="18" fill="#fff"/><rect y="6" width="24" height="6" fill="#0039A6"/><rect y="12" width="24" height="6" fill="#D52B1E"/>',
  cz:'<rect width="24" height="18" fill="#fff"/><rect y="9" width="24" height="9" fill="#D7141A"/><path d="M0,0 11,9 0,18z" fill="#11457E"/>'
};
FLAG.au='<rect width="24" height="18" fill="#00247D"/><svg x="0" y="0" width="12" height="9" viewBox="0 0 24 18">'+FLAG.gb+'</svg>'+star(6,13.4,2.4,7)+star(18,4,1.15)+star(13.8,9.4,1.15)+star(21.6,8,1.05)+star(18,15,1.25)+star(18.7,11,0.6);
FLAG.kr='<rect width="24" height="18" fill="#fff"/><circle cx="12" cy="9" r="4.2" fill="#0047A0"/><path d="M7.8,9 a4.2,4.2 0 0 1 8.4,0 a2.1,2.1 0 0 1 -4.2,0 a2.1,2.1 0 0 0 -4.2,0 z" fill="#CD2E3A"/>'+trigram(5,4.4,33.7,[1,1,1])+trigram(19,13.6,33.7,[0,0,0])+trigram(19,4.4,-33.7,[0,1,0])+trigram(5,13.6,-33.7,[1,0,1]);
const LANG_CODE={english:"au",japanese:"jp",korean:"kr",mandarin:"cn",chinese:"cn",portuguese:"br",spanish:"es",italian:"it",french:"fr",dutch:"nl",german:"de",russian:"ru",czech:"cz"};
const flagSVG=code=>(code&&FLAG[code])?`<svg class="lxteam-flag" viewBox="0 0 24 18" aria-hidden="true">${FLAG[code]}</svg>`:"";
const langFlagsOnly=str=>!str?"":str.split(",").map(s=>{const t=s.trim().toLowerCase();const k=Object.keys(LANG_CODE).find(k=>t.includes(k));return k?flagSVG(LANG_CODE[k]):"";}).filter(Boolean).join(" ");

/* ---- tenure ---- */
const TENURE={5:{a:"#EBBC8C",b:"#B87333",ring:"#8A5424",fg:"#4a2c10"},10:{a:"#EAEEF1",b:"#AAB2B9",ring:"#868F97",fg:"#3a4046"},15:{a:"#FBD670",b:"#E3A81E",ring:"#B0810F",fg:"#5a3d00"},20:{a:"#8FE6C9",b:"#12907C",ring:"#0b6152",fg:"#053a30"}};
function tenureBadge(years,size){const t=TENURE[years];if(!t)return"";const s=size||42,id=`tg${years}_${Math.random().toString(36).slice(2,7)}`;return `<svg viewBox="0 0 100 100" width="${s}" height="${s}" role="img" aria-label="${years} years at Lexis"><defs><linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${t.a}"/><stop offset="1" stop-color="${t.b}"/></linearGradient></defs><circle cx="50" cy="50" r="46" fill="url(#${id})" stroke="${t.ring}" stroke-width="3"/><circle cx="50" cy="50" r="39" fill="none" stroke="rgba(255,255,255,.45)" stroke-width="1.4"/><text x="50" y="30" text-anchor="middle" font-size="13" fill="${t.fg}">★</text><text x="50" y="60" text-anchor="middle" font-family="Clash Display,sans-serif" font-weight="700" font-size="30" fill="${t.fg}">${years}</text><text x="50" y="76" text-anchor="middle" font-family="Clash Display,sans-serif" font-weight="600" font-size="11" letter-spacing="1.2" fill="${t.fg}">YEARS</text></svg>`;}

const ENVELOPE = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>';

/* ---- card ---- */
function cardHTML(p){
  const col = CAMPUS_COLOR[p.campus]||"#F59120";
  const photo = p.photo
    ? `<img src="${ASSET_BASE}${p.photo}" alt="${esc(p.name)}" loading="lazy">`
    : `<div class="lxteam-avatar" style="background:${grad(col)}">${initials(p)}</div>`;
  const roleLine = p.campusLabel && p.campus==='Head Office' ? `${esc(p.role)} · ${esc(p.campusLabel)}` : esc(p.role);
  return `<div class="lxteam-card">
      <div class="lxteam-photo">
        ${p.years?`<span class="lxteam-tenure">${tenureBadge(p.years,42)}</span>`:""}
        ${photo}
      </div>
      <div class="lxteam-cardbody">
        <h3 class="lxteam-name">${esc(p.name)}</h3>
        <p class="lxteam-role">${roleLine}</p>
        ${p.languages?`<p class="lxteam-langs" title="${esc(p.languages)}">${langFlagsOnly(p.languages)}</p>`:""}
        ${p.email?`<a class="lxteam-email" href="mailto:${esc(p.email)}" aria-label="Email ${esc(p.name)}">${ENVELOPE}<span>Email</span></a>`:""}
      </div>
    </div>`;
}

const SCOPED_CSS = `
<style>
.lexis-team-embed{--lx-orange:#F59120;--lx-ink:#221F1F;--lx-soft:#5c5854;--lx-line:#e9e7e4;font-family:"Inter",system-ui,-apple-system,sans-serif}
.lexis-team-embed .lxteam-wrap{max-width:1140px;margin:0 auto;padding:0 24px}
.lexis-team-embed .lxteam-head{margin-bottom:34px}
.lexis-team-embed .lxteam-eyebrow{font-weight:600;letter-spacing:.14em;font-size:12px;text-transform:uppercase;color:#c9740f;display:block;margin-bottom:10px}
.lexis-team-embed h2{font-family:"Clash Display",Inter,sans-serif;font-weight:600;letter-spacing:-.015em;font-size:clamp(28px,4vw,44px);line-height:1.05;color:var(--lx-ink);margin:0}
.lexis-team-embed .lxteam-intro{color:var(--lx-soft);font-size:17px;line-height:1.55;max-width:640px;margin:14px 0 0}
.lexis-team-embed .lxteam-grid{display:grid;gap:20px;grid-template-columns:repeat(auto-fill,minmax(210px,1fr))}
.lexis-team-embed .lxteam-card{background:#fff;border:1px solid var(--lx-line);border-radius:18px;overflow:hidden;box-shadow:0 8px 22px rgba(34,31,31,.05);transition:transform .18s,box-shadow .18s;display:flex;flex-direction:column}
.lexis-team-embed .lxteam-card:hover{transform:translateY(-4px);box-shadow:0 18px 46px rgba(34,31,31,.14)}
.lexis-team-embed .lxteam-photo{position:relative;aspect-ratio:4/5;overflow:hidden;background:#eceef0}
.lexis-team-embed .lxteam-photo img{width:100%;height:100%;object-fit:cover;display:block}
.lexis-team-embed .lxteam-avatar{width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-family:"Clash Display",sans-serif;font-weight:600;color:#fff;font-size:52px}
.lexis-team-embed .lxteam-tenure{position:absolute;right:9px;top:9px;z-index:2;line-height:0;filter:drop-shadow(0 2px 4px rgba(0,0,0,.35))}
.lexis-team-embed .lxteam-cardbody{padding:15px 16px 17px;display:flex;flex-direction:column;flex:1}
.lexis-team-embed .lxteam-name{font-family:"Clash Display",Inter,sans-serif;font-weight:600;letter-spacing:-.01em;font-size:20px;line-height:1.15;margin:0;color:var(--lx-ink);min-height:2.3em}
.lexis-team-embed .lxteam-role{color:var(--lx-soft);font-size:13.5px;line-height:1.4;margin:4px 0 0;min-height:2.8em}
.lexis-team-embed .lxteam-langs{margin:10px 0 0;display:flex;gap:5px;flex-wrap:wrap;align-items:center}
.lexis-team-embed .lxteam-flag{width:22px;height:auto;aspect-ratio:4/3;border-radius:2px;overflow:hidden;box-shadow:0 0 0 .5px rgba(34,31,31,.18)}
.lexis-team-embed .lxteam-email{display:inline-flex;align-items:center;gap:7px;margin:auto 0 0;align-self:flex-start;padding:7px 12px;border-radius:8px;background:#fff;border:1px solid var(--lx-line);color:#c9740f;text-decoration:none;font-weight:600;font-size:13px;transition:background .15s,border-color .15s,color .15s}
.lexis-team-embed .lxteam-email:hover{background:var(--lx-orange);border-color:var(--lx-orange);color:#fff}
.lexis-team-embed .lxteam-more{display:inline-block;margin-top:30px;font-weight:600;color:#c9740f;text-decoration:none}
.lexis-team-embed .lxteam-more:hover{text-decoration:underline}
</style>`;

function embedFor(campus, members, opts={}){
  const intro = opts.intro || `Say hello to the Lexis ${campus} team — the people who'll welcome you, help you settle in, and make your time here unforgettable.`;
  const cards = members.map(cardHTML).join("\n      ");
  return `${SCOPED_CSS}
<section class="lexis-section lexis-team-embed">
  <div class="lxteam-wrap">
    <div class="lxteam-head">
      <span class="lxteam-eyebrow">Meet the team</span>
      <h2>${opts.heading || `Our ${campus} team`}</h2>
      <p class="lxteam-intro">${intro}</p>
    </div>
    <div class="lxteam-grid">
      ${cards}
    </div>
    <a class="lxteam-more" href="${FULL_DIR}" target="_blank" rel="noopener">Meet the whole Lexis team →</a>
  </div>
</section>`;
}

// Campus pages show only that campus's own staff — Head Office people live on the Head Office section.
const membersFor = campus => PEOPLE.filter(p => p.campus===campus);

const CAMPUSES = ["Brisbane","Sydney","Perth","Sunshine Coast","Byron Bay","Noosa"];
const slug = s => s.toLowerCase().replace(/\s+/g,'-');
const OUT = path.join(__dirname, 'embeds');
fs.mkdirSync(OUT, {recursive:true});

const summary = [];
CAMPUSES.forEach(c=>{
  const m = membersFor(c);
  fs.writeFileSync(path.join(OUT, slug(c)+'.html'), embedFor(c, m));
  summary.push(`${c}: ${m.length} — ${m.map(p=>p.name).join(', ')}`);
});
// Head Office team (for an About / Team page)
const ho = PEOPLE.filter(p=>p.campus==='Head Office');
fs.writeFileSync(path.join(OUT,'head-office.html'), embedFor('Head Office', ho, {heading:'Our Head Office team', intro:'The people behind the scenes — leadership, marketing, and registrations — supporting students and campuses across Australia and beyond.'}));
summary.push(`Head Office: ${ho.length} — ${ho.map(p=>p.name).join(', ')}`);

// Preview page rendering every embed
const preview = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Campus team embeds — preview</title>
<link rel="preconnect" href="https://api.fontshare.com" crossorigin><link href="https://api.fontshare.com/v2/css?f%5B%5D=clash-display@400,500,600,700&display=swap" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
<style>body{margin:0;background:#F7F8F9;font-family:Inter,sans-serif}.pv-label{max-width:1140px;margin:0 auto;padding:40px 24px 0;font-family:"Clash Display",sans-serif;color:#9a948c;font-size:13px;letter-spacing:.1em;text-transform:uppercase}section{padding:34px 0 20px}</style>
</head><body>
${[...CAMPUSES,'Head Office'].map(c=>`<p class="pv-label">${c} page</p>\n`+fs.readFileSync(path.join(OUT, slug(c)+'.html'),'utf8')).join('\n<hr style="border:none;border-top:1px solid #e9e7e4;max-width:1140px;margin:20px auto">\n')}
</body></html>`;
fs.writeFileSync(path.join(OUT,'preview.html'), preview);

console.log('Generated embeds in ./embeds/:');
summary.forEach(s=>console.log('  '+s));

# Lexis English — Meet the Team

A branded, responsive staff-directory page built from the "New Website" staff-profile
docs (OneDrive, Jul 2026). Static site — no build step, no server needed.

## Files
```
lexis-team/
  index.html    # the whole page (HTML + CSS + JS inline)
  people.js     # staff data (window.PEOPLE = [...]) — edit this to update bios/roles
  assets/       # processed headshots (640×800 JPGs, ~50–120 KB each)
  README.md
```

## Live
**https://mcarlisle-lexis.github.io/lexis-team/** — GitHub Pages, repo `mcarlisle-lexis/lexis-team`
(branch `master`, root). To update: edit files, `git commit`, `git push`; Pages rebuilds in ~1 min.

## View locally
Just open `index.html` in a browser, or serve the folder:
```bash
npx serve lexis-team -l 4141      # http://localhost:4141
```

## Features
- 25 staff across 6 campuses (Sydney, Brisbane, Perth, Sunshine Coast, Byron Bay, Noosa) plus a
  central **Head Office** group (Marketing + Registrations), shown as a separate filter chip.
- Campus/team filter chips (Head Office divided off from campuses) + live search (name, role, group,
  department, language, hometown, bio).
- Click any card → modal with full bio + the three Q&A answers. Head Office members show
  "Team: Head Office", their "Department" (Marketing/Registrations) and where they're "Based";
  campus staff show "Campus".
- Photos processed to a consistent 4:5 crop; staff without a photo get a branded initials avatar.
- **Language flags:** each person's spoken languages show inline SVG flags (rendered in-page so they
  look identical on every OS — Windows/Chrome don't draw flag emoji). Map lives in `FLAG` / `LANG_CODE`
  in `index.html`; add a language by adding its keyword→code and a flag SVG.
- **Tenure medallions:** add `years: 5|10|15|20` to a person to show a bronze/silver/gold/emerald
  badge on their card and profile. Currently: Mike 5, Jason 10, Nami 15, Ian 20.

### Groups
`campus` on each person is the filter bucket: a campus name, or `"Head Office"`.
Head Office people also carry `dept` ("Marketing" / "Registrations") and `campusLabel` = where they're
based (e.g. Ian Pratt → Team Head Office, Department Marketing, Based Noosa).
Add/remove team names in `TEAM_ORDER` (and a colour in `CAMPUS_COLOR`) in `index.html`.

## Editing content
All copy lives in `people.js`. Each person:
`{ slug, name, role, campus, campusLabel?, languages, hometown, since, photo, bio, q1, q2, q3 }`
- `campus` must be one of the CAMPUS_ORDER values in `index.html` to appear under a filter chip.
- `photo` is a filename in `assets/`, or `null` for an initials avatar.

## Notes / things to confirm
- **Brad Perks** — the supplied selfie was mirrored (backwards signage); it's been flipped
  horizontally so text reads correctly, then cropped to him. **Issi Daniels'** photo was swapped to
  the coastal-lookout shot (cropped in to feature her).
- **Still on initials avatars** (no photo anywhere — no separate file and none embedded in the doc):
  Jing Tsai, Wakako Yamaguchi, Olga Kuperman. **22 of 25 now have real photos.**
- **Mike Carlisle** and **Robert Dillewaard** photos were pulled from *inside* their Word docs
  (`word/media/`) — the docs had no separate image file. Lydia, Maiko and Pricila also had embedded
  copies, but their separate photo files were already in use.
- **Olga Kuperman** — the "Role / job title" field was blank in her doc; inferred
  "Student Services & Homestay" from her bio. Please confirm her actual title.
- **Robert Dillewaard** — doc had the name typed as "Rober"; corrected to "Robert".
- Bios/answers were lightly tidied for consistent punctuation; meaning unchanged.

## Photo reprocessing
`assets/` images were generated with `sharp` (see the one-off script used during the build).
To regenerate/add a photo: crop to 640×800 cover, JPEG ~q82.

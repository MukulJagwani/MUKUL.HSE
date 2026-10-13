# Mukul Jagwani portfolio — updated website

Complete static HTML/CSS/JavaScript website with the supplied missing documents added. It has not been published.

## Open or upload

1. Extract this ZIP and open `MUKULPORTFOLIO-main/index.html` locally.
2. For static hosting, upload the **contents** of `MUKULPORTFOLIO-main` so `index.html` is at the document root. Preserve the `assets` directories.
3. No build command, package installation, database, or server code is required.

All local paths are relative, including for subdirectory hosting. Google Fonts is optional; system fonts are the fallback. PDF viewing and downloads may behave differently from local files and from static hosting.

## Website improvements

- Refined the black-and-safety-yellow identity, typography, opening section, cards, timeline, contact details, and footer.
- Added accessible mobile navigation with Home, About, Experience, Skills, Education, Certifications, and Contact; active-section indication, keyboard controls, and header scroll offsets.
- Added flexible layouts, wrapping text and contact links, narrow-screen and landscape rules, and controls sized for touch.
- Extracted embedded images and documents into separate files. Documents load when opened or downloaded.
- Added View and Download controls, plus an optional image modal with a labelled close control, Escape support, zoom, original-file fallback, and focus restoration.
- Added semantic structure, a skip link, visible keyboard focus, readable secondary text, reduced-motion and forced-colour support.
- Kept essential content, navigation, document links, and the Highfield approval details usable without JavaScript.
- Added an MJ favicon and sharing title/description metadata using existing information.
- Retained a single `index.html` after confirming the original two HTML files were byte-identical.

## Animation update

- Added a short, staggered entrance for the existing introduction and photograph, plus a brief two-cycle halo around the existing availability dot.
- Added one-time scroll entrances for sections, cards, and credential headings, with a short yellow accent-line animation.
- Added gentle mouse-hover card/button movement, pressed-button feedback, animated navigation underlines, and short menu and image-viewer entrances.
- Kept movement smaller on narrow screens. Hover movement applies only to devices with a fine pointer and hover support.
- Respected reduced-motion settings, including changes made while the page is open. Focused content stays still; content is never hidden while awaiting animation. There are no continuous animation loops or new dependencies.
- Kept the entire homepage HTML, all photographs, and all document files byte-for-byte unchanged from the completed document update. Only CSS, JavaScript, and these supporting notes changed.

## Latest document additions

Reviewed **29 supplied documents**: **17 were missing**, and **12 already existed** with identical file hashes. See `UPDATES.md` for the additions and their website locations.

The additions include the BCA degree, FTIS bonafide certificate, Miracles Enterprises experience, Bharat Intern virtual internship, Highfield tutor approval and its 18-qualification training scope, and 11 learning/participation records. The existing DRDO apprenticeship documents are now also linked from Experience. Existing ISO 45001 wording is retained, with the documented Lead Auditor Training Course, issuer, and issue date added.

Certifications now has 21 learning/certificate cards and a separate tutor approval panel. Participation, pledges, assessment records, and tutor approval are labelled accurately; tutor approval is not presented as 18 qualifications personally earned.

## Preservation and verification

- All **191 original visible content chunks** and **227 text chunks from the previous revision** remain present.
- All **13 unique original assets** (14 embedded references) retain their original SHA-256 hashes.
- All **29 supplied documents** are included byte-for-byte and have viewing and downloading links.
- All **77 internal references** resolve; **62 document links** and the four original contact/external destinations were checked.
- One main landmark and one H1, unique IDs, image alternative text, and valid ARIA reference targets were checked.
- The 18 Highfield approval scope entries match the reviewed source transcription.
- Production JavaScript syntax passed. All 22 DOM-stub interaction checks passed, covering menu states, section selection, focus restoration, active-section logic, image viewer actions/fallbacks, one-time entrances, short stagger/cleanup, live reduced-motion changes, and focused-content/no-observer fallbacks. CSS delimiters were checked; CSS rendering was not tested.

**Testing limits:** no supported browser preview was available. Visual rendering, actual screen-width overflow, real-device touch behaviour, native dialog focus containment, screen-reader output, live downloads, external link availability, and cross-browser performance have not been tested in a real browser. DOM-stub checks do not establish full WCAG conformance.

Before publishing, check 320, 375, 430, 768, 1024, 1440, and 1920px widths; portrait/landscape; keyboard navigation; 200% text sizing and 400% browser zoom; JavaScript disabled; and reduced motion. Include available Chrome, Edge, Firefox, Safari, iOS, and Android browsers.

## File sizes

| Item | Bytes |
| --- | ---: |
| Original homepage HTML | 12,292,229 |
| Updated homepage HTML | 46,595 |
| Stylesheet | 26,262 |
| JavaScript | 9,941 |
| Original photograph | 76,613 |
| HTML + CSS + JS + photograph | 159,411 |

The HTML is **99.62% smaller** despite the additional records. The resource total excludes optional Google Fonts, the favicon, and HTTP overhead. Documents remain in the ZIP and load on demand. These are file-size measurements, not loading-time measurements or Lighthouse scores.

## Details awaiting your confirmation

- The original **“2+ Years, 4 Roles”** summary is unchanged. The new Miracles role and separate technical internship make its role count a point to review; no replacement total was invented.
- The original Katni location, map coordinates, “AVAILABLE FOR OPPORTUNITIES,” and “SYSTEM ONLINE / READY TO WORK” labels remain unchanged.
- Existing employment and education wording, marks, dates, and certificate descriptions are preserved. The BCA degree is an additional document; the original “View Certificate” link still opens the supplied semester document.
- No CV was supplied, so no Download CV button was added. No Training & Practical Work section or unsupported experience was invented.
- Canonical URL, `og:url`, and an absolute social-preview image URL await a confirmed live website address.

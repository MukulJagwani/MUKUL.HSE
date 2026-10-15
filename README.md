# Mukul Jagwani portfolio

Static HTML/CSS/JavaScript portfolio at https://mukuljagwani.github.io/MUKUL.HSE/.

## Current content — 14 October 2026

Seven pages share one stylesheet and script: Home, About, Experience, Skills, Education, Certifications and Contact. No build step or package installation is required.

All seven pages and all 29 document files were reviewed for content consistency. See [CONTENT_REVIEW.md](CONTENT_REVIEW.md) for the complete evidence matrix, corrections, owner confirmations and remaining verification limits.

- Current location: Abu Dhabi, UAE, confirmed by the owner. Katni remains in the school history.
- Homepage experience summary: HSE since 2023. Experience lists five HSE entries and a separate technical internship, including overlapping and event-based roles.
- FTIS is described using the source award: PG training programme and Assessment of Prior Learning.
- BCA uses the correct plural title and distinguishes A+/8.32 CGPA from the grade card and First Division from the degree.
- Certifications includes 20 document cards and a separate Highfield tutor approval panel. The 18 approved teaching qualifications are not counted as personally earned awards.
- Original document files and photograph are preserved. Previously removed controls for the FTIS bonafide, BCA grade card and Highfield scope letter remain omitted from the public pages.
- The ZIP at the repository root is an older archival package. Use the current HTML files and assets for deployment.

## Home redesign — 15 October 2026

Home now includes an industrial hero, wider About content, professional highlights, two on-demand promotional films, portfolio navigation and a CV contact section. A shared light palette and white navigation keep all seven pages consistent. The About page has wider reading space. Native certificate viewing and mobile navigation are retained.

The original `assets/css/site.css` and `assets/js/site.js` provide the shared behaviour; `assets/css/refresh.css` adds the updated theme and Home layout, and `assets/js/home.js` coordinates film playback. See [MEDIA_NOTES.md](MEDIA_NOTES.md) for sources, video edits, captions and the pending CV.

## Local preview

Run `python -m http.server 4175 --bind 127.0.0.1` in this directory, then open http://127.0.0.1:4175/.

For GitHub Pages, publish this directory with `index.html` at the site root and preserve relative asset paths. Google Fonts is optional; system fonts are the fallback.

## Maintaining factual consistency

Match credential names, dates, marks, course hours and award types to the original document. Distinguish completion or examination dates from certificate issue dates. Keep training approval separate from awards earned. Update all affected page text and sharing metadata together. Use owner confirmation for current employment, location and details that are not documented. Do not edit issued certificates to match website copy.

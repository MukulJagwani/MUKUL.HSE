# Portfolio media

Updated 15 October 2026.

## Original sources

The owner supplied the original promotional montages and subsequently supplied `MUKUL TRAINING..mp4`, asking to replace the second website video. All source files remain unchanged at their supplied locations. Only optimised derivatives are included in this repository.

| Original filename | Website asset | Treatment |
| --- | --- | --- |
| WhatsApp Video 2026-10-14 at 21.22.45 (1).mp4 | assets/videos/safety-leadership.mp4 | Full video, H.264/AAC, CRF 24, 96 kbit/s audio, fast-start MP4. |
| MUKUL TRAINING..mp4 | assets/videos/mukul-hse-training.mp4 | Full 47.32-second video and original audio, no cropping or scene removal. Converted from 1920 × 1080 at 50 fps to 1280 × 720 at 25 fps; H.264/AAC, CRF 23, 96 kbit/s audio, fast-start MP4. |

The first video remains a promotional introduction. The second is presented as classroom and practical training highlights: it visibly shows instruction, harness demonstrations, and a rescue tripod and winch setup. The new poster is a frame at 26 seconds from that footage. No event date, learner total, qualification award or performance outcome is inferred from it. The existing real portrait is used in the hero, unchanged.

Local automatic speech recognition with voice-activity filtering detected no speech in the new training video. No dialogue transcript is asserted. The adjacent description explains the visible activity. The previous second video's caption track was removed because it does not describe this recording. No speech was detected in the first film during its original review. Manual audio transcription has not been performed.

The retired second promotional film (`safer-workplaces.mp4`), poster and caption track are removed from the current website files and remain recoverable in Git history. Its original WhatsApp file remains untouched. Earlier owner-approved edits removed a QUALIFI scene and an unclear experience figure; the later confirmation of Qualifi study does not change that historical edit record.

Training source: 76,900,588 bytes; SHA-256 `afc403b6954249c89d2a8162bff3743c77ec94f8700584c749897e773776e3cf`. It was sampled visually throughout its duration at two-second intervals before the description and poster were selected.

Videos use native controls, muted initial playback, inline display, uncropped 16:9 framing and preload="none". JavaScript pauses the other film when playback begins and pauses all films when the page is hidden. Native controls and direct-file fallback links remain available without JavaScript.

## Hero image

Decorative industrial stock photograph by 龔 月強 on Pexels. It does not identify a workplace of the portfolio owner or imply endorsement.

- Source: https://www.pexels.com/photo/inside-a-petrochemical-industry-5884386/
- License: https://www.pexels.com/license/
- Local asset: assets/images/industrial-background.jpg (1920 px wide)

## CV

The owner will supply the current CV later. The Home page has a working email link to request it. There are no placeholder PDF links or inactive View/Download controls. On receipt, check the PDF against CONTENT_REVIEW.md before adding both actions to the same local PDF.

## File limits

The current optimised MP4 files are approximately 1.71 MB and 8.56 MB (the new training video is 8,563,627 bytes), below GitHub's 50 MiB warning and 100 MiB hard limit for regular repository files. The training copy is approximately 89% smaller than its 76.90 MB original. No Git LFS or external video hosting is required.

Reference: https://docs.github.com/en/repositories/working-with-files/managing-large-files/about-large-files-on-github

## Replacement validation

- Source SHA-256 unchanged after conversion. The complete derivative decodes without FFmpeg errors and retains 47.32 seconds, H.264 video and AAC audio. The MP4 metadata precedes media data for fast-start playback.
- All 178 relative page/asset references resolve; all 29 document files remain unchanged. The first video, its poster and the shared playback script are unchanged.
- Both players initially remain paused and muted with zero buffered ranges. The new video reaches playable state in the browser; starting the first video pauses it at 19.33 seconds. Desktop (1280px) and mobile (375px) layouts fit without horizontal overflow, and the new caption and native controls fit the mobile card.

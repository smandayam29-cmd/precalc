# AP Precalculus Midterm Review (website)

A 24-day review site for AP Precalculus Units 1 and 2 (Nov 20 to Dec 13, midterm Dec 14).
It uses the same daily plan and problems as the printed review packet.

## Open it

Unzip the folder and double-click `index.html`. It runs in any modern browser with no
internet connection and no install. Progress is saved in that browser on that device.

## What it does

- **Calendar:** all 24 days, with today highlighted and a countdown to the exam.
- **Each day:** the key rules ("Know this"), two warm-ups from earlier days, practice problems,
  and guiding questions for when you are stuck. Work each problem on paper, then reveal the
  answer and mark it "Got it" or "Missed it".
- **Checkpoints and practice midterm** (Days 11, 22, 23): optional countdown timer; missed
  checkpoint questions link back to the day to redo.
- **Error log:** every question you marked as missed, ready to retry.
- **Recall cards:** flip cards of the must-know facts.

## Put it online (optional)

It is a static site. Upload the whole folder to any static host (GitHub Pages, Netlify,
a school web folder). No build step.

## Files

    index.html            page shell
    css/style.css         all styling (light and dark)
    js/data.js            all content: dates, days, problems, answers, figures
    js/app.js             the app: calendar, day view, error log, recall cards
    js/plot.js            draws the graphs as SVG
    vendor/katex/         KaTeX 0.16 (math typesetting), bundled so it works offline

## Change the content

Edit `js/data.js`.

- `START_DATE` and `EXAM_DATE` set the calendar.
- Each day has `title`, `src` (where it is in the notes), `know`, optional `warm`, `probs`, `hints`.
- Each problem has `q` (question) and `a` (answer). Math goes between `$...$` in LaTeX,
  with backslashes doubled, for example `"$\\dfrac{1}{2}$"`.
- `calc: true` marks a calculator problem. `back: 5` on a checkpoint question means "redo Day 5".

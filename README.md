# PhD Course Review Notes

This repository maintains a Jupyter Book for PhD course review, QE preparation, and cross-course concept mapping. The notes are public so that future students and collaborators can reuse, correct, and extend them.

Published site: <https://yuning598.github.io/myQE/>

## What This Book Covers

- **Asset Pricing**: SDF, beta pricing, dynamic pricing, options, beliefs, and empirical return tests.
- **Corporate Finance**: capital structure, payout policy, corporate events, empirical design, and paper-based mechanisms.
- **Econometrics**: projection, IV, GMM, DiD, RD, panel methods, likelihood, and inference.
- **Microeconomics**: preferences, uncertainty, equilibrium, welfare, state prices, and information constraints.
- **Problem Sets**: exam-style derivations, computations, and proof templates.
- **Cross Course**: an interactive graph linking the same mathematical objects across courses.

## Repository Structure

- `PhD-Course/book/`: canonical source tree for the published book.
- `PhD-Course/book/_toc.yml`: visible sidebar structure.
- `PhD-Course/book/_config.yml`: Jupyter Book / Sphinx configuration.
- `PhD-Course/book/intro.md`: landing page for the published book.
- `PhD-Course/book/Cross-Course/data/qe_graph.yml`: source of truth for the interactive cross-course graph.
- `PhD-Course/book/_static/` and `PhD-Course/book/_ext/`: local CSS, JavaScript, and Sphinx extensions.
- `PhD-Course/pdf/`: ignored local PDFs, slides, and exam files.

## Maintenance Principles

- Keep course content under `PhD-Course/book/`.
- Keep the sidebar focused: course indexes, main chapter notes, Problem Sets, and one Cross Course graph page.
- Keep card notes and bridge notes linkable but usually hidden from `_toc.yml`.
- Put long-lived maintenance instructions in this `README.md`, not as a visible book chapter.
- Use `Cross-Course/data/qe_graph.yml` for graph knowledge; do not hand-write graph HTML in Markdown.
- Prefer build-safe Markdown links in book source files.

## Note Types

- **Course index**: short navigation page for one course.
- **Chapter note**: main course content, definitions, propositions, derivations, and examples.
- **Card note**: focused concept, theorem, formula, or common mistake.
- **Problem Set note**: exam-style question followed by its own solution block.
- **Bridge note**: cross-course explanation of one shared mathematical object.

## Formatting Rules

- Each Markdown file should have at most one `#` title.
- Use `$...$` or `$$...$$` for math; do not wrap math in backticks.
- Use display math with `aligned` for multi-step derivations.
- Put `\tag{}` outside `aligned`.
- Keep display math delimiters paired.
- In Problem Sets, use `### <number>. <title>` for big questions and bold inline labels for subquestions.
- Every subquestion should be followed immediately by its own `::::{solution}` block.
- Raw HTML widgets should be wrapped in a MyST `{raw} html` fence.
- Obsidian block IDs should be stable, unique, and placed on their own line with blank lines before and after.

## Basic Checks

Run these before pushing structural or graph changes:

```bash
git diff --check
node --check PhD-Course/book/_static/cross-course-graph.js
PhD-Course/.venv/bin/python PhD-Course/book/tools/validate_cross_course_graph.py --graph PhD-Course/book/Cross-Course/data/qe_graph.yml --book-root PhD-Course/book
```

For larger formatting changes, also scan for odd `$$` counts, unclosed `::::{solution}` blocks, broken `_toc.yml` entries, and raw HTML outside `{raw} html` fences.

## Contributing

Contributions are welcome, especially:

- corrected derivations and proof steps,
- missing QE-style examples,
- better cross-course links,
- cleaner problem-set solutions,
- additional paper summaries and empirical-design templates.

Please keep edits scoped and explain the reason for structural changes. If you have suggestions or materials to provide, contact Yunting by email: `yuntinliu4@gapps.cityu.edu.hk`.

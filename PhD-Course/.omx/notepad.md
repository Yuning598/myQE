# Notes Restructure Log

## Scope

- Round 1 focuses on navigation skeletons, Cross-Course hub structure, build-safe links, and graph validation.
- Main lecture notes and long derivations are not compressed in this pass.
- Repetition cleanup is limited to obvious navigation duplication and broken bridge links.

## Implementation Evidence

- Existing Cross-Course hub only rendered `Cross-Course/data/qe_graph.yml`, but the data file was missing.
- Course indexes referenced several bridge files that did not exist.
- `book/tools/validate_cross_course_graph.py` requires node URLs to resolve to source notes under `book/`.
- Added `book/Cross-Course/data/qe_graph.yml` and six bridge entries in `_toc.yml`.
- Added minimal stubs for the five bridge files that were referenced but missing.
- Standardized the root, course, ProblemSet, and Cross-Course indexes around Start Here / Chapter Structure / Cross-Course routes.

## Verification Evidence

- The local Python environment initially lacked `yaml`; `requirements.txt` already lists `PyYAML`, so `PyYAML` was installed into `/tmp/phd-course-pyyaml` for validation only.
- `PYTHONPATH=/tmp/phd-course-pyyaml python3 book/tools/validate_cross_course_graph.py --book-root book --graph book/Cross-Course/data/qe_graph.yml` passed.
- Fallback structural check also confirmed the graph file contains required top-level sections and all six bridge source files exist.
- `rg` confirmed the new bridge filenames are present in `_toc.yml`, Cross-Course hub, and the main course indexes.

## Remaining Risks

- Long-form review notes, especially Asset Pricing review and card layers, still need a content-level duplicate audit.
- Bridge stubs are intentionally minimal and should be expanded later with full derivations.

## Entry Simplification Pass

### Scope

- Remove pure navigation / review entry pages for Asset Pricing and Corporate Finance.
- Keep one course-level `index.md` per course, chapter notes as the substantive track entry, and Cross-Course bridge notes for cross-course synthesis.
- Do not compress or rewrite chapter derivations, cards, or paper summaries.

### Planned Verification

- Confirm deleted filenames are absent from links and `_toc.yml`.
- Run Cross-Course graph validator.
- Run a Markdown relative-link scan focused on new dangling links from deleted files.

### Implementation Evidence

- Deleted the Asset Pricing track/review entry pages and the Corporate Finance review/paper index pages.
- Rewrote `book/Asset Pricing/index.md` and `book/Corporate Finance/index.md` as the sole course entry pages.
- Flattened `_toc.yml` so Asset Pricing and Corporate Finance list course `index` plus substantive chapters, without deleted intermediary pages.
- Redirected remaining references to the course indexes, source chapters, or paper/card folders.

### Verification Evidence

- `rg` found no remaining references to:
  - `Empirical_Asset_Pricing`
  - `Theoretical_Asset_Pricing`
  - `00-MOC_EF8083_Empirical_Asset_Pricing`
  - `Asset Pricing Review`
  - `Corporate_Finance_Review_Map`
  - `Corporate_Finance_Paper_Index`
- `PYTHONPATH=/tmp/phd-course-pyyaml python3 book/tools/validate_cross_course_graph.py --book-root book --graph book/Cross-Course/data/qe_graph.yml` passed.
- Markdown relative-link scan found 8 pre-existing-looking broken links outside this cleanup scope; none pointed to the deleted files.

### Remaining Risks

- Jupyter Book build was not run in this pass.
- Existing unrelated broken links remain in `Econometrics/MS8956/11_Multiple_Equation_GMM.md`, `Asset Pricing/Theoretical AP/cards/part2/Itô 公式.md`, and `Corporate Finance/theories/README.md`.

## Link Cleanup Pass

### Scope

- No local Jupyter Book build; remote build will handle rendering.
- Fix remaining content/navigation links after the entry simplification pass.
- Do not compress chapter正文、cards 推导、or paper summaries.

### Implementation Evidence

- Removed the remaining `Empirical AP MOC` navigation link from `Variance_Risk_Premium.md`.
- Replaced root-style Asset Pricing links in `Itô 公式.md` with relative Markdown links.
- Fixed the same-directory `SEO_Theory.md` link in Corporate Finance theory README.
- URL-encoded the two Econometrics example links with parentheses so Markdown link parsing is stable.

### Verification Evidence

- `rg` found no remaining old-entry references in `book` for `Empirical AP MOC`, `00-MOC`, `Review Map`, `Paper Index`, or deleted filename stems.
- Markdown relative-link scan returned `TOTAL_BAD=0`.
- `PYTHONPATH=/tmp/phd-course-pyyaml python3 book/tools/validate_cross_course_graph.py --book-root book --graph book/Cross-Course/data/qe_graph.yml` passed.

### Remaining Risks

- No local Jupyter Book build was run by request.

## Final Attachment Cleanup

### Scope

- Remove unresolved image placeholders from Corporate Finance attachment reading notes.
- Keep reading-note summaries intact; no chapter compression and no local Jupyter Book build.

### Implementation Evidence

- Removed five nonexistent `Pasted image ...png` embeds from `LearyMichaely2011.md` and `FarreMensaMichaelySchmalz2014.md`.
- Removed the now-empty `Figure Slots` sections and renumbered `Notes` to section 4.

### Verification Evidence

- Targeted search found no remaining placeholder image filenames or `Figure Slots` sections in the two touched notes.
- Targeted wikilink path scan on the two touched notes returned `TOUCHED_WIKILINK_PATH_BAD=0`.
- `_toc.yml` file-entry scan returned `TOC_MISSING=0`.
- Cross-Course graph validator passed.
- Old-entry keyword scan found no matches in `book`.

### Remaining Risks

- Repository-wide Python link scans can be slow on the Dropbox-backed tree; the previous full Markdown scan returned `TOTAL_BAD=0`, and this pass verified the only newly touched files directly.
- No local Jupyter Book build was run by request.

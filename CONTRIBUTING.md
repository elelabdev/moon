# Contributing to MOON

Thank you very much to consider contributing in this project. This guide helps you get set up and submit high‑quality changes.

## Setup
- You need Node.js 18+ (repo includes `.nvmrc`)
- Install deps: `npm install`
- Dev server: `npm run dev` (http://localhost:4321)
- Build check: `npm run build`

## Branching
- Create a feature branch from `main`: `feat/<short-name>` or `fix/<short-name>`
- Keep PRs small and focused; include screenshots for UI changes.

## Code style
- Use existing patterns and utilities (`app-card`, `Spacer`, DaisyUI classes)
- Support light/dark themes; verify contrast
- Prefer reusable components over duplicating markup

## Commits
- Conventional commits are appreciated:
  - `feat: add system status apex chart`
  - `fix: dark theme labels in vps charts`
  - `docs: add contributing guide`

## Tests and checks
- Ensure `npm run build` passes
- Avoid introducing network calls in build; use mocked data or Markdown content
- Avoid introducing secrets or custom functions related to your environment

## Pull Requests
- Fill out description, link related issues
- Explain rationale and impact
- Include before/after screenshots for visual changes

## Reporting issues
- Use the Issues tab and include steps to reproduce
- Add environment (OS, browser), expected vs actual behavior

## License
By contributing, you agree your contributions will be licensed under the MIT License.


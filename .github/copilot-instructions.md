<!-- Auto-generated guidance for AI coding agents. Update as the repo grows. -->
# Copilot instructions for this repository

Note: at the time these instructions were generated the repository contains only a Git metadata folder. If you see files added later, update this doc with concrete examples from those files.

Goal
- Help AI coding agents quickly become productive by documenting discovery steps, likely architecture patterns for an "IPTV" project, repo-specific conventions, and safe next actions when code is missing.

Quick discovery checklist (run first)
- List files and top-level folders: `dir` / `ls -la` / `Get-ChildItem -Force`.
- Look for service definitions: search for `docker-compose.yml`, `Dockerfile`, `k8s`, `.github/workflows`, `package.json`, `pyproject.toml`, `go.mod`.
- Search for env/config: `.env`, `config/`, `secrets/`, `values.yaml`.
- Inspect CI: `.github/workflows/**` for build/test commands.
- If nothing is present, ask the repo owner whether to scaffold a minimal layout or provide the canonical repository snapshot.

IPTV project patterns to expect (check these paths when present)
- Backend/API: `backend/`, `api/`, or `server/` — look for REST routes, JWT auth, EPG ingestion jobs.
- Streaming/transcoding: `streamer/`, `transcoder/`, `ffmpeg` usage in scripts or `Dockerfile`.
- Playlist/EPG: `epg/`, `playlists/`, CRON jobs or ingestion workers.
- Frontend: `web/`, `client/`, `src/` with frameworks (React/Vue/Angular) and build scripts in `package.json`.
- Infrastructure: `docker-compose.yml`, `k8s/`, `helm/`, or `infra/` for deployment patterns.

Repository conventions and agent behavior
- Minimal edits: prefer small, focused changes and add tests where applicable.
- Branches: create short-lived feature branches; open PRs against `main` unless told otherwise.
- Configuration: never commit secrets. If you encounter plaintext credentials, stop and prompt the user.
- Logging/formatting: follow existing code style; if none exists, use industry-standard linters (ESLint, Black, gofmt).

What to do when the repo is empty (current situation)
- Prompt the user with three options: (A) push an existing code snapshot, (B) allow the agent to scaffold a minimal IPTV prototype (docker-compose + simple backend + README), or (C) provide target language/framework preferences.
- If scaffolding is approved, create a tiny, runnable prototype with: `docker-compose.yml`, `backend/README.md`, a lightweight API that serves a sample M3U playlist, and a `README.md` with run instructions.

Example commands (PowerShell) for exploration
```
Get-ChildItem -Force
Select-String -Path **\* -Pattern "docker-compose|Dockerfile|package.json|pyproject.toml" -SimpleMatch -Quiet
git status --porcelain
```

When you finish work
- Update this file with concrete examples: snippets of `package.json` scripts, CI job names, and any nonstandard workflows discovered.
- Run tests or include `How I validated` notes in the PR description.

If anything here is unclear or you want more repository-specific rules, ask the repository owner to provide at least a `README.md` or a short list of top-level components.

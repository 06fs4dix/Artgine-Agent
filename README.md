## Introduction

Artgine-Agent is a web-based agent interface built on the [Artgine](https://github.com/06fs4dix/Artgine) engine.
It is a local web tool that remote-controls your **PC screen, files, terminals, and AI coding agents** from any browser — desktop or phone.

[Take a Look](https://06fs4dix.github.io/Artgine/proj/Control/artgine-agent.html) — the same page ships inside the app as the default Help panel (Promotion / Getting Started / Guide).

## Language
**[한국어](README-ko.md)**

## Getting Started

### Method 1 — Source

```bash
git clone --recursive https://github.com/06fs4dix/Artgine-Agent.git
cd Artgine-Agent
npm install
npm start
```

Other ways to run:

- Windows — `start.bat`
- Linux / macOS — `./start.sh`
- Web server only — `npm run start_web [port]` (default: 8050)

Requires Node.js and Git.

### Method 2 — Executable (no Node.js required)

Download, unzip, and run the included `Artgine` executable.

| Platform | Download |
|----------|----------|
| Windows  | [Artgine-win32-x64.zip](https://github.com/06fs4dix/Artgine-Agent/releases/download/AI/Artgine-win32-x64.zip) |
| Linux    | [Artgine-linux-x64.zip](https://github.com/06fs4dix/Artgine-Agent/releases/download/AI/Artgine-linux-x64.zip) |

If the OS blocks it:

- **Windows** — SmartScreen → *More info* → *Run anyway*. Or unblock the file: right-click → Properties → *Unblock*, or `Unblock-File -Path .\Artgine.exe`.
- **Linux** — `chmod +x ./Artgine`, and make sure the file is not on a `noexec` mount.
- **macOS** — right-click → *Open* → *Open*, or `xattr -dr com.apple.quarantine /path/to/Artgine.app`.

### After it starts

Open a browser and go to:

```
http://localhost:8050/Artgine/proj/Control/Control.html
```

From a phone or another device, use the host PC's LAN IP instead of `localhost`.

> ⚠️ **The default password is `artgine`.** Change it before exposing this to an external network — anyone who knows the default can open your files, terminals, and RDP.
> In the Electron app, edit the password field in the Server panel (it hashes on blur). Running the web server directly, edit the `password` field in `settings.json` in the working directory the server was started from.

### Security tips

Artgine Control can reach the screen, files, terminals, and AI agents on the host PC. Hardening the OS account and folder rights matters far more than the web password alone.

- **Dedicated account** — create an OS user used only for Artgine and run the server as that user, not your daily admin/root login. Avoid "Run as administrator" for normal use.
- **Folder rights** — grant that account read/write only on the folders it must touch, and in Control keep **Root → Add Working Folder (`+`)** minimal. Never list the whole disk (`C:\`, `/`) unless you truly need it.
- Both layers together: OS ACLs stop the process, Working Folder limits what the UI exposes.

## AI Providers

- **Node.js is required** on the machine running the server. Install a current LTS from [nodejs.org](https://nodejs.org/), then start Artgine. The right sidebar **Info → Provider Status** should show Node.js with a version.
- **CLI providers install themselves.** Opening a new Terminal or Chat for `claude`, `codex`, `agy`, `opencode`, `grok` installs the missing CLI automatically on first use.
- **Login and subscription are yours.** Each provider needs its own account, plan, and sign-in (API key or browser login) completed by you inside that CLI. Until then Provider Status may show *Not Authenticated*.

## Screen Layout

| Area | Contents |
|------|----------|
| **Top** | File / Search / Terminal tabs and the More menu |
| **Left** | Root select, RDP targets, and the AI session list |
| **Center** | Whichever tab or session is active — RDP, File, Terminal, Chat, Browser, Editor, Memo, Download, Log |
| **Right** | Info / File / Option sub-tabs |

**Left sidebar** — the Root dropdown switches the active root folder/server (the working path both the RDP target and the File tree follow). `+` next to it edits the server's allowed root folders (saving restarts the server). Below are RDP targets (**Local** always present, plus registered **Remote** Control.html servers) and every open session.

**Session status colors** — 🟢 idle (connected/ready) · 🟡 busy (generating) · 🔴 off (disconnected or not signed in). RDP entries have no status dot.

**Right sidebar** — **Info** shows Provider Status (install/auth state, version, remaining 5h / Weekly usage) and completed session notifications; **File** is a lightweight browser that opens files straight into the Editor; **Option** bundles Theme, local model registration, Database viewers, history cleanup, Schedule, Sub Agent, and the shortcut list.

## Features

| Feature | Description |
|---------|-------------|
| **RDP** | View the screen of local or remote Control.html servers. Turn on Input to forward keyboard and mouse. Frame controls refresh rate, Quality controls compression. |
| **Files** | Browse allowed server folders — view, edit, search, share, upload, and run Git/SVN operations. M/A/D/? badges show change status inline. |
| **File Manager / Search** | `F2` opens a recursive file-name search under the current root; click a result to jump to it. |
| **AI Chat** | Structured chat threads with message bubbles and a composer. Multiple sessions run side by side, each tracked in the sidebar. |
| **Terminal** | Live PTY sessions in `cmd`, `claude`, `codex`, `agy`, `opencode`, `grok`. Slash-mention another provider to hand off the conversation. |
| **Scheduler** | Register recurring tasks; a sub agent runs them automatically at the set time. Configure interval, run count, and stop conditions. |
| **Browser** | Playwright web sessions — set URL, browser, TTL, screen size, and Stealth time. Watch the live page and forward input. |
| **Sub Agent** | Reusable AI agents registered with a key, provider, model, working directory, traits, and score. Team and Schedule pick them up. |
| **Team** | Enter a goal and select sub agents — the main agent supervises, dispatching and collecting work. Each agent runs in its own terminal in parallel. |
| **Editor** | Monaco-based code editing. Excel/CSV open in a spreadsheet grid, SQLite and other local DBs in a table viewer — all editable in place. |
| **Local Models** | Register an Ollama or LM Studio server with a single address; the model list is detected automatically. |
| **Logs** | Every AI session's history — Chat, Terminal, and more — in one accordion. Delete individually or clear all. |
| **Memo** | Folder-scoped note log with categories, tags, and AI search. |
| **Download** | yt-dlp/ffmpeg-backed downloader — paste a YouTube or direct URL, pick MP3/MP4/Direct, watch job progress. |

## Use Cases

Just tell the AI what you need in plain language.

| Ask | What happens |
|-----|--------------|
| *"I'm working on the PC — connect from mobile and wrap it up"* | Open the same session from a phone browser and pick up where you left off. |
| *"There's an error dialog on my PC screen — check it and fix it"* | RDP captures the current screen, the agent reads the error and applies a fix. |
| *"Log into the site, check my email, and change the password"* | Drives the browser remotely to automate repetitive web tasks. |
| *"Whenever you work in this folder, skip the permission prompts"* | State a rule once (or put it in `ai/settings.json`) and it holds for the session. |
| *"Every midnight, sort the Downloads folder by date"* | Register it in the scheduler; a sub agent runs the file work at the set time. |
| *"Connect to the production server, analyze the logs, find the cause"* | SSH from server to server, read logs directly, report the error pattern. |
| *"Document this entire repo for me — fast"* | The main agent splits the work across sub agents in parallel, then aggregates. |
| *"I installed Ollama — can I use it right away?"* | Register the local LLM address; the model list is fetched and usable in Chat/Terminal/Team. |
| *"Keep improving the result until I'm satisfied"* | Enable Retry on a sub agent to re-issue review and improvement instructions automatically. |
| *"Have the code review agent check it before I commit"* | A registered reviewer sub agent analyzes the code and reports improvements. |
| *"Take it from here with Codex — keep going where we left off"* | Send `/codex` in the terminal; the session summarizes, a new one opens in the same folder and continues. |

## Terminal

Open with the top bar **Terminal** button — it is always the "New Terminal" button and opens a modal first. Existing sessions open from the left sidebar.

**Start options**

- **Mode** — `cmd` (plain shell), or AI CLIs `claude` / `codex` / `agy` / `opencode` / `grok`.
- **Key** — optional session label to tell multiple terminals apart.
- **Working Directory** — where the PTY starts (defaults from the current Root).
- **MCP** (default on for Terminal, off for Chat) — keep MCP tool servers enabled, or start with built-in tools only.
- **Copy MD** (default on) — when the working directory is not the server's Artgine root, copies that provider's role file (`CLAUDE.md`, `AGENTS.md`, …) into the folder so project rules apply.

**Input**

- **Enter** sends the line (or reconnects if the socket dropped). Empty Enter still sends a return.
- **Esc** sends Escape into the agent/shell and resets input focus (helps Hangul IME glitches).
- With an empty input box, **↑ ↓ ← →** go straight to the PTY for CLI history and menus.
- Drag-and-drop a file onto the terminal to upload it under `.uploads/` and insert its quoted path; dragging from the right-sidebar File list inserts the path without re-uploading.

**SUPER (auto-approve)**

Permission and tool-approval prompts are auto-accepted so the agent keeps working. Toggle with **F6**, `/super`, or ⌨ menu → **⚡ SUPER**. While on, the input field turns red — there is no separate SUPER button on the bar. State is stored server-side per session and re-synced about once a minute.

**Slash commands & provider handoff**

Type `/` for autocomplete: `/compact`, `/resume`, `/model`, `/clear`, `/status`, `/exit`, `/help`, `/super`, plus registered Skills and handoff targets. Hangul typed after `/` is remapped to Latin keys.

Sending `/codex`, `/claude`, `/agy`, `/opencode`, or `/grok` in an AI session hands the conversation off: the session summarizes (up to ~3 min), then a new Terminal opens on that provider **in the same working directory** and picks up where you left off. Input is locked during the handoff; not used in `cmd` mode.

**⌨ menu** — scroll/resize/page controls, arrow/Enter/Esc injection, per-provider commands (RESUME, MODEL, COMPACT, CLEAR, STATUS, EXIT), and Skill prompt insertion.

## Memo

Open from **More → Memo**. Notes are scoped to a folder path (e.g. `proj/Control`), with a category sidebar (parent/child, rename, delete, tag badges), a Message tab for time-ordered browsing, and an AI provider/model used for search. **Enter** submits, **Shift+Enter** newlines, `#tag` in the text adds tags.

A leading slash overrides the mode dropdown for that one message:

| Command | Action |
|---------|--------|
| `/w <text>` | **Write** — save a memo (auto-classifies if no category is selected) |
| `/s <query>` or `/r <query>` | **Search** — AI search in the selected category, or all if none selected |
| `/d <id>` | **Delete** — digits delete a memo id, a category name deletes that category and its children, other text runs an AI candidate search then confirms |
| `/m <id>` | **Move** — move that memo into the currently selected category |

Use **Deselect** to clear the active category so Search/Delete target all categories.

## Schedule, Sub Agent, Team

- **Schedule** (Option → Schedule) — on fire it creates a work order for the chosen Sub Agent, delivered to its already-running session (no typing into a terminal). *Interval* runs once on save then repeats every Delay seconds, with Count limiting total fires; *Time* fires at a set hour:minute on selected weekdays. Saved schedules reopen as "Edit Schedule".
- **Sub Agent** (Option → Sub Agent) — saving keeps a terminal session alive for that key, respawned automatically if it dies. Configure Working Directory, Super mode, Score/Traits (hints a Team supervisor uses to match agents to tasks), and Retry Text/Count for an automatic quality loop that re-queues work whenever the agent goes idle.
- **Team** (More → Team) — pick the main agent's provider/model, a Goal, sub agents to dispatch to, and a time limit. The running team appears as a Terminal session.

## Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `F1` | Right sidebar File ↔ Info toggle (opens the sidebar on small screens) |
| `F2` | Open File Search |
| `F3` | Open New Terminal |
| `F4` | Focus/toggle the sidebar (or double-tap `Ctrl`) |
| `F6` | Toggle SUPER (auto-approve) and focus the input bar |
| `↑` / `↓` | Move through the session list (sidebar open) |

## AI Folder (`ai/`)

Each project can keep an `ai/` folder at its root. The AI coding agent reads it before working on that project, so project rules and permissions live there instead of in the assistant's memory.

**Guide documents**

- **`ROLE.md`** — what the agent is responsible for on this project.
- **`ProjectSetupGuide.md`** — steps to create a new project.
- **`EngineUsageGuide.md`** — where to look up engine (`artgine/`) APIs before writing new logic.
- **`CodeNamingGuide.md`, `RemoteCMDGuide.md`, `MemoGuide.md`, `BrowserDebugGuide.md`, `RemoteDesktopGuide.md`** — naming rules and how-tos for remote command execution, memo search, browser debugging, and remote-desktop control.
- A project's `CLAUDE.md` tells the agent which guide to read before each kind of task.

**`ai/settings.json` permissions**

Separate from the server's root `settings.json` (login password, working folders). Besides the **models** list shown in Chat/Terminal dropdowns, its `permissions.allow` / `permissions.deny` arrays auto-answer the permission prompts that Claude/Codex/Grok/opencode print inside a session.

Each rule can test `type` (`"read" | "write" | "reply"`), `tool` (the CLI's tool name, e.g. `Bash`, `Edit`, `MCPTool`), and/or `command` (a prefix of the shell command, `*` wildcard supported). On a prompt, `deny` is checked first, then `allow`; if neither matches, SUPER mode auto-approves and otherwise it waits for you.

```jsonc
{ "type": "read" }                                          // auto-approve every read-only prompt
{ "command": "node *ai/tool/tsc_check" }                    // one safe script, matched by path prefix
{ "type": "write", "tool": "Bash", "command": "npm test" }  // narrower: all three must match
{ "command": "rm -rf" }                                     // in permissions.deny — beats allow and SUPER
{ "tool": "MCPTool" }                                       // in permissions.deny — block all MCP calls
```

**Other folders**

- **`skill/`** — custom macro prompts callable from the terminal input bar.
- **`tool/`** — helper scripts the agent runs (type checks, browser debugging, and so on).
- **`workspace/`** — isolated per-session working directories created at runtime.

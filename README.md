Artgine-Agent is a web-based agent interface built on the [Artgine](https://github.com/06fs4dix/Artgine) engine. It provides a file browser, AI assistant, and terminal in a single app, served through the Artgine desktop or web server.

> Language **[한국어](README-ko.md)**

## Usage Guide

**[> Take a Look](https://06fs4dix.github.io/Artgine/help/artgine-agent-promo.html)**

**[> Tutorial](https://06fs4dix.github.io/Artgine/help/artgine-agent-tutorial.html)**



## Getting Started

```bash
git clone --recursive https://github.com/06fs4dix/Artgine-Agent.git
cd Artgine-Agent
npm install
npm start
```

Alternatively, run `start.bat` (Windows) or `start.bash` (Linux/macOS) directly.

Then open **`http://localhost:8050`** in your browser.

> **Web-only mode** — `npm run start_web [port]` (default: 8050)

> **Default password**: `artgine` — change this before exposing to a network.

### Executable (no Node.js required)

Download and extract the archive for your platform, then run the included `Artgine` executable.

| Platform | Download |
|----------|----------|
| Windows  | [Artgine-win32-x64.zip](https://github.com/06fs4dix/Artgine-Agent/releases/download/AI/Artgine-win32-x64.zip) |
| Linux    | [Artgine-linux-x64.zip](https://github.com/06fs4dix/Artgine-Agent/releases/download/AI/Artgine-linux-x64.zip) |



## Features at a Glance

### Files tab `F3`
Browse and manage files on the server — navigate folders, view images, play audio/video, and edit `.ts` `.js` `.html` `.json` `.txt` files with Monaco editor. Git/SVN status badges appear alongside files when installed.

### AI tab `F4`
Manage AI chat and terminal sessions in an iframe-based panel.

- **Chat** — Multi-session AI chat supporting Claude, Codex, Antigravity, and OpenCode providers. Sessions show status colors: 🔴 disconnected · 🟡 busy · 🟢 idle.
- **Terminal** — Up to 9 concurrent terminal sessions. Modes: `cmd`, `claude`, `codex`, `antigravity`, `opencode`. Includes SUPER mode (`F6`) for auto-approving agent commands (input border turns red when active).
- **Browser** — Web debugging via remote Playwright sessions: live screenshot streaming, console/network log capture, mouse/keyboard remote control, and read-only share links.
- **Schedule** — Register recurring commands that run automatically on a timer, attached to a terminal session.

### Key Shortcuts
| Key | Action |
|-----|--------|
| `F1` | Open File Manager modal (Files tab) |
| `F2` | File search |
| `F3` | Files tab |
| `F4` | AI tab |
| `F6` | Toggle SUPER mode (terminal) |
| `F7` | Focus terminal input bar |
| `Tab` | Toggle AI sidebar |

See the full shortcut reference in the [tutorial](https://06fs4dix.github.io/Artgine/help/artgine-agent-tutorial.html).

## AI Folder (`ai/`)

The `ai/` folder manages agent configuration for this project:

- **`settings.json`** — Auto-approve/deny rules for read, write, and shell tool calls.
- **`skill/`** — Custom macro scripts callable from the terminal input bar.
- **`workspace/`** — Isolated per-session working directories created at runtime.
- **`ctx/`** — Agent session logs and conversation history.


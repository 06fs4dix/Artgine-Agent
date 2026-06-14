Artgine-Agent is a web-based agent interface built on the [Artgine](https://github.com/06fs4dix/Artgine) engine. It provides a file browser and AI assistant in a single app, served through the Artgine desktop or web server.

> Language **[한국어](README-ko.md)**

## Usage

[Artgine Tool](https://06fs4dix.github.io/Artgine/help/artgine-agent-tutorial.html)

[Artgine Agent(Home)](https://06fs4dix.github.io/Artgine/help/electron-ui-mode-guide.html)

## Features

### Files tab `F3`
Browse and manage files on the server.

- Navigate folders, view images, play audio/video
- Edit `.ts` `.js` `.html` `.json` `.txt` files with Monaco editor
- Upload and save edited files back to the server

### AI tab `F4`
AI chat and terminal sessions in an iframe-based panel.

**Chat (Chat Session)**
- **Start a New Chat (`+ New Chat`)**: Open a modal to start a new AI agent chat session with the following options:
  - *Working Directory*: Custom root path for the AI agent.
  - *Allow working dir write*: Grants file write/edit permissions within the working directory.
  - *MCP*: Enables Model Context Protocol tool integrations.
  - *Copy MD*: Enables markdown format copy support.
- Supports multiple AI providers: Claude, Codex, Antigravity
- **Session Status Colors**: 🔴 Red (disconnected/off), 🟡 Yellow (busy), 🟢 Green (idle)
- **Active Session Highlight**: The currently active chat session is highlighted with a **light blue background**.
- Share link generation and session deletion per session.
- System notifications and sounds when a task completes, even if the browser tab is unfocused.

**Terminal (Terminal Session)**
- **Start a New Terminal (`+ New Terminal`)**: Configure and launch a new terminal session (up to 9 concurrent sessions).
  - *Mode*: Choose from `cmd` (standard CLI), `claude`, `codex`, `antigravity(agy)` (AI-integrated shell).
  - *Key*: Optional session alias name to easily distinguish multiple terminals.
  - *Working Directory*: The initial startup directory path for the terminal.
  - *Allow working dir write*: Grants write permissions for the terminal agent (disabled in `cmd` mode).
  - *MCP / Copy MD*: Enables MCP toolkits and markdown copy permissions.
- **Session Status Colors**: 🔴 Red (disconnected/off), 🟡 Yellow (busy or pending permission/wait), 🟢 Green (idle)
- **Active Session Highlight**: The currently active terminal session is highlighted with a **light green background**.
- Supports share links, and opening in an independent modal or popup window.

**Schedule (Recurring Scheduler)**
- **Register a New Schedule (`+ New Schedule`)**: Runs a command periodically in the background using an associated terminal.
  - *Name*: Unique identifier (key) for the schedule.
  - *Terminal Key*: The target terminal session's key where commands will run.
  - *Mode*: Choose from `none`, `cmd`, `claude`, `codex`, `antigravity(agy)`. If the target terminal is not open, the backend automatically spawns one with this mode.
  - *Delay (sec)*: Time interval between runs in seconds (minimum 1s).
  - *Count*: Total number of executions. Set to `0` to run infinitely until manually deleted.
  - *Start / End offset (sec)*: Time delay before the first run, and automatic expiration/deletion timeout.
  - *Command*: The command or prompt text to execute (e.g., `node backup.js`).
  - *Advanced*: Detailed settings for working directory, write permissions, MCP, and Copy MD.
- **Scheduler Mode Badge Colors**: Badges in the list are color-coded based on the mode:
  - Grey (`none`) / Light Blue (`cmd`) / Yellow (`claude`) / Blue (`codex`) / Red (`antigravity/agy`)

### Keyboard Shortcuts & Controls

#### 1. Global Shortcuts (Available anywhere)
| Key | Action |
|-----|--------|
| `F2` | Open file search window |
| `F3` | Switch to Files tab and go to root directory (`/`) |
| `F4` | Switch to AI Assistant tab |

#### 2. AI & Terminal Screen Shortcuts
| Key | Action | Condition / Context |
|-----|--------|---------------------|
| `Tab` | Toggle AI sidebar (session list) on/off | AI panel active |
| `ArrowUp`/`ArrowDown` | Navigate up/down the session list (Chat/Terminal) and switch instantly | AI sidebar expanded |
| `ArrowRight` | Instantly jump to the session that triggered an AI completion notification | Active notification pop-up |
| `ArrowLeft` | Return to the previous session after using ArrowRight (8s limit) | Previous session history exists |
| `Shift + N` | Launch a new terminal session (`cmd`) | Terminal tab active & sidebar expanded |
| `Shift + D` | Kill and delete the current terminal session (confirmation modal) | Terminal tab active & sidebar expanded |

#### 3. Terminal View Shortcuts & Input Bar Controls
| Key | Action |
|-----|--------|
| `F6` | **Toggle SUPER Mode** (auto-approves all agent commands; **turns input border red** when enabled) |
| `F7` | Show and focus the bottom Input Bar |
| `Ctrl + T` | Scroll terminal window to the very bottom |
| `Enter` | Send the text in the Input Bar to the terminal (sends Enter/newline if empty) |
| `Arrow Keys` | Send cursor movement signals to the terminal when the Input Bar is empty |

> 💡 **Terminal Input Bar Autocomplete**:
> Typing `/` in the Input Bar brings up a pop-up of built-in commands (`/compact`, `/resume`, `/model`, `/exit`, `/clear`, `/status`) and custom skills. Use **`ArrowUp` / `ArrowDown`** to navigate, **`Tab`** or **`Enter`** to apply, and **`Escape`** to close. (Typing `/super` toggles SUPER mode directly)

> 💡 **Terminal Input Bar Border Colors**:
> When focused, the Input Bar border changes color depending on the active mode:
> - **Normal Mode**: Focused with an **emerald green** border.
> - **SUPER Mode**: Border turns **red** and the input background takes on a reddish tint to warn that auto-approve is active.

#### 4. Terminal Dropdown Menu (`⌨` Button)
Clicking the `⌨` button on the right side of the Input Bar opens a mouse/touch-friendly virtual control panel.
* **View**: Scroll to bottom, resize terminal to fit window, send `Ctrl+T`, hide Input Bar.
* **Virtual Keys**: Send arrow keys (`↑`, `↓`, `←`, `→`), `Enter`, and `ESC` key signals.
* **SUPER**: Toggle auto-approve mode on/off.
* **Command**: Trigger quick agent actions (`RESUME`, `MODEL`, `COMPACT`, `CLEAR`, `STATUS`, `EXIT`).
* **Skill**: Load pre-defined macro skill scripts.

> 💡 **Hotkey Propagation**: Keyboard events (like F2, F3, F4, Tab, and Arrows) inside terminal or editor (Monaco) iframes are captured and propagated to the parent window (`Home.ts`) to ensure seamless tab switching and sidebar toggling.

## AI Folder (ai/)

The `ai/` folder in the project root manages configurations, automated permission control policies, compilation scripts, workspace environments, and markdown guidelines for the AI assistant.

* **`settings.json`**: AI agent permission settings for automatic approval policies.
  - Defines which read, write, or shell command (`run_command`/`Bash`) tools are automatically approved (`allow`) or blocked (`deny`).
  - Contains the top-level `"log": true` property to toggle logging.
* **`tsc_check.js`**: A TypeScript compiler helper script that runs static type checks. Run this to check for syntax and type errors before submitting your code changes.
* **Guideline Markdown (`.md`) Files**: Instruction documents that the AI agent references during development.
  - [CodeNamingGuide.md](file:///E:/svn/Artgine/WebContent/ai/CodeNamingGuide.md): Coding style and naming convention guidelines.
  - [ProjectSetup.md](file:///E:/svn/Artgine/WebContent/ai/ProjectSetup.md): Guidelines for project creation and initial template setup.
  - [UIGuide.md](file:///E:/svn/Artgine/WebContent/ai/UIGuide.md): Guidelines for developing UI classes based on the engine.
  - `ROLE.md` (or `AGENTS.md`): Behavior guidelines and core rules for the AI agents.
* **`workspace/`**: Dynamically created temporary directory containing isolated session workspaces so that the agent can develop and test code without affecting the main repository.
* **`skill/`**: Custom predefined macro scripts (skills) that AI agents can trigger.
* **`ctx/`**: Directory where agent execution logs and dialogue contexts are stored.

## Server

Runs on the Artgine server with the following routers:

| Router | Role |
|--------|------|
| `CFileServer` | File browser and upload |
| `COAuthServer` | Password authentication |
| `CTerminalRouter` | Terminal session management (ttyd) |
| `CAIChatRouter` | AI chat WebSocket and REST API |

## Getting Started

```bash
git clone --recursive https://github.com/06fs4dix/Artgine-Agent.git
cd Artgine-Agent
npm install
npm start
```

Set `projectPath` to `proj/Home` in the Artgine app, then click **Run**.

> **Web-only mode** — `npm run start_web [port]` (default: 8050)

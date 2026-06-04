Artgine-Agent is a web-based agent interface built on the [Artgine](https://github.com/06fs4dix/Artgine) engine. It provides a file browser and AI assistant in a single app, served through the Artgine desktop or web server.

> Language **[한국어](README-ko.md)**

## Features

### Files tab `F3`
Browse and manage files on the server.

- Navigate folders, view images, play audio/video
- Edit `.ts` `.js` `.html` `.json` `.txt` files with Monaco editor
- Upload and save edited files back to the server

### AI tab `F4`
AI chat and terminal sessions in an iframe-based panel.

**Chat**
- Start a new chat session with options: working directory, MCP, markdown copy
- Supports multiple AI providers: Claude, Gemini, Codex, Antigravity
- Session list with status indicators (connected / busy / idle)
- Share link per session
- Notification when a session finishes while the tab is not focused

**Terminal**
- Launch terminal sessions (cmd / claude / gemini / codex / antigravity mode)
- Multiple concurrent sessions (up to 9)
- Session key, working directory, MCP options per session
- Open in modal or new window
- Share link per session

**Schedule**
- Create recurring commands attached to a terminal key
- Configure delay, count, start/end offset, working directory

### Keyboard shortcuts

| Key | Action |
|-----|--------|
| `F2` | File search |
| `F3` | Switch to Files tab |
| `F4` | Switch to AI tab |
| `Tab` | Toggle AI sidebar |

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

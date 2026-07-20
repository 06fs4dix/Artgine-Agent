## 소개

Artgine-Agent는 [Artgine](https://github.com/06fs4dix/Artgine) 엔진 위에서 동작하는 웹 기반 에이전트 인터페이스입니다.
브라우저만 있으면 데스크톱이든 휴대폰이든 **PC 화면, 파일, 터미널, AI 코딩 에이전트**를 원격 제어할 수 있는 로컬 웹 도구입니다.

[둘러보기](https://06fs4dix.github.io/Artgine/proj/Control/artgine-agent.html) — 같은 페이지가 앱 안에서 기본 Help 패널(Promotion / Getting Started / Guide)로 열립니다.

## 언어
**[English](README.md)**

## 시작하기

### 방법 1 — 소스

```bash
git clone --recursive https://github.com/06fs4dix/Artgine-Agent.git
cd Artgine-Agent
npm install
npm start
```

다른 실행 방법:

- Windows — `start.bat`
- Linux / macOS — `./start.sh`
- 웹 서버만 실행 — `npm run start_web [포트]` (기본값: 8050)

Node.js와 Git이 필요합니다.

### 방법 2 — 실행파일 (Node.js 불필요)

압축 파일을 다운로드해 해제한 뒤 포함된 `Artgine` 실행파일을 실행합니다.

| 플랫폼 | 다운로드 |
|--------|----------|
| Windows  | [Artgine-win32-x64.zip](https://github.com/06fs4dix/Artgine-Agent/releases/download/AI/Artgine-win32-x64.zip) |
| Linux    | [Artgine-linux-x64.zip](https://github.com/06fs4dix/Artgine-Agent/releases/download/AI/Artgine-linux-x64.zip) |

OS가 실행을 차단하는 경우:

- **Windows** — SmartScreen → *추가 정보* → *실행*. 또는 파일 차단 해제: 우클릭 → 속성 → *차단 해제*, 혹은 `Unblock-File -Path .\Artgine.exe`.
- **Linux** — `chmod +x ./Artgine`, 그리고 파일이 `noexec` 마운트에 있지 않은지 확인.
- **macOS** — 우클릭 → *열기* → *열기*, 또는 `xattr -dr com.apple.quarantine /path/to/Artgine.app`.

### 실행 후

브라우저에서 아래 주소로 접속합니다.

```
http://localhost:8050/Artgine/proj/Control/Control.html
```

휴대폰이나 다른 기기에서 접속할 때는 `localhost` 대신 호스트 PC의 LAN IP를 사용합니다.

> ⚠️ **기본 비밀번호는 `artgine`입니다.** 외부 네트워크에 노출하기 전에 반드시 변경하세요 — 기본값을 아는 사람은 누구나 파일, 터미널, RDP에 접근할 수 있습니다.
> Electron 앱에서는 Server 패널의 비밀번호 필드를 수정하면 됩니다(포커스를 벗어날 때 자동 해시). 웹 서버를 직접 실행하는 경우 서버를 시작한 작업 디렉토리의 `settings.json`에서 `password` 필드를 수정합니다.

### 보안 팁

Artgine Control은 호스트 PC의 화면, 파일, 터미널, AI 에이전트에 접근할 수 있습니다. 웹 비밀번호 하나보다 OS 계정과 폴더 권한을 제한하는 쪽이 훨씬 효과적입니다.

- **전용 계정** — Artgine 전용 OS 사용자를 만들어 그 계정으로 서버를 실행하세요. 평소 쓰는 관리자/root 계정으로 실행하지 말고, 일반 사용 시 "관리자 권한으로 실행"도 피합니다.
- **폴더 권한** — 그 계정에는 반드시 필요한 폴더에만 읽기/쓰기를 부여하고, Control의 **Root → Add Working Folder (`+`)** 목록도 최소한으로 유지하세요. 정말 필요한 경우가 아니면 디스크 전체(`C:\`, `/`)를 등록하지 마세요.
- 두 계층을 함께 사용합니다 — OS ACL은 프로세스를 막고, Working Folder는 UI가 노출하는 범위를 제한합니다.

## AI 프로바이더

- 서버를 실행하는 머신에 **Node.js가 필요합니다.** [nodejs.org](https://nodejs.org/)에서 최신 LTS를 설치한 뒤 Artgine을 실행하세요. 우측 사이드바 **Info → Provider Status**에 Node.js 버전이 표시되어야 합니다.
- **CLI 프로바이더는 자동 설치됩니다.** `claude`, `codex`, `agy`, `opencode`, `grok` 으로 새 Terminal 또는 Chat을 열면 없는 CLI가 최초 사용 시 자동 설치됩니다.
- **로그인과 구독은 직접 해야 합니다.** 각 프로바이더는 자체 계정, 요금제, 로그인(API 키 또는 브라우저 로그인)이 필요하며 해당 CLI 안에서 직접 완료해야 합니다. 그 전까지 Provider Status에 *Not Authenticated*로 표시될 수 있습니다.

## 화면 구성

| 영역 | 내용 |
|------|------|
| **상단** | File / Search / Terminal 탭과 More 메뉴 |
| **좌측** | Root 선택, RDP 대상, AI 세션 목록 |
| **중앙** | 활성화된 탭이나 세션 — RDP, File, Terminal, Chat, Browser, Editor, Memo, Download, Log |
| **우측** | Info / File / Option 하위 탭 |

**좌측 사이드바** — Root 드롭다운은 활성 루트 폴더/서버(RDP 대상과 File 트리가 함께 따르는 작업 경로)를 전환합니다. 옆의 `+`는 서버의 허용 루트 폴더를 편집합니다(저장 시 서버 재시작). 그 아래에 RDP 대상(**Local**은 항상 존재, 등록된 **Remote** Control.html 서버 추가)과 열려 있는 모든 세션이 표시됩니다.

**세션 상태 색상** — 🟢 대기(연결/준비 완료) · 🟡 처리 중(생성 중) · 🔴 꺼짐(미연결 또는 미로그인). RDP 항목에는 상태 점이 없습니다.

**우측 사이드바** — **Info**는 Provider Status(설치/인증 상태, 버전, 남은 5시간/주간 사용량)와 완료된 세션 알림을 보여줍니다. **File**은 파일을 바로 Editor로 여는 경량 브라우저이고, **Option**은 Theme, 로컬 모델 등록, Database 뷰어, 히스토리 정리, Schedule, Sub Agent, 단축키 목록을 묶어 둡니다.

## 기능

| 기능 | 설명 |
|------|------|
| **RDP** | 로컬 또는 원격 Control.html 서버의 화면을 봅니다. Input을 켜면 키보드와 마우스가 전달됩니다. Frame은 갱신 주기, Quality는 압축률을 조절합니다. |
| **Files** | 허용된 서버 폴더 탐색 — 보기, 편집, 검색, 공유, 업로드, Git/SVN 작업. M/A/D/? 배지로 변경 상태가 목록에 바로 표시됩니다. |
| **File Manager / Search** | `F2`로 현재 루트 아래 파일명 재귀 검색을 엽니다. 결과를 클릭하면 해당 위치로 이동합니다. |
| **AI Chat** | 메시지 버블과 작성창을 갖춘 구조화된 채팅 스레드. 여러 세션을 동시에 실행하며 각각 사이드바에서 추적됩니다. |
| **Terminal** | `cmd`, `claude`, `codex`, `agy`, `opencode`, `grok` 라이브 PTY 세션. 다른 프로바이더를 슬래시로 호출해 대화를 넘길 수 있습니다. |
| **Scheduler** | 반복 작업을 등록하면 서브 에이전트가 지정한 시각에 자동 실행합니다. 주기, 실행 횟수, 종료 조건을 설정합니다. |
| **Browser** | Playwright 웹 세션 — URL, 브라우저, TTL, 화면 크기, Stealth 시간을 설정. 실시간 페이지를 보며 입력을 전달합니다. |
| **Sub Agent** | 키, 프로바이더, 모델, 작업 디렉토리, 특성, 점수로 등록하는 재사용 AI 에이전트. Team과 Schedule이 이를 가져다 씁니다. |
| **Team** | 목표를 입력하고 서브 에이전트를 선택하면 메인 에이전트가 감독자로서 작업을 분배하고 취합합니다. 각 에이전트는 자기 터미널에서 병렬 실행됩니다. |
| **Editor** | Monaco 기반 코드 편집. Excel/CSV는 스프레드시트 그리드로, SQLite 등 로컬 DB는 테이블 뷰어로 열리며 모두 그 자리에서 편집 가능합니다. |
| **Local Models** | Ollama 또는 LM Studio 서버를 주소 하나로 등록하면 모델 목록이 자동 감지됩니다. |
| **Logs** | Chat, Terminal 등 모든 AI 세션 기록을 하나의 아코디언에서 확인. 개별 삭제 또는 전체 삭제. |
| **Memo** | 폴더 단위 노트 로그 — 카테고리, 태그, AI 검색 지원. |
| **Download** | yt-dlp/ffmpeg 기반 다운로더 — YouTube 또는 직접 URL을 붙여넣고 MP3/MP4/Direct를 선택해 진행 상황을 확인합니다. |

## 활용 사례

원하는 것을 평소 말하듯 AI에게 전달하면 됩니다.

| 요청 | 동작 |
|------|------|
| *"PC에서 작업 중인데 모바일로 접속해서 마무리해줘"* | 휴대폰 브라우저에서 같은 세션을 열어 하던 지점부터 이어갑니다. |
| *"PC 화면에 에러창 떠 있는데 확인하고 고쳐줘"* | RDP로 현재 화면을 캡처해 에러를 읽고 바로 수정합니다. |
| *"사이트에 로그인해서 메일 확인하고 비밀번호 변경해줘"* | 브라우저를 원격 조작해 반복적인 웹 작업을 자동화합니다. |
| *"이 폴더에서 작업할 땐 권한 확인 건너뛰어"* | 규칙을 한 번 말하거나 `ai/settings.json`에 넣으면 세션 내내 적용됩니다. |
| *"매일 자정에 다운로드 폴더를 날짜별로 정리해줘"* | 스케줄러에 등록하면 서브 에이전트가 지정 시각에 파일 작업을 수행합니다. |
| *"운영 서버 접속해서 로그 분석하고 에러 원인 찾아줘"* | 서버에서 서버로 SSH 접속해 로그를 직접 읽고 에러 패턴과 원인을 보고합니다. |
| *"이 저장소 전체 문서화해줘 — 빠르게"* | 메인 에이전트가 작업을 나눠 여러 서브 에이전트에 병렬 분배한 뒤 결과를 취합합니다. |
| *"PC에 Ollama 설치했는데 바로 쓸 수 있어?"* | 로컬 LLM 주소를 등록하면 모델 목록을 자동으로 받아 Chat/Terminal/Team에서 사용합니다. |
| *"만족할 때까지 결과를 계속 개선해줘"* | 서브 에이전트에 Retry를 켜면 검토·개선 지시를 자동으로 재발행합니다. |
| *"커밋 전에 코드 리뷰 에이전트가 검사하게 해줘"* | 등록된 리뷰어 서브 에이전트가 코드를 분석하고 개선점을 보고합니다. |
| *"여기서부터는 Codex가 이어서 해줘"* | 터미널에 `/codex`를 보내면 세션이 요약되고, 같은 폴더에서 새 세션이 열려 이어갑니다. |

## 터미널

상단 바 **Terminal** 버튼으로 엽니다 — 이 버튼은 항상 "새 터미널" 버튼이며 먼저 모달을 띄웁니다. 기존 세션은 좌측 사이드바에서 엽니다.

**시작 옵션**

- **Mode** — `cmd`(일반 셸) 또는 AI CLI `claude` / `codex` / `agy` / `opencode` / `grok`.
- **Key** — 여러 터미널을 구분하기 위한 선택적 세션 라벨.
- **Working Directory** — PTY가 시작할 폴더(비우면 현재 Root 기준).
- **MCP** (Terminal 기본 켜짐, Chat 기본 꺼짐) — MCP 툴 서버를 유지할지, 내장 툴만으로 시작할지 결정합니다.
- **Copy MD** (기본 켜짐) — 작업 디렉토리가 서버의 Artgine 루트가 아닐 때 해당 프로바이더의 역할 파일(`CLAUDE.md`, `AGENTS.md`, …)을 그 폴더로 복사해 프로젝트 규칙이 적용되게 합니다.

**입력**

- **Enter** — 줄 전송(소켓이 끊겼다면 재연결). 빈 상태의 Enter도 개행을 전송합니다.
- **Esc** — 에이전트/셸에 Escape를 보내고 입력 포커스를 초기화합니다(한글 IME 오작동 완화).
- 입력창이 비어 있을 때 **↑ ↓ ← →** 는 PTY로 직행해 CLI 히스토리와 메뉴를 조작합니다.
- 터미널에 파일을 드래그 앤 드롭하면 `.uploads/` 아래로 업로드되고 따옴표로 감싼 경로가 삽입됩니다. 우측 사이드바 File 목록에서 끌어오면 재업로드 없이 경로만 삽입됩니다.

**SUPER (자동 승인)**

권한·툴 승인 프롬프트를 자동 수락해 에이전트가 멈추지 않고 작업합니다. **F6**, `/super`, 또는 ⌨ 메뉴 → **⚡ SUPER** 로 토글합니다. 켜져 있는 동안 입력창이 빨간색으로 바뀌며, 바에 별도의 SUPER 버튼은 없습니다. 상태는 세션별로 서버에 저장되어 약 1분 주기로 재동기화됩니다.

**슬래시 명령 & 프로바이더 인계**

`/` 를 입력하면 자동완성이 열립니다 — `/compact`, `/resume`, `/model`, `/clear`, `/status`, `/exit`, `/help`, `/super`, 그리고 등록된 Skill과 인계 대상. `/` 뒤에 입력한 한글은 라틴 키로 자동 변환됩니다.

AI 세션에서 `/codex`, `/claude`, `/agy`, `/opencode`, `/grok` 를 보내면 대화가 인계됩니다. 현재 세션이 대화를 요약하고(최대 3분 내외), **같은 작업 디렉토리**에서 해당 프로바이더의 새 Terminal이 열려 이어서 진행합니다. 인계 중에는 입력이 잠기며 `cmd` 모드에서는 사용되지 않습니다.

**⌨ 메뉴** — 스크롤/크기 조절/페이지 이동, 방향키·Enter·Esc 주입, 프로바이더별 명령(RESUME, MODEL, COMPACT, CLEAR, STATUS, EXIT), Skill 프롬프트 삽입.

## 메모

**More → Memo** 로 엽니다. 노트는 폴더 경로(예: `proj/Control`) 단위로 관리되며, 카테고리 사이드바(부모/자식, 이름 변경, 삭제, 태그 배지), 시간순 탐색용 Message 탭, 검색에 사용할 AI 프로바이더/모델을 제공합니다. **Enter** 전송, **Shift+Enter** 줄바꿈, 본문에 `#태그` 를 넣으면 태그가 추가됩니다.

앞에 슬래시를 붙이면 그 메시지 한 번에 한해 모드 드롭다운을 덮어씁니다.

| 명령 | 동작 |
|------|------|
| `/w <내용>` | **작성** — 메모 저장(카테고리 미선택 시 자동 분류) |
| `/s <검색어>` 또는 `/r <검색어>` | **검색** — 선택된 카테고리에서 AI 검색, 미선택 시 전체 |
| `/d <id>` | **삭제** — 숫자는 메모 id 삭제, 카테고리 이름은 해당 카테고리와 하위 삭제, 그 외 텍스트는 AI 후보 검색 후 확인 |
| `/m <id>` | **이동** — 해당 메모를 현재 선택된 카테고리로 이동 |

**Deselect** 로 활성 카테고리를 해제하면 검색/삭제가 전체 카테고리를 대상으로 합니다.

## Schedule, Sub Agent, Team

- **Schedule** (Option → Schedule) — 실행 시각이 되면 선택한 Sub Agent용 작업 지시를 만들어 이미 실행 중인 세션으로 전달합니다(터미널에 직접 타이핑하지 않음). *Interval* 은 저장 시 1회 실행 후 Delay 초마다 반복하며 Count로 총 실행 횟수를 제한합니다. *Time* 은 선택한 요일의 지정 시:분에 실행합니다. 저장된 스케줄은 "Edit Schedule"로 다시 열립니다.
- **Sub Agent** (Option → Sub Agent) — 저장하면 해당 키의 터미널 세션이 유지되며, 죽으면 자동으로 재생성됩니다. Working Directory, Super 모드, Score/Traits(Team 감독자가 작업에 에이전트를 배정할 때 참고), 그리고 에이전트가 유휴 상태가 될 때마다 작업을 재투입하는 자동 품질 루프용 Retry Text/Count를 설정합니다.
- **Team** (More → Team) — 메인 에이전트의 프로바이더/모델, Goal, 분배할 서브 에이전트, 시간 제한을 선택합니다. 실행 중인 팀은 Terminal 세션으로 나타납니다.

## 단축키

| 키 | 동작 |
|----|------|
| `F1` | 우측 사이드바 File ↔ Info 전환(작은 화면에서는 사이드바 열기) |
| `F2` | File Search 열기 |
| `F3` | 새 Terminal 열기 |
| `F4` | 사이드바 포커스/토글 (또는 `Ctrl` 두 번 누르기) |
| `F6` | SUPER(자동 승인) 토글 및 입력 바 포커스 |
| `↑` / `↓` | 세션 목록 이동 (사이드바 열림 상태) |

## AI 폴더 (`ai/`)

각 프로젝트는 루트에 `ai/` 폴더를 둘 수 있습니다. AI 코딩 에이전트는 해당 프로젝트 작업 전에 이 폴더를 읽으므로, 프로젝트 규칙과 권한이 어시스턴트의 기억이 아니라 이곳에 저장됩니다.

**가이드 문서**

- **`ROLE.md`** — 이 프로젝트에서 에이전트가 담당할 역할.
- **`ProjectSetupGuide.md`** — 새 프로젝트 생성 절차.
- **`EngineUsageGuide.md`** — 새 로직을 작성하기 전 엔진(`artgine/`) API를 찾아볼 위치.
- **`CodeNamingGuide.md`, `RemoteCMDGuide.md`, `MemoGuide.md`, `BrowserDebugGuide.md`, `RemoteDesktopGuide.md`** — 명명 규칙, 원격 명령 실행, 메모 검색, 브라우저 디버깅, 원격 데스크탑 제어 방법.
- 프로젝트의 `CLAUDE.md` 가 작업 종류별로 어떤 가이드를 먼저 읽을지 지정합니다.

**`ai/settings.json` 권한**

서버 루트의 `settings.json`(로그인 비밀번호, 작업 폴더)과는 별개입니다. Chat/Terminal 드롭다운에 표시되는 **models** 목록 외에, `permissions.allow` / `permissions.deny` 배열이 Claude/Codex/Grok/opencode가 세션 안에서 출력하는 권한 프롬프트에 자동 응답합니다.

각 규칙은 `type` (`"read" | "write" | "reply"`), `tool` (CLI의 툴 이름, 예: `Bash`, `Edit`, `MCPTool`), `command` (실제 셸 명령의 접두사, `*` 와일드카드 지원) 를 조합해 검사합니다. 프롬프트가 뜨면 `deny` 를 먼저 확인하고 그다음 `allow` 를 확인하며, 어느 쪽도 일치하지 않으면 SUPER 모드일 때 자동 승인, 아니면 사용자를 기다립니다.

```jsonc
{ "type": "read" }                                          // 모든 읽기 전용 프롬프트 자동 승인
{ "command": "node *ai/tool/tsc_check" }                    // 안전한 스크립트 하나를 경로 접두사로 매칭
{ "type": "write", "tool": "Bash", "command": "npm test" }  // 더 좁게 — 세 조건이 모두 일치해야 함
{ "command": "rm -rf" }                                     // permissions.deny — allow와 SUPER보다 우선
{ "tool": "MCPTool" }                                       // permissions.deny — 모든 MCP 호출 차단
```

**그 외 폴더**

- **`skill/`** — 터미널 입력 바에서 호출하는 커스텀 매크로 프롬프트.
- **`tool/`** — 에이전트가 실행하는 헬퍼 스크립트(타입 체크, 브라우저 디버깅 등).
- **`workspace/`** — 런타임에 생성되는 세션별 격리 작업 디렉토리.

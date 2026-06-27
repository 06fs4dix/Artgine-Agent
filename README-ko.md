Artgine-Agent는 [Artgine](https://github.com/06fs4dix/Artgine) 엔진 위에서 동작하는 웹 기반 에이전트 인터페이스입니다. 파일 브라우저, AI 어시스턴트, 터미널을 하나의 앱으로 제공하며, Artgine 데스크톱 또는 웹 서버를 통해 실행됩니다.

> Language **[English](README.md)**

## 사용 가이드

**[> 소개 ](https://06fs4dix.github.io/Artgine/help/artgine-agent-promo.html)**

**[> 튜토리얼 ](https://06fs4dix.github.io/Artgine/help/artgine-agent-tutorial.html)**



## 시작하기

```bash
git clone --recursive https://github.com/06fs4dix/Artgine-Agent.git
cd Artgine-Agent
npm install
npm start
```

또는 `start.bat` (Windows) / `start.bash` (Linux/macOS) 를 직접 실행해도 됩니다.

실행 후 브라우저에서 **`http://localhost:8050`** 접속.

> **웹 서버만 실행** — `npm run start_web [포트]` (기본값: 8050)

> **기본 비밀번호**: `artgine` — 외부 네트워크에 노출하기 전에 반드시 변경하세요.

### 실행파일 버전 (Node.js 불필요)

플랫폼에 맞는 압축 파일을 다운로드 후 압축 해제하고, 포함된 `Artgine` 실행파일을 실행합니다.

| 플랫폼 | 다운로드 |
|--------|----------|
| Windows  | [Artgine-win32-x64.zip](https://github.com/06fs4dix/Artgine-Agent/releases/download/AI/Artgine-win32-x64.zip) |
| Linux    | [Artgine-linux-x64.zip](https://github.com/06fs4dix/Artgine-Agent/releases/download/AI/Artgine-linux-x64.zip) |



## 주요 기능

### RDP 탭 `F3`
로컬 또는 원격 Home.html 화면을 바로 확인합니다. 입력 모드를 켜면 키보드와 마우스가 대상 화면으로 전달됩니다.

### 파일 탭 `F1` / `F2`
서버의 파일을 탐색하고 관리합니다. 폴더 이동, 이미지/오디오/비디오 재생, `.ts` `.js` `.html` `.json` `.txt` 파일의 Monaco 에디터 편집을 지원합니다. Git/SVN 설치 시 파일 옆에 버전 관리 상태 배지가 표시됩니다.

- **`F1` File Manager** — 루트 선택 및 버전 관리 작업 (Git/SVN).
- **`F2` File Search** — 파일명 재귀 검색; 검색 결과에서 해당 위치로 바로 이동.

### AI 탭 `F4`
AI 채팅, 터미널, 웹 세션을 iframe 기반 패널에서 관리합니다.

- **Chat** — Claude, Codex, Antigravity, OpenCode 프로바이더를 지원하는 멀티 세션 AI 채팅. 세션 상태: 🔴 미연결 · 🟡 처리 중 · 🟢 대기 중.
- **Terminal** — 최대 9개 동시 터미널 세션. 모드: `cmd`, `claude`, `codex`, `antigravity`, `opencode`. SUPER 모드(`F6`)로 에이전트 명령 자동 승인 가능 (활성화 시 입력창 테두리 빨간색).
- **Web** — Playwright 원격 세션을 통한 웹 디버깅: 실시간 스크린샷 스트리밍, 콘솔/네트워크 로그 수집, 마우스·키보드 원격 제어, 읽기 전용 공유 링크 지원.
- **Schedule** — 터미널 세션에 연결된 명령을 타이머 주기로 자동 반복 실행하는 스케줄러.

### 주요 단축키

**전역**
| 키 | 동작 |
|----|------|
| `F1` | File Manager 모달 열기 |
| `F2` | 파일 재귀 검색 |
| `F3` | RDP 탭 전환 |
| `F4` | AI 탭 전환 |
| `F6` | SUPER 모드 토글 (터미널) |
| `F7` | 터미널 입력 바 포커스 |

**AI 패널 (사이드바)**
| 키 | 동작 |
|----|------|
| `Tab` | 사이드바 열기/닫기 |
| `1` / `2` / `3` | Chat / Term / Web 하위 탭 전환 |
| `↑` / `↓` | 세션 리스트 탐색 |
| `→` | 알림 세션으로 점프 |
| `←` | 이전 세션 복귀 |

**터미널**
| 키 | 동작 |
|----|------|
| `Shift+N` | 새 터미널 세션 |
| `Shift+D` | 현재 터미널 종료 |
| `Enter` | 입력 전송 |
| `Ctrl+T` | 맨 아래로 스크롤 |

**채팅**
| 키 | 동작 |
|----|------|
| `Shift+Enter` | 새 줄 (전송 대신) |
| `Esc` | 자동완성 닫기 |
| `Tab` | 자동완성 적용 |

전체 단축키 목록은 [튜토리얼](https://06fs4dix.github.io/Artgine/help/artgine-agent-tutorial.html)에서 확인하세요.

## AI 폴더 (`ai/`)

프로젝트 루트의 `ai/` 폴더는 이 프로젝트의 에이전트 구동 환경을 관리합니다.

- **`settings.json`** — 읽기/쓰기/셸 툴 호출에 대한 자동 승인·거부 규칙.
- **`skill/`** — 터미널 입력 바에서 단축 호출 가능한 커스텀 매크로 스크립트.
- **`workspace/`** — 세션별로 격리된 임시 작업 디렉토리 (런타임 생성).
- **`ctx/`** — 에이전트 세션 로그 및 대화 기록.


Artgine-Agent는 [Artgine](https://github.com/06fs4dix/Artgine) 엔진 위에서 동작하는 웹 기반 에이전트 인터페이스입니다. 파일 브라우저, AI 어시스턴트, 터미널을 하나의 앱으로 제공하며, Artgine 데스크톱 또는 웹 서버를 통해 실행됩니다.

> Language **[English](README.md)**

## 시작하기

```bash
git clone --recursive https://github.com/06fs4dix/Artgine-Agent.git
cd Artgine-Agent
npm install
npm start
```

실행 후 브라우저에서 **`http://localhost:8050`** 접속.

> **웹 서버만 실행** — `npm run start_web [포트]` (기본값: 8050)

> **기본 비밀번호**: `artgine` — 외부 네트워크에 노출하기 전에 반드시 변경하세요.

## 사용 가이드

**[> 전체 튜토리얼 보기](https://06fs4dix.github.io/Artgine/help/artgine-agent-tutorial.html)**

설치부터 탭 탐색, AI/터미널 세션 설정, 단축키, 스케줄러 사용법까지 전체 가이드가 정리돼 있습니다. 처음 시작한다면 여기서 시작하세요.

## 주요 기능

### 파일 탭 `F3`
서버의 파일을 탐색하고 관리합니다. 폴더 이동, 이미지/오디오/비디오 재생, `.ts` `.js` `.html` `.json` `.txt` 파일의 Monaco 에디터 편집을 지원합니다. Git/SVN 설치 시 파일 옆에 버전 관리 상태 배지가 표시됩니다.

### AI 탭 `F4`
AI 채팅과 터미널 세션을 iframe 기반 패널에서 관리합니다.

- **Chat** — Claude, Codex, Antigravity 프로바이더를 지원하는 멀티 세션 AI 채팅. 세션 상태: 🔴 미연결 · 🟡 처리 중 · 🟢 대기 중.
- **Terminal** — 최대 9개 동시 터미널 세션. 모드: `cmd`, `claude`, `codex`, `antigravity`. SUPER 모드(`F6`)로 에이전트 명령 자동 승인 가능 (활성화 시 입력창 테두리 빨간색).
- **Schedule** — 터미널 세션에 연결된 명령을 타이머 주기로 자동 반복 실행하는 스케줄러.

### 주요 단축키
| 키 | 동작 |
|----|------|
| `F1` | File Manager 모달 열기 (파일 탭) |
| `F2` | 파일 검색 |
| `F3` | 파일 탭 전환 |
| `F4` | AI 탭 전환 |
| `F6` | SUPER 모드 토글 (터미널) |
| `F7` | 터미널 입력 바 포커스 |
| `Tab` | AI 사이드바 열기/닫기 |

전체 단축키 목록은 [튜토리얼](https://06fs4dix.github.io/Artgine/help/artgine-agent-tutorial.html)에서 확인하세요.

## AI 폴더 (`ai/`)

프로젝트 루트의 `ai/` 폴더는 이 프로젝트의 에이전트 구동 환경을 관리합니다.

- **`settings.json`** — 읽기/쓰기/셸 툴 호출에 대한 자동 승인·거부 규칙.
- **`skill/`** — 터미널 입력 바에서 단축 호출 가능한 커스텀 매크로 스크립트.
- **`workspace/`** — 세션별로 격리된 임시 작업 디렉토리 (런타임 생성).
- **`ctx/`** — 에이전트 세션 로그 및 대화 기록.


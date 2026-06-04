Artgine-Agent는 [Artgine](https://github.com/06fs4dix/Artgine) 엔진 위에서 동작하는 웹 기반 에이전트 인터페이스입니다. 파일 브라우저와 AI 어시스턴트를 하나의 앱으로 제공하며, Artgine 데스크톱 또는 웹 서버를 통해 실행됩니다.

> Language **[English](README.md)**

## 기능

### 파일 탭 `F3`
서버의 파일을 탐색하고 관리합니다.

- 폴더 이동, 이미지 보기, 오디오/비디오 재생
- `.ts` `.js` `.html` `.json` `.txt` 파일을 Monaco 에디터로 편집
- 편집한 파일 서버에 업로드/저장

### AI 탭 `F4`
iframe 기반 패널에서 AI 채팅과 터미널 세션을 관리합니다.

**Chat**
- 새 채팅 세션 시작 (작업 디렉토리, MCP, 마크다운 복사 옵션)
- 다중 AI 프로바이더 지원: Claude, Gemini, Codex, Antigravity
- 세션 목록 및 상태 표시 (연결됨 / 처리 중 / 대기)
- 세션별 공유 링크
- 탭이 포커스를 잃은 상태에서 완료 시 알림

**Terminal**
- 터미널 세션 실행 (cmd / claude / gemini / codex / antigravity 모드)
- 최대 9개 동시 세션
- 세션별 키, 작업 디렉토리, MCP 옵션 설정
- 모달 또는 새 창으로 열기
- 세션별 공유 링크

**Schedule**
- 터미널 키에 연결된 반복 명령 등록
- 지연 시간, 횟수, 시작/종료 오프셋, 작업 디렉토리 설정

### 단축키

| 키 | 동작 |
|----|------|
| `F2` | 파일 검색 |
| `F3` | 파일 탭으로 전환 |
| `F4` | AI 탭으로 전환 |
| `Tab` | AI 사이드바 토글 |

## 서버

Artgine 서버에서 다음 라우터로 동작합니다.

| 라우터 | 역할 |
|--------|------|
| `CFileServer` | 파일 브라우저 및 업로드 |
| `COAuthServer` | 패스워드 인증 |
| `CTerminalRouter` | 터미널 세션 관리 (ttyd) |
| `CAIChatRouter` | AI 채팅 WebSocket 및 REST API |

## 시작하기

```bash
git clone --recursive https://github.com/06fs4dix/Artgine-Agent.git
cd Artgine-Agent
npm install
npm start
```

Artgine 앱에서 `projectPath`를 `proj/Home`으로 설정하고 **Run**을 클릭하세요.

> **웹 서버만 실행** — `npm run start_web [포트]` (기본값: 8050)

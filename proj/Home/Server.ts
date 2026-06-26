import { CConsol } from "../../Artgine/artgine/basic/CConsol.js";

import { CServerMain } from "../../Artgine/artgine/network/CServerMain.js";

import { CFileServer } from "../../Artgine/artgine/server/CFileServer.js";
import { COAuthServer } from "../../Artgine/artgine/server/COAuthServer.js";
import { CSingServer } from "../../Artgine/artgine/server/CSingServer.js";
import { CTerminalRouter } from "../../Artgine/artgine/server/CTerminalRouter.js";
import { CDownloadServer } from "../../Artgine/artgine/server/CDownloadServer.js";
import { CAIChatRouter } from "../../Artgine/artgine/server/CAIChatRouter.js";
import { CPlaywrightRouter } from "../../Artgine/artgine/server/CPlaywrightRouter.js";
import { CRemoteDesktopRouter } from "../../Artgine/artgine/server/CRemoteDesktopRouter.js";
import { CMemoRouter } from "../../Artgine/artgine/server/CMemoRouter.js";



// ---- 기타 라우터 ----
new CFileServer().SetServerMain(CServerMain.Main());
new CTerminalRouter().SetServerMain(CServerMain.Main());
new CAIChatRouter().SetServerMain(CServerMain.Main());
new CPlaywrightRouter().SetServerMain(CServerMain.Main());
new CRemoteDesktopRouter().SetServerMain(CServerMain.Main());
new CMemoRouter().SetServerMain(CServerMain.Main());
//new CTerminalSocket().SetServerMain(CServerMain.Main());



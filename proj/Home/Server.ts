import { CConsol } from "https://06fs4dix.github.io/Artgine/artgine/basic/CConsol.js";

import { CServerMain } from "https://06fs4dix.github.io/Artgine/artgine/network/CServerMain.js";
import { CFileServer } from "https://06fs4dix.github.io/Artgine/artgine/server/CFileServer.js";
import { COAuthServer } from "https://06fs4dix.github.io/Artgine/artgine/server/COAuthServer.js";
import { CTerminalRouter } from "https://06fs4dix.github.io/Artgine/artgine/server/CTerminalRouter.js";
import { CAIChatRouter } from "https://06fs4dix.github.io/Artgine/artgine/server/CAIChatRouter.js";

new CFileServer().SetServerMain(CServerMain.Main());
new COAuthServer().SetServerMain(CServerMain.Main());
new CTerminalRouter().SetServerMain(CServerMain.Main());
new CAIChatRouter().SetServerMain(CServerMain.Main());

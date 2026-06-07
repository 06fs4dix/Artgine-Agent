import { CServerMain } from "../../Artgine/artgine/network/CServerMain.js";
import { CFileServer } from "../../Artgine/artgine/server/CFileServer.js";
import { CTerminalRouter } from "../../Artgine/artgine/server/CTerminalRouter.js";
import { CAIChatRouter } from "../../Artgine/artgine/server/CAIChatRouter.js";
new CFileServer().SetServerMain(CServerMain.Main());
new CTerminalRouter().SetServerMain(CServerMain.Main());
new CAIChatRouter().SetServerMain(CServerMain.Main());

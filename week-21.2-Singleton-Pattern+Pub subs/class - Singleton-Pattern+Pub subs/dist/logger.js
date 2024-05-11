"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startLogger = void 0;
const GameManager_1 = require("./GameManager");
const gameManager = new GameManager_1.GameManager();
function startLogger() {
    setInterval(() => {
        gameManager.logState();
    }, 4000);
}
exports.startLogger = startLogger;

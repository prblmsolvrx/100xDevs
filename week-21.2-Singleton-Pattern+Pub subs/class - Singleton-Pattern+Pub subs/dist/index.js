"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GameManager_1 = require("./GameManager");
const logger_1 = require("./logger");
const gameManager = new GameManager_1.GameManager();
(0, logger_1.startLogger)();
setInterval(() => {
    gameManager.addGame({
        id: Math.random().toString(),
        "whitePlayer": "harkirat",
        "blackPlayer": "jaskirat",
        moves: []
    });
}, 5000);

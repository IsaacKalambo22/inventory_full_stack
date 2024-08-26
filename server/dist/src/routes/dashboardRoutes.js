"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dashBoardController_1 = require("../controllers/dashBoardController");
const router = (0, express_1.Router)();
router.get("/", dashBoardController_1.getDashboardMetrics); ///http://localhost:8000
exports.default = router;

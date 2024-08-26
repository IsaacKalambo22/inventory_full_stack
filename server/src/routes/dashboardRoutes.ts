import { Router } from "express";
import { getDashboardMetrics } from "../controllers/dashBoardController";

const router = Router();

router.get("/", getDashboardMetrics); ///http://localhost:8000

export default router;
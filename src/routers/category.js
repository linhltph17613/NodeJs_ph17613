import { Router } from "express";
import { Create, read } from "../controllers/category";

const router = Router();

router.post("/category", Create)
router.get("/category/:id", read)

export default router;
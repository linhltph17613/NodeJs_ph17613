import { Router } from "express";
import { Create, read, remove, update, list } from "../controllers/category";

const router = Router();

router.post("/category", Create)
router.get("/category/:id", read)
router.get("/category", list)
router.delete('/category/:id', remove)
router.put('/category/:id', update)

export default router;
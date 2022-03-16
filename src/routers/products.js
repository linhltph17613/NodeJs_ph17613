import { Router } from "express";
import checkAuth from "../middleware/checkAuth"
import { create, getAll, list, remove, update } from "../controllers/products";
const router = Router();





router.get('/products', checkAuth, list)
router.post('/products', checkAuth, create);
router.get('/product/:id', checkAuth, getAll)
router.delete('/product/:id', checkAuth, remove)
router.put('/product/:id', checkAuth, update)
export default router;
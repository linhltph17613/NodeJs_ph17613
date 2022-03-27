import { Router } from "express";
import checkAuth, { isAdmin, isAuth, requireSignin } from "../middleware/checkAuth"
import { create, getAll, list, remove, update } from "../controllers/products";
import { userById } from "../controllers/User";
const router = Router();





router.get('/products', checkAuth, list)
router.post('/products/:userId', requireSignin, isAuth, isAdmin, create);
router.get('/product/:id', checkAuth, getAll)
router.delete('/product/:id', checkAuth, remove)
router.put('/product/:id', checkAuth, update)

router.param('userId', userById)
export default router;
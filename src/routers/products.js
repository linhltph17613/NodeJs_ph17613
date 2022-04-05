import { Router } from "express";
import checkAuth, { isAdmin, isAuth, requireSignin } from "../middleware/checkAuth"
import { create, getAll, list, remove, update } from "../controllers/products";
import { userById } from "../controllers/User";
const router = Router();





// router.get('/products', checkAuth, list)
router.get('/:id', getAll)
router.get('/', list)


// router.post('/:userId', requireSignin, isAuth, isAdmin, create);
router.post('/', create);

router.delete('/:id', checkAuth, remove)
router.put('/:id', /* checkAuth */ update)

router.param('userId', userById)
export default router;
import { Router } from "express";
import checkAuth, { isAdmin, isAuth, requireSignin } from "../middleware/checkAuth"
import { create, getAll, list, PaginationProduct, remove, SearchPro, update } from "../controllers/products";
import { userById } from "../controllers/User";
import producSchema from '../models/product'

const router = Router();


// pagination
// router.get('/products', checkAuth, list)
router.get('/search', SearchPro);
router.get('/:id', getAll)
router.get('/', list)


router.get('/new/:page', PaginationProduct);

// router.post('/:userId', requireSignin, isAuth, isAdmin, create);
// router.post('/:userId', requireSignin, create);

router.post('/', create);
router.delete('/:id', checkAuth, remove)
router.put('/:id', /* checkAuth */ update)


router.param('userId', userById)
export default router;
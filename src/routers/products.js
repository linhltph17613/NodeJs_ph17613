import { Router } from "express";
import checkAuth, { isAdmin, isAuth, requireSignin } from "../middleware/checkAuth"
import { create, getAll, list, remove, update } from "../controllers/products";
import { userById } from "../controllers/User";
import producSchema from '../models/product'

const router = Router();


// pagination
// router.get('/products', checkAuth, list)
router.get('/:id', getAll)
router.get('/', list)


router.get('/new/:page', async (req, res, next) => {
    const perPage = 6; // số lượng sản phẩm xuất hiện trên 1 page
    const page = req.params.page || 1;
    console.log(page);

    const Product = producSchema;
    // console.log(Product);
    try {
        await Product
            .find() // find tất cả các data
            .skip((perPage * page) - perPage) // Trong page đầu tiên sẽ bỏ qua giá trị là 0
            .limit(perPage)
            .exec((err, products) => {
                Product.countDocuments((err, count) => { // đếm để tính có bao nhiêu trang
                    if (err) return next(err);
                    res.send(products) // Trả về dữ liệu các sản phẩm theo định dạng như JSON, XML,...
                });
            });
    } catch (error) {
        console.log("lỗi", error);
    }

});

// router.post('/:userId', requireSignin, isAuth, isAdmin, create);
router.post('/', create);

router.delete('/:id', checkAuth, remove)
router.put('/:id', /* checkAuth */ update)


router.param('userId', userById)
export default router;
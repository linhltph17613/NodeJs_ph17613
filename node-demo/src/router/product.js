import { Router } from 'express'
import { list, create, read, remove, update } from '../controllers/product'

const router = Router()

router.post("/products", create)
router.get("/products", list)
router.get("/product/:id", read)
router.delete("/product/:id", remove)
router.put("/product/:id", update)


export default router;


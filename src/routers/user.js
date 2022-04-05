import { Router } from "express";
import { login, register, list, remove } from "../controllers/auth";

const router = Router();

router.post('/register', register)
router.get('/user', list)
router.delete('/user', remove)

router.post('/login', login)

// module.exports = router;
export default router;
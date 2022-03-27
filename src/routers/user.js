import { Router } from "express";
import { login, register, list } from "../controllers/auth";

const router = Router();

router.post('/register', register)
router.post('/users', list)

router.post('/login', login)

// module.exports = router;
export default router;
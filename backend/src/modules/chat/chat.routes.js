import { Router } from 'express';
import ctrl from './chat.controller.js';
import { auth, allow } from "../../middlewares/auth.js";

const r = Router();
r.use(auth);
r.post('/', ctrl.send);

export default r;

import { Express } from 'express';
import productRouter from './restaurante/router';
import authRouter from './auth/router';


const router = (app: Express) => {
    app.use("/auth", authRouter)
    app.use("/restaurante", productRouter)
}

export default router;



import { Express } from 'express';
import authRouter from './auth/router';
import pasteleriaRouter from './pasteleria/router'


const router = (app: Express) => {
    app.use("/auth", authRouter)
    app.use("/pasteleria", pasteleriaRouter)
 
}

export default router;
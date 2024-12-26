import express from "express"
import { ConfigOptions } from "../types";
export default (options: ConfigOptions) => {
    const router = express.Router();
    router.get('/', (req, res) => {
        res.send('Home page');
    });
    return router
}
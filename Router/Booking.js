import express from "express";
const router = express.Router();
import { TestData ,PostDatas, GetDatas, DelDatas, GetHomePage, GetAboutPage } from "../Controller/Booking.js"; 


router.get('/init',TestData)

router.get('/data', GetDatas)

router.post('/PostDatas',PostDatas)

router.delete('/PostDatas/:id', DelDatas)

router.get('/', GetHomePage)

router.get('/about', GetAboutPage)


export default router

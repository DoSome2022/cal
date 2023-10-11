import express from "express";
const router = express.Router();
import { TestData ,PostDatas, GetDatas, DelDatas, GetHomePage, GetAboutPage, GetFunding, GetIntroduceR } from "../Controller/Booking.js"; 


router.get('/init',TestData)

router.get('/data', GetDatas)

router.post('/PostDatas',PostDatas)

router.delete('/PostDatas/:id', DelDatas)

router.get('/', GetHomePage)

router.get('/about', GetAboutPage)

router.get('/funding', GetFunding)

router.get('/introduceR', GetIntroduceR)

export default router

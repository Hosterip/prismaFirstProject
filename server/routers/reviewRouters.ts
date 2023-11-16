import {PrismaClient} from "@prisma/client";
import express from "express";
import {getReviewByPage, postReview} from "../controllers/reviewsController";

const prisma = new PrismaClient();

const router = express.Router()

router.post('/:id', postReview)

router.get('/:id', getReviewByPage)

export default router
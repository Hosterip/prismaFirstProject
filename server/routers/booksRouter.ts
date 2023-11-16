import {PrismaClient} from "@prisma/client";
import express from "express";
import {getOneBookById, getPageBooks, postBook, deleteOneBookById} from '../controllers/booksController'
const prisma = new PrismaClient();

const router = express.Router()

router.get('/details/:id', getOneBookById)

router.get('/:page', getPageBooks)

router.post('/', postBook)

router.delete('/:id', deleteOneBookById)

export default router
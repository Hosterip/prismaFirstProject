import router from "../routers/booksRouter";
import { Request, Response } from "express"
import {PrismaClient} from "@prisma/client";
const prisma = new PrismaClient();

export async function getOneBookById(req: Request, res: Response) {
    const {id} = req.params
    if (typeof +id !== 'number') {
        res.send('Error have occurred')
        return
    }
    await prisma.book.findUnique({
        where: {
            id: +id
        }
    })
        .then(result => {
            console.log(result)
            res.send(result)
        })
        .catch(e => {
            console.error(e)
            res.send('Error have occurred')
        })
}

export async function getPageBooks(req: Request, res: Response) {
    const limit = 5
    const {page} = req.params
    if (typeof +page !== 'number') {
        res.send('invalid page')
        return
    }
    try {
        const content = await prisma.book.findMany({
            skip: (+page - 1 === 0) ? 0 : (+page - 1 )* limit,
            take: limit
        })
        const count = await prisma.book.count()
        res.send({
            content,
            totalPages: Math.ceil(count / limit)
        })
    } catch (e) {
        console.error(e)
        res.send('Error have occurred')
    }
}

export async function postBook(req: Request, res: Response) {
    const data = await req.body
    await prisma.book.create({
        data: data
    })
        .then(() => {
            console.log('SUCCESS')
            res.send('SUCCESS')
        })
        .catch((e) => {
            console.error(e)
            res.send('error have occurred')
        })
}

export async function deleteOneBookById (req: Request, res: Response) {
    const {id} = req.params
    if (typeof +id !== 'number') {
        res.send('Error have occurred')
        return
    }
    try {
        await prisma.book.delete({
            where: {
                id: +id
            }
        })
    } catch (e) {
        console.error(e)
    }
}

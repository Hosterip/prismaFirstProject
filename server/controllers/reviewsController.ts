import {Request, Response} from 'express'
import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export async function postReview(req: Request,res: Response) {
    const data = await req.body
    const {id} = req.params
    console.log(data)

    try {
        await prisma.review.create({
            data: {
                body: data.body,
                name: data.name,
                book: {
                    connect: {
                        id: +id
                    }
                }
            }
        })
        console.log('SUCCESS')
        res.send('SUCCESS')
    } catch (e) {
        console.error(e)
        res.send('review error have occurred')
    }
}
export async function getReviewByPage (req: Request,res: Response)  {
    const {id} = req.params
    const page = req.query.page || 1
    const limit = 5
    if (typeof +page !== 'number' && typeof +id !== 'number') {
        res.send('invalid page or id')
        return
    }
    try {
        const content = await prisma.review.findMany({
            where: {
                bookId: +id
            },
            skip: (+page - 1 === 0) ? 0 : (+page - 1 )* limit,
            take: limit
        })
        const totalPages = await prisma.review.count({
            where: {
                bookId: +id
            }
        })
        res.send({
            content, totalPages: totalPages/limit
        })
    } catch (e) {
        console.error(e)
        res.send('Error have occurred')
    }
}
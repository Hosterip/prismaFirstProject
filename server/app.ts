import express from 'express';
import cors from 'cors';
import reviewsRouter from "./routers/reviewRouters"
import booksRouter from "./routers/booksRouter";

const app = express();

// middlewares
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json());

// init routers
app.use('/reviews', reviewsRouter)
app.use('/books', booksRouter)

// server starts listen
app.listen(5000)
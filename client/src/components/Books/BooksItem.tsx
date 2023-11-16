import {IBook} from "../../pages/Books.tsx";
import {FC} from "react";
import {Link} from "react-router-dom";

interface IBooksItem {
    content: IBook
}
const BooksItem: FC<IBooksItem> = ({content}) => {
    return (
        <Link to={`/books/details/${content.id}`}>
            <div className='w-9/12 border-2 border-amber-950'>
                <h1 className='text-4xl'>Title: {content.title}</h1>
                <h2 className='text-3xl text-zinc-500'>By {content.author}</h2>
            </div>
        </Link>
    );
};

export default BooksItem;
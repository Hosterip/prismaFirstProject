import {IBook} from "../../pages/Books.tsx";
import {FC} from "react";
import BooksItem from "./BooksItem.tsx";

interface IBooksList {
    content: IBook[]
}

const BooksList: FC<IBooksList> = ({content}) => {
    return (
        <div className='flex flex-col gap-3'>
            {content.map(item => (
                <div key={item.id}>
                    <BooksItem content={item}/>
                </div>
            ))}
        </div>
    );
};

export default BooksList;
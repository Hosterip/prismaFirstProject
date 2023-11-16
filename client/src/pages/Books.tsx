import BooksList from "../components/Books/BooksList.tsx";
import Pagination from "../components/Pagination.tsx";
import useBooks from "../hooks/useBooks.ts";

interface IReview {
    body: string,
    name: string
}
export interface IBook {
    id: number,
    title: string,
    author: string,
    page: number,
    rating: number,
    genres: string,
    reviews: IReview[],
}

const Books = () => {
    const {content, totalPages, page} = useBooks()
    return (
        <div className='px-6'>
            {content &&
                <>
                    <h1 className='font-bold text-7xl'>Books</h1>
                    <br/>
                    <BooksList content={content}/>
                    <Pagination pages={totalPages} currentPage={page || '1'}/>
                </>
            }
        </div>
    );
};

export default Books;
import useBooksDetails from "../hooks/useBooksDetails.ts";
import {useNavigate, useParams} from "react-router-dom";
import ReviewForm from "../components/BookDetails/ReviewForm.tsx";
import Reviews from "../components/BookDetails/Reviews.tsx";
import {deleteBook} from "../API/deleteBook.ts";

const BookDetails = () => {
    const {details, error} = useBooksDetails()
    const {id} = useParams()
    const navigate = useNavigate()

    const deleteHandler = async () => {
        if(id) {
            navigate('/books/1')
            await deleteBook(id)
        }
    }

    return (
        <>
            {details &&
                <div className='flex flex-col text-4xl m-3'>
                    <h1>Title: {details.title}</h1>
                    <h1 className='text-zinc-500'>By {details.author}</h1>
                    <h1 className='text-zinc-500'>Pages: {details.page}</h1>
                    <h1 className='text-amber-600'>Rating: {details.rating}</h1>
                    <h1 className='text-red-700'>{details.genres}</h1>
                    <br/>
                    <h1>Add review</h1>
                    <ReviewForm/>
                    <Reviews/>
                    <button className='rounded text-2xl text-amber-200 bg-red-800 p-1 w-fit' onClick={deleteHandler}>
                        DELETE
                    </button>
                </div>
            }
            {error.isError && <h1 className='text-red-700'>{error.errorMsg}</h1>}
        </>

    );
};

export default BookDetails;
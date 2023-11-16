import {FormEvent, useState} from 'react';
import {postBook} from "../API/postBook.ts";

const useBooksCreate = () => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [genres, setGenres] = useState('')
    const [pages, setPages] = useState('')
    const [rating, setRating] = useState('')

    const emptyTheStates = () => {
        setAuthor('')
        setTitle('')
        setRating('')
        setPages('')
        setRating('')
        setGenres('')
    }

    const handlePost = async (e: FormEvent<HTMLFormElement | HTMLButtonElement>) => {
        if(e) {
            e.preventDefault()
        }
        if (!(title && genres && author && typeof +pages === 'number' && typeof +rating === 'number')) {
            return;
        }
        const result = {
            title,
            author,
            page: +pages,
            rating: +rating,
            genres,
        }
        try {
            await postBook(result)
            emptyTheStates()
            console.log('SUCCESS')
        } catch (e) {
            console.error(e)
        }
    }

    return {handlePost,
        setTitle,
        setAuthor,
        setGenres,
        setPages,
        setRating,
        title,
        author,
        genres,
        pages,
        rating,
    };
};

export default useBooksCreate;
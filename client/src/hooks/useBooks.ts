import {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {IBook} from "../pages/Books.tsx";
import {getBooks} from "../API/getBooks.ts";

const useBooks = () => {
    const [content, setContent] = useState<IBook[] | undefined>()
    const [totalPages, setTotalPages] = useState(0)
    const [error, setError] = useState({
        errorMsg: 'Error have occurred',
        isError: false
    })
    const {page} = useParams()

    useEffect(() => {
        async function fetchData () {
            if(page) {
                const data = await getBooks(page)
                if(Array.isArray(data.content)) {
                    setContent(data.content)
                    setTotalPages(data.totalPages)
                } else {
                    setError({...error, isError: true})
                }
            }
        }
        fetchData()
    }, [page])
    return {content, totalPages, page}
};

export default useBooks;
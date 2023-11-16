import {useEffect, useState} from 'react';
import {IBook} from "../pages/Books.tsx";
import {useParams} from "react-router-dom";
import {getBookDetails} from "../API/getBookDetails.ts";

const useBooksDetails = () => {
    const [details, setDetails] = useState<IBook | undefined>()
    const [error, setError] = useState({
        isError: false,
        errorMsg: 'No id were found'
    })
    const {id} = useParams()
    useEffect(() => {
        async function fetchDetails() {
            if(id) {
                const data = await getBookDetails(id)
                if(data) {
                    setDetails(data)
                } else {
                    setError({...error, isError: true})
                }
            }
        }
        fetchDetails()
    }, [])
    return {details, error};
};

export default useBooksDetails;
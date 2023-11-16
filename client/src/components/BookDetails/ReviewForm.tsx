import {FormEvent, useState} from "react";
import {useParams} from "react-router-dom";
import postReview from "../../API/postReview.ts";

const ReviewForm = () => {
    const [name, setName] = useState('')
    const [body, setBody] = useState('')
    const {id} = useParams()

    const nullifyStates = () => {
        setName('')
        setBody('')
    }
    const handleReview = async (e: FormEvent<HTMLFormElement | HTMLButtonElement>) => {
        e.preventDefault()
        if(name.trim() && body.trim()) {
            const bodyForFetch = {
                name,
                body,
            }
            if(id) await postReview(nullifyStates, bodyForFetch, id)
        }
    }
    return (
        <form className='flex flex-col gap-2'>
            <input
                className='w-8/12 text-3xl'
                type="text"
                placeholder='type here your name'
                required
                onChange={(e) => setName(e.target.value)}
                value={name}
            />
            <input
                className='w-8/12 text-3xl'
                type="text"
                placeholder='type here your review'
                required
                onChange={(e) => setBody(e.target.value)}
                value={body}
            />
            <button className='w-fit px-2 py-1 rounded bg-blue-500 text-zinc-100' onClick={handleReview}>Add</button>
        </form>
    );
};

export default ReviewForm;
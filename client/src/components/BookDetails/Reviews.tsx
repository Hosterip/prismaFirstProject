import {useEffect, useState} from "react";
import getReview from "../../API/getReview.ts";
import useInfinityScroll from "../../hooks/useInfinityScroll.ts";
import {useParams} from "react-router-dom";
interface IReview {
    id: number,
    name: string,
    body: string
}
const Reviews = () => {
    const [reviews, setReviews] = useState<IReview[] | []>([])
    const {lastElementRef, setIsLoading, setTotalPages, page} = useInfinityScroll()
    const {id} = useParams()

    useEffect(() => {
        if (id) {
            setIsLoading(true)
            getReview(id, page)
                .then(res => {
                    setReviews([...reviews, ...res.content])
                    setTotalPages(res.totalPages)
                })
                .then(() => setIsLoading(false))
                .catch(e => console.error(e))
        }
    }, [page]);
    return (
        <div className='my-3'>
            Reviews:
            {reviews.length
                ?
                <>
                    {reviews.map((item) => (
                        <div ref={lastElementRef} key={item.id} className='my-2 bg-amber-200 rounded w-7/12 p-2'>
                            <h1 className='text-3xl'>Name: {item.name}</h1>
                            <h1 className='text-2xl text-zinc-500'>{item.body}</h1>
                        </div>
                    ))}
                </>
                :
                <div>No review were found</div>
            }
        </div>
    );
};

export default Reviews;
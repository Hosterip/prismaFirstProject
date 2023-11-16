import {useCallback, useRef, useState} from 'react';

const useInfinityScroll = () => {
    const [page, setPage] = useState(1)
    const [isLoading, setIsLoading] = useState(true)
    const [totalPages, setTotalPages] = useState(3)
    const observer = useRef<IntersectionObserver | undefined>()
    const lastElementRef = useCallback((review: HTMLDivElement) => {
        if (isLoading) return
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(reviews => {
            if (reviews[0].isIntersecting && !(page >= totalPages)) {
                setPage(page + 1)
            }
        })
        if(review) observer.current?.observe(review)
    }, [isLoading, page, totalPages])
    return {
        lastElementRef,
        setIsLoading,
        setTotalPages,
        page
    }
};

export default useInfinityScroll;
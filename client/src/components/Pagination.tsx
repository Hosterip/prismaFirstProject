import {FC} from "react";
import {Link} from "react-router-dom";

interface IPagination {
    pages: number
    currentPage: string
}

const Pagination: FC<IPagination> = ({pages, currentPage}) => {

    if(pages <= 1) {
        return
    }

    const createArray = (): string[] => {
        const result: string[] = []
        for (let i = 1; i <= pages; i++) {
            result.push(`${i}`)
        }
        return result
    }



    return (
        <div className='m-3 h-full gap-2 flex flex-row align-middle justify-center text-amber-200'>
            {+currentPage !== 1 &&
                <Link to={`/books/${+currentPage - 1}`}>
                    <div className='bg-blue-500 p-2 rounded'> {'<'} </div>
                </Link>
            }
            {createArray().map((item) => (
                <Link key={item} to={`/books/${item}`}>
                    <div className={`rounded w-fit p-2 ${currentPage === item ? 'bg-red-800 text-zinc-100' : 'bg-zinc-500'} `}>
                        {item}
                    </div>
                </Link>

            ))
            }
            {+currentPage !== pages &&
                <Link to={`/books/${+currentPage + 1}`}>
                    <div className='bg-blue-500 p-2 rounded'> {'>'} </div>
                </Link>
                }
        </div>
    );
};

export default Pagination;
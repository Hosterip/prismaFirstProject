import useBooksCreate from "../hooks/useBooksCreate.ts";

const BookCreate = () => {
    const {
        handlePost,
        setGenres,
        setRating,
        setTitle,
        setPages,
        setAuthor,
        title,
        author,
        genres,
        pages,
        rating,
    } = useBooksCreate()

    return (
        <form className='flex flex-col gap-4 p-3' onSubmit={handlePost}>
            <input
                onChange={e => setTitle(e.target.value)}
                required
                value={title}
                type="text"
                placeholder='Title'
            />
            <input
                onChange={e => setAuthor(e.target.value)}
                required
                value={author}
                type="text"
                placeholder='Author'
            />
            <input
                onChange={e => setGenres(e.target.value)}
                required
                value={genres}
                type="text"
                placeholder='Genres separated with comma'/>
            <input
                onChange={e => setPages(e.target.value)}
                required
                value={pages}
                type="number"
                placeholder='Pages'/>
            <input
                onChange={e => setRating(e.target.value)}
                required
                value={rating}
                type="number"
                placeholder='rating'/>
            <button className='w-fit py-1 px-3 rounded bg-red-800 text-zinc-100' onClick={handlePost}>Post</button>
        </form>
    );
};

export default BookCreate;
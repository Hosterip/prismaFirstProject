import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className='flex  p-2 bg-amber-900 text-emerald-700'>
            <Link to='/books'>
                <div className='bg-amber-100 px-2 rounded text-3xl mx-6'>
                    Home
                </div>
            </Link>
            <Link to='/books/create'>
                <div className='bg-amber-100 px-2 rounded text-3xl mx-6'>
                    Post a book
                </div>
            </Link>
        </div>
    );
};

export default Navbar;
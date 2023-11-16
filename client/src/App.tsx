import {FC} from 'react';
import {BrowserRouter, Routes, Navigate, Route} from "react-router-dom";
import Books from "./pages/Books.tsx";
import BookDetails from "./pages/BookDetails.tsx";
import Navbar from "./components/Navbar.tsx";
import BookCreate from "./pages/BookCreate.tsx";

const App: FC = () => {
    return (
        <BrowserRouter>
            <div className='bg-amber-50 w-7/12 h-9/12'>
                <Navbar/>
                <Routes>
                    <Route path='*' element={<Navigate to='/books'/>}/>
                    <Route path='/books' element={<Navigate to='/books/1'/>}/>
                    <Route path='/books/create' element={<BookCreate/>}/>
                    <Route path='/books/:page' element={<Books/>}/>
                    <Route path='/books/details/:id' element={<BookDetails/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;

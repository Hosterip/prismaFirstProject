import {IBook} from "../pages/Books.tsx";
import {baseLink} from "../constants/APIConstants.ts";

export async function getBookDetails(id: string): Promise<IBook> {
    return await fetch(`${baseLink}/books/details/${id}`, {
        method: 'GET'
    })
        .then(response => {
            return response.json()
        })
        .catch(e => {
            console.error(e)
        })
}
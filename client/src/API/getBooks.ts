import {IBook} from "../pages/Books.tsx";
import {baseLink} from "../constants/APIConstants.ts";

interface IFetchData {
    content: IBook[],
    totalPages: number
}

export async function getBooks(page: string): Promise<IFetchData> {
    const data: IFetchData = await fetch(`${baseLink}/books/${page}`, {
        method: 'GET',
    })
        .then(response => response.json())
    return data
}
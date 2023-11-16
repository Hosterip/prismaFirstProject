import {baseLink} from "../constants/APIConstants.ts";

export async function  deleteBook(id: string) {
    await fetch(`${baseLink}/books/${id}`, {
        method: 'delete'
    })
        .catch(e => console.error(e))
}
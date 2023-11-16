import {baseLink} from "../constants/APIConstants.ts";

interface IBodyForFetch {
    title: string
    author: string
    page: number
    rating: number,
    genres: string
}

export async function postBook(bodyForFetch: IBodyForFetch) {
    await fetch(`${baseLink}/books`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(bodyForFetch)
    })
}
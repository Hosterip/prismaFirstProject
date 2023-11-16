import {baseLink} from "../constants/APIConstants.ts";

interface IBodyForFetch {
    name: string
    body: string
}

const postReview = async (callback: () => void, bodyForFetch: IBodyForFetch, id: string) => {
    await fetch(`${baseLink}/reviews/${id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(bodyForFetch)
    })
        .then(() => callback)
        .catch((e) => console.log(e))
};

export default postReview;
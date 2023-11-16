import {baseLink} from "../constants/APIConstants.ts";

const getReview =async (id: string, page = 1) => {
    const data = await fetch(`${baseLink}/reviews/${id}?page=${page}`)
        .then(response => response.json())

    return data
};

export default getReview;
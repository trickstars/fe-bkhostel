import { makeRequest } from "../makeRequest";


export async function fetchPost({page, priceMin, priceMax, areaMin, areaMax, type}) {
    const posts = await makeRequest('/posts/filter', {
        method: "post",
        params: {
            page: page,
            priceMin: priceMin,
            priceMax: priceMax,
            areaMin: areaMin,
            areaMax: areaMax,
            type: type

        }
    })

    return posts
}
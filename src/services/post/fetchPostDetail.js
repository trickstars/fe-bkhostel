import { makeRequest } from "../makeRequest";

export async function fetchPostDetail(id) {
    const postDetail = await makeRequest("/posts", {
        method: "post",
        data: {
            postId: id
        }
    })

    return postDetail
}
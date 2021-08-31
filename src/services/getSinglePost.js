export const getSinglePost = id => {
    const endpoint = `https://jsonplaceholder.typicode.com/posts/${id}`;
    return fetch(endpoint)
        .then(response => response.json())
        .then(singlePost => singlePost)
}
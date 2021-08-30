const endpoint = "https://jsonplaceholder.typicode.com/posts";

export const getPosts = () => {
    return fetch(endpoint)
        .then(response => response.json())
        .then(post => post);
};
export const getAuthor = userId => {
    let endpoint = `https://jsonplaceholder.typicode.com/users/${userId}`
    return fetch(endpoint)
        .then(resp => resp.json())
        .then(author => author)
}
const endpoint = "https://jsonplaceholder.typicode.com/users";

export const getAllAuthors = () => {
    return fetch(endpoint)
        .then(response => response.json())
        .then(users => users);
};
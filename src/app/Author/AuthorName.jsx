const AuthorName = props => {
    return (
        <div>
            <h2>{props.author.name}</h2>
            <p>username: {props.author.username}</p>
            <p>email: {(props.author.email).toLowerCase()}</p>
            <p>phone: {props.author.phone}</p>
        </div>

    )
}

export default AuthorName;
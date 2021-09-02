const AuthorName = props => {
    return (
        <div className="border-bottom mb-3">
            <h2>{props.author.name}</h2>
            <p>username: {props.author.username}</p>
            <p>email: {(props.author.email).toLowerCase()}</p>
            <p>phone: {props.author.phone}</p>
        </div>

    )
}

export default AuthorName;
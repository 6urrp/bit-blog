const AuthorCompany = props => {
    return (
        <div className="border-bottom ">
            <h2>Company</h2>
            <p>{props.author.company.name}</p>
            <p>{props.author.company.catchPhrase}</p>
        </div>
    )
}

export default AuthorCompany
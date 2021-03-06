const AuthorAddress = props => {
    return (
        <div className="border-bottom d-flex justify-content-between mb-3">
            <div>
                <h2>Address</h2>
                <p>street: {props.author.address.street}</p>
                <p>city: {props.author.address.city}</p>
                <p>zipcode: {props.author.address.zipcode}</p>
            </div>
            <div className="pb-3">
            <iframe
                width="100%"
                height="100%"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                title={props.author.address.street}
                frameBorder="0"
                style={{ border: 0 }}
                src={`https://maps.google.com/maps?q={props.author.geo.lat},{props.author.geo.lng}&z=15&output=embed`}
            />

            </div>
        </div>
    )
};

export default AuthorAddress;
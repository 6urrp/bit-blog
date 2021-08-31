import { Link } from "react-router-dom"
import "./Post.css"

const Post = props => {
    
    return (
        <div className="post-container border-bottom mb-3">
            <h3>{props.post.title}</h3>
            <p>{props.post.body}</p>
            <small><Link to={`post/${props.post.id}`}>read more...</Link></small>
        </div>
    )
};

export default Post;
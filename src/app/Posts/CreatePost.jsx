const CreatePost = () => {
    return (
        <div className="w-50 mx-auto my-5">
            <h2 className="text-center">New Post</h2>
            <div class="mb-3">
                <label htmlFor="inputText" class="form-label">Title</label>
                <input type="text" class="form-control" id="inputText" />
            </div>
            <div class="form-floating">
                <p>Content</p>
                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea" style={{height: 300 + "px"}}></textarea>
            </div>
            <div className="mt-4 text-end">
                <button type="button" class="btn btn-secondary me-4">Cancel</button>
                <button type="button" class="btn btn-secondary">Save</button>
            </div>

        </div>
    )
};

export default CreatePost;
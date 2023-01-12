

export default function AddComments () {
    return (
        <form>
            <input className="commentAdder" id="commentAdder" name="commentAdder" type="text" placeholder="Add a comment..." />
            <button className="cancel-button">Cancel</button>
            <button className="add-comment-button">Comment</button>
        </form>
    )

}

//add "" as comment state
import './AddNewComment.css'
import ImgAddComment from '../../assets/Images/Oval.png'
import { useState } from 'react'
import useStorePosts from '../../Store/Posts'

function AddNewComment({ uniqueid }) {
    const [commentinput, setcommentinput] = useState("")
    const { AddNewComment, ArrayOfPosts } = useStorePosts()

    function HandelNewComment() {
        const post = ArrayOfPosts.find(post => post.id == uniqueid);
        if (post) {
            let oldCommentId = post.comments.length;
            let newcommentObject = {
                CommentContent: commentinput,
                commentid: oldCommentId + 1
            }
            AddNewComment(uniqueid, newcommentObject)
            console.log(uniqueid, newcommentObject)
            setcommentinput("")

        }


    }
    function HandelonChange(event) {
        setcommentinput(event.target.value)
    }

    return (
        <div className='parent'>
            <div className='AddNewComment'>
                <img src={ImgAddComment} className='photo'></img>
                <input onChange={HandelonChange} value={commentinput} placeholder='Add a Comment....'></input>
                <button onClick={HandelNewComment} uniqueid={ArrayOfPosts.uniqueid} className='btncommment'>Replay</button>
            </div>
        </div>
    )
}
export default AddNewComment
import CommentItem from '../CommentItem/CommentItem'
import './CommentWrapper.css'
import useStorePosts from '../../Store/Posts'
function CommentWrapper({ postId }) {
    const { ArrayOfPosts } = useStorePosts()
    const post = ArrayOfPosts.find(post => post.id === postId);

    return (


        <>
            <div className='commentWrapper'>
                {post && post.comments.map((comment) => {
                    return (
                        <CommentItem
                            key={comment.commentid}
                            CommentContent={comment.CommentContent}
                            commentId={comment.commentid}
                            postId={postId}
                        ></CommentItem>


                    )
                })}


            </div>
        </>
    )
} export default CommentWrapper
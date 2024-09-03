import './PostWrapper.css'
import PostItem from '../PostItem/PostItem'
import AddNewPost from '../AddNewPost/AddNewPost'
import useStorePosts from '../../Store/Posts'


function PostWrapper() {
    const { ArrayOfPosts } = useStorePosts()

    return (
        <>

            <div className='PostWrapper'>
                <>
                    {ArrayOfPosts.map((item) => {
                        return (
                            <PostItem
                                uniqueid={item.uniqueid}
                                likes={item.likes}
                                key={item.id}
                                ProfilImg={item.ProfilImg}
                                Name={item.Name}
                                time={item.time}
                                content={item.content}
                                comments={item.comments}
                            ></PostItem>



                        )
                    })}


                </>


                <AddNewPost></AddNewPost>
            </div>

        </>
    )
}
export default PostWrapper
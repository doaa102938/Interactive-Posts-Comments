import './AddNewPost.css'
import NewPostImage from "../../assets/Images/Oval.png"
import { useState } from 'react'
import useStorePosts from '../../Store/Posts'

function AddNewPost() {
    const { AddNewPost, ArrayOfPosts } = useStorePosts()

    const [inputvalue, setInputValue] = useState('')

    function handelOnChange(event) {
        setInputValue(event.target.value)
    }

    function handelOnClick() {
        const NewPostObject = {
            ProfilImg: NewPostImage,
            Name: "Doaa Ahmed",
            time: " Just Now",
            uniqueid: ArrayOfPosts.length + 1,
            id: ArrayOfPosts.length + 1,
            content: inputvalue,
            likes: 0,
            comments: []
        }
        AddNewPost(NewPostObject)
        setInputValue('')

    }



    return (
        <>
            <div className="NewPost">
                <img src={NewPostImage} className="NewPostImage"></img>
                <input value={inputvalue} onChange={handelOnChange} placeholder="Send a Post...."></input>
                <button onClick={handelOnClick} className="btnsend">SEND</button>
            </div>
        </>
    )
}
export default AddNewPost
import './CommentItem.css'
import useStore from '../../Store/Counter'
import imgreplay from '../../assets/Images/Oval (1).png'
import { useState } from 'react'
import useStorePosts from '../../Store/Posts'

function CommentItem({ CommentContent, commentId, postId }) {
    const { DeleteComment, updateComment } = useStorePosts()
    const { count, inc, dec } = useStore()
    const [inputValue, setInputvalue] = useState(CommentContent)

    const [ShowEditSection, setShowEditSection] = useState(false)
    function HandelEditComment() {

        setShowEditSection(!ShowEditSection)
    }
    function handelUpdateButton() {
        updateComment(postId, commentId, inputValue)
        setShowEditSection(false)

    }
    function OnDeleteComment() {
        DeleteComment(commentId, postId)
    }

    function handelOnChange(event) {
        setInputvalue(event.target.value)
    }

    return (
        <div className="CommentItem">
            <div className="Counter">
                <button>
                    <span onClick={inc}>+</span>
                    <label>{count}</label>
                    <span onClick={dec}>-</span>
                </button>
            </div>
            <div className="left">
                <div className='Top'>
                    <div className="right">
                        <img src={imgreplay} className='photo'></img>
                        <label className='firstlabel'> ramsesmiron</label>
                        <label className='secondlabel' >Just Now</label>
                    </div>
                    <div className="Buttons" >
                        <button className="btndelete" onClick={OnDeleteComment}>Delete</button>

                        <button onClick={HandelEditComment} className="editbtn"  >Edit</button>
                    </div>

                </div>


                <div className='commentdiv'>
                    {ShowEditSection == true ?
                        (<>
                            <input value={inputValue} onChange={handelOnChange}></input>
                            <div className="divupdate">
                                <button className="btnUpdate" onClick={handelUpdateButton} > Update</button>
                            </div>
                        </>
                        )
                        : (<p className='comment'>{CommentContent}</p>)}
                </div>
            </div >

        </div>


    )
} export default CommentItem
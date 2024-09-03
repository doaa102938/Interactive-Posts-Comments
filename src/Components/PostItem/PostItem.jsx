import './PostItem.css'
import iconReplay from "../../assets/Images/Path.png"
import useStore from '../../Store/Counter'
import CommentWrapper from "../CommentWrapper/CommrntWrapper"
import AddNewComment from '../AddNewComment/AddNewComment'
import useStorePosts from '../../Store/Posts'
import { useState } from 'react'
function PostItem(props) {
    const [ShowReplayDiv, setShowReplayDiv] = useState(false)

    const { count, inc, dec } = useStore()
    const { DeletePost } = useStorePosts()
    function HandelDelete(uniqueid) {
        DeletePost(uniqueid)

    }
    function HandelReplay() {
        let RusultReplay = !ShowReplayDiv
        setShowReplayDiv(RusultReplay)
    }

    return (

        <>

            <div className='PostItem' >
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
                            <img src={props.ProfilImg} className='photo'></img>
                            <label className='firstlabel'> {props.Name}</label>
                            <label className='secondlabel' >{props.time}</label>
                        </div>

                        <div className="Buttons">
                            {props.Name == "Doaa Ahmed" ? (<button className="btndelete" onClick={() => HandelDelete(props.uniqueid)} >
                                Delete
                            </button>
                            ) : null
                            }


                            <button className="btnreply" onClick={HandelReplay}>
                                <img src={iconReplay} className='iconreplay'></img>
                                <span className='Replay'>Reply</span>

                            </button>
                        </div>

                    </div>
                    <div className='Down'>
                        <p className='Describtion'>{props.content}</p>
                    </div>
                </div>
            </div>
            <CommentWrapper postId={props.uniqueid}></CommentWrapper>

            {
                ShowReplayDiv == true ?
                    (<AddNewComment uniqueid={props.uniqueid}></AddNewComment>
                    ) : null
            }
        </>


    )
}
export default PostItem
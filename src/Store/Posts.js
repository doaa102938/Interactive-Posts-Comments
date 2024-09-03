import { create } from "zustand";
import imgtop from "../assets/Images/img1.jpg"
import imgdown from "../assets/Images/img2.jpeg"
const useStorePosts = create((set) => ({
    ArrayOfPosts: [
        {
            uniqueid: 1,
            ProfilImg: imgtop,
            Name: "Doaa Ahmed",
            time: "1 month ago",
            id: 1,
            content: "  Impressive! Though it  be improved. But overall it looks incredible. You’ve nailed the design aworks really well.",
            likes: 12,
            comments: [
                {
                    CommentContent: "@maxblagun . It’s very tempting to jump ahead but lay a solid foundation first.",
                    commentid: 1
                },
                { CommentContent: "Comment 2", commentid: 2 },

            ]
        },
        {
            uniqueid: 2,
            ProfilImg: imgdown,
            Name: "maxblagn",
            time: "2 Weeks ago",
            id: 2,
            content: "Woah, your for? I’m still new,nt to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
            likes: 5,
            comments: []
        }
    ],
    AddNewPost: (Newobj) => set((state) => ({ ArrayOfPosts: [...state.ArrayOfPosts, Newobj] })),
    DeletePost: (ID) => set((state) => ({ ArrayOfPosts: state.ArrayOfPosts.filter(item => item.id !== ID) })),
    AddNewComment: (newcommentObject, postId) => set((state) => ({
        ArrayOfPosts: state.ArrayOfPosts.map((post) => {
            if (post.id === postId) {
                return {
                    ...post,
                    comments: [...post.comments, newcommentObject]

                };
            }
            return post;
        })
    })),
    DeleteComment: (PostID, CommentID) => set((state) => ({
        ArrayOfPosts: state.ArrayOfPosts.map((post) => {
            if (post.id === PostID) {
                return {
                    ...post,
                    comments: post.comments.filter(comment => comment.commentid !== CommentID)
                };
            }
            return post;
        })
    })),
    updateComment: (postId, commentId, newContent) => set((state) => ({
        ArrayOfPosts: state.ArrayOfPosts.map(post =>
            post.id === postId
                ? {
                    ...post,
                    comments: post.comments.map(comment =>
                        comment.commentid === commentId
                            ? { ...comment, CommentContent: newContent }
                            : comment
                    )
                }
                : post
        )
    }))
}));


export default useStorePosts
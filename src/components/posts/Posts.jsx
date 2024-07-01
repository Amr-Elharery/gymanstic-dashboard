import Post from "../post/Post";
import ReactLoading from "react-loading"
import "./Posts.css";
function Posts() {
    let posts = [
        {
            id:1,
            userName: "User Name",
            date: "October 11 .",
            body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc enim, porttitor",
            likes: 127,
            comments: 10,
            shares:2
        }
        ,{
            id:2,
            userName: "User Name",
            date: "October 11 .",
            body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc enim, porttitor",
            likes: 127,
            comments: 10,
            shares:2
        }
        ,{
            id:3,
            userName: "User Name",
            date: "October 11 .",
            body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc enim, porttitor",
            likes: 127,
            comments: 10,
            shares:2
        }
        ,{
            id:4,
            userName: "User Name",
            date: "October 11 .",
            body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc enim, porttitor",
            likes: 127,
            comments: 10,
            shares:2
        }
    ]
  return (
    <div className="posts">
        {posts.length>0?
        posts.map((post) => (<Post post={post}/>))
        :
        <div className="loader">
            <ReactLoading type="bars" color="#fe6e0e" height={300} width={200} />
        </div>
    }
    </div>
  )
}

export default Posts
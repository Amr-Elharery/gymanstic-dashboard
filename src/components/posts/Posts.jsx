import Post from "../post/Post";
import ReactLoading from "react-loading"
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import "./Posts.css";
function Posts() {
    const [posts, setPosts] = useState([]);
    const [noPosts, setNoPosts] = useState(false);
    const [error, setError] = useState(false);


    const [id, setId] = useState("");
    const [token, setToken] = useState("");
    useEffect(() => {
      let authData = localStorage.getItem("authorization") 
                    || sessionStorage.getItem("authorization");
  
      if (authData) {
        authData = JSON.parse(authData);
        setId(authData.id);
        setToken(authData.token);
      }
    }, []);

    useEffect(()=>{
        fetch("https://gymnastic-beta.vercel.app/api/v1/posts/allposts", {
            headers:{
                "Authorization": `Bearer ${token}`
            }
        }).then(res => res.json())
        .then(resObj => {
            if(resObj.status === "success"){
                if(resObj.post.length === 0) setNoPosts(true);
                setPosts(resObj.post);
            }
        })
        .catch(err => {
            setError(true)
            Swal.fire({
                title: "Error",
                text: err.message + " Failed to load posts",
                icon: "error"
            })
        })
    }, [id, token])
  return (
    <div className="posts">
        {
        noPosts ? <h1 className="p-10 rad-16 bg-primary c-white">No posts</h1>
        :
        posts.length>0?
        posts.map((post) => (<Post key={post._id} post={post}/>))
        :
        error ? <h1 className="p-10 rad-16 bg-primary c-white">Error occured...!</h1>
        :
        <div className="loader">
            <ReactLoading type="bars" color="#fe6e0e" height={300} width={200} />
        </div>
    }
    </div>
  )
}

export default Posts
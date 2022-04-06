import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPosts } from "../../Services/RoutesServices";



const PostList = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        getPosts()
            .then(response => { setPosts(response.data) })
    }, [])
    


    return (
        <div className="App text-start">
            {!posts ? (
                <h1 className='mx-3'>Loading...</h1>
            ) :
                (posts.map(post => {
                    return (
                        <div className="PostBox" key={post.id}>
                            <Link
                                className="text-dark"
                                style={{ textDecoration: 'none' }}
                                to={`/posts/${post.id}`}>
                                <div className='card'>
                                    <div className="d-flex mt-5 mx-5">
                                        <div>
                                            <p className="fs-6 fw-light">Id: {post.id}</p>
                                            <p className="fs-6 fw-light">Tittle: {post.title}</p>
                                        </div>
                                        <hr />
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )
                }))
            }
        </div>
    );
}



export default PostList;
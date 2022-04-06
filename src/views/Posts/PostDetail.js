import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";






const PostDetail = ({ fetchFn }) => {
    const { id } = useParams()
    const [post, setPost] = useState(null)

    
    useEffect(() => {
        fetchFn(id)
               .then(post => { setPost(post.data) })
     }, [])




    return (
        <div className="Post Details">
            { post ? (
                <div className="Post">
                <div className='card'>
                    <div className="mt-5 mx-5">  
                        <div className="text-start">
                            <h4 className="fs-6 " style={{ color: 'grey' }}> User Id: {post.userId}</h4>
                            <h4 className="fs-6 " style={{ color: 'blue' }}>Id: {post.id}</h4>
                            <h4 className="fs-6 " style={{ color: 'purple' }}>Title: {post.title}</h4>
                            <p className="fs-6">Description: <strong>{post.body}</strong></p>
                        </div>
                        <hr />
                    </div>
                </div>
            </div>
            ):(
                <h1>Loading...</h1>
            )}
        </div>
    )
};

export default PostDetail
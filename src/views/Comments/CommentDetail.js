import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";






const CommentDetail = ({ fetchFn }) => {
    const { id } = useParams()
    const [comment, setComment] = useState(null)

    
    useEffect(() => {
        fetchFn(id)
               .then(comment => { setComment(comment.data) })
     }, [])




    return (
        <div className="Post Details">
            { comment ? (
                <div className="Post">
                <div className='card'>
                    <div className="mt-5 mx-5">  
                        <div className="text-start">
                            <h4 className="fs-6 " style={{ color: 'grey' }}> Post Id: {comment.postId}</h4>
                            <h4 className="fs-6 " style={{ color: 'blue' }}>Id: {comment.id}</h4>
                            <h4 className="fs-6 " style={{ color: 'purple' }}>Name: {comment.name}</h4>
                            <h4 className="fs-6 " style={{ color: 'orange' }}>Email: {comment.email}</h4>
                            <p className="fs-6">Description: <strong>{comment.body}</strong></p>
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

export default CommentDetail
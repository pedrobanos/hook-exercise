import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getComments } from "../../Services/RoutesServices";



const CommentList = () => {
    const [comments, setComments] = useState([])

    useEffect(() => {
        getComments()
            .then(response => { setComments(response.data) })
    }, [])
    


    return (
        <div className="App text-start">
            {!comments ? (
                <h1 className='mx-3'>Loading...</h1>
            ) :
                (comments.map(comment => {
                    return (
                        <div className="CommentBox" key={comment.id}>
                            <Link
                                className="text-dark"
                                style={{ textDecoration: 'none' }}
                                to={`/comments/${comment.id}`}>
                                <div className='card'>
                                    <div className="d-flex mt-5 mx-5">
                                        <div>
                                            <p className="fs-6 fw-light">Name: {comment.name}</p>
                                            <p className="fs-6 fw-light">email: {comment.email}</p>
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



export default CommentList;
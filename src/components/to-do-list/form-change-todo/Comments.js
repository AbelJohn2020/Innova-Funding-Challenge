import React from 'react';
import './comments.css';

const Comments = ({image, comment}) => {
    return (
        <li className="user">
            <img className="user--photo" src={image} alt="User Profile"/>
            <p className="user--coment">{comment}</p>
        </li>
    )  
}

export default Comments;

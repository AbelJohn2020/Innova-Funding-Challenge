import React from 'react';
import './CommentList.css';

const CommentList = ({image, alt, comment}) => {
    return (
        <li className="user">
            <img className="user--photo" src={image} alt={alt}/>
            <p className="user--comment">{comment}</p>
        </li>
    )  
};

export default CommentList;

import React from 'react';
import './commentList.css';

const CommentList = ({image, alt, comment}) => {
    return (
        <li className="user">
            <img className="user--photo" src={image} alt={alt}/>
            <p className="user--coment">{comment}</p>
        </li>
    )  
}

export default CommentList;

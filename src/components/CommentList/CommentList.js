import React from 'react';
import styles from './CommentList.module.css';

const CommentList = ({image, alt, comment}) => {
    return (
        <li className={styles.User}>
            <img className={styles.UserPhoto} src={image} alt={alt}/>
            <p className={styles.UserComment}>{comment}</p>
        </li>
    )  
};

export default CommentList;

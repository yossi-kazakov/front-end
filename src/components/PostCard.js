import React from 'react';
import './PostCard.scss';
const PostCard = ({ post }) => {
  const { id, date, title, author, content } = post;

  return (
    <div className="post-card">
      <h2>{title}</h2>
      <p className="post-meta">
        ע״י  <span className="post-author">{author}</span>
      </p>
      <div className="post-content">{content}</div>
    </div>
  );
};


export default PostCard;

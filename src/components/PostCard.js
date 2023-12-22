import React from 'react';
import './PostCard.scss';
const PostCard = ({ post }) => {
  const { id, date, title, name, content } = post;

  return (
    <div className="post-card">
      <h2>{title}</h2>
      <p className="post-meta">
        <span className="post-date">{date}</span> by <span className="post-author">{name}</span>
      </p>
      <div className="post-content">{content}</div>
    </div>
  );
};


export default PostCard;

import './Tag.css';
import React from "react";

const Tag = ({ tag }) => {
  return (
    <div className="tag__item">
      <span className='tag__item-text'>{tag}</span>
    </div>
  );
};

export default Tag;

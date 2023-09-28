import './Tag.css';
import React from "react";

const Tag = (props) => {
  return (
    <div className="tag__item">
      <span className='tag__item-text'>{props.tag}</span>
    </div>
  );
};

export default Tag;

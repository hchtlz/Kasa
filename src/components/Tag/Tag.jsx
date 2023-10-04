import './Tag.css';
import React from "react";

export default function Tag({ tag }) {
  return (
    <div className="tag__item">
      <span className='tag__item-text'>{tag}</span>
    </div>
  );
}

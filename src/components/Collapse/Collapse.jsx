import React, { useState } from 'react';
import './Collapse.css';
import chevron from '../../assets/images/chevron.svg';

export default function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`collapse ${isOpen ? 'collapse_open' : ''}`}>
      <div className="collapse__title" onClick={toggleCollapse}>
        <h3 className="collapse__title-text">{title}</h3>
        <img
          src={chevron}
          alt="chevron"
          className={`collapse__title-chevron ${isOpen ? 'rotate' : ''}`}
        />
      </div>
      {isOpen && (
        <div className="collapse__content">
          {children} {}
        </div>
      )}
    </div>
  );
}

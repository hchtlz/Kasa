import React, { useState } from 'react';
import './Carrousel.css';
import logements from '../../datas/logement.json';
import previousArrow from '../../assets/images/arrow-previous.svg';
import nextArrow from '../../assets/images/arrow-next.svg';


// TODO: Refactoriser le code pour pouvoir utiliser le composant Carrousel dans les pages des logements

export default function Carrousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = logements.length;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === totalImages - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalImages - 1 : prevIndex - 1));
  };

  return (
    <div className="carrousel">
      <div className="carrousel-wrapper" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {logements.map((logement, index) => (
          <div className="carrousel-item" key={logement.id}>
            <img src={logement.cover} alt={logement.title} />
          </div>
        ))}
      </div>

      <div className="carrousel-info">
        <span className="image-count">
          {currentIndex + 1}/{totalImages}
        </span>
      </div>

      <button className="prev" onClick={prevSlide}>
        <img src={previousArrow} alt="Previous" />
      </button>
      <button className="next" onClick={nextSlide}>
        <img src={nextArrow} alt="Next" />
      </button>
    </div>
  );
}

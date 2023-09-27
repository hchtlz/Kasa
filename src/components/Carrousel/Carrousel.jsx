import React, { useState } from 'react';
import './Carrousel.css';
import logements from '../../datas/logement.json';
import previousArrow from '../../assets/images/arrow-previous.svg';
import nextArrow from '../../assets/images/arrow-next.svg';


// TODO: Refactoriser le code pour pouvoir utiliser le composant Carrousel dans les pages des logements

export default function Carrousel({ pictures, name }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = pictures.length;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === totalImages - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalImages - 1 : prevIndex - 1));
  };

  return (
    <div className="carrousel">
      <div className="carrousel-wrapper" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {pictures.map((picture, index) => (
          <div className="carrousel-item" key={index}>
            <img src={picture} alt={`Image numéro ${index} pour le logement: ${name}`} />
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

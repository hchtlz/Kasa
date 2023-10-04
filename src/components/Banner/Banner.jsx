import './Banner.css';
import React from "react";

export default function Banner({ text, image }) {
  return (
    <div className="banner" style={{ backgroundImage: `url(${image})` }}>
      {text ?
        <div className="banner-text">Chez vous, partout et ailleurs</div>
        : null }
    </div>
  );
}
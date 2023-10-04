import './Banner.css';
import React from "react";

export default function Banner({ text, image }) {
	return (
		<div className="banner" style={{ background: "url(" + image + ") center center / cover no-repeat" }}>
      {text ?
			  <div className="banner-text">Chez vous, partout et ailleurs</div>
      : null }
		</div>
	);
}
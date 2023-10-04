import './ErrorMessage.css'
import React from "react";
import Error404 from '../../assets/images/404.svg';
import { Link } from 'react-router-dom';

export default function ErrorMessage() {
  return(
    <div className="error">
      <img src={Error404} alt="Error 404" className="error_logo" />
      <h1 className="error_info">Oups! La page que vous demandez n&apos;existe pas.</h1>
      <Link to="/" className="error_link">Retourner sur la page d&apos;accueil</Link>
    </div>
  )
}
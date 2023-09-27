import './ErrorMessage.css'
import Error404 from '../../assets/images/404.svg';
import { Link } from 'react-router-dom';


export default function ErrorMessage() {
  return(
    <div className="ErrorMessage">
      <img src={Error404} alt="Error 404"  className="ErrorMessage_logo"/>
      <h1 className='ErrorMessage_info'>Oups! La page que vous demandez n'existe pas.</h1>
      <Link to="/" className="ErrorMessage_link">Retourner sur la page d'accueil</Link>
    </div>
  )
}
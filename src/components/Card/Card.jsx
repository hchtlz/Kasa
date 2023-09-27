import './Card.css'
import { Link } from 'react-router-dom';

export default function Card({ title, image, alt, id }) {
  return (
    <Link to={`/logement/${id}`}  className="card-link">
      <article className="card">
        <img src={image} alt={alt} className="card__img" />
        <div className="card__text">
        <h2 className="card__title">{title}</h2>
        </div>
      </article>
    </Link>
  );
}

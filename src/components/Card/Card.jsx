import './Card.css'

export default function Card({ title, image, alt }) {
  return (
    <a href="#" className="card-link">
      <article className="card">
        <img src={image} alt={alt} className="card__img" />
        <div className="card__text">
        <h2 className="card__title">{title}</h2>
        </div>
      </article>
    </a>
  );
}

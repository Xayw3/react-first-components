import './card.scss';

const Card = () => (
  <div className="card">
    <h2 className="card__title">
      Title
    </h2>
    <p className="card__info">
      Description
    </p>
    <button type="button" className="card__btn">
      Action
    </button>
  </div>
);

export default Card;

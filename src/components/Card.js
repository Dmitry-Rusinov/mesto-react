export default function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }

  return (
    <div className="elements__card-content">
      <img
        src={card.link}
        alt={card.name}
        onClick={handleClick}
        className="elements__picture"
      />
      <button
        type="button"
        title="Кнопка удаления карточки"
        className="elements__button-delete"></button>
      <div className="elements__description">
        <div className="elements__container">
          <h2 className="elements__title">{card.name}</h2>
          <div className="elements__like-container">
            <button
              type="button"
              title="Кнопка лайка картинки"
              className="elements__button-like"></button>
            <span className="elements__likes-counter">{card.likes.length}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

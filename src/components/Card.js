export default function Card({card}) {

  return (
          <li class="elements__card-content">
            <img
              src={card.link}
              alt={card.name}
              className="elements__picture"
            />
            <button
              type="button"
              title="Кнопка удаления карточки"
              className="elements__button-delete"
            ></button>
            <div className="elements__description">
              <div className="elements__container">
                <h2 className="elements__title">{card.name}</h2>
                <div className="elements__like-container">
                  <button
                    type="button"
                    title="Кнопка лайка картинки"
                    className="elements__button-like"
                  ></button>
                  <span className="elements__likes-counter">0</span>
                </div>
              </div>
            </div>
          </li>
  )
}
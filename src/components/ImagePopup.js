export default function ImagePopup() {
  return (
    <div className="popup popup_overlay popup_image" id="popupImage">
          <div className="popup__image-container">
            <button
              type="button"
              className="popup__closed"
              title="Кнопка закрытия формы"
            ></button>
            <img
              className="popup__picture"
              alt="Описание картинки"
              src="<%=require('./images/image.jpg')%>"
            />
            <h2 className="popup__image-title"></h2>
          </div>
        </div>
  )
}
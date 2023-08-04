export default function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen ? "popup_opened" : ""}`}    id="popupDeleteCard">
          <div className="popup__container">
            <button
              type="button"
              className="popup__closed"
              onClick={props.onClose}
            ></button>
            <h2 className="popup__title">{props.title}</h2>
            <form name={props.name} className="popup__form">
              {props.children}
              <button type="submit" className="popup__submit" value="delete">
                Да
              </button>
            </form>
          </div>
        </div>
  )
}
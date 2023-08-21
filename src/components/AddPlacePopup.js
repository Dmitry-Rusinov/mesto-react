import PopupWithForm from "./PopupWithForm";
import { useRef } from "react";

export default function AddPlacePopup({ isOpen, onClose, onAddCard}) {

const newPlaceRef = useRef();
const pictureLinkRef = useRef();

function handleSubmit(e) {
  e.preventDefault();
  onAddCard({
    name: newPlaceRef.current.value,
    link: pictureLinkRef.current.value
  })
}

  return (
    <PopupWithForm
      name="popup_addCard"
      title="Новое место"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      >
      <fieldset className="popup__content">
        <input
          className="popup__input"
          id="card-description"
          type="text"
          placeholder="Название"
          minLength="2"
          maxLength="30"
          name="newPlace"
          required
          ref={newPlaceRef}
        />
        <span className="popup__input-error card-description-error"></span>
        <input
          className="popup__input"
          id="picture-link"
          type="url"
          placeholder="Ссылка на картинку"
          minLength="1"
          maxLength="400"
          name="pictureLink"
          required
          ref={pictureLinkRef}
        />
        <span className="popup__input-error picture-link-error"></span>
      </fieldset>
      <button type="submit" className="popup__submit" value="delete">
        Создать
      </button>
    </PopupWithForm>
  );
}

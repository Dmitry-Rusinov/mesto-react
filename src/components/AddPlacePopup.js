import PopupWithForm from "./PopupWithForm";
import { useEffect, useState } from "react";

export default function AddPlacePopup({ isOpen, onClose, onAddCard }) {
  const [newPlace, setNewPlace] = useState("");
  const [pictureLink, setPictureLink] = useState("");

  function handleChangeNewPlace(e) {
    setNewPlace(e.target.value);
  }

  function handleChangePictureLink(e) {
    setPictureLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddCard({
      name: newPlace,
      link: pictureLink,
    });
  }

  useEffect(() => {
    setNewPlace("");
    setPictureLink("");
  }, [isOpen]);

  return (
    <PopupWithForm
      name="popup_addCard"
      title="Новое место"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText="Создать">
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
          value={newPlace}
          onChange={handleChangeNewPlace}
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
          value={pictureLink}
          onChange={handleChangePictureLink}
        />
        <span className="popup__input-error picture-link-error"></span>
      </fieldset>
    </PopupWithForm>
  );
}

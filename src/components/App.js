import React from "react";
import "../index.css";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import ImagePopup from "./ImagePopup";
import PopupWithForm from "./PopupWithForm";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpened] =
    React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpened] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpened] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpened(true);
  };

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpened(true);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpened(true);
  };

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpened(false);
    setIsEditProfilePopupOpened(false);
    setIsAddPlacePopupOpened(false);
    setSelectedCard({});
  };

  return (
    <div className="page">
      <div className="content">
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
        />
        <Footer />
      </div>
      <PopupWithForm
        name="popup_editProfile"
        title="Редактировать профиль"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}>
        <fieldset className="popup__content">
          <input
            className="popup__input popup__input_user_name"
            type="text"
            id="user-name"
            placeholder="Как вас зовут?"
            minLength="2"
            maxLength="40"
            name="name"
            required
          />
          <span className="popup__input-error user-name-error"></span>
          <input
            className="popup__input popup__input_user_job"
            type="text"
            id="description"
            placeholder="Дополнитерьная информация"
            minLength="2"
            maxLength="200"
            name="about"
            required
          />
          <span className="popup__input-error description-error"></span>
        </fieldset>
        <button type="submit" className="popup__submit" value="delete">
          Сохранить
        </button>
      </PopupWithForm>
      <PopupWithForm
        name="popup_addCard"
        title="Новое место"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}>
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
          />
          <span className="popup__input-error picture-link-error"></span>
        </fieldset>
        <button type="submit" className="popup__submit" value="delete">
          Создать
        </button>
      </PopupWithForm>
      <PopupWithForm
        name="popup_edit-avatar"
        title="Обновить аватар"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}>
        <fieldset className="popup__content">
          <input
            className="popup__input"
            id="avatar-link"
            type="url"
            placeholder="Ссылка на аватар пользователя"
            minLength="1"
            maxLength="400"
            name="avatarLink"
            required
          />
          <span className="popup__input-error avatar-link-error"></span>
        </fieldset>
        <button type="submit" className="popup__submit" value="delete">
          Сохранить
        </button>
      </PopupWithForm>
      <PopupWithForm
        name="popup_deleteCard"
        title="Вы уверены?"
        isOpen={""}
        onClose={closeAllPopups}>
        <button type="submit" className="popup__submit" value="delete">
          Да
        </button>
      </PopupWithForm>
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
  );
}

export default App;

import React, { useEffect } from "react";
import "../index.css";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import ImagePopup from "./ImagePopup";
import PopupWithForm from "./PopupWithForm";
import { api } from "../utils/Api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpened] =
    React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpened] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpened] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [currentUser, setCurrentUser] = React.useState("");
  const [cards, setCards] = React.useState([]);

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userData, cardsData]) => {
        setCurrentUser(userData);
        setCards(cardsData);
      })
      .catch((err) => console.log(`Ошибка: ${err}`));
  }, []);

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

  const handleCardDelete = (cardId) => {
    api
      .deleteCard(cardId)
      .then(() => {
        setCards((cards) => {
          return cards.filter((card) => card._id !== cardId);
        });
      })
      .catch((err) => console.log(`Ошибка: ${err}`));
  };

  const handleCardLike = (card) => {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
    });
  };

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpened(false);
    setIsEditProfilePopupOpened(false);
    setIsAddPlacePopupOpened(false);
    setSelectedCard({});
  };

  const handleUpdateUser = (userData) => {
    api
      .setUserInfo(userData)
      .then((data) => {
        setCurrentUser(data);
        closeAllPopups();
      })
      .catch((err) => console.log(`Ошибка: ${err}`));
  };

  const handleUpdateAvatar = (userAvatar) => {
    console.log(userAvatar);
    api
      .setUserAvatar(userAvatar)
      .then((data) => {
        console.log(data)
        setCurrentUser(data);
        closeAllPopups();
        
      })
      .catch((err) => console.log(`Ошибка: ${err}`));
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="content">
          <Header />
          <Main
            onEditAvatar={handleEditAvatarClick}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onCardClick={handleCardClick}
            onCardDelete={handleCardDelete}
            onCardLike={handleCardLike}
            cards={cards}
          />
          <Footer />
        </div>
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
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
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />
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
    </CurrentUserContext.Provider>
  );
}

export default App;

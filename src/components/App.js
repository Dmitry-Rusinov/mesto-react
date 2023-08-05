import React, { useEffect } from 'react';
import "../index.css";
import Header from './Header.js'
import Main from './Main.js'
import Footer from './Footer.js'
import ImagePopup from "./ImagePopup";
import PopupWithForm from "./PopupWithForm";




function App() {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpened] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpened] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpened] = React.useState(false);


  const handleEditAvatarClick = () => {
    //document.querySelector('.popup_edit-avatar').classList.add('popup_opened');
    setIsEditAvatarPopupOpened(true)
  }
  
  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpened(true)
    //document.querySelector('.popup_editProfile').classList.add('popup_opened');
  }
  
  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpened(true)
    //document.querySelector('.popup_addCard').classList.add('popup_opened');
  }

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpened(false)
    setIsEditProfilePopupOpened(false)
    setIsAddPlacePopupOpened(false)
  }

  useEffect(() => {
    console.log('render');
  })

  return (
    
      <body className ="page">
        <div  className ="content">
          
            <Header />
            <Main
              onEditAvatar={handleEditAvatarClick}
              onEditProfile={handleEditProfileClick}
              onAddPlace={handleAddPlaceClick}
            />
            <Footer />
            <PopupWithForm
              name="popup_editProfile"
              title="Редактировать профиль"
              isOpen={isEditProfilePopupOpen}
              onClose={closeAllPopups}
            >
              <fieldset className="popup__content">
                <input
                  className="popup__input popup__input_user_name"
                  type="text"
                  id="user-name"
                  placeholder="Как вас зовут?"
                  minlength="2"
                  maxlength="40"
                  name="name"
                  required
                />
                <span className="popup__input-error user-name-error"></span>
                <input
                  className="popup__input popup__input_user_job"
                  type="text"
                  id="description"
                  placeholder="Дополнитерьная информация"
                  minlength="2"
                  maxlength="200"
                  name="about"
                  required
                />
                <span className="popup__input-error description-error"></span>
              </fieldset>
              </PopupWithForm >
              <PopupWithForm
                name="popup_addCard"
                title="Новое место"
                isOpen={isAddPlacePopupOpen}
                onClose={closeAllPopups}
              >
              <fieldset className="popup__content">
                <input
                  className="popup__input"
                  id="card-description"
                  type="text"
                  placeholder="Название"
                  minlength="2"
                  maxlength="30"
                  name="newPlace"
                  required
                />
                <span className="popup__input-error card-description-error"></span>
                <input
                  class="popup__input"
                  id="picture-link"
                  type="url"
                  placeholder="Ссылка на картинку"
                  minlength="1"
                  maxlength="400"
                  name="pictureLink"
                  required
                />
                <span className="popup__input-error picture-link-error"></span>
              </fieldset>
              </PopupWithForm>
              <PopupWithForm
                name="popup_edit-avatar"
                title="Обновить аватар"
                isOpen={isEditAvatarPopupOpen}
                onClose={closeAllPopups}
              >
              <fieldset className="popup__content">
                <input
                  className="popup__input"
                  id="avatar-link"
                  type="url"
                  placeholder="Ссылка на аватар пользователя"
                  minlength="1"
                  maxlength="400"
                  name="avatarLink"
                  required
                />
                <span className="popup__input-error avatar-link-error"></span>
              </fieldset>
              </PopupWithForm>
              <PopupWithForm 
                name="popup_deleteCard"
                title="Вы уверены?"
                isOpen={''}
              />
          
        </div>
       

        <div class="popup popup_deleteCard" id="popupDeleteCard">
          <div class="popup__container">
            <button
              type="button"
              class="popup__closed"
              title="Кнопка закрытия формы"
            ></button>
            <h2 class="popup__title">Вы уверены?</h2>
            <form name="confirm" class="popup__form-confirm">
              <button type="submit" class="popup__submit" value="delete">
                Да
              </button>
            </form>
          </div>
        </div>


        <ImagePopup />
        
      </body>
    
  );
}

export default App;

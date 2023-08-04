
export default function Main({onEditAvatar, onEditProfile, onAddPlace}) {

  return (
    <main>
            <section class="profile">
              <button
                type="button"
                onClick={onEditAvatar}
                className="profile__edit-avatar"
                title="Кнопка редактирования аватара"
              ></button>
            
              <img
                src=""
                alt="Фотография пользователя"
                className="profile__avatar"
              />
              <div className="profile__info">
                <h1 className="profile__info-title">Жак Ив Кусто</h1>
                <button
                  type="button"
                  onClick={onEditProfile}
                  title="Кнопка редактирования профиля"
                  className="profile__edit-button"
                ></button>
                <p className="profile__subtitle">Исследователь океана</p>
              </div>
              <button
                type="button"
                onClick={onAddPlace}
                title="Кнопка добавления фото-карточки"
                className="profile__add-button"
              ></button>
            </section>
            <section className="elements">
              <ul className="elements__card"></ul>
            </section>
          </main>
  );
}


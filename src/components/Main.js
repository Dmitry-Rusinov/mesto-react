import { useEffect, useState } from "react";
import { api } from "../utils/Api";
import Card from "./Card";

export default function Main({
  onEditAvatar,
  onEditProfile,
  onAddPlace,
  onCardClick,
}) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userData, cardsData]) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        setCards(cardsData);
      })
      .catch((err) => console.log(`Ошибка: ${err}`));
  }, []);

  return (
    <main>
      <section className="profile">
        <button
          type="button"
          onClick={onEditAvatar}
          className="profile__edit-avatar"
          title="Кнопка редактирования аватара"></button>

        <img
          src={userAvatar}
          alt="Фотография пользователя"
          className="profile__avatar"
        />
        <div className="profile__info">
          <h1 className="profile__info-title">{userName}</h1>
          <button
            type="button"
            onClick={onEditProfile}
            title="Кнопка редактирования профиля"
            className="profile__edit-button"></button>
          <p className="profile__subtitle">{userDescription}</p>
        </div>
        <button
          type="button"
          onClick={onAddPlace}
          title="Кнопка добавления фото-карточки"
          className="profile__add-button"></button>
      </section>
      <section className="elements">
        <ul className="elements__card">
          {cards.map((data) => {
            return (
              <li key={data._id}>
                <Card card={data} onCardClick={onCardClick} />
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}

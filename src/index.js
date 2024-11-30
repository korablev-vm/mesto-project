import { initialCards } from "./scripts/cards.js";
import { createCard, onLikeCard, onDeleteCard } from "./scripts/card.js";
import { openPopup, closePopup, popupCloseByOverlay } from "./scripts/modal.js";
import "./pages/index.css";

export { openImagePopup };

const placesList = document.querySelector(".places__list"); //Место куда вставляются карточки
const profileEditButton = document.querySelector(".profile__edit-button"); //Кнопка редактирование профиля
const newCardAddButton = document.querySelector(".profile__add-button"); //Кнопка создание карточки

const popupImageForm = document.querySelector(".popup_type_image"); //Окно показа увеличенной картинки
const popupImageFormCloseButton = popupImageForm.querySelector(".popup__close"); //Кнопка закрытия окна с увеличенной картинкой

const popupImageTitle = popupImageForm.querySelector(".popup__caption"); //Место для описания в модальном окне
const popupImageLink = popupImageForm.querySelector(".popup__image"); //Место на ссылку в модальном окне

addAnimated(popupImageForm);
popupCloseByOverlay(popupImageForm);
popupImageFormCloseButton.addEventListener("click", function () {
  closePopup(popupImageForm);
}); //Закрытие окна по крестику

//Модалка редактирование профиля
const popupEditProfile = document.querySelector(".popup_type_edit");
const formsTypeEdit = document.forms["edit-profile"];
const popupProfileCloseButton = popupEditProfile.querySelector(".popup__close");
const popupUserNameInput = formsTypeEdit.name;
const popupUserDescriptionInput = formsTypeEdit.description;
const currentUserName = document.querySelector(".profile__title");
const currentUserDescription = document.querySelector(".profile__description");
addAnimated(popupEditProfile);
popupCloseByOverlay(popupEditProfile);
modalFormClickListener(
  formsTypeEdit,
  popupEditProfile,
  saveUserDataFromPopupToPage
);
popupProfileCloseButton.addEventListener("click", function () {
  closePopup(popupEditProfile);
});

const popupNewCard = document.querySelector(".popup_type_new-card"); //Модалка для редактирования профиля
const popupNewCardCloseButton = popupNewCard.querySelector(".popup__close"); //Кнопка закрытия окна создания новой карточки
const formsNewCard = document.forms["new-place"]; //Форма создания новой карточки
const popupNewPlaceInput = formsNewCard["place-name"]; //Название новой карточки
const popupNewLinkInput = formsNewCard.link; //Ссылка на изображение для карточки
addAnimated(popupNewCard); //Анимация на окно
popupCloseByOverlay(popupNewCard); //Закрытия окна по оверлею
modalFormClickListener(formsNewCard, popupNewCard, createNewUserCard); //Submit в окне новая карточка
popupNewCardCloseButton.addEventListener("click", function () {
  closePopup(popupNewCard);
});

initialCards.forEach((cardData) => {
  placesList.append(
    createCard(cardData, onDeleteCard, onLikeCard, openImagePopup)
  );
});

profileEditButton.addEventListener("click", function () {
  popupUserNameInput.value = currentUserName.textContent;
  popupUserDescriptionInput.value = currentUserDescription.textContent;
  openPopup(popupEditProfile);
});

newCardAddButton.addEventListener("click", function () {
  formNewCardReset();
  openPopup(popupNewCard);
});

function openImagePopup(cardData) {
  popupImageTitle.textContent = cardData.name;
  popupImageLink.src = cardData.link;
  popupImageLink.alt = cardData.name;
  openPopup(popupImageForm);
}

function modalFormClickListener(curentForm, curentModalWindow, actionFunction) {
  curentForm.addEventListener("submit", function (e) {
    e.preventDefault();
    actionFunction();
    closePopup(curentModalWindow);
  });
}

function saveUserDataFromPopupToPage() {
  currentUserName.textContent = popupUserNameInput.value;
  currentUserDescription.textContent = popupUserDescriptionInput.value;
  closePopup(popupEditProfile);
}

function formNewCardReset() {
  formsNewCard.reset();
}

function addAnimated(form) {
  form.classList.add("popup_is-animated");
}

function createNewUserCard() {
  const newCardObject = {
    name: popupNewPlaceInput.value,
    link: popupNewLinkInput.value,
  };
  placesList.prepend(
    createCard(newCardObject, onDeleteCard, onLikeCard, openImagePopup)
  );
}

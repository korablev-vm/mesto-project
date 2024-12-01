(()=>{"use strict";function e(e,t){var n=e.querySelector(".".concat(t.name,"-error"));t.classList.remove("popup__input_type_error"),n.textContent="",n.classList.remove("popup__error_visible")}function t(e,t){e.some((function(e){return!e.validity.valid}))?(t.setAttribute("disabled",!0),t.classList.add("popup__button_disabled")):(t.removeAttribute("disabled"),t.classList.remove("popup__button_disabled"))}function n(n){var o=Array.from(n.querySelectorAll(".popup__input")),r=n.querySelector(".popup__button");o.forEach((function(t){return e(n,t)})),t(o,r)}var o=document.querySelector("#card-template").content,r=document.querySelector(".places__list"),c=document.querySelector(".popup_type_edit"),i=document.querySelector(".popup_type_new-card"),u=document.querySelector(".profile__edit-button"),a=document.querySelector(".profile__add-button"),p=document.querySelectorAll(".popup__close"),s=document.querySelector(".popup_type_image"),d=s.querySelector(".popup__image"),l=s.querySelector(".popup__caption"),_=document.querySelector(".profile__title"),m=document.querySelector(".profile__description"),f=document.forms["edit-profile"],v=f.elements.name,y=f.elements.description,k=document.forms["new-place"],q=k.elements["place-name"],L=k.elements.link;function S(e){var t=o.cloneNode(!0),n=t.querySelector(".card__image"),r=t.querySelector(".card__title"),c=t.querySelector(".card__like-button");return n.src=e.link,n.alt=e.name,r.textContent=e.name,c.addEventListener("click",(function(){c.classList.toggle("card__like-button_is-active")})),function(e){e.querySelector(".card__delete-button").addEventListener("click",(function(e){var t;null===(t=e.target.closest(".places__item"))||void 0===t||t.remove()}))}(t),n.addEventListener("click",(function(){d.src=e.link,d.alt=e.name,l.textContent=e.name,b(s)})),t}function b(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",h)}function E(e){e.classList.remove("popup_is-opened"),document.addEventListener("keydown",h)}function h(e){if("Escape"===e.key){var t=document.querySelector(".popup_is-opened");t&&E(t)}}function g(e){e.target.classList.contains("popup")&&E(e.target)}[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}].forEach((function(e){var t=S(e);r.append(t)})),u.addEventListener("click",(function(){v.value=_.textContent,y.value=m.textContent,n(f),b(c)})),f.addEventListener("submit",(function(e){e.preventDefault(),_.textContent=v.value,m.textContent=y.value,E(c)})),a.addEventListener("click",(function(){k.reset(),n(k),b(i)})),k.addEventListener("submit",(function(e){e.preventDefault();var t=S({name:q.value,link:L.value});r.prepend(t),E(i)})),p.forEach((function(e){var t=e.closest(".popup");e.addEventListener("click",(function(){return E(t)}))})),p.forEach((function(e){var t=e.closest(".popup");e.addEventListener("click",(function(){return E(t)}))})),document.querySelectorAll(".popup").forEach((function(e){e.addEventListener("mousedown",g)})),Array.from(document.querySelectorAll(".popup__form")).forEach((function(o){o.addEventListener("submit",(function(e){e.preventDefault()})),function(n){var o=Array.from(n.querySelectorAll(".popup__input")),r=n.querySelector(".popup__button");t(o,r),o.forEach((function(c){c.addEventListener("input",(function(){!function(t,n){n.validity.valid?e(t,n):function(e,t,n){var o=e.querySelector(".".concat(t.name,"-error"));t.classList.add("popup__input_type_error"),o.textContent=n,o.classList.add("popup__error_visible")}(t,n,n.validationMessage)}(n,c),t(o,r)}))}))}(o),o.addEventListener("reset",(function(){n(o)}))}))})();
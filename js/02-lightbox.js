import { galleryItems } from './gallery-items.js';
console.log(galleryItems);
// ======================================================================================================

// 1 Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.

const galeryItemMarkup = document.querySelector('.gallery');
galeryItemMarkup.insertAdjacentHTML('beforeend', createdListItems(galleryItems)); 

function createdListItems(galleryList) { 
    return galleryList.map(({ preview, original, description }) =>
        `
    <li class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
    </li>
    `).join('');
};

    // 2 Підключення скрипту і стилів бібліотеки, використовуючи CDN сервіс cdnjs. 
    // ==============================================================
    // 3 Ініціалізація бібліотеки після створення і додання елементів галереї у ul.gallery.
    // 4 Додати відображення підписів до зображень з атрибута alt. 
    // Нехай підпис буде знизу і з'являється через 250 мілісекунд після відкриття зображення.
    new SimpleLightbox('.gallery a', {
        // sourceAttr: 'href',
        captionSelector: 'img',
        // captionType: 'alt',
        captionsData: 'alt',
        // captionPosition: 'bottom',
        captionDelay: 250,
        // animationSpeed: 250,
        enableKeyboard: true,
    });

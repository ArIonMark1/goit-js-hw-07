import { galleryItems } from './gallery-items.js';
// import * as basicLightbox from 'basiclightbox';
console.log(galleryItems);

// =======================================================================================================
// 1 Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.

const listImagesMarkup = document.querySelector('.gallery');
listImagesMarkup.innerHTML = createListItemsMarkup(galleryItems);

listImagesMarkup.addEventListener('click', onImageClick);

// генеруємо розмітку з даними нашого об'єкту
function createListItemsMarkup(items) { 
    return items.map(
        ({ preview, original, description }) =>
            `
        <li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
        </li>
    `).join('');
};
// ======================================================================

function onImageClick(event) { 

    if (!event.target.classList.contains('gallery__image')) {
        return;
    }
    event.preventDefault();  //!!!!! canceled action 

    // Відкриття модального вікна по кліку на елементі галереї
    createModalWindow(event.target);
}


function createModalWindow(target) { 
    
    // створення модального вікна та його розмітки з даними
    const instance = basicLightbox.create(
        `<div class="modal-image">
            <img src="${target.dataset.source}" width="800" height="600" alt="${target.alt}">
        </div>`,
        {   
            // умовний функціонал який буде виконаний до відкриття модального вікна
            onShow: (instance) => {

                instance.element().onclick = instance.close;

                window.addEventListener('keydown', (evt) => {
                    if (evt.key === 'Escape') { 
                        instance.close();
                    }
                })
            },
            // умовний функціонал який буде виконаний під час закриття модального вікна
            onClose: (instance) => { 
                console.log('Modal closed')
            },
        }).show(); // рендерить модальне вікто у глобальний об'єкт DOM

}



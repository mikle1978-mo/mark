import { galleryItems } from "../../lib/galleryItems.js";

const container = document.getElementById("gallery-items");

function renderGalleryItems() {
    if (!container) {
        console.error("Элемент #gallery-items не найден!");
        return;
    }

    container.innerHTML = galleryItems
        .map(
            (item) => `
        <div class="gallery_item">           
            <div class="main-image-container">
                <img src="${item.images[0]}" alt="${
                item.title
            }" class="main-image" id="main-image-${item.id}">
                <button class="slider-button left" data-id="${item.id}">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.58912 6.53582L8.61788 1.36364L7.29206 0L0 7.50006L7.29206 15L8.61788 13.6364L3.58912 8.4643H15V6.53582H3.58912Z" fill="currentColor"/>
                    </svg>
                </button>
                <button class="slider-button right" data-id="${item.id}">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.4109 6.53582L6.38212 1.36364L7.70794 0L15 7.50006L7.70794 15L6.38212 13.6364L11.4109 8.4643H0V6.53582H11.4109Z" fill="currentColor"/>
                    </svg>
                </button>                
                <p class="gallery_item-tag">${item.tag}</p>
                <p class="gallery_item-year">${item.year}</p>
                <p class="gallery_item-title">${item.title}</p>
                <p class="gallery_item-width">${item.width}</p>
                <p class="gallery_item-height">${item.height}</p>
            </div>

        
            <div class="thumbnail_slider">
                <div class="thumbnail_container">
                    ${item.images
                        .map(
                            (image, index) => `
                             <div class="thumbnail_wrapper" data-id="${
                                 item.id
                             }" data-image="${image}">
                        <img src="${image}" alt="Thumbnail ${
                                index + 1
                            }" class="thumbnail"  >
                             </div>
                    `
                        )
                        .join("")}
                </div>               
            </div>
        </div>
    `
        )
        .join("");

    // Инициализируем обработчики для кнопок
    addEventListeners();

    // const thumbnails = document.querySelectorAll(".thumbnail");
    // if (thumbnails.length > 1) {
    //     const secondThumbnail = thumbnails[1]; // Выбираем вторую миниатюру
    //     setActiveThumbnail(secondThumbnail);
    //     centerThumbnail(secondThumbnail); // Центрируем вторую миниатюру
    // }
}

function addEventListeners() {
    const wrappers = document.querySelectorAll(".thumbnail_wrapper");
    const sliderButtons = document.querySelectorAll(".slider-button");

    wrappers.forEach((wrapper) => {
        wrapper.addEventListener("click", (e) => {
            const id = e.target.dataset.id;
            const newImage = e.target.dataset.image;
            const mainImage = document.getElementById(`main-image-${id}`);
            if (mainImage) {
                mainImage.src = newImage;
            }
            setActiveThumbnail(wrapper);
        });
    });

    sliderButtons.forEach((button) => {
        button.addEventListener("click", (e) => {
            const direction = button.classList.contains("left") ? -1 : 1;
            const id = button
                .closest(".gallery_item")
                .querySelector(".thumbnail_wrapper").dataset.id;
            scrollThumbnails(id, direction);
        });
    });
}

function setActiveThumbnail(thumbnail) {
    document
        .querySelectorAll(".thumbnail_wrapper")
        .forEach((thumb) => thumb.classList.remove("active"));
    thumbnail.classList.add("active");
    centerThumbnail(thumbnail);
}

function scrollThumbnails(id, direction) {
    const wrappers = document.querySelectorAll(
        `.thumbnail_wrapper[data-id="${id}"]`
    );
    const activeIndex = Array.from(wrappers).findIndex((wrapper) =>
        wrapper.classList.contains("active")
    );
    let newIndex = activeIndex + direction;

    if (newIndex < 0) newIndex = wrappers.length - 1;
    if (newIndex >= wrappers.length) newIndex = 0;

    const newActiveThumbnail = wrappers[newIndex];
    setActiveThumbnail(newActiveThumbnail);

    centerThumbnail(newActiveThumbnail);

    const mainImage = document.getElementById(`main-image-${id}`);
    if (mainImage) {
        mainImage.src = newActiveThumbnail.dataset.image;
    }
}

function centerThumbnail(wrapper) {
    const thumbnailContainer = wrapper.closest(".thumbnail_container");
    const thumbnailSlider = wrapper.closest(".thumbnail_slider");
    const wrappers = Array.from(
        thumbnailContainer.querySelectorAll(".thumbnail_wrapper")
    );

    if (!thumbnailContainer || !thumbnailSlider) return;

    const thumbnailWidth = wrapper.offsetWidth;
    const sliderWidth = thumbnailSlider.offsetWidth;
    const thumbnailIndex = wrappers.indexOf(wrapper);

    // Вычисляем смещение для центрирования активной миниатюры
    const offset =
        sliderWidth / 2 -
        thumbnailWidth / 2 -
        thumbnailIndex * (thumbnailWidth + 10); // 10 — это gap между миниатюрами

    // Применяем смещение
    thumbnailContainer.style.transform = `translateX(${offset}px)`;
}

renderGalleryItems();

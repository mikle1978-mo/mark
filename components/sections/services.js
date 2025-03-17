import { servicesItems } from "../../lib/servicesItems.js";

const container = document.getElementById("services-items");

function renderservicesItems() {
    if (!container) {
        console.error("Элемент #services-items не найден!");
        return;
    }

    container.innerHTML = servicesItems
        .map(
            (item) => `
        <div class="services_item">
            <img src="${item.img}" alt="${item.title}" class="services_img">
            <p class="services_item-title">${item.title}</p>
            <p class="services_item-price">${item.price}</p>
            <a href="${item.link}" class="services_item-button">Переёти на страницу</a>            
        </div>
    `
        )
        .join("");
}

renderservicesItems();

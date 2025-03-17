import { advantagesItems } from "../../lib/advantagesItems.js";

const container = document.getElementById("advantages-items");

function renderadvantagesItems() {
    if (!container) {
        console.error("Элемент #advantages-items не найден!");
        return;
    }

    container.innerHTML = advantagesItems
        .map(
            (item) => `
        <div class="advantages_item">
            <img src="${item.img}" alt="${item.title}" class="advantages_img">
            <h3 class="advantages_Item-title">${item.title}</h3>
            <p class="advantages_Item-text">${item.text}</p>
        </div>
    `
        )
        .join("");
}

renderadvantagesItems();

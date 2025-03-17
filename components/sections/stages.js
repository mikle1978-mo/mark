import { stagesItems } from "../../lib/stagesItems.js";

const container = document.getElementById("stages-items");

function renderstagesItems() {
    if (!container) {
        console.error("Элемент #stages-items не найден!");
        return;
    }

    container.innerHTML = stagesItems
        .map(
            (item) => `
        <div class="stages_item">
        <p class="stages_item-title">${item.title}</p>
        <p class="stages_item-text">${item.text}</p>
        <div class="stages_images">
            <div class="stages_number">${item.id}</div>
            <div class="stages_icon-wrapper">
                <img src="${item.img}" alt="${item.title}" class="stages_img">
            </div>            
        </div>
        </div>
    `
        )
        .join("");
}

renderstagesItems();

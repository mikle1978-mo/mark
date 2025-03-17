import { calculatorItems } from "../../lib/calculatorItems.js";

const container = document.getElementById("calculator-items");

function renderCalculatorItems() {
    if (!container) {
        console.error("Элемент #calculator-items не найден!");
        return;
    }

    container.innerHTML = calculatorItems
        .map(
            (item) => `
        <div class="calculator_item">
            <img src="${item.img}" alt="${item.title}" class="calculator_img">
            <p class="calculator_text">${item.title}</p>
        </div>
    `
        )
        .join("");
}

renderCalculatorItems();

import { faqItems } from "../../lib/faqItems.js";

const container = document.getElementById("faq-items");

function renderfaqItems() {
    if (!container) {
        console.error("Элемент #faq-items не найден!");
        return;
    }

    container.innerHTML = faqItems
        .map(
            (item) => `
             <details class="faq_item">
                <summary class="faq_question">
                ${item.title}
                <div class="faq_button">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.86575 12V6.99736H0V4.97098H4.86575V0H7.06849V4.97098H12V6.99736H7.06849V12H4.86575Z" fill="currentColor"/>
                    </svg>
                </div>
                </summary>
                <div class="faq_answer">
                ${item?.text}
                </div>
            </details>       
    `
        )
        .join("");
}

renderfaqItems();

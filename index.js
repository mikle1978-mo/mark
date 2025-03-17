async function loadComponent(id, file, scriptFile = null) {
    try {
        const response = await fetch(file);
        if (!response.ok)
            throw new Error(`Ошибка загрузки ${file}: ${response.status}`);

        document.getElementById(id).innerHTML = await response.text();

        if (scriptFile) {
            const script = document.createElement("script");
            script.type = "module";
            script.src = scriptFile;
            document.body.appendChild(script);
        }
    } catch (error) {
        console.error(error);
    }
}

document.addEventListener("DOMContentLoaded", async () => {
    await loadComponent("header", "./components/layout/header/header.html");
    await loadComponent("footer", "./components/layout/footer/footer.html");

    await loadComponent(
        "introduction",
        "./components/sections/introduction.html"
    );
    await loadComponent("offer", "./components/sections/offer.html");
    await loadComponent("promotions", "./components/sections/promotions.html");

    await loadComponent(
        "calculator",
        "./components/sections/calculator.html",
        "./components/sections/calculator.js"
    );

    await loadComponent(
        "services",
        "./components/sections/services.html",
        "/components/sections/services.js"
    );
    await loadComponent(
        "advantages",
        "./components/sections/advantages.html",
        "/components/sections/advantages.js"
    );
    await loadComponent(
        "stages",
        "./components/sections/stages.html",
        "/components/sections/stages.js"
    );
    await loadComponent(
        "reviews",
        "./components/sections/reviews.html",
        "/components/sections/reviews.js"
    );
    await loadComponent(
        "contact_form",
        "./components/UI/contact_form.html",
        "/components/UI/contact_form.js"
    );
    await loadComponent(
        "faq",
        "./components/sections/faq.html",
        "/components/sections/faq.js"
    );
    await loadComponent(
        "gallery",
        "./components/sections/gallery.html",
        "/components/sections/gallery.js"
    );
});

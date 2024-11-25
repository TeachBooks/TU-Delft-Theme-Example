document.addEventListener("DOMContentLoaded", () => {
    const toggleButtonId = "toggle-css";
    const rootComponentClass = "custom-style-enabled";

    const headerEnd = document.querySelector(".article-header-buttons");
    if (headerEnd) {
        const button = document.createElement("button");
        button.id = toggleButtonId;
        button.className = "btn btn-sm nav-link pst-navbar-icon pst-js-only";
        button.title = "Toggle TU Delft theme";
        button.innerHTML = '<img src="../_static/TUDelft_logo_rgb.png" id="tudelft-logo"/>';
        headerEnd.appendChild(button);
    }

    if (localStorage.getItem("customStyle") === "enabled") {
        enableCustomStyle();
    }

    document.getElementById(toggleButtonId)?.addEventListener("click", () => {
        if (document.body.classList.contains(rootComponentClass)) {
            disableCustomStyle();
        } else {
            enableCustomStyle();
        }
    });

    function enableCustomStyle() {
        document.body.classList.add(rootComponentClass);
        localStorage.setItem("customStyle", "enabled");
    }

    function disableCustomStyle() {
        document.body.classList.remove(rootComponentClass);
        localStorage.setItem("customStyle", "disabled");
    }
});
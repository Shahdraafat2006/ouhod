document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.getElementById("menuToggle");
    const navbar = document.querySelector(".navbar");

    if (menuToggle && navbar) {

        menuToggle.addEventListener("click", function () {
            navbar.classList.toggle("menu-open");

            const isOpen = navbar.classList.contains("menu-open");

            menuToggle.textContent = isOpen ? "✕" : "☰";
            menuToggle.setAttribute(
                "aria-expanded",
                String(isOpen)
            );
        });

    }

    // إغلاق قائمة الهاتف بعد الضغط على أحد الروابط
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {
            if (navbar) {
                navbar.classList.remove("menu-open");
            }

            if (menuToggle) {
                menuToggle.textContent = "☰";
                menuToggle.setAttribute("aria-expanded", "false");
            }
        });

    });

});






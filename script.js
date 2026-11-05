"use strict";

// Mobile navigation
const menuToggle = document.getElementById("menu-toggle");
const navigation = document.getElementById("navigation");

if (menuToggle && navigation) {
    const setOpen = isOpen => {
        navigation.classList.toggle("open", isOpen);
        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.textContent = isOpen ? "✕" : "☰";
    };

    menuToggle.addEventListener("click", () => {
        setOpen(!navigation.classList.contains("open"));
    });

    navigation.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => setOpen(false));
    });

    document.addEventListener("keydown", event => {
        if (event.key === "Escape") setOpen(false);
    });
}

// Cursor-following glow on project cards (feeds --mx / --my in styles.css)
document.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("pointermove", event => {
        const box = card.getBoundingClientRect();
        card.style.setProperty("--mx", `${event.clientX - box.left}px`);
        card.style.setProperty("--my", `${event.clientY - box.top}px`);
    });
});

// Copyright year
const yearElement = document.getElementById("year");
if (yearElement) yearElement.textContent = new Date().getFullYear();

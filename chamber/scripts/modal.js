// Modal buttons
document.querySelectorAll("[data-modal]").forEach(button => {
    button.addEventListener("click", () => {
        const modalId = button.dataset.modal;
        document.getElementById(modalId).showModal();
    });
});

document.querySelectorAll(".close-modal").forEach(button => {
    button.addEventListener("click", () => {
        button.closest("dialog").close();
    });
});
//navigation bars
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
    console.log("Menu clicked!");
	navigation.classList.toggle("open");
	hamButton.classList.toggle("open");
});
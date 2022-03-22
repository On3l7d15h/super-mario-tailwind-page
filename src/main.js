// creating destructuring with objects:

const { menuButton, menu  } = {
	menuButton: document.querySelector("#mobile-menu"),
	menu: document.querySelector(".mobile-links")
}

//making an event

menuButton.addEventListener("click", () => {
	menu.classList.toggle("hidden");
})

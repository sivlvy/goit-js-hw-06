const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const list = document.querySelector("#ingredients");

const arrayElements = ingredients.map((item) => {
	const createElement = document.createElement("li");
	createElement.textContent = item;
	createElement.classList.add("item")
	return createElement;
});
list.append(...arrayElements)
function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}

const btn = document.querySelector(".change-color");
const span = document.querySelector(".color");
const body = document.body;

btn.addEventListener("click", handleClick);

function handleClick() {
	const randomColor = getRandomHexColor();
	body.style.backgroundColor = randomColor;
	span.textContent = randomColor.value;
}

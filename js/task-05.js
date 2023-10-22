const input = document.querySelector("#name-input");
const userName = document.querySelector("#name-output");

input.addEventListener("input", handlePut);

function handlePut(event) {
	const inputText = event.currentTarget.value;
	if (inputText.trim() === "") {
		userName.textContent = "Anonymous";
	} else {
		userName.textContent = inputText;
	}
}

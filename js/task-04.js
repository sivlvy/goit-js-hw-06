const btnAdd = document.querySelector('button[data-action="decrement"]');
const btnMinus = document.querySelector('button[data-action="increment"]');
const counterValueElement = document.querySelector("#value");

btnMinus.addEventListener("click", handleMinus);
btnAdd.addEventListener("click", handleAdd);

let counterValue = 0;

function handleMinus() {
	counterValue += 1;
	counterValueElement.textContent = counterValue;
}
function handleAdd() {
	counterValue -= 1;
	counterValueElement.textContent = counterValue;
}

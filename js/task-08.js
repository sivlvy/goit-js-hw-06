const form = document.querySelector(".login-form");

form.addEventListener("submit", handleClick);

function handleClick(event) {
	event.preventDefault();
	const loginInput = form.elements.email;
	const passInput = form.elements.password;

	if (!loginInput.value || !passInput.value) {
		alert("Будь-ласка, заповніть поля");
	} else {
		const formData = {
			email: loginInput.value,
			password: passInput.value,
		};
		form.reset();
		console.log(formData);
	}
}

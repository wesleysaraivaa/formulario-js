const nameInput = document.querySelector("#name");
const emnaiInput = document.querySelector("#email");
const submitButton = document.querySelector("#submit-button");

const errorMessage = document.querySelector(".msg");

submitButton.addEventListener('click', (event) => {
    event.preventDefault();

    const nameValue = nameInput.value;
    const emailValue = emnaiInput.value;

    if (nameValue === "" || emailValue === "") {
        errorMessage.textContent = "Por favor preencha todos itens!";
        errorMessage.classList = 'error';
        return;
    }
})
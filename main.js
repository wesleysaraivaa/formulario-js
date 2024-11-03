const nameInput = document.querySelector("#name");
const emnaiInput = document.querySelector("#email");
const submitButton = document.querySelector("#submit-button");

const errorMessage = document.querySelector(".msg");

const items = document.querySelector(".items");

submitButton.addEventListener('click', (event) => {
    event.preventDefault();

    const nameValue = nameInput.value;
    const emailValue = emnaiInput.value;

    if (nameValue === "" || emailValue === "") {
        errorMessage.textContent = "Por favor preencha todos itens!";
        errorMessage.classList = 'error';

        setTimeout(() => {
            errorMessage.textContent = "";
            errorMessage.classList = "";
        }, 3000);
        return;
    }

    const li = document.createElement("li");
    li.classList = "item";
    li.innerHTML = `Nome: ${nameValue} <br/> Email: ${emailValue}`;
    items.appendChild(li);

    nameInput.value = "";
    emnaiInput.value = "";
})
const input = document.querySelector(".login__input");
const form = document.querySelector(".login-form");
const button = document.querySelector(".login__button");


// função para acionar o botão jogar
const validateInput = ({target}) => {

    if (target.value.length > 2) {
        button.removeAttribute('disabled');
        return;
    }

    button.setAttribute("disabled", "");
};

// função para guardadr o nome
const handleSubmit = (e) => {

    e.preventDefault();
    // salva a chave player no localstorage.
    localStorage.setItem("player", input.value);

    // direciona para a nova pagina do game.
    window.location = "pages/game.html";
};

input.addEventListener("input", validateInput);
form.addEventListener("submit", handleSubmit);
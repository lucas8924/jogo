const spanPlayer = document.querySelector(".player");
const points = document.querySelector(".points")
const timer = document.querySelector(".timer");
const grid = document.querySelector(".grid")

let currentTime = 0;
let pontos = 0;

window.onload = () => {

    spanPlayer.innerHTML = localStorage.getItem("player");

    startTimer();
    loadGame();
};

const startTimer = () => {

    this.loop = setInterval(() => {
        points.innerHTML = pontos;
        currentTime++;
        timer.innerHTML = currentTime;

    }, 1000);
};


// array dos personagens da cartas

const characters = [
    "17",
    "18",
    "carta",
    "Gogeta",
    "maga",
    "megacavaleiro",
    "Umaru",
    "vegata",
    "Vegito",
    "iris"
]

// dobrando o tamanho do array
const duplicateChacarcters = [...characters, ...characters];

// embralhar as cartas
const shuffledArray = duplicateChacarcters.sort(() => Math.random() - 0.5)


// funçao para criar os elementos

const createElement = (tag, className) => {

    const element = document.createElement(tag);

    element.className = className;
    return element;
}

// CRIAR CARTAS
const createCards = (character) => {
    const card = createElement("div", "card");

    const front = createElement("div", "face front");

    const back = createElement("div", "face back");

    front.style.backgroundImage = `url(../img/${character}.png)`

    card.appendChild(front)
    card.appendChild(back)

    card.addEventListener("click", revealCard)

    card.setAttribute("data-character", character)

    return card;

}

// funçao iniciar o game

const loadGame = () => {

    shuffledArray.forEach((character) => {
        const card = createCards(character)
        grid.appendChild(card)

    })
}

let firstCard = ""
let secondCard = ""

// função de revelar as cartas
const revealCard = ({ target }) => {

    console.log(target.parentNode)

    if (target.parentNode.className.includes("reveal-card")) {
        return;
    }

    if (firstCard === "") {
        target.parentNode.classList.add("reveal-card")
        firstCard = target.parentNode
    } else if (secondCard === "") {
        target.parentNode.classList.add("reveal-card")
        secondCard = target.parentNode
    }

    checkCards()

}

// function to check the cards



const checkCards = () => {

    const firstCharacter = firstCard.getAttribute("data-character")

    const secondCharacter = secondCard.getAttribute("data-character")

    if (firstCharacter === secondCharacter) {
        // when was right
        pontos += 10;

        firstCard.firstChild.classList.add("disabled-card")

        secondCard.firstChild.classList.add("disabled-card")

        firstCard = "";
        secondCard = "";



        checkEndGame()
    } else {
        // when was wrong
        pontos -= 2;
        setTimeout(() => {


            firstCard.classList.remove("reveal-card")
            secondCard.classList.remove("reveal-card")

            firstCard = ""
            secondCard = ""
        }, 500);

    }
}

// function to check the end game

const checkEndGame = () => {


    const disabledCards = document.querySelectorAll(".disabled-card")

    if (disabledCards.length === 14) {
        localStorage.setItem("score", pontos)
        localStorage.setItem("recordTime", timer)

        clearInterval(this.loop)

        setTimeout(() => {

            alert(`congrats,you finished game ${localStorage.player}.
                Time total: ${timer.innerHTML}seconds. `)

                if (dialog) {
                    window.location.reload();
                } else {
                    window.location.href="../index.html"
                }
        }, 500);

const dialog = confirm("gostaria de jogar novamente?")


    }
}
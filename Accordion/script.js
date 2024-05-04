const dataItems = [
    {
        id: 1,
        question: "What is your name?",
        answer: "My name is John"
    },
    {
        id: 2,
        question: "What is your name?",
        answer: "My name is John"
    },
    {
        id: 3,
        question: "What is your name?",
        answer: "My name is John"
    },
    {
        id: 4,
        question: "What is your name?",
        answer: "My name is John"
    },
]

const getAccordion = document.querySelector('.accordion');

function createAccordion() {
    getAccordion.innerHTML = map(dataItems => `
    <div class='accordionItem'>
    <div class='accordion-question'>
    <h3>${dataItems.question}</h3>
    <i class='fa-solid fa-arrow '></i>
    </div>
    <div class='accordion-content'>
    <p>${dataItems.answer}</p>
    </div>
    </div>
    `)
}

createAccordion();
// Sélection des éléments du DOM
const leftArrow = document.querySelector(".arrow_left");
const rightArrow = document.querySelector(".arrow_right");
const bulletPointContainer = document.querySelector(".dots");

// Définition des slides
const slides = [
    {
        id: 0,
        image: "slide1.jpg",
        tagLine: "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        id: 1,
        image: "slide2.jpg",
        tagLine: "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        id: 2,
        image: "slide3.jpg",
        tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        id: 3,
        image: "slide4.png",
        tagLine: "Autocollants <span>avec découpe laser sur mesure</span>"
    }
];

// Comptage des slides
const totalSlides = slides.length;

// Ajout des événements sur les flèches
leftArrow.addEventListener("click", () => {
    changeSlide(-1);
});

rightArrow.addEventListener("click", () => {
    changeSlide(1);
});

// Création des bullet points
for (let index = 0; index < totalSlides; index++) {
    const bulletPoint = document.createElement("div");
    bulletPointContainer.appendChild(bulletPoint);
    bulletPoint.classList.add("dot");

    // Le premier bullet est actif au chargement de la page
    if (index === 0) {
        bulletPoint.classList.add("dot_selected");
    }
}

let currentSlide = 0; // Variable pour garder la trace du slide actuel

// Fonction pour changer de slide
function changeSlide(direction) {
    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }

    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }
//appelle des fonctions qui gère le changement de src , tagline et de bullet point
    updateSlide(currentSlide);
    updateText(currentSlide);
    updateActiveBulletPoint(currentSlide);
}
//fait varier le src du slide
function updateSlide(slideIndex) {
    const slideElement = document.querySelector(".banner-img");
    slideElement.src = "./assets/images/slideshow/" + slides[slideIndex].image;
}

function updateText(slideIndex) {
    const textSlide = document.querySelector("p");
    textSlide.innerHTML = slides[slideIndex].tagLine;
}

function updateActiveBulletPoint(slideIndex) {
    const activeBulletPoint = document.querySelector(".dot_selected");
    if (activeBulletPoint) {
        activeBulletPoint.classList.remove("dot_selected");
    }
    bulletPointContainer.children[slideIndex].classList.add("dot_selected");
}

console.log("Mon fichier est chargé");

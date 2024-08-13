const leftarrow= document.querySelector("arrow_left")
const righArrow =document.querySelector("arrow_right")
const bulletpointcontainer =document.queryselector(".dots")
const slides = [
	{
		id : 0,
		image :"slide1.jpg",
		tagLine:"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		id: 1,
		image :"slide2.jpg",
		tagLine :"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		id : 2,
		image :"slide3.jpg",
		tagLine :"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		id :3,
		image:"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

//comptage des slides

 const totalslide = slides.length

 //eventlister sur fleches

 leftarrow.addEventListener("click",(e)=>{
	changeSlide(-1)
 })

 righArrow.addEventListener("click",(e)=>{
	changeSlide(1)
 })
 
 //bullet

 for (let index = 0; index < totalslide; index++){
	const bulletPoint =document.createElement("div")
	/*apres avoir creer un element on le rattache a la div*/
	bulletpointcontainer.appendChild(bulletPoint)
	//inserer la class dot a chaque div crée
	bulletPoint.classList.add("dot")
	//premier bullet soit actif au chargement de la page
	if (index===0){
		bulletPoint.classList.add("dot_selected")
	}
 } 

 let slideEncours = 0

 //fonction du slider

function changeSlide(sens){
	slideEncours = sens + slideEncours

	if (slideEncours < 0){
		slideEncours = totalslide -1
	}

	if (slideEncours >= totalslide){
		slideEncours = 0
	}

	slides(slideEncours)
	changetexte(slideEncours)
	bulletpointactif(slideEncours)
}

function slide(slideEncours){
	let slide =document.querySelector(".banner-img")
	slide.src="./assets/images/slideshow/"+ slides[slideEncours].image
}

function changetexte(slideEncours){
	let textSlide=document.querySelector("p")
	textSlide.innerHTML = slides[slideEncours].tagLine
}

function bulletpointactif(slideEncours){
	let activebulletpoint =bulletpointcontainer.children[slideEncours]
	let inactifbulletPoint = document.querySelector("dot_selected")

	activebulletpoint.classList.add("dot_selected")
	inactifbulletPoint.classList.add("dot_selected")
}
import { gsap } from "gsap";
import './style.css';

function boxes(){
	const boxOrange = document.createElement('div');
	const boxGrey = document.createElement('div');
	const boxGreen = document.createElement('div');

	boxOrange.classList.add('box');
	boxOrange.classList.add('orange');
	boxGrey.classList.add('box');
	boxGrey.classList.add('grey');
	boxGreen.classList.add('box');
	boxGreen.classList.add('green');

	document.body.appendChild(boxOrange);
	document.body.appendChild(boxGrey);
	document.body.appendChild(boxGreen);
}

function buttons(tweenBoxes, tweenGrey, tweenGreen){
	const container = document.createElement('div');
	const restart = document.createElement('button');
	const pause = document.createElement('button');
	const resume = document.createElement('button');

	container.id = 'button-container';
	restart.classList.add('button');
	restart.innerText = "RESTART";
	pause.classList.add('button');
	pause.innerText = "PAUSE";
	resume.classList.add('button');
	resume.innerText = "RESUME";

	restart.addEventListener("click", () => {
		tweenBoxes.restart();
		tweenGrey.restart();
		tweenGreen.restart();
	});

	pause.addEventListener("click", () => {
		tweenBoxes.pause();
		tweenGrey.pause();
		tweenGreen.pause();
	});

	resume.addEventListener("click", () => {
		tweenBoxes.resume();
		tweenGrey.resume();
		tweenGreen.resume();
	});

	container.appendChild(restart);
	container.appendChild(pause);
	container.appendChild(resume);
	document.body.appendChild(container);
}

function tweenBoxesCallback(){ console.log("Boxes moved out"); }
function tweenGreyCallback(){ console.log("Grey box is now smaller"); }
function tweenGreenCallback(){ console.log("Green box is now smaller"); }

boxes();
gsap.from(".grey", {duration: 1, x: 600});
let tweenBoxes = gsap.to(".box", {duration: 2, x: 300, rotation: 360, ease: "back", onComplete: tweenBoxesCallback});
let tweenGrey = gsap.to(".grey", {duration: 3, scale: 0.75, onComplete: tweenGreyCallback});
let tweenGreen = gsap.to(".green", {duration: 3, scale: 0.6, onComplete: tweenGreenCallback});
buttons(tweenBoxes, tweenGrey, tweenGreen);

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

boxes();
gsap.from(".green", {duration: 1, x: 600});
gsap.to(".box", {duration: 2, x: 300});
gsap.to(".green", {duration: 3, rotation: 360, scale: 0.5});

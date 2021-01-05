import { gsap } from "gsap";
import './style.css';

function boxes(){
	const element = document.createElement('div');
	element.classList.add('box');
	element.classList.add('green');
	return element;
}

document.body.appendChild(boxes());

gsap.to(".box", {duration: 2, x: 300});
gsap.to(".green", {duration: 3, rotation: 360, scale: 0.5});

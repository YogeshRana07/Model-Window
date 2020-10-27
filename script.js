'use strict';

//DOM Elements......
let showModels = document.querySelectorAll('.show-modal');
let model = document.querySelector('.modal');
let close = document.querySelector('.close-modal');
let overylay = document.querySelector('.overlay');
//...............

//Function used for open model box.....
const open = function(){
	  model.classList.remove('hidden');
	  overylay.classList.remove('hidden');
}

//Function used for close model box.....
const Close = function(){
	  model.classList.add('hidden');
	  overylay.classList.add('hidden');
}


//Event Listener for active model box.........
for(let i = 0; i<showModels.length; i++)
{
	showModels[i].addEventListener('click',open);
}
//..............................

//Event Listner for close model box.....
close.addEventListener('click',Close);
//............................


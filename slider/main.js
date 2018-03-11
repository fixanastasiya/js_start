var prev = document.querySelector('.prev');
var next = document.querySelector('.next'); 

var images = document.querySelectorAll('#gallery .photos img');
var i = 0;

prev.onclick = function(){
	images[i].className = '';
	i--;

	if(i < 0){
		i = images.length - 1;
	} 

	images[i].className = 'active';
}

next.onclick = function(){
	images[i].className = '';
	i++;

	if(i >= images.length){
		i = 0;
	}

	images[i].className = 'active';
}
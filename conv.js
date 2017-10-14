var go1 = document.getElementById('go1');
var txt1 = document.getElementById('txt1');
var txt2 = document.getElementById('txt2');
var swi = document.getElementById('swi');
var lab1 = document.getElementById('lab1');
var lab2 = document.getElementById('lab2');

swi.addEventListener("click", swap,false);
txt1.addEventListener('input',converter,false);
txt1.addEventListener('focus',hilight,false);

function swap(){
	var strA = lab1.firstChild.nodeValue;
	lab1.firstChild.nodeValue = lab2.firstChild.nodeValue;
	lab2.firstChild.nodeValue = strA;
	var strB = txt1.value;
	txt1.value = txt2.textContent;
	txt2.textContent = strB;
}

function conv(num,unit){
	if (unit == 'km'){
		return num * 0.621371;
	}
	else{
		return num * 1.609344;
	}
}
//rounds a number (val) to (num) decimals
function pround(val,num){
	var mul = Math.pow(10,num);
	val= val*mul;
	val = Math.floor(val);
	val = val / mul;
	return val;
}

function converter(){
	var unit;
	if(lab1.textContent == 'Kilometers:'){ unit= 'km';}
	else{unit == 'mile';}
	var val = conv(txt1.value,unit);
	txt2.textContent = pround(val,4);
}

function hilight(){
	txt1.value = "";
}
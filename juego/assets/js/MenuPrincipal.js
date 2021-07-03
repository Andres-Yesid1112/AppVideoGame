
//Direccionando
function redirecional(){
	document.location.href="Nosotros.html";
}

function otraRedirec(){
	document.location.href="ReglasJuego.html";
}

function direcInicio(){
	document.location.href="MenuPrincipal.html";
}

var boton = document.getElementById("Boton");
var menu = document.getElementById("Menu");
var sombra = document.getElementById("Sombra");

var interruptor= false;

boton.addEventListener("click", ()=>{
	if (interruptor == false) {
		menu.setAttribute("style","left:0");
		sombra.setAttribute("style","display:block");
		boton.setAttribute("style","color:#66afff; font-size: 30px;");

	}else{
		menu.setAttribute("style","left:-370px");
		sombra.setAttribute("style","display:none");
		boton.setAttribute("style","color:auto; font-size: 25px;");
	}
	interruptor= !interruptor;
})

var fotos = [];
var interruptor;
for (var i = 1; i < 17;) {
	var numero = Math.floor(Math.random(1)*16) + 1;
	interruptor = true;
	for (var j = 0; j < fotos.length; j++) {
		if (numero == fotos[j]) {
			interruptor = false;
		}
	}
	if (interruptor) {
		fotos.push(numero);
		i = i+1;
	}
}
console.log(fotos);
var contenedor = document.getElementById("content");
var num = document.getElementById("num");
var numero = 5;
num.innerHTML= "5";
for (var i = 0; i < 16; i++) {
	contenedor.innerHTML += `<img id="img${i}" src="img/${fotos[i]}.jpg">`;
}

setTimeout(function(){
    contenedor.innerHTML = ``;
    for (var i = 0; i < 16; i++) {
		contenedor.innerHTML += `<img id="img${i}" src="img/pregunta.jpg">`;
	}
	document.getElementById("img0").addEventListener("click", ()=>{
		document.getElementById("img0").setAttribute("src",`img/${fotos[0]}.jpg`);
	});
	document.getElementById("img1").addEventListener("click", ()=>{
		document.getElementById("img1").setAttribute("src",`img/${fotos[1]}.jpg`);
	});
	document.getElementById("img2").addEventListener("click", ()=>{
		document.getElementById("img2").setAttribute("src",`img/${fotos[2]}.jpg`);
	});
	document.getElementById("img3").addEventListener("click", ()=>{
		document.getElementById("img3").setAttribute("src",`img/${fotos[3]}.jpg`);
	});
	document.getElementById("img4").addEventListener("click", ()=>{
		document.getElementById("img4").setAttribute("src",`img/${fotos[4]}.jpg`);
	});
	document.getElementById("img5").addEventListener("click", ()=>{
		document.getElementById("img5").setAttribute("src",`img/${fotos[5]}.jpg`);
	});
	document.getElementById("img6").addEventListener("click", ()=>{
		document.getElementById("img6").setAttribute("src",`img/${fotos[6]}.jpg`);
	});
	document.getElementById("img7").addEventListener("click", ()=>{
		document.getElementById("img7").setAttribute("src",`img/${fotos[7]}.jpg`);
	});
	document.getElementById("img8").addEventListener("click", ()=>{
		document.getElementById("img8").setAttribute("src",`img/${fotos[8]}.jpg`);
	});
	document.getElementById("img9").addEventListener("click", ()=>{
		document.getElementById("img9").setAttribute("src",`img/${fotos[9]}.jpg`);
	});
	document.getElementById("img10").addEventListener("click", ()=>{
		document.getElementById("img10").setAttribute("src", `img/${fotos[10]}.jpg`);
	});
	document.getElementById("img11").addEventListener("click", ()=>{
		document.getElementById("img11").setAttribute("src", `img/${fotos[11]}.jpg`);
	});
	document.getElementById("img12").addEventListener("click", ()=>{
		document.getElementById("img12").setAttribute("src", `img/${fotos[12]}.jpg`);
	});
	document.getElementById("img13").addEventListener("click", ()=>{
		document.getElementById("img13").setAttribute("src", `img/${fotos[13]}.jpg`);
	});
	document.getElementById("img14").addEventListener("click", ()=>{
		document.getElementById("img14").setAttribute("src", `img/${fotos[14]}.jpg`);
	});
	document.getElementById("img15").addEventListener("click", ()=>{
		document.getElementById("img15").setAttribute("src", `img/${fotos[15]}.jpg`);
	});
}, 5000);

setTimeout(function(){
	numero = numero -1;
    num.innerHTML= numero;
}, 1000);
setTimeout(function(){
	numero = numero -1;
    num.innerHTML= numero;
}, 2000);
setTimeout(function(){
	numero = numero -1;
    num.innerHTML= numero;
}, 3000);
setTimeout(function(){
	numero = numero -1;
    num.innerHTML= numero;
}, 4000);
setTimeout(function(){
	numero = numero -1;
    num.innerHTML= numero;
}, 5000);





var see = document.getElementById("See");
var notSee = document.getElementById("NotSee");

see.addEventListener("click",()=>{
		contenedor.innerHTML = ``;
	for (var i = 0; i < 16; i++) {
		contenedor.innerHTML += `<img id="img${i}" src="img/${fotos[i]}.jpg">`;
	}
});
notSee.addEventListener("click",()=>{
	contenedor.innerHTML = ``;
	for (var i = 0; i < 16; i++) {
		contenedor.innerHTML += `<img id="img${i}" src="img/pregunta.jpg">`;
	}
	document.getElementById("img0").addEventListener("click", ()=>{
		document.getElementById("img0").setAttribute("src",`img/${fotos[0]}.jpg`);
	});
	document.getElementById("img1").addEventListener("click", ()=>{
		document.getElementById("img1").setAttribute("src",`img/${fotos[1]}.jpg`);
	});
	document.getElementById("img2").addEventListener("click", ()=>{
		document.getElementById("img2").setAttribute("src",`img/${fotos[2]}.jpg`);
	});
	document.getElementById("img3").addEventListener("click", ()=>{
		document.getElementById("img3").setAttribute("src",`img/${fotos[3]}.jpg`);
	});
	document.getElementById("img4").addEventListener("click", ()=>{
		document.getElementById("img4").setAttribute("src",`img/${fotos[4]}.jpg`);
	});
	document.getElementById("img5").addEventListener("click", ()=>{
		document.getElementById("img5").setAttribute("src",`img/${fotos[5]}.jpg`);
	});
	document.getElementById("img6").addEventListener("click", ()=>{
		document.getElementById("img6").setAttribute("src",`img/${fotos[6]}.jpg`);
	});
	document.getElementById("img7").addEventListener("click", ()=>{
		document.getElementById("img7").setAttribute("src",`img/${fotos[7]}.jpg`);
	});
	document.getElementById("img8").addEventListener("click", ()=>{
		document.getElementById("img8").setAttribute("src",`img/${fotos[8]}.jpg`);
	});
	document.getElementById("img9").addEventListener("click", ()=>{
		document.getElementById("img9").setAttribute("src",`img/${fotos[9]}.jpg`);
	});
	document.getElementById("img10").addEventListener("click", ()=>{
		document.getElementById("img10").setAttribute("src", `img/${fotos[10]}.jpg`);
	});
	document.getElementById("img11").addEventListener("click", ()=>{
		document.getElementById("img11").setAttribute("src", `img/${fotos[11]}.jpg`);
	});
	document.getElementById("img12").addEventListener("click", ()=>{
		document.getElementById("img12").setAttribute("src", `img/${fotos[12]}.jpg`);
	});
	document.getElementById("img13").addEventListener("click", ()=>{
		document.getElementById("img13").setAttribute("src", `img/${fotos[13]}.jpg`);
	});
	document.getElementById("img14").addEventListener("click", ()=>{
		document.getElementById("img14").setAttribute("src", `img/${fotos[14]}.jpg`);
	});
	document.getElementById("img15").addEventListener("click", ()=>{
		document.getElementById("img15").setAttribute("src", `img/${fotos[15]}.jpg`);
	});
});



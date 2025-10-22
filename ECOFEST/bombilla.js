function encender() {
	document.getElementById("bombilla").src= "on.jpg"; // imagen encendida
	document.getElementById("estado").textContent = "La bombilla esta encendida";
}

//Funcion para apagar la bombilla
function Apagar() {
	document.getElementById("bombilla").src= "off.jpg"; // imagen apagada
	document.getElementById("estado").textContent = "La bombilla esta apagada";
}
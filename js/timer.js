var centesimas = 0;
var segundos = 0;
var minutos = 0;
var horas = 0;
var control;
function inicio () {
	control = setInterval(cronometro,10);
}
function parar () {
	clearInterval(control);
}
function reinicio () {
	clearInterval(control);
	centesimas = 0;
	segundos = 0;
	minutos = 0;
	horas = 0;
	Centesimas.innerHTML = ":00";
	Segundos.innerHTML = ":00";
	Minutos.innerHTML = ":00";
	Horas.innerHTML = "00";
}

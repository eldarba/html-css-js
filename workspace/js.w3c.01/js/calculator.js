function add(a, b) {
	var res = parseFloat(a) + parseFloat(b);
	document.getElementById("divRes").innerText = res;
}

function sub(a, b) {
	var res = parseFloat(a) - parseFloat(b);
	document.getElementById("divRes").innerText = res;
}

function mul(a, b) {
	var res = parseFloat(a) * parseFloat(b);
	document.getElementById("divRes").innerText = res;
}

function div(a, b) {
	var res = parseFloat(a) / parseFloat(b);
	document.getElementById("divRes").innerText = res;
}
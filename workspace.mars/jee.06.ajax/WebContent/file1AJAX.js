var httpReq = new XMLHttpRequest();

function doRequest() {
	var a = document.getElementById("a").value;
	var b = document.getElementById("b").value;
	httpReq.onreadystatechange = callBackFunction;
	httpReq.open("GET", "calcServ?a=" + a + "&b=" + b, true)
	httpReq.send();
}

function callBackFunction() {
	if (httpReq.readyState == 4) {
		document.getElementById("res").innerHTML = httpReq.responseText;
	}
}

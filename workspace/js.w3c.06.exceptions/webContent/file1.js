function showIn(id, content) {
	document.getElementById(id).innerHTML = content;
}

function getInputVal(id) {
	var val = document.getElementById(id).value;
	return val;
}

function validateAge(age) {
	var x = Number(age);
	if (!(x >= 0 && x <= 120)) {
		var e = new Error();
		e.name = "Invalid Age Value";
		e.message = "The age " + age + " is illegal [" + x + "]";
		throw e;
		// throw "The age " + age + " is illegal [" + x + "]";
	}
}

function take() {
	showIn("p1", "");
	var age = getInputVal("tfAge");
	try {
		validateAge(age);
		showIn("p1", age);
	} catch (e) {
		alert(e);
	}

}
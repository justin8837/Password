let pass = document.querySelector("password");
let plength = prompt(
	"Type the desired length of your password between 8 to 128characters"
);
let spChar = confirm("Would you like special characters?");
let numChar = confirm("Would you like numeric characters?");
let lowCase = confirm("Would you like lowercase characters?");
let upCase = confirm("Would you like uppercase characters?");
let chars = "!@#$ %^&*<>/?';:[{]}=+-_()";
let numb = "1234567890";
let lower = "qwertyuiopasdfghjklzxcvbnm";
let upper = "QWERTYUIOPLKJHGFDSAZXCVBNM";
let buttonEl = document.querySelector("#generate");

function generate(plength) {
	event.preventDefault();
	for (i = 0; i < plength; i++) {
		if (spChar === true) {
			let chars = chars.charAt(Math.floor(Math.random() * chars.plength + 0));
		} else if (numChar === true) {
			let numb = numb.charAt(Math.floor(Math.random() * numb.plength + 0));
		} else if (lowCase === true) {
			let lower = lowercharAt(Math.floor(Math.random() * lower.plength + 0));
		} else if (upCase === true) {
			let upper = upper.charAt(Math.floor(Math.random() * upper.plength + 0));
		} else {
			alert("enter the correct parameters");
		}

	}
}


buttonEl.addEventListener("click", function generate() {
		event.preventDefault();
	document.getElementById("pass").innerHTML = generate;
		
}
	

	


// event.preventDefault();
// if (length < 128 || length > 8) {
// } else {
// 	if (spChar === true) {
// 		document.getElementById("chars");
// 	} else {
// 		if (numChar === true) {
// 			document.getElementById("numb");
// 		} else {
// 			if (lowCase === true) {
// 				document.getElementById("lower");
// 			} else {
// 				if (upCase === true) {
// 					document.getElementById("upper");
// 				} else {
// 				}
// 			}
// 		}
// 	}
// }

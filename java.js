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
let copyBtn = document.querySelector('#copy');
let generatedPass = '';
plength = Number(plength);
// console.log('spChar', spChar);
// console.log('numbChar', numChar);
// console.log('lowCase', lowCase);
// console.log('upCase', upCase);
console.log('pLength', typeof plength);
console.log(chars.charAt(Math.floor(Math.random() * chars.length + 0)));
console.log(chars.length);

// optionsArr = [];
// if (spChar) {
// 	optionsArr.push(spChar);
// }
// if (numChar) {
// 	optionsArr.push(numChar);
// }
// if (lowCase) {
// 	optionsArr.push(lowCase);
// }
// if (upCase) {
// 	optionsArr.push(upCase);
// }

// function getRandomInt(max) {
// 	Math.floor(Math.random() * Math.floor(max));
// }
// buttonEl.addEventListener("click", function () {

// 	for (i = 0; i < plength; i++) {
// 		let randIndex = getRandomInt(optionsArr.length);

// 		generatedPass =
// 			generatedPass +
// 			optionsArr[randIndex].charAt(getRandomInt(optionsArr[randIndex].length))
// 		document.getElementById("password").innerHTML = generatedPass;
// 	};
// 	console.log('buttonClicked')
// 		;
// })
buttonEl.addEventListener("click", function () {
	for (i = 0; i < plength; i++) {
		if (plength > 128 || plength < 8) {
			alert("enter the correct parameters");
		}
		if (spChar === true && generatedPass.length < plength) {
			generatedPass = generatedPass + chars.charAt(Math.floor(Math.random() * chars.length + 0));
			console.log(generatedPass);
		}
		if (numChar === true && generatedPass.length < plength) {
			generatedPass = generatedPass + numb.charAt(Math.floor(Math.random() * numb.length + 0));
			console.log(generatedPass);
		}
		if (lowCase === true && generatedPass.length < plength) {
			generatedPass = generatedPass + lower.charAt(Math.floor(Math.random() * lower.length + 0));
			console.log(generatedPass);
		}
		if (upCase === true && generatedPass.length < plength) {
			generatedPass = generatedPass + upper.charAt(Math.floor(Math.random() * upper.length + 0));
			console.log(generatedPass);
		}
	}
	document.getElementById("password").innerHTML = generatedPass;
})
copyBtn.addEventListener('click', function () {

	/* Get the text field */
	let copyText = document.getElementById("password");

	/* Select the text field */
	copyText.select();
	copyText.setSelectionRange(0, 99999); /*For mobile devices*/

	document.execCommand("copy");


})


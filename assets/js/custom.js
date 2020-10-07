(function ($) {

	// Page loading animation
	$(window).on('load', function () {
		if ($('.cover').length) {
			$('.cover').parallax({
				imageSrc: $('.cover').data('image'),
				zIndex: '1'
			});
		}

		$("#preloader").animate({
			'opacity': '0'
		}, 1000, function () {
			setTimeout(function () {
				$("#preloader").css("visibility", "hidden").fadeOut();
			}, 600);
		});
	});


})(window.jQuery);



let formCheckBox = document.querySelector(".form-check-input");
let databaseInput = document.querySelector(".formCheckClicked");

formCheckBox.addEventListener("click", () => {
	if (formCheckBox.checked == true) {
		databaseInput.classList.add("databaseNameAnim");
		databaseInput.classList.remove("noDisplay");
	} else {
		databaseInput.classList.add("noDisplay")
	}
})

let formCheckBox2 = document.querySelector("#databaseCheck2");
let formCheckClickedMain = document.querySelector(".formCheckClickedMain");

formCheckBox2.addEventListener("click", () => {
	if (formCheckBox2.checked == true) {
		formCheckClickedMain.classList.add("databaseNameAnim");
		formCheckClickedMain.classList.remove("noDisplay");
	} else {
		formCheckClickedMain.classList.add("noDisplay")
	}
})



let proceedBtn = document.querySelector(".proceedBtn");
let sourceServer = document.querySelector(".sourceServer");
let destinationServer = document.querySelector(".destinationServer");
let allSourceServerInputs = document.querySelectorAll(".sourceServer .form-group");
let formContainer = document.querySelector(".formContainer");


proceedBtn.addEventListener("click", (e) => {
	// allSourceServerInputs.forEach(sourceInput => {
	// 	let inputValue = sourceInput.value.length;
	// 	if (inputValue != 0) {
	// 		alert("dfd")
	// 	} else {
	// 		document.body.style.background = "#000";
	// 	}

	// })
	e.preventDefault();
	// sourceServer.classList.add("noDisplay");
	// destinationServer.classList.add("serverDetailAnim");
	// destinationServer.classList.remove("noDisplay");
	var cpUsername = document.getElementById('myForm').Cpusername.value;
	var cpPassword = document.getElementById('myForm').Cppassword.value;
	var pathDirectory = document.getElementById('myForm').pathDirectory.value;
	var serveIpHost = document.getElementById('myForm').serveIpHost.value;
	if (cpUsername === "" || cpPassword === "" || pathDirectory === "" || serveIpHost === "") {
		formContainer.classList.add("validateAnim");
		formContainer.addEventListener("animationend", () => {
			formContainer.classList.remove("validateAnim");
		})

		return false;
	} else {
		e.preventDefault();
		sourceServer.classList.add("noDisplay");
		destinationServer.classList.add("serverDetailAnim");
		destinationServer.classList.remove("noDisplay");
	}
})


// function validateForm() {
// 	preventDefault();

// 	console.log(cpUsername);
// 	// alert(byTitle);
// 	var cpPassword = document.getElementById('myForm').cpPassword.value;
// 	// alert(byAuthor);
// 	var pathDirectory = document.getElementById('myForm').pathDirectory.value;
// 	//alert(startDate);
// 	var serveIpHost = document.getElementById('myForm').serveIpHost.value;
// 	//alert(endDate);       

// 	if (!cpUsername && !cpPassword && !pathDirectory && !serveIpHost) {
// 		alert("Enter at least one search parameter!");
// 		return false;
// 	} else {
// 		e.preventDefault();
// 		sourceServer.classList.add("noDisplay");
// 		destinationServer.classList.add("serverDetailAnim");
// 		destinationServer.classList.remove("noDisplay");
// 	}
// }



let backBtn = document.querySelector(".backBtn");

backBtn.addEventListener("click", (e) => {
	e.preventDefault();
	sourceServer.classList.remove("noDisplay");
	destinationServer.classList.add("serverDetailAnim");
	destinationServer.classList.add("noDisplay");
})


let faqBtn = document.querySelector(".main-button-slider");
let faqPopup = document.querySelector(".faqPopup");
let popupCloseIco = document.querySelector(".closeIco");
let faqPopBlur = document.querySelector(".faqPopBlur");

faqBtn.addEventListener("click", () => {
	faqPopBlur.classList.remove("noDisplay");
	faqPopup.classList.remove("noDisplay");
	popupCloseIco.addEventListener("click", () => {
		faqPopup.classList.add("noDisplay");
		faqPopBlur.classList.add("noDisplay");

	})
})
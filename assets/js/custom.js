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

proceedBtn.addEventListener("click", () => {
	sourceServer.classList.add("noDisplay");
	destinationServer.classList.add("serverDetailAnim");
	destinationServer.classList.remove("noDisplay");

})


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

faqBtn.addEventListener("click", () => {
	faqPopup.classList.remove("noDisplay");
	popupCloseIco.addEventListener("click", () => {
		faqPopup.classList.add("noDisplay");
	})
})
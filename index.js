var currentHeight = $(".header").innerHeight();
console.log(currentHeight);

$(".scroll").click(function(event){
	event.preventDefault();
  var pageId = $(this).attr("data-page");
  $("html, body").animate({ 
		scrollTop: $("#"+pageId).offset().top - currentHeight
	}, 300);
});

(function() {
  
  let autoUpdate = false;
  let timeTrans = 4000;
  
	let cdSlider = document.querySelector('.testimonials-container');
	let item = cdSlider.querySelectorAll("li");
	let nav = cdSlider.querySelector(".testimonials-arrows");

	item[0].className = "current_slide";

	for (var i = 0; i < item.length; i++) {
		let color = item[i].getAttribute("data-color");
		item[i].style.backgroundColor=color;
	}

	// Detect IE
	// hide ripple effect on IE9
	let ua = window.navigator.userAgent;
		let msie = ua.indexOf("MSIE");
		if ( msie > 0 ) {
			let version = parseInt(ua.substring(msie+ 5, ua.indexOf(".", msie)));
			if (version === 9) { cdSlider.className = "testimonials-container ie9";}
	}

	if (item.length <= 1) {
		nav.style.display = "none";
	}

	function prevSlide() {
		let currentSlide = cdSlider.querySelector("li.current_slide");
		let prevElement = currentSlide.previousElementSibling;
		let prevSlide = ( prevElement !== null) ? prevElement : item[item.length-1];
		let prevColor = prevSlide.getAttribute("data-color");
		let el = document.createElement('span');

		currentSlide.className = "";
		prevSlide.className = "current_slide";

		nav.children[0].appendChild(el);

		let size = ( cdSlider.clientWidth >= cdSlider.clientHeight ) ? cdSlider.clientWidth*2 : cdSlider.clientHeight*2;
		let ripple = nav.children[0].querySelector("span");

		ripple.style.height = size + 'px';
		ripple.style.width = size + 'px';
		ripple.style.backgroundColor = prevColor;

		ripple.addEventListener("webkitTransitionEnd", function() {
			if (this.parentNode) {
				this.parentNode.removeChild(this);
			}
		});

		ripple.addEventListener("transitionend", function() {
			if (this.parentNode) {
				this.parentNode.removeChild(this);
			}
		});

	}

	function nextSlide() {
		let currentSlide = cdSlider.querySelector("li.current_slide");
		let nextElement = currentSlide.nextElementSibling;
		let nextSlide = ( nextElement !== null ) ? nextElement : item[0];
		let nextColor = nextSlide.getAttribute("data-color");
		let el = document.createElement('span');

		currentSlide.className = "";
		nextSlide.className = "current_slide";

		nav.children[1].appendChild(el);

		let size = ( cdSlider.clientWidth >= cdSlider.clientHeight ) ? cdSlider.clientWidth*2 : cdSlider.clientHeight*2;
		let ripple = nav.children[1].querySelector("span");

		ripple.style.height = size + 'px';
		ripple.style.width = size + 'px';
		ripple.style.backgroundColor = nextColor;

		ripple.addEventListener("webkitTransitionEnd", function() {
			if (this.parentNode) {
				this.parentNode.removeChild(this);
			}
		});

		ripple.addEventListener("transitionend", function() {
			if (this.parentNode) {
				this.parentNode.removeChild(this);
			}
		});

	}

	updateNavColor();

	function updateNavColor () {
		let currentSlide = cdSlider.querySelector("li.current_slide");

		let nextColor = ( currentSlide.nextElementSibling !== null ) ? currentSlide.nextElementSibling.getAttribute("data-color") : item[0].getAttribute("data-color");
		let	prevColor = ( currentSlide.previousElementSibling !== null ) ? currentSlide.previousElementSibling.getAttribute("data-color") : item[item.length-1].getAttribute("data-color");

		if (item.length > 2) {
			nav.querySelector(".prev").style.backgroundColor = prevColor;
			nav.querySelector(".next").style.backgroundColor = nextColor;
		}
	}

	nav.querySelector(".next").addEventListener('click', function(event) {
		event.preventDefault();
		nextSlide();
		updateNavColor();
	});

	nav.querySelector(".prev").addEventListener("click", function(event) {
		event.preventDefault();
		prevSlide();
		updateNavColor();
	});
  
  //autoUpdate
  setInterval(function() {
    if (autoUpdate) {
      nextSlide();
      updateNavColor();
    };
	},timeTrans);

})();
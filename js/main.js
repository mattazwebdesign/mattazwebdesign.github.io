;(function(){

			// Menu settings
			$('#menuToggle, .menu-close').on('click', function(){
				$('#menuToggle').toggleClass('active');
				$('body').toggleClass('body-push-toleft');
				$('#theMenu').toggleClass('menu-open');
			});

			document.getElementById("contactMe").addEventListener("click", scrollWin);

			function scrollWin() {
				window.scrollBy(0, 1200);
			}



})(jQuery);
;(function(){

			// Menu settings
			$('#menuToggle, .menu-close').on('click', function(){
				$('#menuToggle').toggleClass('active');
				$('body').toggleClass('body-push-toleft');
				$('#theMenu').toggleClass('menu-open');
			});

			var allPanels = $('.section_para').hide();
    
  $('.section_header').click(function() {
      $(this).next().slideToggle();
      allPanels.not($(this).next()).slideUp();
  });



})(jQuery);
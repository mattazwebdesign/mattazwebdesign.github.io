(function() {
  var allPanels = $(".section_para").hide();

  $(".section_header").click(function() {
    $(this)
      .next()
      .slideToggle();
    allPanels.not($(this).next()).slideUp();
  });
})(jQuery);

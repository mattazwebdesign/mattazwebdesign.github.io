(function() {
  var allPanels = $(".section_para").hide();

  $(".section_header").click(function() {
    $(this)
      .next()
      .slideToggle();
    allPanels.not($(this).next()).slideUp();
  });

  let modal = document.getElementById("myModal");
  let img = document.getElementById("screenshot");
  var modalImg = document.getElementById("img01");
  let caption = document.getElementById("caption");
  img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    caption.innerHTML = this.alt;
  };

  let span = document.getElementsByClassName("close")[0];
  span.onclick = function() {
    modal.style.display = "none";
  };

  document.getElementById("firefox").addEventListener("click", function() {
    alert(
      "The Firefox Version is under development right now. The first release will be by the end of May 2019!! Keep checking back or fill out a contact form and I will personally email you when I drop it!"
    );
  });
})(jQuery);

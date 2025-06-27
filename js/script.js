// File: js/script.js

$(document).ready(function () {
  // Highlight active nav link
  $(".navbar-nav .nav-link").on("click", function () {
    $(".navbar-nav .nav-item").removeClass("active");
    $(this).parent().addClass("active");
  });

  // Smooth scroll (if anchors are used)
  $("a[href^='#']").on("click", function (event) {
    var target = $(this.getAttribute("href"));
    if (target.length) {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: target.offset().top }, 1000);
    }
  });
});

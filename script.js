// Toggle mobile menu on hamburger click
$('.hamburger-button').click(function () {
  $('.mobile-menu').slideToggle(500);
  $(this).toggleClass('active');
  $('.icon-bars').toggle();
  $('.icon-close').toggle();
});

// Close mobile menu when a link is clicked
$('.mobile-menu a').click(function () {
  $('.mobile-menu').slideUp(500);
  $('.hamburger-button').removeClass('active');
  $('.icon-bars').show();
  $('.icon-close').hide();
});

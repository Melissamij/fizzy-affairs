// Toggle mobile menu and icons
$('.hamburger-button').click(function () {
  // If the menu is visible (menu is open)
  if ($('.mobile-menu').is(':visible')) {
    // Close the menu
    $('.mobile-menu').slideUp(500);
    // Change icon back to hamburger
    $(this).find('.icon-close').hide();
    $(this).find('.icon-bars').show();
    // Change color back to white
    $(this).css('color', 'var(--featured-text-white)');
  } else {
    // Open the menu
    $('.mobile-menu').slideDown(500);
    // Change icon to close (X)
    $(this).find('.icon-bars').hide();
    $(this).find('.icon-close').show();
    // Change color to brown (menu open)
    $(this).css('color', 'var(--bg-dark)');
  }
});

// When clicking a menu link: close everything cleanly
$('.mobile-menu a').click(function () {
  $('.mobile-menu').slideUp(500);
  $('.hamburger-button .icon-close').hide();
  $('.hamburger-button .icon-bars').show();
  $('.hamburger-button').css('color', 'var(--featured-text-white)');
});

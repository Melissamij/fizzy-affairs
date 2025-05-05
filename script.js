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


// contact form thank you 
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const successMessage = document.getElementById("form-success");

  if (form) {
    form.addEventListener("submit", async function (e) {
      e.preventDefault();

      const formData = new FormData(form);

      try {
        const response = await fetch(form.action, {
          method: form.method,
          body: formData,
          headers: { Accept: "application/json" }
        });

        if (response.ok) {
          form.reset();
          form.style.display = "none";
          successMessage.classList.remove("hidden");
        } else {
          alert("Oops! Something went wrong. Please try again.");
        }
      } catch (error) {
        console.error("Form submission error:", error);
        alert("Submission failed. Please check your connection and try again.");
      }
    });
  }
});


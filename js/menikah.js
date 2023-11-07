// Get that hamburger menu cookin' //

document.addEventListener("DOMContentLoaded", function () {
  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );
  var navbar = document.querySelector(".navbar");
  var heroFoot = document.querySelector(".hero .hero-foot");
  var scrollOffset = 20;

  window.addEventListener("scroll", function () {
    if (window.scrollY > 20) {
      navbarBurgers.forEach(function (burger) {
        burger.classList.add("scrolled");
        heroFoot.classList.add("is-scrolled");
      });
    } else {
      navbarBurgers.forEach(function (burger) {
        burger.classList.remove("scrolled");
        heroFoot.classList.remove("is-scrolled");
      });
    }
  });

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener("click", function () {
        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);
        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
});

// Smooth Anchor Scrolling
$(document).on("click", 'a[href^="#"]', function (event) {
  event.preventDefault();
  $("html, body").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top,
    },
    2000
  );
});

// When the user scrolls down 20px from the top of the document, show the scroll up button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("toTop").style.display = "block";
  } else {
    document.getElementById("toTop").style.display = "none";
  }
}

// Animation navbar scroll change color
document.addEventListener("DOMContentLoaded", function () {
  var navbar = document.querySelector(".is-fixed-top");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 20) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
});

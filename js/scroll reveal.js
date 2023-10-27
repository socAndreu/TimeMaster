window.addEventListener("scroll", function() {
    var scrollReveals = document.querySelectorAll(".scroll-reveal");
    for (var i = 0; i < scrollReveals.length; i++) {
      if (scrollReveals[i].getBoundingClientRect().top < window.innerHeight) {
        scrollReveals[i].classList.add("is-visible");
      }
    }
  });
  const gallery = document.querySelector(".gallery");

  window.addEventListener("scroll", function() {
    if (gallery.getBoundingClientRect().top < window.innerHeight) {
      gallery.classList.add("is-visible");
    }
  });  
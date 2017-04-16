window.sr = ScrollReveal();
sr.reveal('.navbar', {
  duration: 2000,
  origin:'bottom'
});

sr.reveal('.header-left', {
  duration: 1000,
  origin:'top',
  distance: '100px'
});
sr.reveal('.header-right', {
  duration: 1000,
  origin:'right',
  distance: '100px'
});
sr.reveal('.header-btn', {
  duration: 1000,
  delay:1000,
  origin:'bottom',
  distance: '100px'
});

$(function() {
  // Smooth Scrolling
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

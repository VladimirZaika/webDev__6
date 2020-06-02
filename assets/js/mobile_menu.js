$('.mobile__menu').click(function(e){
  // do whatever actions you need here
  e.preventDefault();
});

$('.mobile__menu').on('click', function(e) {
    e.preventDefault;
    $('.burger__link').toggleClass('link-active');
    $('.burger__menu').toggleClass('menu-active');
});

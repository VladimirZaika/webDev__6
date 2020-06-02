$('.block__content').click(function(e){
  e.preventDefault();
});

$(function() {
    $('.slick__section').hide();
    $('#for-sock').on('click', function() {
    $('#sock').show(),
    $('#caps').hide(),
    $('#bag').hide();
}),
    $('#for-caps').on('click', function() {
    $('#sock').hide(),
    $('#caps').show(),
    $('#bag').hide();
}),

   $('#for-bag').on('click', function() {
    $('#sock').hide(),
    $('#caps').hide(),
    $('#bag').show();
})

 });

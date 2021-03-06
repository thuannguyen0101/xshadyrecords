// Show and hide Cart sidebar
$('.cart-container').click(function () {
    $('#cart').show();
})

$('.cart-close').click(function () {
    $('#cart').hide();
})

// Product list carousel
$('#carousel-new-releases').carousel({
    interval: 0
})

$('#carousel-new-releases .carousel-item').each(function() {
    var minPerSlide = 4;
    var next = $(this).next();
    if (!next.length) {
        next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
    for (var i = 0; i < minPerSlide; i++) {
        next = next.next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));
    }
});

$('.icon__center').on('click', function (e) {
    
    // prevent default behavior
    e.preventDefault();

    $(this).addClass('active').siblings().removeClass('active')
});
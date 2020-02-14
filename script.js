 $(document).on('ready', function() {
      $(".variable").slick({
        dots: false,
        infinite: true,
        variableWidth: true,
		adaptiveHeight: true,
		prevArrow: '<div class="prev"></div>',
		nextArrow: '<div class="next"></div>',
		slidesToShow: 5,
        slidesToScroll: 3
      });
    });
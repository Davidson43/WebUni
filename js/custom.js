$(function(){
    $("#featured-content").mixItUp({
          selectors: {
              target:'.work',
              filter:'.btn'
          },
          animation: {
              enable:true,
              effects:'scale fade',
              duration:500
          }
    });

    $('.button-nav').on('click', function(event) {
		$('.nav-mobile').slideToggle(400);
		event.preventDefault();
	});

  });
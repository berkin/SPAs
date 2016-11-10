var i = -1;

$('.container1 .js-action').on('click', function() {
	$('.container1 .js-wrapper').removeClass('animate').css('left', 200 * i);
	i--;
});


$('.container2 .js-action').on('click', function() {
	$('.container2 .js-wrapper').css('left', 200 * i);
	i--;
});


$('.container3 .js-action').on('click', function() {
	let value = (1000 * i) + 'px';

	$('.container3 .js-wrapper').css({
  '-webkit-transform' : 'translate3d(' + value + ',0,0)',
  'transform'         : 'translate3d(' + value + ',0,0)'
});
	
	setTimeout(function() {
	},0)



	i--;
});

function delay() {
  let d = new Date().getTime() + (1000 * 2);

  while (d > new Date().getTime() ) {
	$('.container3').height();
  }
}
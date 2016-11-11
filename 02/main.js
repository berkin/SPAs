
(function() {
	let i = -1;
$('.container1 .js-action').on('click', function() {
	$('.container1 .js-wrapper').removeClass('animate').css('left', 200 * i);
	i--;
});
})();

(function() {
	let i = -1;
$('.container2 .js-action').on('click', function() {
	$('.container2 .js-wrapper').css('left', 200 * i);
	i--;
});
})();


(function() {
	let i = -1;
$('.js-container3 .js-action').on('click', function() {
	let value = (1000 * i) + 'px';

	$('.js-container3 .js-wrapper').css({
	  '-webkit-transform' : 'translate3d(' + value + ',0,0)',
	  'transform'         : 'translate3d(' + value + ',0,0)'
	});
	
	setTimeout(function() {
		delay();
	},0)
	setTimeout(function() {
		delay();
	},50)
	setTimeout(function() {
		delay();
	},10)
	i--;
});
})();

function delay() {
  let d = new Date().getTime() + (1000 * 1);

  while (d > new Date().getTime() ) {
	document.querySelector('.container3').offsetHeight;
  }
}

(function() {
	let i = -1;
	$('.container4 .js-action').on('click', function() {
		let value = (1000 * i) + 'px';

		$('.container4 .js-wrapper').css({
		  '-webkit-transform' : 'translate3d(' + value + ',0,0)',
		  'transform'         : 'translate3d(' + value + ',0,0)'
		});

		i--;
	});
})();
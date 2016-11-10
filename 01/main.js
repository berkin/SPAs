$('.js-freeze').on('click', function() {
  $(this).prop('disabled', true);
  let d = new Date().getTime() + (1000 * 3);

  while (d > new Date().getTime() ) {
    console.log('test')
  }

  $(this).prop('disabled', false);
});
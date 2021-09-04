$(() => {

  // $('p').eq(1).hide();
  // $('a.more').click((e) => {
  //   e.preventDefault();
  //   // $('p').eq(1).show("100");
  //   $('p').eq(1).fadeIn("slow");//muestra
  //   $('p').eq(1).slideUp("slow");//oculta
  //   $('p').eq(1).slideDown(5000);//oculta
  //   $(e.target).hide();
  // });
  // $('#switcher-large')
  //   .click(() => {

  //   });
  // const $firstPara = $('p').eq(1).hide();
  // $('a.more').click((e) => {
  //     e.preventDefault();
  //     if ($firstPara.is(':hidden')) {
  //       $firstPara.fadeIn('slow');
  //       $(e.target).text('read less');
  //     } else {
  //       $firstPara.fadeOut('slow');
  //       $(e.target).text('read more');
  //     }
  //   });

  // const $firstPara = $('p').eq(1)
  //   .hide();
  // $('a.more')
  //   .click((e) => {
  //     e.preventDefault();
  //     $firstPara.slideToggle('slow');
  //     $(e.target)
  //       .text(
  //         $(e.target).text() === 'read more' ?
  //           'read less' : 'read more'
  //       );
  //   });

  const $firstPara = $('p')
    .eq(1)
    .hide();
  $('a.more')
    .click((e) => {
      e.preventDefault();
      $firstPara.slideToggle('slow');
      $(e.target)
        .text(
          $(e.target).text() === 'read more' ?
            'read less' : 'read more'
        );
    });
});

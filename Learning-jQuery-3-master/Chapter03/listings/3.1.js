$(() => {
  // $('#switcher-large')
  //   .on('click', () => {
  //     $('body').addClass('large');
  //   });

  $('#switcher-default').on('click', (event) => {// como saber quien es el target. onclick con narrow expression
    $('body').removeClass("narrow").removeClass("large");

    // $("#switcher button").removeClass('selected');
    // // $(`#${event.target.id}`).addClass('selected');
    // $(event.target).addClass('selected');
  });
  $("#switcher-narrow").on("click", function () {
    $("body").addClass("narrow").removeClass("large");

    // $("#switcher button").removeClass('selected');
    // $(this).addClass('selected');
  });
  $("#switcher-large").on("click", function () {
    $("body").removeClass("narrow").addClass("large");

    // $("#switcher button").removeClass('selected');
    // $(this).addClass('selected');
  });

  // $("#switcher button").on("click", function () {
  //   $("#switcher button").removeClass('selected');
  //   $(this).addClass('selected');
  // })

  // Object sender, EventArgs args) C#
  $("#switcher button").on("click", (event) => {
    // event.stopPropagation();// detiene la propagacion de eventos en otros listeners
    $("#switcher button").removeClass('selected');
    $(event.target).addClass('selected');
  });

  /*
  $('#switcher h3').click(function () {
    // $(this).siblings('button').slide.toggleClass('hidden');
    $(this).siblings('button').slideToggle("slow");
  });*/

  // $('#switcher').click(function () {
  //   // 2 maneras de poner el toggle
  //   $(this).children('button').slideToggle('hidden');
  //   // $('#switcher button').toggleClass('hidden');
  // })

  // $('#switcher h3').hover(function () {
  //   $(this).addClass('hover');
  // },
  //  function () {
  //   $(this).removeClass('hover');
  // });


  $('#switcher').click(function (event) {
    if (event.target == this) {// solamente si el evento ocurrio aqui, se realizara lo siguiente
      $(this).children('button').toggleClass('hidden');
    }
  });


  $('#switcher h3').hover((event) => {
    $(event.target).addClass('hover');
  },
    (event) => {
      $(event.target).removeClass('hover');
    });





  $('#switcher-default').addClass('selected');
  $('#switcher button')
    .click((e) => {
      const bodyClass = e.target.id.split('-')[1];
      console.log(bodyClass)
      // $('body').removeClass().addClass(bodyClass);
      // $(e.target).addClass('selected').removeClass('selected');
      // e.stopPropagation();
    });

    $("#linkGoogle").click((event)=>{
      alert('Google');
      event.preventDefault();
    });

});
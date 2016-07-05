$(function (){

  var modal = $('#profile');
  var btn = $('.profile-btn');
  var close = $('.close');

  btn.click(function (){
    modal.css("display", "block");
  });

  close.click(function (){
    modal.css("display", "none");
  });
  $(window).click(function (event){
    if (event.target == modal) {
        modal.css("display", "none");
    }
  });
  // window.click(function() {
  //     if (event.target == modal) {
  //         modal.css("display", "none");
  //     }
  // });
});

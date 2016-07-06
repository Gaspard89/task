$(function(){
  var tab = [];

  $(".article-header").each(function( element ) {
    tab.push($( this ).text());
  });

    $(".search-square").autocomplete({source: tab});

    $("#searchButton").click(function (){
      var result = $(".search-square").val();
      console.log(result);
      if(result === "") {
        // $(".article").css("display","block");
      }
      else {
        $(".article").css("display","none");
        $('div.article:contains("' + result + '")').css("display","block");
      }
    });


});

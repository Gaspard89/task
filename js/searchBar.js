$(function(){
  var tab = [];

  $(".article-header").each(function( element ) {
    tab.push($( this ).text());
  });

    $(".search-square").autocomplete({source: tab});
});

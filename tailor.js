$("input[name=Radio-1], #xaxis, #yaxis").on("change",function(){

  var slug = $(".flag-circle-container").map(function() {
    return $(this).attr("data");
	}).get();

  var xval = $("#xaxis").find('option:selected').val();
  var yval = $("#yaxis").find('option:selected').val();

  $(".flag-circle-container").each( function (index, element) {
  $(element).removeClass().addClass("flag-circle-container" + ' _' + slug[index % slug.length] + '' + xval + ' _' + slug[index % slug.length] + '' + yval);
  });
  
  $('#xaxis-label').text($("#xaxis").find('option:selected').text());
  $('#yaxis-label').text($("#yaxis").find('option:selected').text());

});
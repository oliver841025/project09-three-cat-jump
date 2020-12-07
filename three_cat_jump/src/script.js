$(window).mousemove(function(evt){
  var x = evt.pageX;
  var y = evt.pageY;
  console.log(x + "," + y);  
  
  $("#cross").css("left",x+"px")
  $("#cross").css("top",y+"px")
  
  var cat_place = $("#yellow").offset().left + $("#yellow").width()/2
  if (Math.abs(x - cat_place) < 80){
    $("#yellow").css("bottom","0px");
  }else{
    $("#yellow").css("bottom","-50px");
  }
  
   var cat_place = $("#blue").offset().left + $("#blue").width()/2
  if (Math.abs(x - cat_place) < 80){
    $("#blue").css("bottom","0px");
  }else{
    $("#blue").css("bottom","-50px");
  }
  
   var cat_place = $("#grey").offset().left + $("#grey").width()/2
  if (Math.abs(x - cat_place) < 80){
    $("#grey").css("bottom","0px");
  }else{
    $("#grey").css("bottom","-50px");
  }
});
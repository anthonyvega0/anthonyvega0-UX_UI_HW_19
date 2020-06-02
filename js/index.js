$(".RWD").on("click", function(){
 $(this).toggleClass("open");
 if ($(this).hasClass("open")) {
   $(this).animate({height: "384px"});
   $(".RWD-Text").css("display", "flex");
   $(".title-box-RWD").css("outline", "2px solid black");
  
 }
 else {
   $(this).animate({height: "150px"});
   $(".RWD-Text").css("display", "none");
   $(".title-box-RWD").css("outline", "none");

  
 }
});

$(".LDR").on("click", function(){
  $(this).toggleClass("open");
  if ($(this).hasClass("open")) {
    $(this).animate({height: "379px"});
    $(".LDR-Text").css("display", "flex");
    $(".title-box-LDR").css("outline", "2px solid black");
   
  }
  else {
    $(this).animate({height: "150px"});
    $(".LDR-Text").css("display", "none");
    $(".title-box-LDR").css("outline", "none");
   
  }
 });

 $(".IA").on("click", function(){
  $(this).toggleClass("open");
  if ($(this).hasClass("open")) {
    $(this).animate({height: "457px"});
    $(".IA-Text").css("display", "flex");
    $(".title-box-IA").css("outline", "2px solid black");
   
  }
  else {
    $(this).animate({height: "150px"});
    $(".IA-Text").css("display", "none");
    $(".title-box-IA").css("outline", "none");
   
  }
 });
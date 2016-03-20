window.apendItem=function(Data){
    var isSuccess="";
    var isUnderLine="";
    if(Data.status)
      {
        isSuccess="removeActive";
        isUnderLine="makeComplete";
        
      }
      console.log(isSuccess);
    $("#todoList").append('<li class="list-group-item">'
      +'<div class="row">'
      +'<div class="col-md-1 com"><img src="img/signcheck.png" class="Makehand '
      +
      isSuccess 
+      '"></div>'
     +     '<div class="col-md-10 text-justify '+isUnderLine+'"> <b>'+Data.value+'</b> </div>'
    +      '<div class="col-md-1 del"><img src="img/close.png"  class="Makehand"> </div>'
   +   '</div>'
  +'</li>');
};


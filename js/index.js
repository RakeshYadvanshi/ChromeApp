window.OpenForm= function(value){
     chrome.app.window.create(value, {
    id: 'Home',
    bounds: { width: 1366, height:768 }
  });
 
};

window.closeForm=function(value){
     //close the main window
  chrome.app.window.get(value).close();
    
};



$('.toggle').on('click', function() {
     $("#myicon").hide();
  $('.container').stop().addClass('active');
});

$('.close').on('click', function() {
     $("#myicon").show();
  $('.container').stop().removeClass('active');
  
});

//handing submit Click for User register
$('#SubmitUser').on('click', function() {
  if($("#RUsername").val() && $("#RPassword").val() && $("#RRepeatPassword").val())
  {
    //save User data
    var userName=$("#RUsername").val();
    chrome.storage.local.set({"UserName":userName,
    "Password":$("#RPassword").val()},
    function(){
      console.log("User Succesfully Saved");
OpenForm("home.html");
closeForm("main");   
    });
  }
});
//handing submit Click for User Login
$('#Login').on('click', function() {
// get User Data
var UserData;
    chrome.storage.local.get(["UserName",
    "Password"],
    function(data){
     UserData=data;
     
//verify User against Saved data
  if($("#Username").val() && $("#Password").val() && $("#Username").val()==UserData.UserName
  && $("#Password").val()==UserData.Password)
  {
    console.log("User Succesfully Saved");
    OpenForm("home.html");
closeForm("main");
 
  }
  else
  {
     console.log("Not Register, Register First");
     $("#MyModal").modal("show");
  }
  
    });
});
$(function(){
    $('.toggle').html('<img id="myicon" src="img/25688.svg" height="40px" width="40px" style="margin-bottom:3px" >');
    
    $('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus();
});
    });

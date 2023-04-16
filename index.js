function fetchInformation(user){

  var username = $("#uname").val();

  
   if (!username){
    $("#information").html(`<h2>You need a name</h2>`);
  }else{

    $.when( $.getJSON(`https://api.github.com/users/${username}`)).then(
      function(response){
        userdata = response
        $("#clean").html(`${userdata.url}`)
      }, function(errorResponse){
        $("#information").html(`No data found for user ${username}`)
      }
    

    )

  }

}

function userDataClean(userdata){
  
}
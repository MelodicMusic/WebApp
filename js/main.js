//LOGIN USER
//Codigo del AJAX que consume el servicio de login del usuario
//La idea del codigo es poder validar los datos que provienen del JSON

$(document).ready(function(){

  var urlPrincipal = "http://melodicmusicserver-env.us-west-2.elasticbeanstalk.com/";

  $("#ingresar").on("click", function(e){
  var user = $("#useremail").val();
  var password = $("#password").val();

    $.ajax({
      //url: 'http://localhost:57849/api/User/LogIn/adriansb3105@gmail.com/12345',
      url: urlPrincipal + "api/User/LogIn/"+user+"/"+password,
      type: 'GET',
      contentType: "application/json",
      dataType: "json",
      success: function(result,status,xhr){
        console.log("EXITOSO");
        if(result === null){
          console.log("Login incorrecto");
        }else{
          console.log(result);
          window.localStorage.setItem('email', result.email);
          window.localStorage.setItem('lastName', result.lastName);
          window.localStorage.setItem('name', result.name);
          window.localStorage.setItem('password', result.password);
          window.localStorage.setItem('role', result.role);
          window.localStorage.setItem('id', result._id);
          window.location = "principal.html";
        }

      },
      error(xhr, status, error){
        console.log("CON ERROR");

        console.log('tipo de error: '+error);
      }
    }); //Ajax del Login del usuario

  }); //Boton de la aaccion de LogIn

  //Codigo para registrar un nuevo usuario, la idea es poder
  //registrar un nuevo cliente a la hora de realizar la accion por medio
  //de la funcion del clic del boton id="registrar"


  $("#registrar").on("click", function(e){

    let nombre = $("#name").val();
    let lastName = $("#lastName").val();
    let email = $("#email").val();
    let password = $("#password").val();

  	$.ajax({
  		data: JSON.stringify({"name": nombre, "lastName": lastName, "email": email, "password": password, "role": "user"}),
      url: urlPrincipal + 'api/User',
  		type: 'POST',
  		contentType: "application/json",
  		dataType: "json",
  		success: function(result,status,xhr){
  			console.log("EXITOSO");
  			console.log(result);
  			//console.log(status == 'success');
  		},
  		error(xhr, status, error){
  			console.log("CON ERROR");
  			console.log(status);
  			console.log(error);
  		}
  	});  //Ajax para registrar a un usuario

  }); //Boton de la accion de registrar


});

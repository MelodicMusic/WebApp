//INSERTAR PRODUCTO
$(document).ready(function(){

	let name= $('#name').val();


	let json = {{"name":name}};



$.ajax({



		data: JSON.stringify(json),
		url: 'http://localhost:57849/api/Product',
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
	});
});


// //GET PRODUCTO POR ID
// $(document).ready(function(){
// 	$.ajax({
// 		url: 'http://localhost:57849/api/Product/5998718ff36d286f1666ce42',
// 		type: 'GET',
// 		contentType: "application/json",
// 		dataType: "json",
// 		success: function(result,status,xhr){
// 			console.log("EXITOSO");
// 			console.log(result);
// 			//console.log(status == 'success');
// 		},
// 		error(xhr, status, error){
// 			console.log("CON ERROR");
// 			//console.log(status == 'error');
// 			console.log('tipo de error: '+error);
// 		}
// 	});
// });


// //ACTUALIZAR PRODUCTO
// $(document).ready(function(){
// 	$.ajax({
// 		data: JSON.stringify({"name":"maracas", "price": 2300, "category":"percusion", "description":"Se mueven", "brand":"Patito"}),
// 		url: 'http://localhost:57849/api/Product/599f68872f645b281cd89bc6',
// 		type: 'PUT',
// 		contentType: "application/json",
// 		dataType: "json",
// 		success: function(result,status,xhr){
// 			console.log("EXITOSO");
// 			console.log(result);
// 			//console.log(status == 'success');
// 		},
// 		error(xhr, status, error){
// 			console.log("CON ERROR");
// 			//console.log(status == 'error');
// 			console.log('tipo de error: '+error);
// 		}
// 	});
// });


// //BORRAR PRODUCTO
// $(document).ready(function(){
// 	$.ajax({
// 		url: 'http://localhost:57849/api/Product/59a265802f645b2ac8c4ca57',
// 		type: 'DELETE',
// 		contentType: "application/json",
// 		dataType: "json",
// 		success: function(result,status,xhr){
// 			console.log("EXITOSO");
// 			console.log(result);
// 			//console.log(status == 'success');
// 		},
// 		error(xhr, status, error){
// 			console.log("CON ERROR");
// 			//console.log(status == 'error');
// 			console.log('tipo de error: '+error);
// 		}
// 	});
// });


// //GET PRODUCTOS
// $(document).ready(function(){
// 	$.ajax({
// 		url: 'http://localhost:57849/api/Product/',
// 		type: 'GET',
// 		contentType: "application/json",
// 		dataType: "json",
// 		success: function(result,status,xhr){
// 			console.log("EXITOSO");
// 			console.log(result);
// 			//console.log(status == 'success');
// 		},
// 		error(xhr, status, error){
// 			console.log("CON ERROR");
// 			//console.log(status == 'error');
// 			console.log('tipo de error: '+error);
// 		}
// 	});
// });


// //GET PRODUCTO POR NOMBRE
// $(document).ready(function(){
// 	$.ajax({
// 		url: 'http://localhost:57849/api/Product/getProductsByName/Guit',
// 		type: 'GET',
// 		contentType: "application/json",
// 		dataType: "json",
// 		success: function(result,status,xhr){
// 			console.log("EXITOSO");
// 			console.log(result);
// 			//console.log(status == 'success');
// 		},
// 		error(xhr, status, error){
// 			console.log("CON ERROR");
// 			//console.log(status == 'error');
// 			console.log('tipo de error: '+error);
// 		}
// 	});
// });


// //GET PRODUCTO POR CATEGORIA
// $(document).ready(function(){
// 	$.ajax({
// 		url: 'http://localhost:57849/api/Product/getProductsByCategory/Intrumento de cuerda',
// 		type: 'GET',
// 		contentType: "application/json",
// 		dataType: "json",
// 		success: function(result,status,xhr){
// 			console.log("EXITOSO");
// 			console.log(result);
// 			//console.log(status == 'success');
// 		},
// 		error(xhr, status, error){
// 			console.log("CON ERROR");
// 			//console.log(status == 'error');
// 			console.log('tipo de error: '+error);
// 		}
// 	});
// });


// //GET PRODUCTO POR PRECIO
// $(document).ready(function(){
// 	$.ajax({
// 		url: 'http://localhost:57849/api/Product/getProductsByPrice/50000/450000',
// 		type: 'GET',
// 		contentType: "application/json",
// 		dataType: "json",
// 		success: function(result,status,xhr){
// 			console.log("EXITOSO");
// 			console.log(result);
// 			//console.log(status == 'success');
// 		},
// 		error(xhr, status, error){
// 			console.log("CON ERROR");
// 			//console.log(status == 'error');
// 			console.log('tipo de error: '+error);
// 		}
// 	});
// });

//Codigo para mantener a en Session al usuario que se logueo exitosamente
//y guardar su nombre para mostrarlo en una etiqueta <p> con el id="Usuario-Sesion"
$(document).ready(function(){

    $("#Usuario-Sesion").text(window.localStorage.getItem('name'));

});

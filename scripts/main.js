// Init SmartPlaceholders.js

$( '.js-float-label-wrapper' ).FloatLabel();

// ===============
// Demo JavaScript
// ===============

// Show Modal on Submit

$('#demoForm').on('submit',function( event ){

	var modal = '<div class="modal"><h3>Su cuenta ha sido creada</h3></div>',
		blackout='<div class="blackout"></div>';

	$('.wrapper').prepend( blackout ).hide().fadeIn().append( modal );
	event.preventDefault();

});

// Destroy Modal when Clicked

$('body').on( 'click', '.blackout, .modal', function(){
	$('.blackout').fadeOut(function(){
		$(".modal").fadeOut();
		location.href = "index.html";
	});
});

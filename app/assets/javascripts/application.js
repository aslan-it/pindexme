// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//= require bootstrap


$( document ).ready(function() {
// Handler for .ready() called.


$( "#r_add_pin_pincsses" ).on( "click", function() {
	$( "#add_pin_pincsses" ).trigger( "click" );
});

$( "#r_add_pin_eltexts" ).on('click', function() {
	$( "#add_pin_eltexts" ).trigger( "click" );
	$("#element-settings-cl").empty();
	$(".px-eltext-field").closest(".px-formcss-field").clone(false).prependTo("#element-settings-cl");
	$("#element-settings-cl").find(".hidden").removeClass("hidden")
		
});

$(".px-eltext-field").on("click","input",function(){
	alert("asf");
})

});
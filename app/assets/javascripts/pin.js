$( document ).ready(function() {
// Handler for .ready() called.

$('form').on('click', '.remove_fields', function(event) {
	$(this).prev('input[type=hidden]').val('1');
	$(this).closest('fieldset').hide();
	return event.preventDefault();
});

$('form').on('click', '.add_fields', function(event) {
	var element_id, regexp, time;
	time = new Date().getTime();
	regexp = new RegExp($(this).data('id'), 'g');
	$(this).before($(this).data('fields').replace(regexp, time));
	event.preventDefault();

});

$("#pin_creator_area").on("click",function() {
	$("#element-settings-cl").empty();
	$("#pin_title").closest(".px-pin-field").clone(false).prependTo("#element-settings-cl");
	$("#element-settings-cl").find("input[type='text']").on('keyup change',function(e) {
		$("#pin_creator_area").find("#"+this.id).val(this.value);
	});
	$("#element-settings-cl").find(".hidden").removeClass("hidden")

});

$("#pin_creator_area").trigger("click");



$( "#r_add_pin_eltexts" ).on('click', function() {
	$("#add_pin_eltexts").trigger( "click" );


	//Burasi ortak bi classa tasinmasi gerek


	$("#pin_creator_area").find("fieldset").on("click",function(e){
		
		$("#element-settings-cl").empty();
		$(this).find("fieldset").clone().prependTo("#element-settings-cl");
		$("#element-settings-cl").find(".hidden").removeClass("hidden")
		e.stopPropagation();
	})

});


$(".px-remote-submit").click(function(){
	$(".px-real-submit").trigger("click");

})


	 $("fieldset").resizable();
$("#pin_creator_area").on("mouseover",function(){

	 $("fieldset").resizable();
	$("fieldset").draggable({
		drag: function(){
            var position = $(this).position();
            var xPos = position.left;
            var yPos = position.top;
            $(this).find('.px-el-p-left').val(xPos);
            $(this).find('.px-el-p-top').val(yPos);
        }
	});

	$(this).find("fieldset").on({
		mouseenter: function () {
			$( this ).css("border", "1px solid black" );

		},
		mouseleave: function () {
			$( this ).css( "border","0px solid black" );
		}


	});



})

$(".px-pin-size").on("change",function(){
	width=$("#pin_width").val();
	height=$("#pin_height").val();
	$("#pin_creator_area").css("width",width).css("height",height);
})


$("#new_pin").children("fieldset").on("click",function(){
	alert("test");
	$("#element-settings-cls").empty();
	$(this).children("fieldset").clone().prependTo("#element-settings-cl");
	$("#element-settings-cl").find("input[type='text']").on('keyup change',function(e) {
		$("#pin_creator_area").find("#"+this.id).val(this.value);
	});
})

});
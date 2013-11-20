jQuery(function($) {


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
		// element_id = this.id;
		// switch (element_id) {
		// 	case "add_pin_eltexts":
		// 	return $("#new_pin").children("fieldset").last().find(".add_fields").trigger("clicssk");
		// 	case "add_pin_eltareas":
		// 	return "asf";
		// 	default:
		// 	return ;
		// }
	
	});
		
		



	$("#pin_creator_area").on("click",function() {
		$("#element-settings-cl").empty();
		$("#pin_title").closest(".px-pin-field").clone(false).prependTo("#element-settings-cl");
		$("#element-settings-cl").find("input[type='text']").on('keyup change',function(e) {
			$("#pin_creator_area").find("#"+this.id).val(this.value);
		});
		$("#element-settings-cl").find(".hidden").removeClass("hidden")

	});






	$(".px-remote-submit").click(function(){
		$(".px-real-submit").trigger("click");

	})
	$("#pin_creator_area").trigger("click");

});




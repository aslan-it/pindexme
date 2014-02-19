$( document ).ready(function() 
{
	px_pin_settings();//on load clone settings to right column


	// NESTED FORM ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	
	$('form').on('click', '.remove_fields', function(event) {
		$(this).prev('input[type=hidden]').val('1');
		$(this).closest('fieldset').hide();

		this_class=$(this).closest("fieldset").attr('class').split(' ')[0];

		if (this_class=="px-eltarea-field"){
			count=$("#r_add_pin_eltareas").attr("data-count");
			$("#r_add_pin_eltareas").attr("data-count",--count)

		}
		return event.preventDefault();


	});


	$('form').on('click', '.add_fields', function(event) {
		var element_id, regexp, time;
		time = new Date().getTime();
		regexp = new RegExp($(this).data('id'), 'g');
		$(this).before($(this).data('fields').replace(regexp, time));

		event.preventDefault();

		this_id=$(this).attr("id");

		if (this_id=="add_pin_pinimages"){
			$("#new_pin").find(".px-image-field").last().attr("id",time);
		}

		if (this_id=="add_pin_eltareas"){
			var new_editor_id= "ei-"+time;
			var new_toolbar_id= "ti-"+time;
			$("#new_pin").find(".px-eltarea-field").last().attr("id",new_editor_id);
			$("#new_pin").find(".px-eltarea-field").last().find(".wysihtml5-toolbar").attr("id",new_toolbar_id)
			

			toolbar_id=$("#new_pin").find(".px-eltarea-field").last().find(".wysihtml5-toolbar").attr("id");	
			editor_id=$("#new_pin").find(".px-eltarea-field").last().find("textarea").attr("id");
			var editor = new wysihtml5.Editor(editor_id, {
				toolbar: toolbar_id,
				style: false,
				stylesheets: ["../assets/editor.css"],
				parserRules: wysihtml5ParserRules
			});

			$("#new_pin").find("fieldset").draggable({
				iframeFix: true,
				cancel: "text",
				start: function (){
					$("iframe").css('z-index', '-1');
				},
				stop: function (){
					$("iframe").css('z-index', '0');
				} 
			})

		}
		if (this_id=="add_pin_eltexts"){

		}
		dynamic_added_el();

		event.stopPropagation();
	});

	// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::


	function dynamic_added_el(){
		$("#pin_creator_area").find("fieldset").on({

			mouseenter: function () {

				//$(this).css("border", "1px solid black" );
				$(this).children(".px-el-remove").css("visibility","visible");
				//$(this).draggable({disabled:false});

			},
			mouseleave: function (e) {
				//$( this ).css( "border","0px solid black" );
				if (!$(this).is(".px_active_el")){
					$(this).children(".px-el-remove").css("visibility","hidden");
				}

			},
			click: function(e){
				
				
				px_show_el_settings(e);
				e.stopPropagation();
				

			}

		});

	}
	// END : dynamic_added_el ::::::::::::::::::::::::::::::::::::

	function px_show_el_settings(e){

		var target = $( e.target );

		field_id = target.attr("id");
		alert(field_id);

		$("#pin_creator_area").find("fieldset").removeClass("px_active_el");
		target.addClass("px_active_el");

		$("#element-settings-cl").empty();
		target.find(".px_hidden_s").clone().prependTo("#element-settings-cl");
		$("#element-settings-cl").find(".px_hidden_s").show();
		target.find("fieldset").clone().prependTo("#element-settings-cl");
		
		target.children(".px-el-attr").clone().prependTo("#element-settings-cl");
		$("#element-settings-cl").find("input[type='text']").on('keyup change',function(e) {
			$("#pin_creator_area").find("#"+target.id).val(target.value);
		});


		$("#element-settings-cl").find(".hidden").removeClass("hidden");
		$("#pin_creator_area").find(".px-el-remove").css("visibility","hidden");
		target.children(".px-el-remove").css("visibility","visible");
		//alert(field_id);

		$("#element-settings-cl").find(".wysihtml5-toolbar a").on("click",function(e){
			ei=$(this).parent().attr("id");
			tbutton=$(this).attr("class").split(' ')[0];
			$("#pin_creator_area").find("#"+ei).find("."+tbutton).trigger("click",function(e){
				e.stopPropagation();
			});
			e.stopPropagation();
		})



		


	}





	function clone_values_to_real(){

		//TODO try to bind all(input,select,radio buttons) in function

		$("#element-settings-cl").find("input[type='text']").on('keyup change',function(e) {
			$("#pin_creator_area").find("#"+this.id).val(this.value);
		});

	}


	function px_pin_settings(){


		$("#element-settings-cl").empty();
		$("#pin_title").closest(".px-pin-field").clone(false).prependTo("#element-settings-cl");

		$("#element-settings-cl").find("input[type='text']").on('keyup change',function(e) {
			$("#pin_creator_area").find("#"+this.id).val(this.value);
		});
		

		$(".px-page-format").on('change',function(){
			var thisval=$(this).val();

			var width="200px";
			var height="200px";

			$("#pin_creator_area").find('.px-page-format option').attr('selected', false);

			$(this).find('option[value="'+thisval+'"]').attr('selected', true);

			$("#pin_creator_area").find('.px-page-format option[value="'+thisval+'"]').attr('selected', true);

			if(thisval==1){width="640"; height="480"}
			if(thisval==2){width="800"; height="600"}
			if(thisval==3){width="1024"; height="768"}
			if(thisval==4){width="1600"; height="1200"}

			$("#pin_creator_area").css("width",width).css("height",height);
			$(".px-pin-size#pin_width").val(width);
			$(".px-pin-size#pin_height").val(height);

		})
		$("#element-settings-cl").find(".hidden").removeClass("hidden");
		$("#pin_creator_area").find("fieldset").removeClass("px_active_el");
		$("#pin_creator_area").find(".px-el-remove").css("visibility","hidden");

		$(".px-pin-size").on("change",function(){
			width=$("#pin_width").val();
			height=$("#pin_height").val();
			$("#pin_creator_area").css("width",width).css("height",height);
			$('.px-page-format option').attr('selected', false);
			$('.px-page-format option[value="12"]').attr('selected', true);
			//TODO not working clone value to raal for selected;
		})

	}

	//REMOTE LINKS:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

	$("#px-add-el-nav").find("button").on("click",function(e){
		r_add_id=$(this).attr("id");

		if (r_add_id=="r_add_pin_eltareas") {
			$("#add_pin_eltareas").trigger("click");
		};

		if (true) {};
	})




	$(".px-remote-submit").click(function(){
		$(".px-real-submit").trigger("click");
	})

	//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

	$("#pin_creator_area").click(function(e){
		alert("pin_creator_area");
	})
	



});
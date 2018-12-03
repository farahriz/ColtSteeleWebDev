// Check Off Specific Todos by Clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

// Click on X to delete Todo
$("ul").on("click", "span", function(){
	$(this).parent().fadeOut(500, function(){
		$(this).remove()
	});
	event.stopPropagation();
})


$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		// grabbing new Todo text from input
		var todoText = $(this).val();
		$(this).val = ("");
		// create a new li and add to ul
		$("ul").append("<li>" + "<i class='fa fa-trash-alt'></i> " + todoText + "</li>")
	}
});

// $(".fa-plus").click(function(){
// 	(inpi)
// })
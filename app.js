var $body = $('#placeholder');
	var $template = $('#handlebarsTemplate').html();
	var compile = Handlebars.compile($template);
	var context = {name:'Ben',healthCondition:'conniption'};
	$body.html(compile(context));
	var $rather = $('#rather')
	var $quiz_plate = $('#handlebarsQuiz').html();
	var compileQuiz = Handlebars.compile($quiz_plate);
	var quizText = {friendsName:"Oscar Lazarus", dangerous_prehistoric_creature:"Megalodon", somthing_fun:"Get thumb screws put on"};
	$rather.html(compileQuiz(quizText));
	$('#quizList').css("list-style-type", "none");


$(document).ready(function(){
	$('input').change(function(){
		//two ways to get .val()of the input value and append it to $('#checkVal')div
		var value = $('[name="activities"]:checked').parent().text();
		console.log(value);
		var snark = "I can't believe you said you would rather be: '" +  value  + "' that's weird";
		$('#checkVal').html(snark);
	})
})
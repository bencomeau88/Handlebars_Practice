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
	$('input').on('click', function(){
		//two ways to get .val()of the input value and append it to $('#checkVal')div
		var value=$('#checkVal').html($('[name=activities]').val());
		// var value =$('#checkVal').html($("input:checked").val())

		// trying to append the "" of the checked input
		var answer = document.forms[0];
		var snark = "";
		for(i=0;i<answer.length;i++){
			if(answer[i].checked){
				snark = "I can't believe you said you would rather be:" + answer[i] + "that's werid"
				$('#checkVal').append(snark)
			}

		}
	})
})
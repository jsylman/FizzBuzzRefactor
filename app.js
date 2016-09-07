$(document).ready(function(){
	var userEntry = prompt("Please suppy a number.");
	var userNumber = parseInt(userEntry);
	console.log(userNumber);
	if(!userNumber){
		alert("You did not enter a number");
	}
	else if(userEntry%1 != 0){
		alert("No decimals, please!")
	}
	else{
		fizzbuzz(userNumber);
	}

	function fizzbuzz(number){
		for(var i=1; i<=number; i++){
			if(i%3==0&&i%5==0){
				$('body').append("fizzbuzz <br>");
			}
			else if(i%3==0){
				$('body').append("fizz <br>");
			}
			else if(i%5==0){
				$('body').append("buzz<br>");
			}
			else{
				$('body').append(i+"<br>");
			}
		}
	}



})

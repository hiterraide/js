let message = prompt("введите данные")
function someNumbers(){
	if (message.replace(/\d/g, "").length > 0) {
		alert("string")
	}else{
		alert("number")
	}
}
someNumbers()

$(document).ready(function(){
$(".calculatorbutton").click(function(){
buttonClicked = this.innerHTML
$(".calculatorInput").html(buttonClicked)
})
})


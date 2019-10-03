$( "document" ).ready(function() {
    $("#button").click(function(){
        var userInput = $(".input").val();
        var firstChara = userInput.charAt(0);
        var ay = firstChara + "ay";
        var restCharas = userInput.substring(1);
        $(".output").append(restCharas + ay);
     });



});
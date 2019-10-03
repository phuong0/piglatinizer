$( "document" ).ready(function() {
    function seperate(userString) {
        $("#button").click(function() {
            var userInput = $(".input").val();
            var firstChara = userInput.charAt(0);
            var ay = firstChara + "ay";
            var restCharas = userInput.substring(2);
            $(".ouput").text(restCharas + ay);
        });
    }
});
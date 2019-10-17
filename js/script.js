$( "document" ).ready(function() {
    $("#button").click(function(){
        var userInput = $(".input").val();
        var fChara = userInput.charAt(0);
        var fTwoCharas = userInput.slice(0, 2);
        var aSentence = userInput.split(" ");
        var NChara0 = userInput.startsWith("0");
        var NChara1 = userInput.startsWith("1");
        var NChara2 = userInput.startsWith("2");
        var NChara3 = userInput.startsWith("3");
        var NChara4 = userInput.startsWith("4");
        var NChara5 = userInput.startsWith("5");
        var NChara6 = userInput.startsWith("6");
        var NChara7 = userInput.startsWith("7");
        var NChara8 = userInput.startsWith("8");
        var NChara9 = userInput.startsWith("9");
        var testChara = fChara.toLowerCase();
        var testTwoCharas = fTwoCharas.toLowerCase();
        if (NChara0 === true || NChara1 === true || NChara2 === true || NChara3 === true || NChara4 === true || NChara5 === true || NChara6 === true || NChara7 === true || NChara8 === true || NChara9 === true) {
            $(".output").text("");
            $(".output").append("This is not a word, please enter something that has letters.");
        } else if (aSentence != userInput) {
            $(".output").text("");
            aSentence.forEach(function(word){
                var numOneChara = word.charAt(0);
                var testSChara = numOneChara.toLowerCase();
                var twoCharas = word.slice(0, 2);
                var tTwoCharas = twoCharas.toLowerCase();
                if (testSChara === "a" || testSChara === "e" || testSChara === "i" || testSChara === "o" || testSChara === "u" || testSChara === "y") {
                    $(".output").append(word + "ay" + " ");
                } else if (tTwoCharas === "th" || tTwoCharas === "ch" || tTwoCharas === "sh" || tTwoCharas === "wh" || tTwoCharas === "ph" || tTwoCharas === "sk" || tTwoCharas === "cl" || tTwoCharas === "bl" || tTwoCharas === "dr" || tTwoCharas === "gl") {
                    var ay = tTwoCharas + "ay";
                    var restCharas = word.substring(2);
                    $(".output").append(restCharas + ay + " ");
                } else {
                    var ay = numOneChara + "ay";
                    var restCharas = word.substring(1);
                    $(".output").append(restCharas + ay + " ");
                }
            });
        } else if (testTwoCharas === "th" || testTwoCharas === "ch" || testTwoCharas === "sh" || testTwoCharas === "wh" || testTwoCharas === "ph" || testTwoCharas === "sk" || testTwoCharas === "cl" || testTwoCharas === "bl" || testTwoCharas === "dr" || testTwoCharas === "gl") {
            var ay = testTwoCharas + "ay";
            var restCharas = userInput.substring(2);
            $(".output").append(restCharas + ay);
        } else if (testChara === "a" || testChara === "e" || testChara === "i" || testChara === "o" || testChara === "u" || testChara === "y"){
            $(".output").text("");
            $(".output").append(userInput + "ay");
        } else if (testChara != "a" || testChara != "e" || testChara != "i" || testChara != "o" || testChara != "u" || testChara != "y"){
            $(".output").text("");
            var ay = testChara + "ay";
            var restCharas = userInput.substring(1);
            $(".output").append(restCharas + ay);
        }
     });
//
});
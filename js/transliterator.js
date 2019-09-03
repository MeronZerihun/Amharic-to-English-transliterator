var letters;
$.getJSON('/js/amharicLetters.json', function(data){
    letters = data;
});


function transliterate(text){
    var resultText = "";
    text.split('').map(function (char) { 
        resultText += letters[char] || char ;
        var beforeSpace  = resultText[resultText.length - 2];
        if(char == ' ' && beforeSpace == 'i'){
            resultText = resultText.replace(beforeSpace, "");    
        }
      });
      var lastLetter = resultText[resultText.length - 1];
      if(lastLetter == 'i'){
        resultText = resultText.replace(lastLetter, "");
      }
      return resultText;
  }
  

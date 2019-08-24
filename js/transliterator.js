var letters = {};

function multipleKeys(keyArray, val, destinationMap){
    keyArray.forEach(element => {
        destinationMap[element] = val;
    });
}

// "ሀ" ፥ "ሐ" ፥ "ኀ"  
multipleKeys(['ሀ','ሐ','ኀ','ሃ','ሓ','ኃ'],'ha',letters);
multipleKeys(['ሁ','ሑ','ኁ'], 'hu', letters);
multipleKeys(['ሂ','ሒ','ኂ'], 'hī', letters);
multipleKeys(['ሄ','ሔ','ኄ'],'hé', letters);
multipleKeys(['ህ','ሕ','ኅ'], 'hi', letters);
multipleKeys(['ሆ','ሖ','ኆ'], 'ho', letters);
multipleKeys(['ሗ','ኋ'], 'hua', letters);  

// "ለ"
letters['ለ'] = 'le';
letters['ሉ'] = 'lu';
letters['ሊ'] = 'lī';
letters['ላ'] = 'la';
letters['ሌ'] = 'lé';
letters['ል'] = 'li';
letters['ሎ'] = 'lo';
letters['ሏ'] = 'lua'

// "መ"
letters['መ'] = 'me';
letters['ሙ'] = 'mu';
letters['ሚ'] = 'mī';
letters['ማ'] = 'ma';
letters['ሜ'] = 'mé';
letters['ም'] = 'mi';
letters['ሞ'] = 'mo';
letters['ሟ'] = 'mua';

// "ሠ" ፥ "ሰ"
multipleKeys(['ሠ','ሰ'], 'se', letters);
multipleKeys(['ሡ','ሱ'], 'su', letters);
multipleKeys(['ሢ','ሲ'], 'sī', letters);
multipleKeys(['ሣ','ሳ'], 'sa', letters);
multipleKeys(['ሤ','ሴ'], 'sé', letters);
multipleKeys(['ሥ','ስ'], 'si', letters);
multipleKeys(['ሦ','ሶ'], 'so', letters);
multipleKeys(['ሧ','ሷ'], 'sua', letters);

// "ረ"
letters['ረ'] = 're';
letters['ሩ'] = 'ru';
letters['ሪ'] = 'rī';
letters['ራ'] = 'ra';
letters['ሬ'] = 'ré';
letters['ር'] = 'ri';
letters['ሮ'] = 'ro';
letters['ሯ'] = 'rua';

// "ሸ"
letters['ሸ'] = 'she';
letters['ሹ'] = 'shu';
letters['ሺ'] = 'shī';
letters['ሻ'] = 'sha';
letters['ሼ'] = 'shé';
letters['ሽ'] = 'shi';
letters['ሾ'] = 'sho';
letters['ሿ'] = 'sha';

// "ቀ"
letters['ቀ'] = 'qe';
letters['ቁ'] = 'qu';
letters['ቂ'] = 'qī';
letters['ቃ'] = 'qa';
letters['ቄ'] = 'qé';
letters['ቅ'] = 'qi';
letters['ቆ'] = 'qo';
letters['ቋ'] = 'qua';

// "በ"
letters['በ'] = 'be';
letters['ቡ'] = 'bu';
letters['ቢ'] = 'bī';
letters['ባ'] = 'ba';
letters['ቤ'] = 'bé';
letters['ብ'] = 'bi';
letters['ቦ'] = 'bo';
letters['ቧ'] = 'bua';

// "ተ"
letters['ተ'] = 'te';
letters['ቱ'] = 'tu';
letters['ቲ'] = 'tī';
letters['ታ'] = 'ta';
letters['ቴ'] = 'té';
letters['ት'] = 'ti';
letters['ቶ'] = 'to';
letters['ቷ'] = 'tua';

// "ቸ"
letters['ቸ'] = 'che';
letters['ቹ'] = 'chu';
letters['ቺ'] = 'chī';
letters['ቻ'] = 'cha';
letters['ቼ'] = 'ché';
letters['ች'] = 'chi';
letters['ቾ'] = 'cho';
letters['ቿ'] = 'chua';

// "ነ"
letters['ነ'] = 'ne';
letters['ኑ'] = 'nu';
letters['ኒ'] = 'nī';
letters['ና'] = 'na';
letters['ኔ'] = 'né';
letters['ን'] = 'ni';
letters['ኖ'] = 'no';
letters['ኗ'] = 'nua';

// "ኘ"
letters['ኘ'] = 'gn´e';
letters['ኙ'] = 'gn´u';
letters['ኚ'] = 'gn´ī';
letters['ኛ'] = 'gn´a';
letters['ኜ'] = 'gn´é';
letters['ኝ'] = 'gn´i';
letters['ኞ'] = 'gn´o';
letters['ኟ'] = 'gn´ua';

// "አ" ፥ "ዐ"
multipleKeys(['ዓ','ዐ','ኣ','አ'], 'a', letters);
multipleKeys(['ዑ','ኡ'], 'ou', letters);
multipleKeys(['ኢ','ዒ'], 'eī', letters);
multipleKeys(['ዔ','ኤ'], 'á', letters);
multipleKeys(['እ','ዕ'], 'e', letters);
multipleKeys(['ኦ','ዖ'], 'o', letters);

// "ከ"
letters['ከ'] = 'ke';
letters['ኩ'] = 'ku';
letters['ኪ'] = 'kī';
letters['ካ'] = 'ka';
letters['ኬ'] = 'ké';
letters['ክ'] = 'ki';
letters['ኮ'] = 'ko';
letters['ኳ'] = 'kua';

// "ኸ"
letters['ኸ'] = 'he';
letters['ኹ'] = 'hu';
letters['ኺ'] = 'hī';
letters['ኻ'] = 'ha';
letters['ኼ'] = 'hé';
letters['ኽ'] = 'hi';
letters['ኾ'] = 'ho';
letters['ዃ'] = 'hua';

// "ወ"
letters['ወ'] = 'we';
letters['ዉ'] = 'wu';
letters['ዊ'] = 'wī';
letters['ዋ'] = 'wa';
letters['ዌ'] = 'wé';
letters['ው'] = 'wi';
letters['ዎ'] = 'wo';

// "ዘ"
letters['ዘ'] = 'ze';
letters['ዙ'] = 'zu';
letters['ዚ'] = 'zī';
letters['ዛ'] = 'za';
letters['ዜ'] = 'zé';
letters['ዝ'] = 'zi';
letters['ዞ'] = 'zo';
letters['ዟ'] = 'zua';

// "ዠ"
letters['ዠ'] = 'zhe';
letters['ዡ'] = 'zhu';
letters['ዢ'] = 'zhī';
letters['ዣ'] = 'zha';
letters['ዤ'] = 'zhé';
letters['ዥ'] = 'zhi';
letters['ዦ'] = 'zho';
letters['ዧ'] = 'zhua';

// "የ"
letters['የ'] = 'ye';
letters['ዩ'] = 'yu';
letters['ዪ'] = 'yī';
letters['ያ'] = 'ya';
letters['ዬ'] = 'yé';
letters['ይ'] = 'yi';
letters['ዮ'] = 'yo';

// "ገ"
letters['ገ'] = 'ge';
letters['ጉ'] = 'gu';
letters['ጊ'] = 'gī';
letters['ጋ'] = 'ga';
letters['ጌ'] = 'gé';
letters['ግ'] = 'gi';
letters['ጎ'] = 'go';
letters['ጓ'] = 'gua';

// "ደ"
letters['ደ'] = 'de';
letters['ዱ'] = 'du';
letters['ዲ'] = 'dī';
letters['ዳ'] = 'da';
letters['ዴ'] = 'dé';
letters['ድ'] = 'di';
letters['ዶ'] = 'do';
letters['ዷ'] = 'dua';

// "ጀ"
letters['ጀ'] = 'je';
letters['ጁ'] = 'ju';
letters['ጂ'] = 'jī';
letters['ጃ'] = 'ja';
letters['ጄ'] = 'jé';
letters['ጅ'] = 'ji';
letters['ጆ'] = 'jo';
letters['ጇ'] = 'jua';

// "ጠ"
letters['ጠ'] = 't´e';
letters['ጡ'] = 't´u';
letters['ጢ'] = 't´ī';
letters['ጣ'] = 't´a';
letters['ጤ'] = 't´é';
letters['ጥ'] = 't´i';
letters['ጦ'] = 't´o';
letters['ጧ'] = 't´ua';

// "ጨ"
letters['ጨ'] = 'ch´e';
letters['ጩ'] = 'ch´u';
letters['ጪ'] = 'ch´ī';
letters['ጫ'] = 'ch´a';
letters['ጬ'] = 'ch´é';
letters['ጭ'] = 'ch´i';
letters['ጮ'] = 'ch´o';
letters['ጯ'] = 'ch´ua';

// "ፈ"
letters['ፈ'] = 'fe';
letters['ፉ'] = 'fu';
letters['ፊ'] = 'fī';
letters['ፋ'] = 'fa';
letters['ፌ'] = 'fé';
letters['ፍ'] = 'fi';
letters['ፎ'] = 'fo';
letters['ፏ'] = 'fua';

// "ፐ"
letters['ፐ'] = 'pe';
letters['ፑ'] = 'pu';
letters['ፒ'] = 'pī';
letters['ፓ'] = 'pa';
letters['ፔ'] = 'pé';
letters['ፕ'] = 'pi';
letters['ፖ'] = 'po';
letters['ፗ'] = 'pua';

// "ፀ" ፥ "ጸ"
multipleKeys(['ፀ','ጸ'], 'ts´e', letters);
multipleKeys(['ፁ','ጹ'], 'ts´u', letters);
multipleKeys(['ፂ','ጺ'], 'ts´ī', letters);
multipleKeys(['ፃ','ጻ'], 'ts´a', letters);
multipleKeys(['ፄ','ጼ'], 'ts´é', letters);
multipleKeys(['ፅ','ጽ'], 'ts´i', letters);
multipleKeys(['ፆ','ጾ'], 'ts´o', letters);
letters['ጿ'] = 'ts´ua';

// "ጰ"
letters['ጰ'] = 'p´e';
letters['ጱ'] = 'p´u';
letters['ጲ'] = 'p´ī';
letters['ጳ'] = 'p´a';
letters['ጴ'] = 'p´é';
letters['ጵ'] = 'p´i';
letters['ጶ'] = 'p´o';
letters['ጷ'] = 'p´ua';

// "ቨ"
letters['ቨ'] = 've';
letters['ቩ'] = 'vu';
letters['ቪ'] = 'vī';
letters['ቫ'] = 'va';
letters['ቬ'] = 'vé';
letters['ቭ'] = 'vi';
letters['ቮ'] = 'vo';
letters['ቯ'] = 'vua';

function transliterate(){
    var text = document.getElementById("inputText").value;
    var resultText = "";
    document.getElementById('result').innerHTML = "";
    text.split('').map(function (char) { 
        resultText += letters[char] || char ;
        if(char == ' ' && resultText[resultText.length - 2] == 'i'){
            resultText = resultText.replace(resultText[resultText.length-2], "");    
        }
      });
      document.getElementById('result').innerHTML = resultText;
  }
  

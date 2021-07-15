//@input  int currentInt;

//@input Component.Text[] playerScoreTextComps;
//@input string dummyString;

var temp = script.dummyString;

var num1User ="";
var num2User="";
var num3User="";
var num4User="";
var Dict = new Object();
var tempDict = new Object();

var intArray = script.intArrayObj;
var sortedKeys;
UpdateUI("bharath",100);
UpdateUI("Gayathiri",89);
UpdateUI("adhil",100);
UpdateUI("pradeepa ", 101);

var delayEvent = script.createEvent("DelayedCallbackEvent");
delayEvent.bind(delay);
delayEvent.reset(1);
function delay()
{
    UpdateUI("bharath",103); 
}
function UpdateUI(username,score)
{
    //Update value in our dictionary
    Dict[username]=score;
   
    // Create items array
var items = Object.keys(Dict).map(function(key) {
        print("Key "+key );
       tempDict[key]=Dict[key];
        
  return [key, Dict[key]];
});
// Sort the array based on the second element
items.sort(function(first, second) {
     //   print("First "+second[1] );
  return second[1] - first[1];
});
   
    
    for(var key in items)
    {
        temp=items[key].toString();
        var chars = temp.split(',');
        print(chars[0]+": "+chars[1]);
        
        //key index mathiri varu value bharath,103 nu varuthu, so used split 
        //operator to split values 
        script.playerScoreTextComps[key].getSceneObject().enabled=true;
        script.playerScoreTextComps[key].text = chars[0]+": "+chars[1];
    }
    
}


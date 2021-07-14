//@input  int currentInt;

//@input Component.Text[] playerScoreTextComps;


var num1User ="";
var num2User="";
var num3User="";
var num4User="";
var Dict = new Object();
    

var intArray = script.intArrayObj;

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
  return [key, Dict[key]];
});

// Sort the array based on the second element
items.sort(function(first, second) {
  return second[1] - first[1];
});

    print(items);
    script.currentInt =0;
//    for(var key in items)
//    {
//      //  print("key"+key);
//           script.playerScoreTextComps[key].getSceneObject().enabled=true;       
//           script.playerScoreTextComps[key].text =items[key].t;
//    }
   
    
}


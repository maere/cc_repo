
//load document function to load original page
$(document).ready(function(){

});

//quote picker function to randomly pick quote from list
function quotePicker(){
  var arrSize = quotes.length;
  var pickNum = getRandomInt(0, arrSize);
  var quote = quotes[pickNum];
  return quote;
}

//randomness function
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

//on click function to respond to button press asking for new quote & replacing current one
$(document).on('click', '#get-quote', function(){
  var currQuote = quotePicker();
  $('#quote-text').text(currQuote);

});


//- Quote list as an array // could change to an object/dict if I want to separate quote an author into key value pairs - the quote would have to be the key so there are no dupes, or could do author key and and array of quotes for each
var quotes = ["Dreams are symbolic in order that they cannot be understood; in order that the wish, which is the source of the dream, may remain unknown. - Carl Jung",

"Your task is not to seek for love, but merely to seek and find all the barriers within yourself that you have built against it. - Rumi",

"Grief can be the garden of compassion. If you keep your heart open through everything, your pain can become your greatest ally in your life's search for love and wisdom. - Rumi",

"Jump, and you will find out how to unfold your wings as you fall. - Ray Bradbury",

"Whoever fights monsters should see to it that in the process he does not become a monster. And if you gaze long enough into an abyss, the abyss will gaze back into you. - Nietzsche",

"Artists are people driven by the tension between the desire to communicate and the desire to hide.  - DW Winnicott",

"Good actions are a guard against the blows of adversity. - Abu Bakr",

"Life is what happens to you while you're busy making other plans. - John Lennon",

"The happiness of your life depends upon the quality of your thoughts. - Marcus Aurelius",

"That which is not good for the bee-hive cannot be good for the bees. - Marcus Aurelius",

"Learn to dance, so when you get to heaven the angels know what to do with you. - Saint Augustine",

"I don't know what your destiny will be, but one thing I know: the only ones among you who will be really happy are those who will have sought and found how to serve. - Albert Schweitzer",

"Constant kindness can accomplish much. As the sun makes ice melt, kindness causes misunderstanding, mistrust, and hostility to evaporate. - Albert Schweitzer",

"Just as the wave cannot exist for itself, but is ever a part of the heaving surface of the ocean, so must I never live my life for itself, but always in the experience which is going on around me. - Albert Schweitzer",

"The first duty of love is to listen. - Paul Tillich",

"He who risks and fails can be forgiven. He who never risks and never fails is a failure in his whole being. - Paul Tillich",

"People are like stained - glass windows. They sparkle and shine when the sun is out, but when the darkness sets in, their true beauty is revealed only if there is a light from within. - Elisabeth Kubler-Ross",

"A dark cloud is no sign that the sun has lost his light; and dark black convictions are no arguments that God has laid aside His mercy. - Charles Spurgeon"];

/*jshint esversion: 6 */
//https://www.freecodecamp.org/challenges/spinal-tap-case

function spinalCase(str) {
   var regex = RegExp('([A-Z][a-z]+)|([a-z]+)','g');
   var tokens = str.match(regex);
   var lowercase = tokens.map(word => word.toLowerCase());
   return lowercase.join("-");
}

https://www.freecodecamp.org/challenges/convert-html-entities

function convertHTML(str) {

  var regExMap = {
    "&+": "&amp;",
    ">+": "&gt;",
    "<+": "&lt;",
    "\'+": "&apos;",
    "\"+": "&quot;"
  };

  Object.entries(regExMap).forEach(([key, value]) => {
      var re = new RegExp(key, 'g');
      str = str.replace(re, value);
  });

  return str;
}

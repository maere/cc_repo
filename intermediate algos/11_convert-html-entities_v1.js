https://www.freecodecamp.org/challenges/convert-html-entities

function convertHTML(str) {

  str = str.replace(/&+/g, "&amp;");
  str = str.replace(/>+/g, "&gt;");
  str = str.replace(/<+/g, "&lt;");
  str = str.replace(/\'+/g, "&apos;");
  str = str.replace(/\"+/g, "&quot;");
  return str;
}

convertHTML("Dolce < Gabbana");

const urlEncode = function(text) {
  let newText = '';
  text = text.trim();

  for ( let i = 0; i < text.length; i++) {
    if( text[i]=== ' ') {
      newText+="%20";
    } else {
      newText+=(text[i]);
    }

  }
  return newText;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
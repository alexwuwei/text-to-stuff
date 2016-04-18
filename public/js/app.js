function biConvert() {
  var output = document.getElementById("output");
  var input = document.getElementById("input").value;
    output.value = "";
  for (i=0; i < input.length; i++) {
    output.value +=input[i].charCodeAt(0).toString(2) + " ";
  }
}

function octConvert() {
  var output = document.getElementById("output");
  var input = document.getElementById("input").value;
    output.value = "";
  for (i=0; i < input.length; i++) {
    output.value +=input[i].charCodeAt(0).toString(8) + " ";
  }
}

function hexConvert() {
  var output = document.getElementById("output");
  var input = document.getElementById("input").value;
    output.value = "";
  for (i=0; i < input.length; i++) {
    output.value +=input[i].charCodeAt(0).toString(16) + " ";
  }
}

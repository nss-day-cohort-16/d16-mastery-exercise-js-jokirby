function tree(theGreatTree) {
  console.log("Hello, I'm a Tree (function)");
  for (var i = 1; i <= theGreatTree.height; i++) {
    var display = document.getElementById("treeDisplay");
    var space = " ";
    display.innerHTML += "<p>" + space.repeat(theGreatTree.height - i) + theGreatTree.character.repeat((i * 2) - 1) + "</p>";
    console.log(space.repeat(theGreatTree.height - i) + theGreatTree.character.repeat((i * 2) - 1));
  }
}

// Add Event Listners: Input Field, Submit & Enter
var buttonClear = document.getElementById("clear")
  .addEventListener("click", reset);
var submitButton = document.getElementById("submitButton")
  .addEventListener("click", input);


function input(height) {
  var heightInput = document.getElementById("heightInput").value;
  var characterInput = document.getElementById("charInput").value;

  var theGreatTree = {
    height: heightInput,
    character: characterInput,
  };
  // heightInput + charInput
  if (heightInput > 0 && characterInput) {
    tree(theGreatTree);
  } else if (heightInput === 0) {
    alert("0! You need seeds to grow a tree!");
  } else if (heightInput < 0) {
    alert("You entered a -#! No negative nancies in treeville!");
  } else {
    alert("Make sure you input a value for the Height & Character fields OR your tree is unable to grow");
  }
}

function reset() {
  document.getElementById("heightInput").value = "";
  document.getElementById("charInput").value = "";
  console.clear();
  var display = document.getElementById("treeDisplay");
  display.innerHTML = "</p>" + "Let's grow another tree!" + "</p>";
}
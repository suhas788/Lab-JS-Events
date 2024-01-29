function printName() {
  // Select the span element with id "user"
  var userSpan = document.getElementById("user");
  
  // Check if the span element is found
  if (userSpan) {
      // Set the innerHTML of the span element to your name
      userSpan.innerHTML = "Your Name";
  }
}

// Attach the printName function to the onload event of the window
window.onload = printName;

function changeButtonColor() {
  // Select the button element with id "btn-click"
  var button = document.getElementById("btn-click");
  
  // Check if the button element is found
  if (button) {
      // Add the CSS class "highlight" to change the background color
      button.classList.add("highlight");
  }
}

// Define a function to make a sentence from input values
function makeSentence() {
  // Retrieve the current values of the form input elements
  var noun = document.getElementById("noun").value;
  var verb = document.getElementById("verb").value;
  var adverb = document.getElementById("adverb").value;

  // Create the sentence
  var sentence = noun + " " + verb + " " + adverb;

  // Output the sentence in the "statement" div
  var statementDiv = document.getElementById("statement");
  statementDiv.textContent = sentence;
}

// Add an event listener to the button with id "build-button"
document.getElementById("build-button").addEventListener("click", makeSentence);

// Add event listeners to the parent elements to capture bubbling events
document.getElementById("child").addEventListener("click", function() {
  console.log("Child clicked");
});

document.getElementById("parent").addEventListener("click", function() {
  console.log("Parent clicked");
});

document.getElementById("grandparent").addEventListener("click", function() {
  console.log("Grandparent clicked");
});

// Add event listeners to the parent elements to capture events during the capture phase
document.getElementById("grandparent").addEventListener("click", function() {
  console.log("Grandparent clicked");
}, true);

document.getElementById("parent").addEventListener("click", function() {
  console.log("Parent clicked");
}, true);

document.getElementById("child").addEventListener("click", function() {
  console.log("Child clicked");
}, true);

// Add an event listener to the ul element with id "category"
document.getElementById("category").addEventListener("click", function(event) {
  // Check if the clicked element is an li element with id "blazers"
  if (event.target && event.target.nodeName == "LI" && event.target.id == "blazers") {
      console.log("blazers");
  }
});

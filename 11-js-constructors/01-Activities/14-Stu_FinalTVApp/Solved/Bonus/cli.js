var inquirer = require("inquirer");
var TV = require("./tv");

// Create a new TV object
var tv = new TV();

// Prompt for show or actor
// Prompt for term
inquirer
  .prompt([
    {
      name: "search",
      message: "Are you search for a show or an actor?",
      type: "list",
      choices: ["Show", "Actor"]
    },
    {
      name: "term",
      message: "Enter your search:",
      default: "Andy Griffith"
    }
  ])
  .then(function(answer) {
    // Call findShow if looking for show
    // Else call findActor
    if (answer.search === "show") {
      tv.findShow(answer.term);
    } else {
      tv.findActor(answer.term);
    }
  });

var userChoice = prompt("Do you choose rock, paper or scissors?");

var computerChoice = Math.random();

if (computerChoice <= 0.33) {
  computerChoice = "rock";
} else if (computerChoice <= 0.66) {
  computerChoice = "paper";
} else {
  computerChoice = "scissors";
}

var compare = function(choice1, choice2) {
  if (choice1 === choice2) {
    return "?";
  } else if(choice1 ==="rock") {
    if (choice2==="scissors") {
      return "?";
    } else {
      return "?";
    }
  }
  else if(choice1==="paper") {
    if(choice2 ==="rock") {
      return "?";
    } else {
      return "?";
    }
  }
  else if(choice1==="scissors") {
    if (choice2==="rock") {
      return "?";
    } else {
      return "?";
    }
  }

};

compare(userChoice, computerChoice);

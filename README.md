# Learn-to-code-week-2

Basic JavaScript and jQuery

In order to go over some basic JavaScript concepts lets follow the getting
started tutorial provided by the JavaScript team. It's only 8 lessons and
takes less than 5 minutes.

Please email if you are doing this at home and have any quesions!

mcbain@galvanize.com

###HOORAY VOCABULARY!

- functions
- if statements
- variables




###Rock Paper Scissors!

We want to write a program called rockPaperScissors.js so we can play rock paper
scissors with our computer! Here are the steps we'll need to take to make that happen:

1. Get a user's choice
1. Get the computer's choice
1. Teach the computer how to guess rock, paper, or scissors
1. Compare their choices and tell the user the result


###1.Get the user's choice

The ```prompt``` method gets input from the user, ```prompt``` has an optional message parameter which you can use to ask the user for a response.

```javascript
var userChoice = prompt("Do you choose rock, paper or scissors?");
```

This line creates a variable called ```userChoice``` to represent the users response.

Question 1: Why is this a terrible way to get the users input?
Question 2: What are some ways you could avoid this problem?


###2.Get the computers choice
```Math.random()``` returns a random floating point number between 0 and 1

```javascript
var computerChoice = Math.random();
```

Here we are setting a variable named ```computerChoice``` to the result of Math.random()

Question: If you did't want to have ```Math.Random()``` choose between 0 & 1 how could you give it
alternative Parameters?


###3. Teach the computer rock, paper, scissors.

This is our first conditional statement. We change the value of ```computerChoice```
to either rock, paper, or scissors depending on what number the ```computerChoice```
variable gets set to when we run the program. Computers don't speak english so
we need to speak in a language they understand, numbers.

```javascript

if (computerChoice <= 0.33) {
    computerChoice = "rock";
} else if (computerChoice <= 0.66) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
}
```



//At this point the computer is ready to rumble with it's choice, and the user
//has made theirs. IT'S GO TIME!!!
//Not so fast bub, first we need to tell the computer how to decide who wins. In
//order to do that we're going to need to create a function!

Question: If the computers choice is ```0.44``` why does this statement assign ```computerChoice```
not evaluate to paper? Afterall, ```0.44``` is less than or equal to ```0.66``` afterall


###4. Compare the choices and tell the user of the result.
Here we're creating a function called ```compare```. The ```compare``` function takes two
arguments ```userChoice``` and ```computerChoice```.

```javascript
var compare = function(userChoice, computerChoice) {
    if (userChoice  === computerChoice) {
        window.alert("The result is a tie!");
    } else if(userChoice === "rock") {
        if (computerChoice === "scissors") {
            window.alert("Rock wins!");
        } else {
            window.alert("Paper wins");
        }
    } else if(userChoice === "paper") {
        if(computerChoice === "rock") {
            window.alert("paper wins!");
        } else {
            window.alert("scissors wins!");
        }
    } else if(userChoice === "scissors") {
        if (computerChoice === "rock") {
            window.alert("Rock wins");
        } else {
            window.alert("scissors wins");
        }
    }
};
```

Question: At this point in the program we've got the userChoice and computerChoice, we've also
written a function that compares the two, what is the last thing we have to do to make this program
run?







###5. Calling the compare function
 We're passing values of userChoice and computerChoice to run the equation. The
 function is called when someone clicks the button via the ```onclick``` attribute!

```html
<button class="button" onclick="compare(userChoice, computerChoice);">LETS PLAY RPS!</button>
```

###6. The customer has some requests

- "I want to play the game again, make a button I can press to play again!"

- "When I win I want the game to congratulate me by name!"

- "I don't ever want to loose, make it so I always win."

- "I don't want to have to click a button to play, make it so ```compare``` just runs when I enter
my choice"


###9. Save, Commit, Push!
Save your changes, make a commit and push your local changes to github!

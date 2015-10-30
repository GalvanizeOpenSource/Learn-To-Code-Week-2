# Rock Paper Scissor Game

using  JavaScript and jQuery. With CSS and HTML

- functions
- if statements
- variables




###Rock Paper Scissors!
One can play rock paper scissors with our computer! Here are the steps we'll need to take to make that happen:

1. Get a user's choice
2. Get the computer's choice
3. Teach the computer how to guess rock, paper, or scissors
4. Compare their choices and tell the user the result


###1.Get the user's choice

The ```prompt``` method gets input from the user, ```prompt``` has an optional message parameter which you can use to ask the user for a response.

```javascript
var userChoice = prompt("Do you choose rock, paper or scissors?");
```

This line creates a variable called ```userChoice``` to represent the users response.

Question: Why is this a crap way to get the users input?

###2.Get the computers choice
```Math.random()``` returns a random floating point number between 0 and 1

```javascript
var computerChoice = Math.random();
```

Here we are setting a variable named ```computerChoice``` to the result of Math.random()


###3. Assigning computer rock, paper, scissors values.

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
//We now need to tell the computer how to decide who wins. In
//order to do that we're going to need to create a function!



###4. Using comparison to decide the winner!.
Here we're creating a function called ```compare```. The ```compare``` function takes two
arguments ```choice1``` and ```choice2```.

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


###5. Calling the compare function
 We're passing values of userChoice and computerChoice to run the equation. The
 function is called when someone clicks the button via the ```onclick``` attribute!

```html
<button class="button" onclick="compare(userChoice, computerChoice);">LETS PLAY RPS!</button>
```

Enjoy the game!!

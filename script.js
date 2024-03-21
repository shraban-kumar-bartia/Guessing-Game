alert("Let's start the game 🤞🤞")
const max = prompt("Enter the maximum number ->");

const random = Math.floor(Math.random() * max) + 1;

let guess = prompt(`Guess the number between 1 to ${max}:`);

while(true){
    if(guess == "quit"){
        document.write("Quiting game!!");
        document.write("<br>For restart the game please refresh the page..❤️");
        break;
    }
    if(guess == random){
        document.write(" 🥳🥳Congratulation!!😍😍 <br>")
        document.write("Yes your guess was right.The number is "," ' ",random," ' ");
        document.write("<br>For restart the game please refresh the page..❤️");
        break;
    }
    else if(guess < random){
        guess = prompt("Hint: Your guess is too small. please try again..");
    }
    else{
        guess = prompt("Hint: Your guess is too large. please try again..");
    }
}
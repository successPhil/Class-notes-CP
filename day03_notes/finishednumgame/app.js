window.onload = () => {
    let answer = Math.floor(Math.random() * 100) + 1; // generate random num between 1-100
    let guessInput = document.querySelector("#guess"); //our input box
    const guessBtn = document.querySelector("#guessbtn"); //Our submit guess button
    let gameResponse = document.querySelector("#response"); //Our response div
    let numbersGuessed = document.querySelector("#guessesList") //div for our list of guesses
    const resetBtn = document.querySelector("#resetbtn") //Our reset button
    let guessedNumbers = []; //List that will hold guesses
    let solved = false // Logic for playing, turns true when solved

    //reset game logic:
    //generate another random number
    //clear input field content
    //clear game response content
    //clear numbersGuessed content
    //clear guesses list
    //set solved back to false
    //hide the reset button

    //set-up for win animation
    const defaults = {
        spread: 420,
        ticks: 100,
        gravity: 0,
        decay: 0.94,
        startVelocity: 45,
      };
    //win animation function
    function shoot() {
      confetti({
        ...defaults,
        particleCount: 40,
        scalar: 1.2,
        shapes: ["circle", "square"],
        colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
      });
        
      confetti({
        ...defaults,
        particleCount: 30,
        scalar: 2,
        shapes: ["text"],
        shapeOptions: {
          text: {
            value: ["🦄", "🌈"],
          },
        },
      });
    }

    function resetGame(){
        answer = Math.floor(Math.random() * 100) + 1;
        guessInput.value = "";
        gameResponse.textContent = "";
        numbersGuessed.textContent = ""
        guessedNumbers = [];
        solved = false
        resetBtn.style.display = "none";
    }

    //Allows user to press "Enter" after they input their number guess
    //Simply listens for "Enter" and clicks our button
    guessInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter"){
            guessBtn.click()
        }
    })

    resetBtn.addEventListener("click", resetGame);

    //Logic for game when "clicking" our guess button
    guessBtn.addEventListener("click", () => {
        //Will only run if the game hasn't been solved
        if (!solved){
        //Turns our number string from input into a Integer
        const numberGuessed = parseInt(guessInput.value);

        //Checks that the number guessed is a number. If it is not it will return
        //asking the user to input a valid number
        if (isNaN(numberGuessed)) {
            gameResponse.textContent = "Please enter a valid number!"
            gameResponse.style.color = "red"
            return;
        }
        //Checks if the user has already guessed that number
        //If they have not it will add it to the guesses list
        //If they have it will return early after asking them to try a different number
        if (!guessedNumbers.includes(numberGuessed)){
            guessedNumbers.push(numberGuessed)
        } else {
            gameResponse.textContent = `You already guessed ${numberGuessed} try a different number!`
            //resets the input box in the case user accidently guesses a number twice
            guessInput.value = ""
            return
        }
        //Logic for the guessing game
        if (numberGuessed < answer) {
            gameResponse.textContent = "Your guess was too low!";
            gameResponse.style.color = "#1E90FF" //Changes text to Dodger Blue for "low"
        } else if (numberGuessed > answer) {
            gameResponse.textContent = "Your guess was too high!"
            gameResponse.style.color = "#CD5C5C" // Changes text to Indian Red for "high"
        } else {
            gameResponse.textContent = `Congratulations you guessed the number in ${guessedNumbers.length} tries!`
            gameResponse.style.color = "#228B22"; // Changes text to Forest Green for "correct"
            //Sets solved to true so the game can no longer be played
            solved = true
            //Call winning animation!
            setTimeout(shoot, 0);
            setTimeout(shoot, 100);
            setTimeout(shoot, 200);
            setTimeout(shoot, 300);
        }
        //resets the input box so the number they guessed last disappears
        guessInput.value = ""
        //Fills our div for numbers guessed with our message and list of numbers guessed
        numbersGuessed.textContent = `Guesses so far: ${guessedNumbers.join(", ")}`
    }
    //Display reset button
    if (solved){
        resetBtn.style.display = "block";
    }
        
    })

}
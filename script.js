
        const add = document.getElementById("mybutton");
        const random = Math.floor(Math.random() * 10) + 1; // Random number between 1 and 10
        let score = 10; // Starting score
        const scoredisplay = document.getElementById("result"); // Score display

        // Start button click event
        add.addEventListener("click", function guess() {
            const inputvalue = parseInt(document.getElementById("user-input").value); // Get the user's input

            // Compare user input with random number
            if (inputvalue === random) {
                alert("You Won this game!");
            } else {
                // Decrease the score for wrong guesses
                score--;
                scoredisplay.textContent = score; // Update score display

                if (score === 0) {
                    alert("Game over! You've run out of guesses.");
                } else if (inputvalue < random) {
                    alert("Your guess is too low!");
                } else {
                    alert("Your guess is too high!");
                }
            }
        });


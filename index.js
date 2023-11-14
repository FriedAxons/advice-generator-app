document.addEventListener("DOMContentLoaded", function () {
  // Get the dice icon element
  const rolLDice = document.getElementById("roll-dice");

  // Get the advice text and advice ID elements
  const adviceID = document.getElementById("advice-id");
  const adviceText = document.getElementById("advice-text");

  // Function to fetch advice from the API
  function fetchAdvice() {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => {
        // Update the advice text and ID from the API
        adviceID.innerText = `ADVICE #${data.slip.id}`;
        adviceText.innerText = `"${data.slip.advice}"`;
      })
      .catch((error) => console.error("Error fetching advice:", error));
  }

  // Add a click event listener to the dice icon
  rolLDice.addEventListener("click", fetchAdvice);

  // Fetch advice from the API when the page loads
  fetchAdvice();
});

/* This JavaScript code waits for the DOM to be fully loaded (DOMContentLoaded event) and then adds a click event listener to the dice icon. When the dice icon is clicked, it makes a request to the Advice Slip API, retrieves a new piece of advice, and updates the advice text in your HTML */

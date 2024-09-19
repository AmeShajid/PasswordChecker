

document.addEventListener("DOMContentLoaded", function () {
  // This listens for when the web page is fully loaded.
  // Once the page is ready, it runs the code inside this function.

  function Strength(password) {
    // This function checks how strong the password is.
    // It takes the password the user typed and checks certain things.
    let i = 0; // Start with a score of 0 for the password's strength.

    if (password.length > 6) {
      i++; // If the password is longer than 6 characters, add 1 to the score.
    }
    if (password.length >= 10) {
      i++; // If the password is at least 10 characters, add another 1 to the score.
    }

    if (/[A-Z]/.test(password)) {
      i++; // If the password has at least one uppercase letter (A-Z), add 1 to the score.
    }

    if (/[0-9]/.test(password)) {
      i++; // If the password has at least one number (0-9), add 1 to the score.
    }

    if (/[A-Za-z0-8]/.test(password)) {
      i++; // If the password contains any letters or numbers, add 1 to the score.
    }

    return i; // After checking everything, return the final score (i).
  }

  let container = document.querySelector(".container");
  // Find the container (the box around everything) and save it in a variable called 'container'.

  document.addEventListener("keyup", function (e) {
    // This listens for when the user types something on the keyboard.

    let password = document.querySelector("#YourPassword").value;
    // Get the password the user typed from the password input box.

    let strength = Strength(password);
    // Check the strength of the password by using the 'Strength' function.

    // Now we change the look of the container (the box) based on how strong the password is:
    if (strength <= 2) {
      // If the password strength score is 2 or less, it's weak.
      container.classList.add("weak"); // Add the "weak" style to the container.
      container.classList.remove("moderate"); // Make sure it doesn't have the "moderate" style.
      container.classList.remove("strong"); // Make sure it doesn't have the "strong" style.
    } else if (strength >= 2 && strength <= 4) {
      // If the password strength is between 2 and 4, it's moderate.
      container.classList.remove("weak"); // Remove the "weak" style.
      container.classList.add("moderate"); // Add the "moderate" style.
      container.classList.remove("strong"); // Remove the "strong" style.
    } else {
      // If the password strength is more than 4, it's strong.
      container.classList.remove("weak"); // Remove the "weak" style.
      container.classList.remove("moderate"); // Remove the "moderate" style.
      container.classList.add("strong"); // Add the "strong" style.
    }
  });

  let passwordInput = document.querySelector("#YourPassword");
  // Find the password input box and save it in a variable called 'passwordInput'.

  let show = document.querySelector(".show");
  // Find the place where the "Show" or "Hide" button will go and save it in a variable called 'show'.

  show.onclick = function () {
    // When the "Show" button is clicked, run this code.

    if (passwordInput.type === "password") {
      // If the password is currently hidden (as dots or stars):
      passwordInput.setAttribute("type", "text"); // Change it to show the real password (letters).
      show.classList.remove("hide"); // Remove the "hide" class if it's there.
    } else {
      // If the password is currently showing:
      passwordInput.setAttribute("type", "password"); // Change it back to hidden (dots or stars).
      show.classList.add("hide"); // Add the "hide" class to change the button text back to "Show".
    }
  };
});



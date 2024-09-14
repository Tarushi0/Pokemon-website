/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
    }
    }
}
}
const menuButton = document.getElementById('menu-button');
menuButton.addEventListener('click', () => {
const menu = document.getElementById('menu');
if (menu.style.display === 'block') {
menu.style.display = 'none';
} else {
menu.style.display = 'block';
}
});
// Display favorite character event listener
const displayFavButton = document.getElementById('display-fav');
displayFavButton.addEventListener('click', () => {
const favCharInput = document.getElementById('fav-char');
const displayedFav = document.getElementById('displayed-fav');
displayedFav.textContent = favCharInput.value;
displayedFav.style.color = 'red';
displayedFav.style.fontSize = '20px';
});
function display(){

    //Assigning the variable to the user input
        var userName = document.getElementById("userName").value;
    
    // to print the input here
    document.getElementById("printhere").innerHTML = userName;
    }
    function selectCharacter() {
        // Generate a random number between 1 and 3
        var characterNumber = Math.floor(Math.random() * 3) + 1;
      
        // Select the character based on the random number
        var character;
        if (characterNumber === 1) {
          character = {
            name: "Ash",
            bio: "Ash is the main character in pokemon. His best friend is pikachu",
            image: "images/ash.png",
          };
        } else if (characterNumber === 2) {
          character = {
            name: "Pikachu",
            bio: "Pikachu is ashes main pokemon. his bestfriend is ash",
            image: "images/pika.jpg",
          };
        } else {
          character = {
            name: "Misty",
            bio: "Misty is ashes friend. ash is her best friend",
            image: "images/misty.png",
          };
        }
      
        // Update the character info on the webpage
        document.getElementById("character-name").innerHTML = character.name;
        document.getElementById("character-bio").innerHTML = character.bio;
        document.getElementById("character-image").src = character.image;
      }
      function rateWebsite(rating) {
        var message;
        switch (rating) {
          case "1":
            message = "We're sorry you didn't like our website. We'll try to improve it in the future.";
            break;
          case "2":
            message = "We appreciate your feedback. We'll work on making the website better.";
            break;
          case "3":
            message = "Thanks for your rating. We'll continue to make improvements to the website.";
            break;
          case "4":
            message = "Glad you liked the website! We'll keep working to make it even better.";
            break;
          case "5":
            message = "Wow, we're thrilled you loved our website! Thank you for the high rating.";
            break;
        }
        document.getElementById("message").innerHTML = message;
      }
      function compareCharacters() {
    var randomCharacter = document.getElementById("character-name").innerHTML;
    var userName = document.getElementById("userName").value;
      if (userName.toLowerCase() === randomCharacter.toLowerCase()) {
        alert("You won! The character you entered matches the randomly generated character.");
      } else {
        alert("Sorry, the character you entered does not match the randomly generated character.");
      }
    }
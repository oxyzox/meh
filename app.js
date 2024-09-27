document.addEventListener("DOMContentLoaded", function () {
   
    setTimeout(function () {
      document.querySelector(".preloader").style.display = "none";
      const greetingMessage = document.getElementById("greetingMessage");
      greetingMessage.style.display = "block";
    }, 3000);
  
   
    function moveButton(button) {
      const buttonWidth = button.offsetWidth;
      const buttonHeight = button.offsetHeight;
      const maxX = window.innerWidth - buttonWidth;  
      const maxY = window.innerHeight - buttonHeight;  
  
      const randomX = Math.floor(Math.random() * maxX);
      const randomY = Math.floor(Math.random() * maxY);
  
      button.style.position = "absolute";
      button.style.left = randomX + "px";
      button.style.top = randomY + "px";
    }
  
    
    const yesButton = document.getElementById("yesButton");
    yesButton.addEventListener("click", function () {
      moveButton(yesButton); 
    });
  
    
    const noButton = document.getElementById("noButton");
    noButton.addEventListener("click", function () {
      alert("DM cookie then 🍪");
    });
  });
  
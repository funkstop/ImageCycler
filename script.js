document.addEventListener("DOMContentLoaded", function() {
    let images = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg"];
    let texts = ["This is a mix of two types of seaweed shaped to look like a tree. A week later and it is still not dry.", 
            "A reminder of home - I attempted to try and create the image of a pine tree", 
            "A flower in bloom", 
            "Is the ocean that different from the desert?"];
    let imageElement = document.getElementById("scrollingImage");
    let popupElement = document.getElementById("popup");
    let popupTextElement = document.getElementById("popupText");
    let index = 0;
  
      // Update popup text based on current image index
    function updatePopupText() {
        popupTextElement.textContent = texts[index];
    }
    // Preload images
    images.forEach(src => {
      let img = new Image();
      img.src = src;
    });
  
    // Wheel event to change image
    window.addEventListener("wheel", function(event) {
      event.preventDefault();
  
      if (event.deltaY > 0) {
        index++;
      } else if (event.deltaY < 0) {
        index--;
      }
  
      index = Math.min(Math.max(index, 0), images.length - 1);
      imageElement.src = images[index];

      // Update the popup text when the image changes
      updatePopupText();
    });
  
    // Click event to show/hide popup
    imageElement.addEventListener("click", function() {
      if (popupElement.classList.contains("active")) {
        popupElement.classList.remove("active");
      } else {
        popupTextElement.textContent = texts[index];
        popupElement.classList.add("active");
      }
    });
  });
  
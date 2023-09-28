document.addEventListener("DOMContentLoaded", function() {
    let images = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg"];
    let texts = ["A tree or a monster,", 
            "a pine tree or a broom?", 
            "Search for the flower,", 
            "even in a desert it will bloom"];
    let imageElement = document.getElementById("scrollingImage");
    let popupElement = document.getElementById("popup");
    let popupTextElement = document.getElementById("popupText");
    let index = 0;
  
    function debounce(fn, delay) {
      let timer;
      return function() {
        clearTimeout(timer);
        timer = setTimeout(() => {
          fn.apply(this, arguments);
        }, delay);
      }
    }

    
      // Update popup text based on current image index
    function updatePopupText() {
        popupTextElement.textContent = texts[index];
    }
    // Preload images
    images.forEach(src => {
      let img = new Image();
      img.src = src;
    });
  // ... (rest of the code)

      const debouncedScroll = debounce(function(event) {
        if (event.deltaY > 0) {
          index++;
        } else if (event.deltaY < 0) {
          index--;
        }
        index = Math.min(Math.max(index, 0), images.length - 1);
        imageElement.src = images[index];
        updatePopupText(); // if you implemented the previous suggestion
      }, 30);  // 20ms delay

      window.addEventListener("wheel", function(event) {
        event.preventDefault();
        debouncedScroll(event);
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
  

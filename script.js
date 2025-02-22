
      var swiper = new Swiper(".mySwiper", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
      
        
      
    
      function openPopup() {
        document.getElementById('popup').style.display = 'flex';
      }
  
      // Close the popup
      function closePopup() {
        document.getElementById('popup').style.display = 'none';
      }


      document.addEventListener("DOMContentLoaded", () => {
        const texts = [ "Shubham Rawat", ];
        const typingElement = document.getElementById("typing-text");
        let textIndex = 0; // Tracks the current text
        let charIndex = 0; // Tracks the current character of the text
        const typingSpeed = 300; // Speed of typing in ms
        const pauseBetweenTexts = 1500; // Pause before switching texts
      
        function typeText() {
          if (charIndex < texts[textIndex].length) {
            typingElement.textContent += texts[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeText, typingSpeed);
          } else {
            setTimeout(deleteText, pauseBetweenTexts);
          }
        }
      
        typeText();
      });
     

      // wish me 

      function speak(text) {
        const text_speak = new SpeechSynthesisUtterance(text);
    
        text_speak.rate = 0.8;
        text_speak.volume = 1;
        text_speak.pitch = 1;
       
    
        window.speechSynthesis.speak(text_speak);
    }
    
    function wishMe() {
        var day = new Date();
        var hour = day.getHours();
        if (hour >= 0 && hour < 12) {
            speak("Good Morning sir");
        } else if (hour >= 12 && hour < 17) {
            speak("Good Afternoon sir ");
            
        } else {
            speak("Good Evening sir ");
        }
    }
    
    window.addEventListener('load', () => {
         
      
        
         speak("welcome to shubham portfolio");
         wishMe()

    });


    // latest work
     const button =  document.getElementById("latestwork")
     const target = document.getElementById("target")

     button.addEventListener("click" , ()=> {
      target.scrollIntoView({behavior:"smooth"})
      
     })
     
   
    
    function toggleMode() {
      const body = document.body;
      const wrapper = document.getElementById('wrapper-canvas');
    
      // Toggle dark mode on the body
      body.classList.toggle('dark-mode');
    
      // Change the background color of wrapper
      if (body.classList.contains('dark-mode')) {
        wrapper.style.backgroundColor = '#a0a4f4';
        wrapper.style.color = 'white'; // Optional: Adjust text color for readability
      } else {
        wrapper.style.backgroundColor = ' black';
        wrapper.style.color = 'black'; // Optional: Adjust text color back
      }
    }
    

    const textElement = document.getElementById('typing-text2');
       
    const phrases = ['MERN Stack Developer ', 'Graphic designer', ];
    let currentPhraseIndex = 0;
    let currentCharIndex = 0;
    let typingSpeed = 150; // Typing speed in milliseconds
    let deletingSpeed = 75; // Deleting speed in milliseconds
    let pauseTime = 1000; // Pause before deleting or switching phrase
    let isDeleting = false;
  
    function typeText() {
      const currentPhrase = phrases[currentPhraseIndex];
      if (isDeleting) {
        currentCharIndex--;
        textElement.textContent = currentPhrase.substring(0, currentCharIndex);
        if (currentCharIndex === 0) {
          isDeleting = false;
          currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
          setTimeout(typeText, typingSpeed);
        } else {
          setTimeout(typeText, deletingSpeed);
        }
      } else {
        currentCharIndex++;
        textElement.textContent = currentPhrase.substring(0, currentCharIndex);
        if (currentCharIndex === currentPhrase.length) {
          isDeleting = true;
          setTimeout(typeText, pauseTime);
        } else {
          setTimeout(typeText, typingSpeed);
        }
      }
    }
  
    // Blinking cursor effect
    setInterval(() => {
      cursorElement.classList.toggle('opacity-0');
    }, 500);
  
    // Start typing
    typeText();
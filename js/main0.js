

//Get the button:
mybutton = document.getElementById("back");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
$(document).ready(function() {
    $("#back").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});


let darkBtn = document.getElementById("dark")
let lightBtn = document.getElementById("light")
let header = document.getElementById("darkHeader")

let darkMode = document.getElementById("darkMode")
let footer = document.getElementById("darkFooter")
let main = document.getElementById("main")
darkBtn.addEventListener('click', function onClick() {
//main.scrollIntoView({behavior: 'smooth'});
header.classList.add("darkHeader");

  darkMode.classList.add("dark");
  footer.classList.add("darkFooter");
  
});

lightBtn.addEventListener('click', function onClick() {
 // main.scrollIntoView({behavior: 'smooth'});
    header.classList.remove("darkHeader");
    darkMode.classList.remove("dark");
    footer.classList.remove("darkFooter");
    
  });
  

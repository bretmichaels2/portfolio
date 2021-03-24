$(document).ready(function() {
    
  //title type
  
  const first = "Kelley";
  const last = "Cunningham";
  var x = 0;
  var y = 0;
  var firstDone = false;
  var spaced = false;
  
 function type() {
    if (x < first.length && !firstDone && !spaced) {
      document.getElementById("name").innerHTML += first.charAt(x);
      x++;
      setTimeout(type, 100);
      if (x == 6) {
        firstDone = true;
      }
    }
   if (firstDone && !spaced) {
     document.getElementById("name").innerHTML += "<br>";
     spaced = true;
   }
   else if (y < last.length && firstDone && spaced) {
     document.getElementById("name").innerHTML += last.charAt(y);
      y++;
      setTimeout(type, 100);    
   }
  }
  
setTimeout(type, 1000)
 
  //arrow fade 
  
  setTimeout(arrowFade, 3300)
  
  function arrowFade() {
    $("#titlearrow").fadeIn(1500)
  }
  
  
  //navbar fade in
  
  $(window).scroll(function() {
    if ($(document).scrollTop() > 500) {
     $("#navbar").fadeIn("slow");
      }
    else {
      $("#navbar").fadeOut("slow");;
    }
  });
  
  
  //dropdown menu
  
  var dropDown = false;
  
  $(".dropicon").on("click", function() {
    if (!dropDown) {
      $(".dropdown").css("display", "block");
      dropDown = true;
    }
    else {
      $(".dropdown").css("display", "none");
      dropDown = false;
    }
  });
  
  $(".dropdown").on("click", function() {
    $(".dropdown").css("display", "none");
    dropDown = false;
  })
  
  
  
});
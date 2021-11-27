var prevScrollpos = window.pageYOffset
window.onscroll = function() {
   if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0"
    } else {
    document.getElementById("navbar").style.top = "-50"
    }

    prevScrollpos = currentScrollPos;
  });

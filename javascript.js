function myFunction() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementByClass("sidebar");
  li = ul.getElementByClass('sidebarRow');

  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("h4")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementByClass("header").style.top = "0";
  } else {
    document.getElementByClass("header").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}
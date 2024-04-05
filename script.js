function myFunction() {
  var input, filter, div, divs, a, i, txtValue;
  input = document.getElementById('mySearch');
  filter = input.value.toUpperCase();
  div = document.getElementsByClassName('Tours');
  for (i = 0; i < div.length; i++) {
    divs = div[i].getElementsByClassName('tour1-3');
    for (j = 0; j < divs.length; j++) {
      a = divs[j].getElementsByClassName("text2")[1];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        divs[j].style.display = "";
      } else {
        divs[j].style.display = "none";
      }
    }
  }
}
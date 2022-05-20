function Maxlength() {
  var x;
  x = document.forms["formy"]["Nid"].value;
  var y = document.forms["formy"]["pass"].value;
  if (x.length > 14 ) {
    alert("National Id must be 14 digits and this number exceed 14");
    return false;
  }
  

  if (y == "") {
    alert("this part must be filled");
    return false;
  }
}

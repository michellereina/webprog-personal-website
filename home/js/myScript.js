function myFunction() {
  document.getElementById("demo").innerHTML = "Michelle";
}

function myFunction2() {
  const element = document.getElementsByTagName("M");

  document.getElementById("demo").innerHTML = 'Its ' + element[0].innerHTML;


}
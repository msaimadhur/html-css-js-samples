function checkFunction() {
    var checkBox = document.getElementById("myCheck");
    var text = document.getElementById("text");
    if (checkBox.checked == true){
      text.style.display = "block";
    } else {
       text.style.display = "none";
    }
  }
  function validateData(){
    document.getElementById("result").innerHTML = "Thank you "+ document.getElementById("first_name").value +" for applying for this job.";
    return false;
}
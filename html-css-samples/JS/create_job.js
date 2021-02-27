function validateForm()
{
    var title = document.forms["form1"]["title"].value;
    var job_type = document.forms["form1"]["job_type"].value;
    var department = document.forms["form1"]["department"].value;
    var description = document.forms["form1"]["description"].value;
    var openingdate = document.getElementById("openingdate").value;
    if (title == "")
    {
    alert("Title must be filled out");
     return false;
    }
    if (job_type == "")
    {
        alert("Job type must be filled out");
        return false;
    }
    if (department == "")
    {
        alert("Department must be filled out");
        return false;
    }
    if (description == "")
    {
        alert("Description must be filled out");
        return false;
    }
    if (openingdate == "")
    {
        alert("Date must be filled out");
        return false;
    }
    var today = new Date();
    var userdate = new Date(openingdate);
    if(userdate>today)
    {
        alert("Entered date cannot exceed current date");
    }
    document.getElementById("result").innerHTML = "Job created";
return false;
}
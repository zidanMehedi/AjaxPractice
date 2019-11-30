function load()
{
	document.getElementById("gif").innerHTML = "<img src='load.jpg' height='36px' width = '36px'>";
}


function loadDoc() {
		load();
	  var xhttp = new XMLHttpRequest();
	  var name = document.getElementById('box').value; 
	  if(name == "")
	  {
	  	name = "Enter Your Name";
	  	//name.style.color = "red";
	  }
	  xhttp.open("POST", "logic.php", true);
	  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	  xhttp.send("get="+name);
	  xhttp.onreadystatechange = function() {
	   if (this.readyState == 4 && this.status == 200) {
	     document.getElementById("demo").innerHTML = this.responseText;
	     document.getElementById("gif").innerHTML = "";
	    }
	  };
}
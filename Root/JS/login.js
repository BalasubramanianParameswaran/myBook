
var pwd="";
	function mask() {
		
		 var val = document.getElementById("password").value;
		 pwd += val.charAt(val.length-1);
		 var replace = "";
		
		 for(var i=0;i<val.length;i++) {
			replace += "*"
		 }
		 document.getElementById("password").value=replace;
    }
	
	

function validateForm() {
	var username = document.getElementById("username").value;
	var password = window.pwd;
    if (username == null || username == "") {
        alert("Enter the Username");
        return false;
    } else if (password == null || password == "") {
        alert("Enter the Password");
		document.getElementById("password").value = "";
		document.getElementById("password").focus() ;
        return false;
    } else if (username == "bala" && password == "bala") {
        return true;
    } else if (username.length > 8) {
        alert("Enter the valid Username");
		document.getElementById("username").focus() ;
        return false;
    }  else if (password.length < 6 ) {
        alert("Enter the valid password");
		document.getElementById("password").value = "";
		document.getElementById("password").focus() ;
        return false;
    } else {
		alert("Enter the valid Username and Password");
		document.getElementById("password").value = "";
		document.getElementById("username").focus() ;
		return false;
	}
	
	return false;
}
test = new Date()
month = test.getMonth()
month = (month * 1) + 1
day = test.getDate()
year = test.getFullYear()
document.write(" ",month,"/",day,"/",year," ")


function myClickFunction() {
  	var x=document.getElementById("main-menu");
  
 	if (x.style.display="none"){
 		x.style.display="block";
  	
  	} else (x.style.display="block"){
 		x.style.display="none";
 	}
}


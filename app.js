function myClickFunction(){
	var x=document.getElementById("main-menu");

	if (x.className==="display-none") {
		x.className="display-block";
	} else{
		x.className="display-none";
	}

}


var el = document.getElementById("hamburger");
el.addEventListener("click", myClickFunction, false);
function openNav (){
    	//transition the width of our Sidenav div
    	document.getElementById("mySidenav").style.height ="100%";
    }

    function closeNav (){
    	//transition the width of our Sidenav div when closed
    	document.getElementById("mySidenav").style.height="0%";
    }

document.addEventListener('DOMContentLoaded', function(){
	// alert("Ready");

	var sideNav = document.getElementById("mySidenav");
	sideNav.innerHTML += "<a href='index.html'>Home</a>";
	sideNav.innerHTML += "<a href='about.html'>About</a>";
});
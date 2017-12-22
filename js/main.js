// Menu Content
document.addEventListener('DOMContentLoaded', function(){
    // alert("Ready");

    var sideNav = document.getElementById("mySidenav");
    sideNav.innerHTML += "<a href='index.html'>Home</a>";
    sideNav.innerHTML += "<a href='collabs.html'>Collaborations</a>";
    sideNav.innerHTML += "<a href='philosophy.html'>Style</a>";
    sideNav.innerHTML += "<a href='mailto:3milychu@gmail.com'>Contact</a>";
    sideNav.innerHTML += "<a href='assets/resume.pdf' target='_blank'>Resume</a>";
});

// Menu Open/Close
function openNav (){
    	//transition the width of our Sidenav div
    	document.getElementById("mySidenav").style.height ="100%";
    }

    function closeNav (){
    	//transition the width of our Sidenav div when closed
    	document.getElementById("mySidenav").style.height="0%";
    };
// Menu Content
document.addEventListener('DOMContentLoaded', function(){
    // alert("Ready");

    var sideNav = document.getElementById("mySidenav");
    // sideNav.innerHTML += "<a href='https://3milychu.github.io/index.html'>Home</a>";
    // sideNav.innerHTML += "<a href='https://3milychu.github.io/pages/collabs.html'>Collaborations</a>";
    sideNav.innerHTML += "<a href='https://3milychu.github.io/pages/about.html'>About</a>";
    sideNav.innerHTML += "<a href='https://3milychu.github.io/pages/philosophy.html'>Process</a>";
    sideNav.innerHTML += "<a href='https://linkedin.com/in/3milychu' target='_blank'>LinkedIn</a>";


    var breadcrumb = document.getElementById("breadcrumb");
    breadcrumb.innerHTML += "<a style='font-size:1em' href='kmeansfashion.html'>Forms of Attraction</a>";
    breadcrumb.innerHTML += "<a style='font-size:1.5em;' href='computationalart.html'>Epoch Runway</a>";
    breadcrumb.innerHTML += "<a style='font-size:1em;' href='culturaldata.html'>Met.erials</a>";
    breadcrumb.innerHTML += "<a style='font-size:1.5em' href='csmi.html'>CSMI Insights</a>";
    breadcrumb.innerHTML += "<a style='font-size:1em' href='motion.html'>Mobile Course Animation</a>";
    breadcrumb.innerHTML += "<a style='font-size:1.5em' href='ai-health-diet.html'>NuCook</a>";
    breadcrumb.innerHTML += "<a style='font-size:1em' href='roam.html'>ROAM</a>";
    breadcrumb.innerHTML += "<a style='font-size:1.5em' href='philosophy.html'>Style</a>";
    breadcrumb.innerHTML += "<a style='font-size:1.5em' href='about.html'>About</a>";

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
// Menu Content
document.addEventListener('DOMContentLoaded', function(){
    // alert("Ready");

    var sideNav = document.getElementById("mySidenav");
    sideNav.innerHTML += "<a href='https://3milychu.github.io/index.html'>Home</a>";
    sideNav.innerHTML += "<a href='https://3milychu.github.io/collabs.html'>Collaborations</a>";
    sideNav.innerHTML += "<a href='https://3milychu.github.io/philosophy.html'>Style</a>";
    sideNav.innerHTML += "<a href='mailto:3milychu@gmail.com'>Contact</a>";
    sideNav.innerHTML += "<a href='https://3milychu.github.io/assets/resume.pdf' target='_blank'>Resume</a>";
    sideNav.innerHTML += "<a href='https://3milychu.github.io/about.html'>About</a>";

    var breadcrumb = document.getElementById("breadcrumb");
    breadcrumb.innerHTML += "<a style='font-size:1em' href='kmeansfashion.html'>Clustering Images With Kmeans</a>";
    breadcrumb.innerHTML += "<a style='font-size:1.5em;' href='computationalart.html'>Computational Art</a>";
    breadcrumb.innerHTML += "<a style='font-size:1.2em;' href='culturaldata.html'>Cultural Data</a>";
    breadcrumb.innerHTML += "<a style='font-size:1em' href='managerial-landscape.html'>The Managerial Landscape</a>";
    breadcrumb.innerHTML += "<a style='font-size:1.5em' href='magselector.html'>Interactive Mapping</a>";
    breadcrumb.innerHTML += "<a style='font-size:1.2em' href='timeplay.html'>Time Play</a>";
    breadcrumb.innerHTML += "<a style='font-size:1em' href='biometrictracking.html'>Biometric Tracking</a>";
    breadcrumb.innerHTML += "<a style='font-size:1.5em' href='shortstory.html'>Short Story</a>";
    breadcrumb.innerHTML += "<a style='font-size:1.2em' href='revive.html'>Revive</a>";
    breadcrumb.innerHTML += "<a style='font-size:1em' href='informationinmotion.html'>Information in Motion</a>";
    breadcrumb.innerHTML += "<a style='font-size:1.5em' href='positiveillustration.html'>Positive Illustration</a>";
    breadcrumb.innerHTML += "<a style='font-size:1.2em' href='ux-health-media.html'>Media for Health App</a>";
    breadcrumb.innerHTML += "<a style='font-size:1em' href='refreshedresearch.html'>Refreshed Research</a>";
    breadcrumb.innerHTML += "<a style='font-size:1.5em' href='ai-health-diet.html'>Diet Learning Across the Lifespan</a>";
    breadcrumb.innerHTML += "<a style='font-size:1.2em' href='roam.html'>Augmenting Intuition &amp; Play</a>";
    breadcrumb.innerHTML += "<a style='font-size:1em' href='businessreview.html'>Business Review</a>";
    breadcrumb.innerHTML += "<a style='font-size:1.5em; href='spatialanalysis.html'>Spatial Analysis</a>";
    breadcrumb.innerHTML += "<a style='font-size:1.2em' href='philosophy.html'>Style</a>";
    breadcrumb.innerHTML += "<a style='font-size:1em' href='theories.html'>Motivators</a>";
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
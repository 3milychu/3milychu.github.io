// Menu Content
document.addEventListener('DOMContentLoaded', function(){
    // alert("Ready");

    var sideNav = document.getElementById("mySidenav");
    // sideNav.innerHTML += "<a href='https://3milychu.github.io/index.html'>Home</a>";
    // sideNav.innerHTML += "<a href='https://3milychu.github.io/pages/collabs.html'>Collaborations</a>";
    sideNav.innerHTML += "<a href='https://3milychu.github.io/pages/about.html'>About</a>";
    // sideNav.innerHTML += "<a href='https://3milychu.github.io/pages/philosophy.html'>Process</a>";
    sideNav.innerHTML += "<a href='https://linkedin.com/in/3milychu' target='_blank'>LinkedIn</a>";


    var breadcrumb = document.getElementById("breadcrumb");
    breadcrumb.innerHTML += "<a style='font-size:1.5em' href='notesonperspective.html'>Notes on Perspective</a>";
    breadcrumb.innerHTML += "<a style='font-size:1em' href='higgy.html'>Higgy</a>";
    breadcrumb.innerHTML += "<a style='font-size:1.5em' href='visualvariables.html'>Visualize Uncertainty</a>";
    breadcrumb.innerHTML += "<a style='font-size:1em' href='kmeansfashion.html'>Forms of Attraction</a>";
    breadcrumb.innerHTML += "<a style='font-size:1.5em' href='rds-sql-node.html'>Geo Planner</a>";
    breadcrumb.innerHTML += "<a style='font-size:1em;' href='culturaldata.html'>Met.erials</a>";
    breadcrumb.innerHTML += "<a style='font-size:1.5em;' href='computationalart.html'>Epoch Runway</a>";
    breadcrumb.innerHTML += "<a style='font-size:1em' target=blank href='3milychu.github.io/mm-exercise'>Economic Stability Signatures</a>";
    breadcrumb.innerHTML += "<a style='font-size:1.5em' href='csmi.html'>CSMI Insights</a>";
    breadcrumb.innerHTML += "<a style='font-size:1em' href='isa-app.html'>Income Share Agreements App</a>";
    breadcrumb.innerHTML += "<a style='font-size:1.5em;' href='m4bl.html'>Movement for Black Lives</a>";
    breadcrumb.innerHTML += "<a style='font-size:1em' href='about.html'>About</a>";

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

function toTitleCase(str) {
    return str.replace(
        /\w\S*/g,
        function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}

function scrollToTop() {
    var main_div = document.querySelector('.section-white')
    main_div.scrollTop = 0;
}

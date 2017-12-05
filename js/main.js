// Menu

document.addEventListener('DOMContentLoaded', function(){
    // alert("Ready");

    var sideNav = document.getElementById("mySidenav");
    sideNav.innerHTML += "<a href='index.html'>Home</a>";
    sideNav.innerHTML += "<a href='mailto:3milychu@gmail.com'>Contact</a>";
});

function openNav (){
    	//transition the width of our Sidenav div
    	document.getElementById("mySidenav").style.height ="100%";
    }

    function closeNav (){
    	//transition the width of our Sidenav div when closed
    	document.getElementById("mySidenav").style.height="0%";
    };

    // Menu Links: on hover anchor links

    // function menu1 (){
    //     location.hash = "#" + "featured";
    // };

    // function menu2 (){
    //     location.hash = "#" + "featuredWorks";
    // };

    // function menu3 (){
    //     location.hash = "#" + "dataArt";
    // };

    // function menu4 (){
    //     location.hash = "#" + "ai";
    // };

    // function menu5 (){
    //     location.hash = "#" + "gis";
    // };

    // function menu6 (){
    //     location.hash = "#" + "animation";
    // };

    // function menu7 (){
    //     location.hash = "#" + "interactionDesign";
    // };
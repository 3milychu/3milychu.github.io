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
    breadcrumb.innerHTML += "<a style='font-size:1.5em' href='visualvariables.html'>Visualize Uncertainty</a>";
    breadcrumb.innerHTML += "<a style='font-size:1em' href='kmeansfashion.html'>Forms of Attraction</a>";
    breadcrumb.innerHTML += "<a style='font-size:1.5em;' href='computationalart.html'>Epoch Runway</a>";
    breadcrumb.innerHTML += "<a style='font-size:1em;' href='culturaldata.html'>Movement for Black Lives</a>";
    breadcrumb.innerHTML += "<a style='font-size:1.5em;' href='culturaldata.html'>Met.erials</a>";
    breadcrumb.innerHTML += "<a style='font-size:1em' href='csmi.html'>CSMI Insights</a>";
    breadcrumb.innerHTML += "<a style='font-size:1.5em' href='motion.html'>Mobile Course Animation</a>";
    breadcrumb.innerHTML += "<a style='font-size:1em' href='ai-health-diet.html'>NuCook</a>";
    breadcrumb.innerHTML += "<a style='font-size:1.5em' href='roam.html'>ROAM</a>";
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

function secretMessage() {
    var secret = document.querySelector('#secret');
    var secret_form = document.querySelector('input[type="submit"]');
    var name = document.querySelector('input[name="name"]').value;
    secret_form.addEventListener("click", function() {
            name = name.toLowerCase();
            console.log(name);
            if(name == "oliver gomes"){
                secret.innerHTML="";
                secret.innerHTML="<div class='center_form'><div class='close' id='close_message'>X</div><h2>Hi Oliver,</h2><h3>If you're reading this, I just want to say that I've met with everyone I need to meet with, and Conde is #1. I would be so proud and excited. Please let me know if there's anything I can help with to make things the best they can be for everyone involved. I am open. I have great respect for your vision, enthusiasm and care for the future. You don't see that just anywhere.<br><br>Emily</h3></div>"
                console.log("secret message sent");
                closeMessage();
            } else {
                secret.innerHTML="";
                secret.innerHTML="<div class='center_form'><h2>No messages today. Redirecting..</h2>";
                setTimeout(function(){ 
                    secret.style.display="none";
                }, 1000);
            }
    });
};

function closeMessage() {
    var close_message = document.querySelector('#close_message');
    close_message.addEventListener("click", function() {
         secret.style.display="none";
    })
};

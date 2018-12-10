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
     breadcrumb.innerHTML += "<a style='font-size:1em;' href='culturaldata.html'>Movement for Black Lives</a>";
    breadcrumb.innerHTML += "<a style='font-size:1.5em;' href='culturaldata.html'>Met.erials</a>";
    breadcrumb.innerHTML += "<a style='font-size:1.5em;' href='computationalart.html'>Epoch Runway</a>";
    breadcrumb.innerHTML += "<a style='font-size:1em' target=blank href='3milychu.github.io/mm-exercise'>Economic Stability Signatures</a>";
    breadcrumb.innerHTML += "<a style='font-size:1em' href='csmi.html'>CSMI Insights</a>";
    breadcrumb.innerHTML += "<a style='font-size:1.5em' href='motion.html'>Mobile Course Animation</a>";
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

function toTitleCase(str) {
    return str.replace(
        /\w\S*/g,
        function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}

function secretMessage() {
    var secret = document.querySelector('#secret');
    var secret_form = document.querySelector('input[type="submit"]');
    var name_field = document.querySelector('input[name="name"]');
    var name = document.querySelector('input[name="name"]').value;
    name_field.addEventListener("change", function() {
            name = document.querySelector('input[name="name"]').value;
            name = name.toLowerCase();
            console.log(name);
            if(name == "oliver gomes"){
                document.body.style.zoom = 1.0;
                secret.innerHTML="";
                secret.innerHTML="<div class='center_form'><div class='close' id='close_message'>X</div><h2>Hi Oliver,</h2><h3>If you're reading this, I just want to say *off the record* I've pretty much met with everyone I really need to meet with, and Conde is #1. Please let me know if there's anything I can help with to make things the best they can be for everyone involved. I am open. I have great respect for your vision, enthusiasm and care for the future. You don't see that just anywhere. I would be so proud and excited. <br><br>Emily</h3></div>"
                console.log("secret message sent");
                closeMessage();
            } else if (name == "danielle carrick") {
                document.body.style.zoom = 1.0;
                secret.innerHTML="";
                secret.innerHTML="<div class='center_form'><div class='close' id='close_message'>X</div><h2>Hey Danielle,</h2><h3>Conde is where it's at. What's a girl got to do? Got me sending random messages into black holes while I wait...if I see you again this never happened. I mean, other places are not bad, but you got it going on. Just FYI.<br><br>Emily</h3></div>"
                console.log("secret message sent");
                closeMessage();
            }
            else {
                secret.innerHTML="";
                document.body.style.zoom = 1.0;
                secret.innerHTML="<div class='center_form'><h2>Hi " + toTitleCase(name) +"! No messages right now. Redirecting<ellipsis></ellipsis></h2>";
                setTimeout(function(){ 
                    scrollToTop();
                    secret.style.display="none";
                }, 2000);
            }
    });
};

secretMessage();

function enterNameInput() {
    var name = document.querySelector('input[name="name"]')
    var secret_form = document.querySelector('input[type="submit"]');
    name.addEventListener("keyup", function(event) {
      event.preventDefault();
      if (event.keyCode === 13) {
        secret_form.click();
      }
    });
}

enterNameInput();

function closeMessage() {
    var close_message = document.querySelector('#close_message');
    close_message.addEventListener("click", function() {
         document.body.style.zoom = 1.0;
         scrollToTop();
         secret.style.display="none";
    })
};

function scrollToTop() {
    var main_div = document.querySelector('.section-white')
    main_div.scrollTop = 0;
}

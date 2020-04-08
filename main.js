praxis = document.querySelector('#praxis')
contact = document.querySelector('#contact')
detail = document.querySelector('#detail')
avatar = document.querySelector('.avatar')
close = document.querySelector('.fa')
sidebar = document.querySelector('.sidebar')
body = document.querySelector('body')
html = document.documentElement;


// scrolling avatar
scrollSidebar()

window.onresize=function() {
	scrollSidebar()
}

function scrollSidebar() {
	if(window.innerWidth<550){
		window.onscroll=function() {
			if (praxis.offsetTop-(window.innerHeight*.20) > window.pageYOffset){
				avatar.style.marginLeft="0%"
				avatar.style.marginTop="0%"
			} else if (contact.offsetTop-(window.innerHeight*.20) > window.pageYOffset) {
				avatar.style.marginLeft=window.innerWidth/3 + 'px'
				avatar.style.marginTop="0%"
			} else {
				avatar.style.marginRight="0%"
				avatar.style.marginLeft="auto"
				avatar.style.marginTop="0%"
			}
		}

	} else {
		window.onscroll=function() {
			position = window.scrollY
			height = document.documentElement.scrollHeight - document.documentElement.clientHeight
			console.log(position, height)
			percent = position/height
			rect = sidebar.getBoundingClientRect();
			sidebar_h = rect.height - avatar.clientHeight
			border = parseFloat(getComputedStyle(sidebar).borderWidth);
			console.log(border)
			console.log(sidebar_h)
			console.log(percent, d3.format(".0%")(percent))
			avatar.style.marginLeft="0%"
			if (percent < .90){
				avatar.style.marginTop= (percent * sidebar_h)  + "px"
			} else {
				avatar.style.marginTop= (percent * sidebar_h) - (border*2)  + "px"
			}
			
		}
	}
}


// praxis links
links = praxis.querySelectorAll('h2')
console.log(links)

links[0].onclick=function() {
	console.log('open')
	window.open('portfolio.html', '_blank')
}
links[1].onclick=function() {
	detail.style.marginTop='0vh'
	detail.style.top='0%'
	h1 = detail.querySelector('h1')
	h1.innerHTML='Research'
	p = detail.querySelector('p')
	p.innerHTML="<div class='list'><h3>Text clustering</h3><div class='item'><em>Semantic Dive</em>Interface for visualizing and exploring semantic relationships in text corpuses with researchers from Parsons faculty</div></div>"
	p.innerHTML+="<div class='list'><h3>Real-time audience collection and visualization</h3><div class='item'><em>Live audience sentiment visualization</em>Interface & visualization of real-time audience sentiment during an event</div></div>"
	p.innerHTML+="<div class='list'><h3>Data sonification</h3><div class='item'><em>Criminal</em>Interface & sonification of compas verdicts by ProPublica</div></div>"
	a = detail.querySelector('#link')
	a.innerHTML=""
	close.onclick=function() {
			detail.style.marginTop='100vh'
	}
}
links[2].onclick=function() {
	detail.style.marginTop='0vh'
	detail.style.top='0%'
	h1 = detail.querySelector('h1')
	h1.innerHTML='Courses'
	p = detail.querySelector('p')
	p.innerHTML="<div class='list'><h3>Spring 2020</h3><div class='item'>Core Interaction Studio, BFA Communication Design</div><div class='item'>Information Visualization, BAA Strategic Design & Management</div><div class='item'>Graphic Design: Visual Storytelling, Open Campus</div></div><div class='list'><h3>Summer 2020</h3><div class='item'>Web Development II, Open Campus</div></div><div class='list'><h3>Fall 2020</h3><div class='item'>Information Visualization - Online, BAA Strategic Design & Management</div></div><div class='list'><h3>Spring 2021</h3><div class='item'>Research & Development Methods, BAA Strategic Design & Management</div></div>"
	a = detail.querySelector('#link')
	a.href='https://www.newschool.edu/parsons/faculty/emily-chu/'
	a.innerHTML="@ Parsons School of Design"
	close.onclick=function() {
			detail.style.marginTop='100vh'
	}
}
links[3].onclick=function() {
	detail.style.marginTop='0vh'
	detail.style.top='0%'
	h1 = detail.querySelector('h1')
	h1.innerHTML='Talks'
	p = detail.querySelector('p')
	p.innerHTML="<div class='list'><h3>Upcoming</h3><div class='item'><em>TBD</em><a target ='_blank' href='https://schedule.sxsw.com/2020/events/PP1128191'>Visualizing shared musical experience @ SXSW, Online</a></div></div>"
	p.innerHTML+="<div class='list'><h3>Past</h3><div class='item'><em>3/23/2020</em><a target ='_blank' href='https://www.crowdcast.io/e/women-in-data-science/register'>Notes on Perspective @ IBM</a></div><div class='item'><em>10/3/2019</em><a target ='_blank' href='https://www.eventbrite.com/e/advance-your-data-career-lightning-talks-and-breakout-sessions-tickets-64644410171#'>Data Analysis in Healthcare @ IBM</a></div><div class='item'><em>6/7/2019</em><a href='https://www.aigany.org/event/fresh-grad-2019-part-2/'>Notes on Perspective @ AIGA NY</a></div></div>"
	a = detail.querySelector('#link')
	console.log(a)
	a.href= ''
	a.innerHTML=""
	close.onclick=function() {
			detail.style.marginTop='100vh'
	}
}

// contact links
mails = contact.querySelectorAll('h3')
console.log(mails)
mails[0].onclick=function() {
	window.open('mailto:emily.chu@kinesso.com', '_blank')
}
mails[1].onclick=function() {
	window.open('mailto:chue134@newschool.edu', '_blank')
}


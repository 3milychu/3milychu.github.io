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
			position = window.scrollY
			width = document.documentElement.scrollHeight - document.documentElement.clientHeight
			console.log(position, width)
			percent = position/width
			rect = sidebar.getBoundingClientRect();
			sidebar_w = rect.width - avatar.clientWidth
			border = parseFloat(getComputedStyle(sidebar).borderWidth);
			console.log(border)
			console.log(sidebar_w)
			console.log(percent, d3.format(".0%")(percent))
			avatar.style.marginTop="0%"
			rotation="rotate("+Math.round(percent*300)+"deg);"
			console.log(rotation)
			if (percent < .90){
				avatar.style.marginLeft= (percent * sidebar_w)  + "px"
				avatar.style.transform=rotation
			} else {
				avatar.style.marginLeft= (percent * sidebar_w) - (border*2)  + "px"
				avatar.style.transform=rotation
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
			console.log(percent, d3.format(".0%")(percent), percent*300)
			avatar.style.marginLeft="0%"
			rotation="rotate("+Math.round(percent*300)+"deg);"
			console.log(rotation)
			if (percent < .90){
				avatar.style.marginTop= (percent * sidebar_h)  + "px"
				avatar.style.transform=rotation
			} else {
				avatar.style.marginTop= (percent * sidebar_h) - (border*2)  + "px"
				avatar.style.transform=rotation
			}
			
		}
	}
}


// praxis links
links = praxis.querySelectorAll('h2')
console.log(links)

links[0].onclick=function() {
	console.log('open')
	window.location.replace('studio.html')
}

links[1].onclick=function() {
	console.log('open')
	window.location.replace('product.html')
}

links[2].onclick=function() {
	detail.style.marginTop='0vh'
	detail.style.top='0%'
	h1 = detail.querySelector('h1')
	h1.innerHTML='Research'
	p = detail.querySelector('p')
	p.innerHTML="<div class='list'><h3>Text clustering</h3><div class='item'><em>Semantic Dive</em>Interface for visualizing and exploring semantic relationships in text corpuses with researchers from Parsons faculty</div></div>"
	p.innerHTML+="<div class='list'><h3>Real-time audience sentiment collection and visualization</h3><div class='item'><em>Notes on Perspective Live</em>Interface & visualization of real-time audience sentiment during an event</div></div>"
	p.innerHTML+="<div class='list'><h3>Discrepancies and Disagreements in Classical Chamber Musicians’ Characterisations of a Performance</h3><div class='item'><em>Music & Science Journal publication</em>Time-based visualizations for Neta Spiro and Michael Schober's research on agreements between classical musicians' reflections of a performance.</div></div>"
	a = detail.querySelector('#link')
	a.innerHTML=""
	close.onclick=function() {
			detail.style.marginTop='100vh'
	}
}
links[3].onclick=function() {
	detail.style.marginTop='0vh'
	detail.style.top='0%'
	h1 = detail.querySelector('h1')
	h1.innerHTML='Courses'
	p = detail.querySelector('p')
	p.innerHTML="<div class='list'><h3>Ongoing</h3><div class='item'>Information Design for Infographics and Visual Storytelling - Online, Open Campus</div></div><div class='list'><h3>Fall 2021</h3><div class='item'>Information Visualization</div><div class='item'>Research & Development Methods</div></div></div>"
	p.innerHTML+=""
	a = detail.querySelector('#link')
	a.href='https://www.newschool.edu/parsons/faculty/emily-chu/'
	a.innerHTML="@ Parsons School of Design"
	close.onclick=function() {
			detail.style.marginTop='100vh'
	}
}
links[4].onclick=function() {
	detail.style.marginTop='0vh'
	detail.style.top='0%'
	h1 = detail.querySelector('h1')
	h1.innerHTML='Talks'
	p = detail.querySelector('p')
	// p.innerHTML="<div class='list'><h3>Upcoming</h3></div>"
	p.innerHTML+="<div class='list'><h3>Past</h3><div class='item'><em>8/19/2021</em><a target ='_blank' href='https://mysoundmyway.com.tw/'>Visualization and Interaction of Live Concerts @ 2021 MYSOUNDMYWAY International Conference (2021臺北音樂不斷電)</a></div><div class='item'><em>12/7/2020</em><a target ='_blank' href='https://www.youtube.com/watch?v=rfDMF3KRLlU&t=3s'>Designing Audioreactive Visualizations: Creating art from music data, Data + Art @ Women in Data</a></div><div class='item'><em>06/12/2020</em><a target ='_blank' href='https://aapor.secure-platform.com/a/solicitations/11/sessiongallery/338/application/3463'>Visualizing Time-Based Qualitative Data about Music Performance @ AAPOR Annual Conference 2020</a></div><div class='item'><em>Summer 2020</em><a target ='_blank' href='https://schedule.sxsw.com/2020/events/PP1128191'>Visualizing shared musical experience @ SXSW 2020, Online</a></div><div class='item'><em>3/23/2020</em><a target ='_blank' href='https://www.crowdcast.io/e/women-in-data-science/register'>Notes on Perspective @ IBM</a></div><div class='item'><em>10/3/2019</em><a target ='_blank' href='https://www.eventbrite.com/e/advance-your-data-career-lightning-talks-and-breakout-sessions-tickets-64644410171#'>Data Analysis in Healthcare @ IBM</a></div><div class='item'><em>6/7/2019</em><a href='https://www.aigany.org/event/fresh-grad-2019-part-2/'>Notes on Perspective @ AIGA NY</a></div></div>"
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
	window.open('mailto:emily.chu@openfin.co', '_blank')
}
mails[1].onclick=function() {
	window.open('mailto:chue134@newschool.edu', '_blank')
}
mails[2].onclick=function() {
	window.open('mailto:3milychu@gmail.com', '_blank')
}


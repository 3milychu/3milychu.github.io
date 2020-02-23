praxis = document.querySelector('#praxis')
contact = document.querySelector('#contact')
detail = document.querySelector('#detail')
avatar = document.querySelector('.avatar')
close = document.querySelector('.fa')


// scrolling avatar
window.onscroll=function() {
	if (praxis.offsetTop > window.pageYOffset){
		avatar.style.marginTop="0%"
	} else if (contact.offsetTop > window.pageYOffset) {
		avatar.style.marginTop=window.innerHeight/3 + 'px'
	} else {
		avatar.style.marginTop=window.innerHeight/1.38 + 'px'
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
	h1.innerHTML='Experiments'
	p = detail.querySelector('p')
	p.innerHTML='Coming Soon'
	close.onclick=function() {
			detail.style.marginTop='100vh'
	}
}
links[2].onclick=function() {
	window.open('https://www.newschool.edu/parsons/faculty/emily-chu/', '_blank')
}
links[3].onclick=function() {
	detail.style.marginTop='0vh'
	detail.style.top='0%'
	h1 = detail.querySelector('h1')
	h1.innerHTML='Talks'
	p = detail.querySelector('p')
	p.innerHTML='Coming Soon'
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

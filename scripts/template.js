document.addEventListener('DOMContentLoaded',function(){
	if(navigator.userAgent.match(/mobile|iphone/i)) document.body.className='mobile'
	if(!document.title) document.title=document.getElementsByTagName('h1')[0].textContent
	var a=document.createElement('nav')
	a.innerHTML="[ <a href='http://twideem.github.io/home.html' title='首頁'>HOME</a> | <a href='javascript:history.go(-1)' title='上一頁'>BACK</a> | <a href='javascript:history.go(1)' title='下一頁'>NEXT</a> | <a href='"+(location.pathname.indexOf("pages")!=-1?"../../":"")+"about.html' title='關於 Twideem Civs 個人網站'>ABOUT</a> ]"
	document.body.insertBefore(a,document.body.childNodes[0])
	var b=document.querySelector('article>footer')
	if(b) b.previousSibling.previousSibling.style.borderStyle='solid'
},false)
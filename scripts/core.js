function $(x,y)
{
	if(x[0]=='#') return document.querySelector(x);
	if(x[0]=='*') return document.querySelectorAll(x.substr(1));
	if(y>=0) return document.querySelectorAll(x)[y];
	return document.querySelector(x);
}

function webhosting()
{
	return location.href.match('^h');
}

let _a=document.createElement('nav');
_a.innerHTML=`[ <a href='${location.pathname.indexOf('pag')!=-1?'../../':''}home.html'>首頁</a> | <a href='${location.pathname.indexOf('pag')!=-1?'../../':''}about.html'>關於</a> ]`;

document.addEventListener('DOMContentLoaded',()=>{
	document.documentElement.lang='zh-TW';
	if(document.title=='/') document.title=document.getElementsByTagName('h1')[0].textContent;
	document.body.insertBefore(_a,document.body.childNodes[0]);
});
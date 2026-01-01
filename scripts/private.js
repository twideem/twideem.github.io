let _c=document.getElementsByClassName('private');

function _f4(x,y)
{
	x.style.display=y;
	if(x.toString().match('Paragraph')&&y=='none') x.style.marginTop='21px';

	let g=x.previousSibling.previousSibling;
	if(g&&g.toString().match('HR')) g.style.display=y;
}

function _f5(x,y)
{
	if(x>=0) _f4(_c[x],y);
	else for(let n of _c) _f4(n,y);
}

function hide(x)
{
	_f5(x,'none');
}

function show(x,y='block')
{
	_f5(x,y);
}
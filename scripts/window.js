let _b;

function _f1(x)
{
	let g=x.getContext('2d');
	g.strokeStyle='#8be';
	g.lineWidth=8;
	g.strokeRect(0,0,x.width,x.height);
	g.fillStyle='#8be';
	g.fillRect(0,0,x.width,25);
	g.fillStyle='#fff';
	g.font='normal 12px 細明體';
	g.fillText('╴ □ ╳',x.width-55,17);
	return g;
}

function notepad(x,...y)
{
	_b.height=_b.width*0.563;
	let g=_f1(_b);
	g.font='normal 14px 細明體';
	g.fillText(`${x} - 文字編輯器`,7,17);
	g.fillStyle='#999';
	g.fillText('檔案　編輯　格式　檢視　說明',7,38);
	g.lineWidth=1;
	g.moveTo(4,44);
	g.lineTo(_b.width,44);
	g.stroke();
	g.fillStyle='#333';
	for(let n in y) g.fillText(y[n],10,58+16*n);
}

function cmd(...x)
{
	_b.height=_b.width*0.563;
	let g=_f1(_b);
	g.font='normal 14px 細明體';
	g.fillText('命令列介面',7,17);
	g.fillStyle='#222';
	g.fillRect(4,25,_b.width-8,_b.height-29);
	g.fillStyle='#ddd';
	g.fillText('Command line interface [版本 10.11.1980]',9,40);
	g.fillText('(c) Twideem Civs. 本程式為自由軟體，你可以對其進行再發佈及修改。',9,58);
	for(let n in x) g.fillText(x[n],9,94+18*n);
}

function _f2(x,y)
{
	_f1(x);
	let g=x.getContext('2d');
	g.fillRect(45,5,x.width-112,15);
	g.font='normal 11px 細明體';
	g.fillText('＜ ＞',8,17);
	g.fillStyle='#999';
	g.font=g.font='normal 9px 細明體';;
	g.fillText(y,48,15);
	return g;
}

function msedge(x,...y)
{
	if(y[0].match(/images/)){
		let g=_b;
		let h=new Image();
		h.src=y[0];
		h.onload=function(){
			g.width=h.width+8;
			g.height=h.height+29;
			_f2(g,x);
			g.getContext('2d').drawImage(h,4,25);
		};
	}
	else{
		_b.height=_b.width*0.563;
		let i=_f2(_b,x);
		i.font='normal 14px 細明體';;
		for(let n=0;n<y.length;n++){
			if(y[n].match(/^_/)){
				i.fillStyle='#03f';
				let j=y[n].substr(1);
				i.fillText(j,11,47+20*n);
				i.fillText(j.replace(/[\w\s]/g,'_'),11,47+20*n);
			}
			else{
				i.fillStyle='#333';
				i.fillText(y[n],11,47+20*n);
			}
		}
	}
}

document.addEventListener('DOMContentLoaded',()=>{
	for(_b of $('*canvas')) eval(_b.textContent);
});
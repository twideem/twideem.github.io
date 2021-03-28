document.addEventListener('DOMContentLoaded',function(){
    if(navigator.userAgent.match(/mobile|iphone/i)) document.body.className='mobile'
    var a=document.createElement('nav')
    a.innerHTML="<hr style='border-style:solid;margin:-1px 0'><table><tr><td style='width:50%;text-align:left'><span>[ TWIDEEM CIVS CREATIVE PLACE ]</span></td><td style='width:50%;text-align:right'><span>[ <a href='https://twideem.github.io/home.html' title='首頁'>HOME</a> | <a href='javascript:history.go(-1)' title='上一頁'>BACK</a> | <a href='javascript:history.go(1)' title='下一頁'>NEXT</a> | <a href='"+(location.pathname.indexOf("pages")!=-1?"../../":"")+"about.html' title='關於 Twideem Civs 個人網站'>ABOUT</a> ]</span></td></tr></table><hr style='border-style:dashed;margin:-1px 1px'><br>"
    document.body.insertBefore(a,document.body.childNodes[0])
    var b=document.createElement('nav')
    b.innerHTML="<br><hr style='border-style:dashed;margin:-1px 1px'><table><tr><td style='width:65%;text-align:left'><span>[ <a href='https://google.com'>GOOGLE</a> | <a href='https://www.gamer.com.tw/index2.php?ad=N'>GAMER</a> | <a href='https://eyny.com'>EYNY</a> | <a href='https://www.mobile01.com/'>MOBILE01</a> | <a href='https://ck101.com'>CK101</a> ]</span></td><td style='width:35%;text-align:right'><span>[ <a href='javascript:history.go(-1)' title='上一頁'>BACK</a> | <a href='https://twideem.github.io/home.html' title='首頁'>HOME</a> | <a href='javascript:history.go(1)' title='下一頁'>NEXT</a> ]</span></td></tr></table><hr style='border-style:solid;margin:-1px 0'>"
    document.body.appendChild(b)
    var c=document.querySelector('article>footer')
    if(c) c.previousSibling.previousSibling.style.borderStyle='solid'
},false)
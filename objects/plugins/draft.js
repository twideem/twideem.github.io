
var a=11063

addEventListener("DOMContentLoaded", function(){
    document.documentElement.scrollTop=a;
},true)

onclick=function(){
    document.documentElement.scrollTop=a
}

var element=document.getElementsByTagName('title')[0]
onscroll=function(){
    element.innerHTML=document.documentElement.scrollTop
}
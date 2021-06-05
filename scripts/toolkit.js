var Display={
	hide:function(){
		var elements=document.querySelectorAll('.private')
		for(var n=elements.length;n--;){
			elements[n].style.display='none'
			this._fixParagraphMarginTop(elements[n])
			this._hidePreviousHRElement(elements[n])
		}
	},
	show:function(x){
		if(x||x==0){
			var element=document.querySelectorAll('.private')[x]
			element.style.display='block'
			this._showPreviousHRElement(element)
		}
		else{
			var elements=document.querySelectorAll('.private')
			for(var n=elements.length;n--;){
				elements[n].style.display='block'
				this._showPreviousHRElement(elements[n])
			}
		}
	},
	_fixParagraphMarginTop:function(x){
		if(x.toString().indexOf('Paragraph')>0) x.style.marginTop='21px'
	},
	_hidePreviousHRElement:function(x){
		var element=x.previousSibling.previousSibling
		if(element&&element.toString().indexOf('HR')>0) element.style.display='none'
	},
	_showPreviousHRElement:function(x){
		var element=x.previousSibling.previousSibling
		if(element&&element.toString().indexOf('HR')>0) element.style.display='block'
	}
}
var Random={
	min:0,
	max:1,
	next:function(x,y){
		if(x&&y){
			this.min=x
			this.max=y
		}
		else if(x){
			this.min=1
			this.max=x
		}
		else{
			this.min=0
			this.max=1
		}
		return Math.round(Math.random()*(this.max-this.min))+this.min
	}
}
var Scroll={
	y:0,
	locate:function(){
		this.y=scrollY
	},
	restore:function(){
		scrollTo(0,this.y)
	}
}
var Web={
	hosting:function(){
		if(location.href.indexOf('http')>=0) return true
	}
}
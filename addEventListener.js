//定义一个对象
	var EventUtil={
	//绑定事件，兼容所有浏览器
	addHandler:function(element,type,handler){
	if(element.addEventListener){
	element.addEventListener(type,handler,false);
	}
	else if(element.attachEvent){
	element.attachEvent("on"+type,handler,false);
	}
	},
	//移除事件，兼容所有浏览器
	removeHandler:function(element,type,handler){
	if(element.removeEventListener){
	element.removeEventListener(type,handler,false);
	}
	else if(element.detachEvent){
	element.detachEvent("on"+type,handler,false);
	}
	},
	//返回当前点击的元素
	getTarage:function(e){
	return e.target||e.srcElement;
	},
	//阻止默认行为，比如a标签的跳转
	preventDefault:function(e){
	if(e.preventDefault){e.preventDefault();}
	else{e.returnValue=false;}
	},
	//阻止冒泡
	stopPropagation:function(e){
	if(e.stopPropagation){e.stopPropagation();}
	else{e.cancelBubble=true;}
	}
	
	};

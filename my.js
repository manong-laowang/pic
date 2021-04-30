    //所有封装的脚本放在一个对象里面
	var myjs={
		
    //封装1 addEventListener
	 EventUtil:{
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
	
	},
	
	//封装2 ajax 请求
	ajax:function(obj) {
		var xhr=new XMLHttpRequest(),
			url=obj.url,
			method=obj.method || "get",
			async=typeof(obj.async) === "boolean" ?obj.async: true,
			data=obj.data,
			datas="",
			fn=obj.success;
		if (data && JSON.stringify(data) != "{}")
		{
			for(var i in data){
				datas = datas + i + data[i] + "&";
			}
			datas = datas.replace(/&$/, "");
		}

		if (method === "get" && datas != "")
		{
			url = url + "?" + datas;
		}   

		xhr.onreadystatechange = function() {
			if (xhr.readyState === 4)
			{
				if (xhr.status >= 200 && xhr.status < 300 || qq.status === 304)
				{
					var d = JSON.parse(xhr.responseText);
					fn(d);
				}
			}
		};
		xhr.open(method, url, async);
		xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhr.send(datas);
	}
	
	//封装3
	
	};
	
	
	
/*
//ajax调用说明
    myjs.ajax({
				 //请求地址
				 url:"hpjy.json",
				 //请求方式，若省略此参数，默认为get请求
				 method:"get",
				 //异步还是同步，若省略此参数，默认为true异步
				 async:true,
				 //请求参数，没有参数请省略
				data:{name:"小明",let:123456,pow:123},
				 //请求成功后需要执行的脚本,参数d为服务器返回数据
				 success:function(d) {
					 
				 }
			 });
			 
			 
 */

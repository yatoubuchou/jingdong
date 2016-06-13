// 兼容性通过类名获取
function getClass(className,eleobj){
	eleobj=eleobj||document
	if(eleobj.getElementsByClassName){
		return eleobj.getElementsByClassName(className)
	}
	else{
		var all=eleobj.getElementsByTagName("*");
		var newarr=[]
		for (var i = 0; i < all.length; i++) {
			if(checkClass(className,all[i].className)){
               newarr.push(all[i]);
			}
		}
		return newarr;
	}
}
             //className all[i].ClassName
    function checkClass(str,lstr){
    var arr=lstr.split(" ")
    for (var i = 0; i < arr.length; i++) {
    	if(arr[i]==str){
    		return true
    	}
    }
    return false
    }
// 兼容性获取或修改文本内容
function getText(ele,text){
if(text!=undefined)
{
	if(ele.textContent!=undefined)
	{
        ele.textContent=text;
	}
    else
    {
    	ele.innerText=text;
    }
}
else
{
	if(ele.textContent!=undefined){
		return ele.textContent
	}
	else{
		return ele.innerText
	}
}
}
// 兼容性的获取样式信息
function getStyle(ele,attr){
	if(window.getComputedStyle){
		return getComputedStyle(ele,null)[attr]
	}
	else{
		return ele.currentStyle[attr]
	}
}
// 通过多种方式获取元素的函数
function $(selector,eleobj){
    if(typeof selector=="string"){
    	selector=selector.replace(/^\s*|\s*$/g,"");
	    eleobj=eleobj||document;
        if(/^<[a-z]|[A-Z][a-z]|[A-Z]|[1-6]*>$/g.test(selector)){
            return document.createElement(selector.slice(1,-1))
        }
    	else if(selector.charAt(0)=="."){
    		return getClass(selector.slice(1),eleobj)
    	}
    	else if(selector.charAt(0)=="#"){
            //无从元素里获取Id方法
    		return document.getElementById(selector.substring(1))
    	}
    	else if(/^[a-z]|[A-Z][a-z]|[A-Z]|[1-6]*$/g.test(selector)){
    		return eleobj.getElementsByTagName(selector)
    	}
    }
    else if(typeof selector=="function"){
    	/*window.onload=function(){
    		selector()
    	}*/
        addEvent(window,"load",selector)
    }
}
//只获取某个对象元素子节点
function getChildren(obj){
    var arr=obj.childNodes
    var newarr=[]
    for (var i = 0; i < arr.length; i++) {
        if(arr[i].nodeType==1){
            newarr.push(arr[i])
        }
    }
    return newarr
}
//获取第一个元素子节点
function getFirst(obj){
    return getChildren(obj)[0]
}
//获取最后一个元素子节点
function getLast(obj){
    var arr=getChildren(obj)
    return arr[arr.length-1]
}
//获取下一个元素子节点
function getNext(obj){
    var next=obj.nextSibling
    if(next==null){
        return next
    }
    while(next.nodeType!=1){
        next=next.nextSibling
        if(next==null){
            return next
        }
    }
    return next
}
//获取上一个元素子节点
function getPrevious(obj){
    var next=obj.previousSibling
    if(next==null){
        return next
    }
    while(next.nodeType!=1){
        next=next.previousSibling
        if(next==null){
            return next
        }
    }
    return next
}
function inserAfter(newobj,oldobj){
    var next=getNext(oldobj)
    alert(1)
    var parent=oldobj.parentNode
    return parent.insertBefore(newobj,next)
}
//获取某个元素的文档坐标
function getPosition(obj){
    var lefts=obj.offsetLeft
    var tops=obj.offsetTop
    var parent=obj.parentNode
    while(parent.nodeName!="BODY"){
        if(getStyle(parent,"position")=="absolute"||getStyle(parent,"position")=="relative"){
            lefts+=parent.offsetLeft+parseInt(getStyle(parent,"borderLeftWidth"))
            tops+=parent.offsetTop+parseInt(getStyle(parent,"borderTopWidth"))
        }
        parent=parent.parentNode
    }
    return {x:lefts,y:tops}
}
//兼容性的绑定多个事件
function addEvent(obj,event,fun){
    if(obj.addEventListener){
        obj.addEventListener(event,fun,false)
    }
    else{
        obj.attachEvent("on"+event,fun)
    }
}
//兼容性的删除事件
function removeEvent(obj,event,fun){
    if(obj.addEventListener){
        obj.removeEventListener(event,fun,false)
    }
    else{
        obj.detachEvent("on"+event,fun)
    }
}
//添加滚轮事件
function mousewheel(obj,upfun,downfun){
    if(document.attachEvent)
    //IE、 opera
    { 
        obj.attachEvent("onmousewheel",scrollFn)   
    }
    else if(document.addEventListener)
    { 
    //chrome,safari    -webkit
        obj.addEventListener("DOMMouseScroll",scrollFn,false)
    //firefox     -moz
        obj.addEventListener("mousewheel",scrollFn,false)
    } 
        function scrollFn(e){
            ev=e||window.event
            var dir=ev.detail||ev.wheelDelta
            if(dir==-3||dir==120){
                upfun.call(obj)
        }
            else{
                downfun.call(obj)
        }
    }
        
}



//判断某个元素是否包含有另外一个元素
 function contains (parent,child) {
  if(parent.contains){
     return parent.contains(child) && parent!=child;
  }else{
    return (parent.compareDocumentPosition(child)===20);
  }
 }

 //判断鼠标是否真正的从外部移入，或者是真正的移出到外部；
  function checkHover (e,target) {
   if(getEvent(e).type=="mouseover"){
      return !contains(target,getEvent(e).relatedTarget || getEvent(e).fromElement)&&
    !((getEvent(e).relatedTarget || getEvent(e).fromElement)===target)
   }else{
    return !contains(target,getEvent(e).relatedTarget || getEvent(e).toElement)&&
    !((getEvent(e).relatedTarget || getEvent(e).toElement)===target)
    }
  }


//鼠标移入移除事件
/*
  obj   要操作的对象
  overfun   鼠标移入需要处理的函数
  outfun     鼠标移除需要处理的函数
*/
function hover (obj,overfun,outfun) {
    if(overfun){
      obj.onmouseover=function  (e) {
        if(checkHover(e,obj)){
           overfun.call(obj,e);
        }
      }
    }
    if(outfun){
      obj.onmouseout=function  (e) {
        if(checkHover(e,obj)){
           outfun.call(obj,e);
        }
      }
    }
}
 
  function getEvent(e){
    return e||window.event;
  } 
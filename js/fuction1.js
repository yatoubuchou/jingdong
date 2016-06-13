//兼容性的通过类名获取元素

function getClass(className,obj)
{
   obj=obj||document;
   if(obj.getElementsByClassName)
   {
       return  obj.getElementsByClassName(className)
   }
   else
   {
   	var all=obj.getElementsByTagName("*");
   	var newarr=[]
   	for (var i = 0; i<all.length; i++)
   	 {
   		if(checkClass(className,all[i].ClassName))
   		{
           newarr.push(arr[i]);
   		}
   	}
   	return newarr;

   }
}

   function checkClass(str,lstr)
   {
   	var arr=lstr.split(" ")
   	for (var i = 0; i<=arr.length; i++) {
   	 if(arr[i]==str)
   		{
           return true
   		}
   }
   return false
 }





//兼容性的获取或修改文本内容

function getText(ele,text)
{
     //文本不为空  
   if(text!=undefined)
   {     
       if (ele.textContent!=undefined) 
       {
        ele.textContent=text;
         
      }
       else
        {
          ele.innerText=text;
        }

   } 
      //文本为空  
   else
   {

    if(ele.textContent==undefined)
    {
      return ele.textContent=text;
    }
    else
    {
      return  ele.innerText=text;
    }

   }
}


//兼容性获取样式信息

function getStyle(ele,attr)
{
  if(window.getComputedStyle)
  {
    return getComputedStyle(ele,null)[attr]
  }
  else
  {
    return ele.currentStyle[attr]
  }
}




//通过各种方式获取元素的函数
//选择器  //元素
function $(selector,eleobj)
{   if(typeof selector=="string")
  {
    eleobj=eleobj||document;
    selector=selector.replace(/^\s*|\s*$/g,"");

    if(selector.charAt(0)==".")
    {
      return getClass(selector.slice(1),eleobj)
    }

    else if(selector.charAt(0)=="#")
    {
      return eleobj.getElementById(selector.substring(1))
    }
    else if(/^[a-z|A-Z]*[a-z|A-Z|1-6]*$/g.test(selector))
    {
        return eleobj.getElementsByTagName(selector)

    }
  }

  else if(typeof selector=="function")
   {
    window.onload=function(){
      selector()
   }
  }
}


//
function aa(callback)
{
  window.onload=function(){callback();}
}
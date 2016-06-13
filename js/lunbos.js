function jdlb(container,bannerbox,imgs,btns,left,right){
      var width=parseInt(getStyle(bannerbox,"width"))
         	var num=0;
         	var now=0
         	imgs[0].style.zIndex=1
         	var z=10
         	var t=setInterval(move,2000)
         	function move(){
         		num++;
         		if(num==imgs.length){
         			num=0;
         		}
                imgs[num].style.left=width+"px"
                imgs[num].style.zIndex=z++
                animate(imgs[now],{left:-width})
                animate(imgs[num],{left:0})
                btns[now].style.background="#3e3e3e"
                btns[num].style.background="#C81623"
                now=num
         	}
            for (var i = 0; i < btns.length; i++) {
                btns[i].index=i
                btns[i].onmouseover=function(){
                    if(now<this.index){
                         imgs[this.index].style.left=width+"px"
                         animate(imgs[now],{left:-width})
                    }
                    if(now>this.index){
                         imgs[this.index].style.left=-width+"px"
                         animate(imgs[now],{left:width})
                    }
                    imgs[this.index].style.zIndex=z++;
                    animate(imgs[this.index],{left:0})
                    btns[now].style.background="#3e3e3e"
                    btns[this.index].style.background="#C81623"
                    now=this.index
                }
            }
            container.onmouseover=function(){
                clearInterval(t)
                right.style.display="block"
                left.style.display="block"
            }
            container.onmouseout=function(){
                t=setInterval(move,2000)
                right.style.display="none"
                left.style.display="none"
            }
            right.onclick=function(){
                move()
            }
            left.onclick=function(){
                num--
                if(num==-1){
                    num=imgs.length-1
                }
                imgs[num].style.left=-width+"px"
                animate(imgs[now],{left:width})
                imgs[num].style.zIndex=z++;
                animate(imgs[num],{left:0})
                btns[now].style.background="#3e3e3e"
                btns[num].style.background="#C81623"
                now=num
            }


}
function dyd(box,a){
            box.onmouseover=function(){
                animate(a,{marginLeft:-9},444)
            }
            box.onmouseout=function(){
                animate(a,{marginLeft:0},444)
            }
}


function jdlb1(container,bannerbox,imgs,left,right){
      var width=parseInt(getStyle(bannerbox,"width"))
            var num=0;
            var now=0
            imgs[0].style.zIndex=1
            var z=10
            
            container.onmouseover=function(){
                right.style.display="block"
                left.style.display="block"
            }
            container.onmouseout=function(){
                right.style.display="none"
                left.style.display="none"
            }
            right.onclick=function(){
                num++;
                if(num==imgs.length){
                    num=0;
                }
                imgs[num].style.left=width+"px"
                imgs[num].style.zIndex=z++
                animate(imgs[now],{left:-width},2000)
                animate(imgs[num],{left:0},2000)
                now=num
            }
            left.onclick=function(){
                num--
                if(num==-1){
                    num=imgs.length-1
                }
                imgs[num].style.left=-width+"px"
                imgs[num].style.zIndex=z++
                animate(imgs[now],{left:width},2000)
                animate(imgs[num],{left:0},2000)
                now=num
            }
}


//搜索栏点击隐藏

     function hidden(name){
           name.onfocus=function()
           {
            if(name.value=="疯狂购物城"){
               name.value=""
            }
           }
           name.onblur=function()
           {
            if(name.value==""){
               name.value="疯狂购物城"
            }
           }
     }

//下拉导航


function pilot(firsts,second,links){
            var t
            for (var i = 0; i < firsts.length; i++) {
                firsts[i].index=i
                hover(firsts[i],function(){
                    var that=this
                    t=setTimeout(function(){
                    var value=$("li",second[that.index]).length*40
                    animate(second[that.index],{height:value})
                    },200)
                },function(){
                    clearTimeout(t)
                    animate(second[this.index],{height:0})
                })
            }
            for (var i = 0; i < links.length; i++) {
                links[i].index=i
                hover(links[i],function(){
                    this.style.background="red"
                    this.style.color="#fff"
                },function(){
                    this.style.background=""
                    this.style.color="#444"
                })
            }
}
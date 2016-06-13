$(function()
	{
		//banner图片轮播
		var btnbox=$(".btnbox")[0]
		var btns=$("div",btnbox)
		var container=$(".container")[0]
		var cons=$("a",container)
		var btnxs=$(".btnx")[0]
		var left=$(".left")[0]
		var right=$(".right")[0]

		for (var i = 0; i<btns.length; i++) 
		{
			btns[i].index=i;
			btns[i].onmouseover=function()
			{
				for (var j=0; j<btns.length; j++) 
				{
					btns[j].style.background="#3E3E3E"
					cons[j].style.display="none"
				}
				this.style.background="#C81623"
				cons[this.index].style.display="block"
			}
            btns[i].onmouseout=function()
            {
                num=this.index
            }
		}


		var num=0
		function move()
		{
			num++;
			if(num==btns.length)
            {
            	num=0;
            }
            if(num<0)
            {
            	num=btns.length-1;
            }
            for(var i=0; i<btns.length; i++)
			{
				btns[i].style.background="#3E3E3E"
				cons[i].style.display="none"
            }
                btns[num].style.background="#C81623"
                cons[num].style.display="block"

		 }


		var t=setInterval(move,2000)
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
//< >
     
        left.onclick=function()
        {
        	move()
        	num-=2;
        }

         right.onclick=function()         
          {             
          move() 
          } 

//滚动

        var container1=$(".fzxb-ml-a3")
        var clothes=$(".clothes")
        var btn=$(".btn")
        var left1=$(".left1")
        var right1=$(".right1")
        
        for (var i = 0; i < clothes.length; i++) {
            jdlb(container1[i],clothes[i],$(".keimg",clothes[i]),
                $(".btn1",btn[i]),left1[i],right1[i])  
        }
//抖一抖

        var one=$(".one")
        for (var i = 0; i < one.length; i++) {
            dyd(one[i],$("img",one[i])[0])  
        }  
//arrow

       var pyfaaa=$(".pyfaaa")[0] 
       var pyfaaa3=$(".pyfaaa3")[0] 
       var pyfaaa2=$(".pyfaaa2")  
       var lf=$(".lf")[0]
       var rg=$(".rg")[0] 
       jdlb1(pyfaaa,pyfaaa3,pyfaaa2,lf,rg) 


//右侧导航栏

     var fixed0=$(".fixed0");
     var fixed1=$(".fixed1");
     var fixed2=$(".fixed2");
     for (var i = 0; i < fixed0.length; i++) {
         fixed0[i].index=i;
         hover(fixed0[i],function(){
             fixed1[this.index].style.background="#c81623";
             fixed2[this.index].style.background="#c81623";
             fixed1[this.index].style.borderTopLeftRadius="0";
             fixed1[this.index].style.borderBottomLeftRadius="0";
             animate(fixed2[this.index],{left:-60},300);
         },function(){
             fixed1[this.index].style.background="#7a6e6e"
             fixed2[this.index].style.background="#7a6e6e"
             animate(fixed2[this.index],{left:0},300)
         })
     }


//搜索栏点击隐藏
    var wb=$(".wb")[0]
    hidden(wb)

//购物车
   var car=$(".car")[0]
   var car1=$(".car1")[0]
   var sslbox=$(".ssl-top-right-n")[0]
   addEvent(sslbox,"mouseover",function(){
      this.style.background="#fff"
      this.style.borderBottom=0
      car.style.display="block"
      car1.style.display="block"
   })
   addEvent(sslbox,"mouseout",function(){
      this.style.background=""
      this.style.borderBottom="1px solid #dfdfdf"
      car.style.display="none"
      car1.style.display="none"
   })
    addEvent(car,"mouseover",function(){
      sslbox.style.background="#fff"
      sslbox.style.borderBottom=0
      car.style.display="block"
      car1.style.display="block"
   })
   addEvent(car,"mouseout",function(){
      sslbox.style.background=""
      sslbox.style.borderBottom="1px solid #dfdfdf"
      car.style.display="none"
      car1.style.display="none"
   })

// 送至北京
var szbjbox=$(".szbj-box")[0];
var xlszbj=$(".xl-szbj")[0];
szbjbox.onmouseover=function(){
    szbjbox.style.background="#fff"
    xlszbj.style.display="block"
}
szbjbox.onmouseout=function(){
    szbjbox.style.background="#F1F1F1"
    xlszbj.style.display="none"
}
xlszbj.onmouseover=function(){
    szbjbox.style.background="#fff"
    xlszbj.style.display="block"
}
xlszbj.onmouseout=function(){
    szbjbox.style.background="#F1F1F1"
    xlszbj.style.display="none"
}
// 我的京东
var wddd1=$(".wddd1")[0];
var xl2=$(".xl2")[0];
wddd1.onmouseover=function(){
    wddd1.style.background="#fff"
    xl2.style.display="block"
}
wddd1.onmouseout=function(){
    wddd1.style.background="#F1F1F1"
    xl2.style.display="none"
}
xl2.onmouseover=function(){
    wddd1.style.background="#fff"
    xl2.style.display="block"
}
xl2.onmouseout=function(){
    wddd1.style.background="#F1F1F1"
    xl2.style.display="none"
}
// 手机京东
var wddd2=$(".wddd2")[0];
var xl3=$(".xl3")[0];
wddd2.onmouseover=function(){
    wddd2.style.background="#fff"
    xl3.style.display="block"
}
wddd2.onmouseout=function(){
    wddd2.style.background="#F1F1F1"
    xl3.style.display="none"
}
xl3.onmouseover=function(){
    wddd2.style.background="#fff"
    xl3.style.display="block"
}
xl3.onmouseout=function(){
    wddd2.style.background="#F1F1F1"
    xl3.style.display="none"
}
// 关注京东
var wddd3=$(".wddd3")[0];
var xl4=$(".xl4")[0];
wddd3.onmouseover=function(){
    wddd3.style.background="#fff"
    xl4.style.display="block"
}
wddd3.onmouseout=function(){
    wddd3.style.background="#F1F1F1"
    xl4.style.display="none"
}
xl4.onmouseover=function(){
    wddd3.style.background="#fff"
    xl4.style.display="block"
}
xl4.onmouseout=function(){
    wddd3.style.background="#F1F1F1"
    xl4.style.display="none"
}
// 客户服务
var wddd4=$(".wddd4")[0];
var xl5=$(".xl5")[0];
wddd4.onmouseover=function(){
    wddd4.style.background="#fff"
    xl5.style.display="block"
}
wddd4.onmouseout=function(){
    wddd4.style.background="#F1F1F1"
    xl5.style.display="none"
}
xl5.onmouseover=function(){
    wddd4.style.background="#fff"
    xl5.style.display="block"
}
xl5.onmouseout=function(){
    wddd4.style.background="#F1F1F1"
    xl5.style.display="none"
}
// 网站导航
var wddd5=$(".wddd5")[0];
var xl6=$(".xl6")[0];
wddd5.onmouseover=function(){
    wddd5.style.background="#fff"
    xl6.style.display="block"
}
wddd5.onmouseout=function(){
    wddd5.style.background="#F1F1F1"
    xl6.style.display="none"
}
xl6.onmouseover=function(){
    wddd5.style.background="#fff"
    xl6.style.display="block"
}
xl6.onmouseout=function(){
    wddd5.style.background="#F1F1F1"
    xl6.style.display="none"
}



// 返回顶部

    var top=$(".top")[0];
    top.onclick=function(){
      obj=document.body.scrollTop==0?document.documentElement:document.body;
    animate(obj,{scrollTop:0},1000)
}

// banner左边
  var bannerleftlist=$(".banner-left-list");
  var jydq=$(".jydq");
  var bannerleftdhlist=$(".banner-leftdh-list");
  for (var i = 0; i < bannerleftlist.length; i++) {
   bannerleftlist[i].index=i;
   hover(bannerleftlist[i],function(){
    this.style.background="#fff";
      jydq[this.index].style.color="#C81623";
      bannerleftdhlist[this.index].style.display="block";
   },function(){
      this.style.background="";
      jydq[this.index].style.color="#fff";
      bannerleftdhlist[this.index].style.display="none";
   })
   hover(bannerleftdhlist[i],function(){
    // bannerleftlist[this.index].style.background="#fff";
     // jydq[this.index].style.color="#C81623";
      this.style.display="block";
   },function(){
     // bannerleftlist[this.index].style.background="";
      // jydq[this.index].style.color="#fff";
      this.style.display="none";
   })
  };


// 左侧楼层跳转
var btnbox1=$(".btnbox1")[0];
var btn=$(".btn");
var words=$(".word");
var nums=$(".num");
var floors=$(".floor");
var obj;
        //左侧边栏的显示隐藏效果
        addEvent(window,"scroll",function(){
     obj=document.documentElement.scrollTop==0?document.body:document.documentElement;
         if(obj.scrollTop>1000){
            btnbox1.style.display="block"
         }else{
            btnbox1.style.display="none"
         }          
        })
        //楼层按钮的点击效果 和鼠标滑过效果
        var flag=true;
        for (var i = 0; i < btn.length; i++) {
            btn[i].index=i;
            btn[i].onclick=function(){
               flag=false;
               var top=floors[this.index].offsetTop;
               animate(obj,{scrollTop:top},1000,function(){
                 flag=true;
               })
               for (var j = 0; j < btn.length; j++) {
                 words[j].style.zIndex="1"
                 nums[j].style.zIndex="2"
               };
               words[this.index].style.zIndex="2"
               nums[this.index].style.zIndex="1"
               words[this.index].aa=true;
            }
            hover(btn[i],function(){
                words[this.index].style.zIndex="2"
                nums[this.index].style.zIndex="1"
            },function(){
               if(!words[this.index].aa){
                words[this.index].style.zIndex="1"
                nums[this.index].style.zIndex="2"
                }
            })
        };
        //页面滚动时文字的切换效果
        addEvent(window,"scroll",function(){
           var scrollTop=obj.scrollTop;
          if(flag){
           for (var i = 0; i < floors.length-1; i++) {
             if(scrollTop>=floors[i].offsetTop&&scrollTop<floors[i+1].offsetTop){
                for (var j = 0; j < words.length; j++) {
                    words[j].style.zIndex="1"
                    nums[j].style.zIndex="2"
                    words[j].aa=false;
                };
                words[i].style.zIndex="2"
                nums[i].style.zIndex="1"
                words[i].aa=true;
             }
           };
           if(scrollTop>=floors[floors.length-1].offsetTop){
               for (var j = 0; j < words.length; j++) {
                    words[j].style.zIndex="1"
                    nums[j].style.zIndex="2"
                    words[j].aa=false;
                };
             words[floors.length-1].style.zIndex="2"
             nums[floors.length-1].style.zIndex="1"
             words[floors.length-1].aa=true;
           }
          }
        })

//选项卡效果
function optionbox(xyz,xyz1,xyz2){
   for (var i = 0; i < xyz2.length; i++) {
        xyz2[i].index=i
        hover(xyz2[i],function(){
           for (var i = 0; i < xyz2.length; i++) {
             xyz[i].style.display="none"
             xyz2[i].style.borderTop="0"
             xyz2[i].style.borderLeft= "0"
             xyz2[i].style.borderRight= "0"
             xyz2[i].style.background= ""
             xyz2[i].style.color= ""
             xyz1[i].style.display="block"
           }
             xyz1[this.index].style.display="none"
             xyz[this.index].style.display="block"
             this.style.borderTop="3px solid #C81623"
             this.style.borderLeft= "1px solid #C81623"
             this.style.borderRight= "1px solid #C81623"
             this.style.color= "#C81623"
             this.style.background= "#FFF"
        })
      }
}












})
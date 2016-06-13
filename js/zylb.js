function  Jdld(box,inner,btns,left,right)
{
   var num=1;
    var t=setInterval(lunbo,2000)
    
     var flag=true;
           
    var flag=true;

    function lunbo()
{ 
    if(flag){
        flag=false;
            }

     num++;
     if(num==btns.length-1)
     {
        animate(inner,{left:-num*600},function(){
            num=1;
            inner.style.left="-600px"})
         for(var i=0; i<btns.length; i++)
            {
                btns[i].style.background="#ccc"
              
              
            }
            btns[1].style.background="red"
        
     }
     else if(num==0)
     {
        animate(inner,{left:-num*600},function(){num=btns.length;inner.style.left="-3000px"})
         for(var i=0; i<btns.length; i++)
            {
                btns[i].style.background="#ccc"
              
            
              
            }
            btns[5].style.background="red"
        

    }
     else
     {
        animate(inner,{left:-num*600})
         for(var i=0; i<btns.length; i++)
            {
                btns[i].style.background="#ccc"
            }
            btns[num-1].style.background="red"
          
     }
        
}


for (var i = 0; i<btns.length; i++) 
        {
            btns[i].index=i;
            btns[i].onmouseover=function()
            {
                for (var j=0; j<btns.length; j++) 
                {
                    btns[j].style.background="#ccc"
                    animate(inner,{left:(this.index+1)*-600})
                }
                this.style.background="red"
             
            }
             
            btns[i].onmouseout=function()
            {
                num=this.index;
            }


        }






//鼠标放上离开  

   box.onmouseover=function()
   {
    clearInterval(t)
   }
   box.onmouseout=function()
   {
    t=setInterval(lunbo,2000)
   }


// <>

   lefta.onclick=function()
   {
    num-=2;
    lunbo()
   }
   righta.onclick=function()
   {
    lunbo()
   }

// 延迟
   btns[0].style.background="#ccc";
   var timeout;
     for(var i=0;i<btns.length;i++)
     {
        btns[i].index=i;
        btns[i].onmouseover=function()
        {
            var that=this;
            clearTimeout(timeout)
            timeout=setTimeout(function(){
                for(var i=0;i<btns.length;i++)
                {
                    btns[i].style.background="#ccc";

                }
                that.style.background="red"

                animate(inner,{left:(that.index+1)*-600},500)
            })

        }

        btns[i].onmouseout=function(){
            num=this.index+1;
        }
     }

})

}
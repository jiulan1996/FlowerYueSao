/**
 * Created by s on 2016/9/8.
 */
var Lunbo=function(){
    var lunbo=document.getElementById("lunbo_1");
    var img=document.getElementById('bg');
    var yuandian=document.getElementById('yuandian').getElementsByTagName('i');
    var clickFlag=true;
    var distance=document.body.clientWidth;
    var marleft=0;
    var index=0;
    var start= 0,end=0;
    var timer;
    Lunbo.prototype.active=function(){
        function go(){
            if(clickFlag){
                index++;
                if(index>3){
                    index=0;
                }
                marleft=-distance*index;
                animate(marleft);
                light(index);
            }
            clickFlag=false;
        }

        function animate(fangxiang){
            start=parseInt(img.style.left);
            end=fangxiang;
            var change=end-start;
            var time=30;
            var jishi=0;
            var t;
            t=setInterval(function(){
                jishi++;
                if(jishi>=time){
                    clearInterval(t);
                    clickFlag=true;
                }
                img.style.left=start+change/time*jishi+'px';
                if(index==3&&jishi>=time){
                    img.style.left=0+'px';
                    index=0;
                }
            },17)
        }

        function light(index){
            if(index==3){
                index=0;
            }
            for(var i=0;i<yuandian.length;i++){
                yuandian[i].style.backgroundPosition="0 0";
            }
            yuandian[index].style.backgroundPosition="-32px 0";
        }

        for(var i=0;i<yuandian.length;i++){
            yuandian[i].num=i;
            yuandian[i].onmouseover=function(){
                index=this.num;
                marleft=-distance*index;
                animate(marleft);
            }
        }
        timer=setInterval(go,3000);
        lunbo.onmouseover=function(){
            clearInterval(timer);
        }
        lunbo.onmouseout=function(){
            timer=setInterval(go,3000);
        }
    }

}

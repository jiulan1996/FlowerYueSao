/**
 * Created by s on 2016/8/13.
 */
window.onload=function(){
    var content=document.getElementById('content');
    var lunbo=document.getElementById('lunbo');
    var button=document.getElementById('button').getElementsByTagName('span');
    var index=1;
    var animate=false;
    var timer;

    var bg_go=new Lunbo();
    bg_go.active();

    function showButton(){
        for (var i = 0; i < button.length ; i++) {
            if( button[i].className == 'on'){
                button[i].className = '';
                break;
            }
        }
        button[index-1].className = 'on';
    }

    function animated(offset){
        animate=true;
        var newleft=parseInt(lunbo.style.left)+offset;
        var time=300;//位移总时间
        var interval=10;//位移间隔
        var speed=offset/(time/interval);//每次位移量

        function go(){
            if((speed<0&&parseInt(lunbo.style.left)>newleft)||(speed>0&&parseInt(lunbo.style.left)<newleft)){
                lunbo.style.left=parseInt(lunbo.style.left)+speed+'px';
                setTimeout(go,interval);
            }
            else{
                animate=false;
                lunbo.style.left=newleft+'px';
                if(newleft>-310){
                    lunbo.style.left=-930+'px';
                }
                if(newleft<-930){
                    lunbo.style.left=-310+'px';
                }
            }
        }
        go();
    }

    function play(){
        timer=setInterval(function(){
            if(index==3){
                index=1;
            }
            else{
                index+=1;
            }
            if(!animate)
            {
                animated(-310);
            }
            showButton();
        },3000);
    }

    function stop(){
        clearInterval(timer);
    }

    for (var i = 0; i < button.length; i++){
        button[i].onmouseover=function(){
            if(this.className=='on'){
                return;
            }
            var myIndex=parseInt(this.getAttribute('index'));/*获取自定义属性*/
            var offset=-310*(myIndex-index);

            index=myIndex;
            showButton();
            if(!animate){
                animated(offset);
            }
        }
    }

    content.onmouseover=stop;
    content.onmouseout=play;

    play();
}


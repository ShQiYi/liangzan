var imgList = document.getElementById('showArea');
var imgListA = imgList.getElementsByTagName('a');

imgList.style.width = imgListA.length*68+22+'px';
for(var i = 0;i<imgListA.length;i++){
    imgListA[i].onclick=function(){
        for(var i = 0;i<imgListA.length;i++){
            imgListA[i].className = 'baby-photo-list-li';
        }
        this.className = 'baby-photo-list-li active';
    }
}

var goL = document.getElementById('gol');
var goR = document.getElementById('gor');
var ulleft = 0;
goL.onclick = function(){
    imgList.style.left = ulleft-68+'px';

    if(ulleft<-(imgListA.length*68-160)){
        return ;
    }
    ulleft = ulleft-68;
};
goR.onclick = function(){
    imgList.style.left = ulleft+68+'px';
    if(ulleft>imgListA.length*68-300){
        return;
    }
    ulleft = ulleft+68;

};
/*相关商品*/


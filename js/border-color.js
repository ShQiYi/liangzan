clickActive(".collect-colour li");
clickActive('.model-ul li');
function clickActive(str){
    var btn = document.querySelectorAll(str);
    var btnClass = (btn[0].className).replace('active','');
    for(var i =0;i<btn.length;i++){
        btn[i].onclick=function(){
            for(var i =0;i<btn.length;i++){
                btn[i].className = btnClass;
            }
            this.className = btnClass+'active';
        }
    }
}



/*购物车 点击*/
clickActive1(".shopping-cart a");
function clickActive1(str){
    var btn = document.querySelectorAll(str);
    var btnClass = (btn[0].className).replace('active1','');
    for(var i =0;i<btn.length;i++){
        btn[i].onclick=function(){
            for(var i =0;i<btn.length;i++){
                btn[i].className = btnClass;
            }
            this.className = btnClass+'active1';
        }
    }
}



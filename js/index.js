window.onload = function () {
    mv.app.toTip();
} ;
var mv = {};
mv.ui = {};
mv.ui.textChange = function (obj,str) {
    if(obj.value == str){
        obj.value = '';
    }
    else {
        obj.value = str;
    }
};
mv.app = {};
mv.app.toTip = function () {
    var oText = document.getElementById('top');

    oText.onfocus = function () {
        mv.ui.textChange(oText,'请输入商品名字');
    };
    oText.onblur = function () {
        mv.ui.textChange(oText,'请输入商品名字');
    };
};


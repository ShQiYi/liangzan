function tab(strbtn,strcon) {

    var tabBtn = document.querySelectorAll(strbtn);

    var tabCon = document.querySelectorAll(strcon);

    var tabBtnClass = (tabBtn[0].className).replace('active', '');
    for (var i = 0; i < tabBtn.length; i++) {

        tabBtn[i].index = i;
        tabBtn[i].onclick = function () {

            for (var i = 0; i < tabBtn.length; i++) {

                tabBtn[i].className = tabBtnClass;
            }

            this.className = tabBtnClass + 'active';
            for (var i = 0; i < tabCon.length; i++) {

                tabCon[i].style.display = 'none';
            }

            tabCon[this.index].style.display = 'block';
        }

    }
}

/*
* tab(".combining-ul a",".combining-lamp-box");在 html中调用
* .combining-ul 标题上一级的 类名
*
*
* combining-lamp-box 内容盒子的类名
*
*/
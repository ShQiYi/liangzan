addShuLie('.number-box li');
function addShuLie(str) {

    var btn=document.querySelectorAll(str);
    var ShuLie=0;

    btn[0].onclick = function () {

        if (0>=ShuLie){
            btn[1].innerText=ShuLie;

            return
        }
        else {
            ShuLie --;
            btn[1].innerText=ShuLie;
        }
    };
    btn[2].onclick = function () {
        ShuLie ++;
        btn[1].innerText = ShuLie;
    }
}
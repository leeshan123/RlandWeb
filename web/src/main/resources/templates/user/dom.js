window.onload = function(){
    function printResult(){
        var x,y;

        x = prompt("x 값을 입력하세요",0);
        y = prompt("y 값을 입력하세요",0);
        alert(x+y);
        btnPrint.value=x+y;
    }

    btnPrint.onclick=printResult;
};
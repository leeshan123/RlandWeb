
window.addEventListener("load", function(){
    // var section = this.document.getElementById("s1");
    // var input = section.getElementsByClassName("input")[0];
    // var button = section.getElementsByClassName("button")[0];
    var section = document.querySelector("#s1");
    // var input = section.querySelector(".input");
    var input = section.querySelector("input[type=text]");
    var button = section.querySelector(".button");

    button.onclick = function(){
        input.value = "안녕하세요";
    };

    
});

// -------------------------------------------------------------

    window.addEventListener("load", function(){
        var btnPrint = this.document.getElementById("btn-print");
        btnPrint.onclick = printSum;

        function printSum(){
            var x = prompt('x: ');
            var y = prompt('y: ');
    
            x = parseInt(x);
            y = parseInt(y);
    
            console.log(x+y);


    
    
        }
    });

    //8강 계산기 예제
    window.addEventListener("load",function(){
        //이걸 까먹음
        var section = this.document.querySelector("#s2");

        var xinput = section.querySelector(".x-input");
        var yinput = section.querySelector(".y-input");
        var button = section.querySelector(".button");
        var resultSpan = section.querySelector("div>span>span");
        
        button.onclick = printSum;

        function printSum(){
            //팔스인트 까먹지 말고
            var x = parseInt(xinput.value);
            var y = parseInt(yinput.value);

            console.log(x+y);

            resultSpan.innerHTML="안<br>녕</br>";
            // resultSpan.textContent="계산결과: "+ (x+y);
            // resultSpan.textContent= x+y;


        };



    });

      //9강 이벤트 객체
    window.addEventListener("load",function(){
        var section = this.document.querySelector("#s3");
        var txtInput = section.querySelector("input[type=text]");
        var box = section.querySelector("div");
        var divInput = box.querySelector("input[value='/']");

        divInput.onclick = function(e){
            e.stopPropagation();

            console.log("나눗셈연산");
        };

        var box = section.querySelector("div");
        box.onclick = function(e){
            e.preventDefault();

            if(e.target.nodeName != "INPUT")
                return;
            
            console.log("버튼클릭");
            txtInput.value += e.target.value;
        };
        
        
        // var btnButtons = section.querySelectorAll(".num");
        // var btnClickHandler = function(e){
        //     txtInput.value += e.taget.value;
        // };

        // btnInputs[0].onclick = function(){
        //     txtInput.value +="1";
        // }
        // btnInputs[1].onclick = function(){
        //     txtInput.value +="2";
        // }

        //반복문
        // for(var i=0; i<btnButtons.length; i++){
        //     btnButtons[i].onclick = btnClickHandler;
            // btnButtons[i].onclick = function(e){ //event객체 = e
            // txtInput.value += e.target.value; //전역변수라서 6이 나오는 문제
            // };
        
    


    });

    //14강 스타일 다루기 #s4
    window.addEventListener("load",function(){
        let section = this.document.querySelector("#s4");
        let styleInput = section.querySelector(".style-input");
        let widthInput = section.querySelector(".width-input");
        let radiusInput = section.querySelector(".radius-input");
        let colorInput = section.querySelector(".color-input");
        let item = section.querySelector(".item");
        let outputDiv = section.querySelector(".output");

        //바꼈을때onchange
        //클릭했을때onclick
        //최종적으로 값이 바꼈을때 oninput
        styleInput.oninput = function(e){
            //border-style 값을 대입하시오
            item.style.borderStyle = styleInput.value; 
            console.log(styleInput.value);
            outputDiv.innerText = item.style.cssText;
        };

        widthInput.oninput = function(e){
            //border-width 값을 대입하시오
            item.style.borderWidth = widthInput.value+"px"; 
            outputDiv.innerText = item.style.cssText;
        }

        radiusInput.oninput = function(e){
            //border-width 값을 대입하시오
            item.style.borderRadius = radiusInput.value+"px"; 
            outputDiv.innerText = item.style.cssText;
        }

        colorInput.oninput = function(e){
            //border-width 값을 대입하시오
            item.style.borderColor = colorInput.value; 
            outputDiv.innerText = item.style.cssText;
        }

    });

    //15강 스타일 다루기 #s5
    window.addEventListener("load",function(){
        let section = this.document.querySelector("#s5");


    });


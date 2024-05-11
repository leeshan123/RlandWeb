window.addEventListener("load", ()=>{
    const section = document.querySelector("#form-section");
    const xInput = section.querySelector("input[name='x']");
    const yInput = section.querySelector("input[name='y']");
    const initSumbmit = section.querySelector("input[value='초기화']");
    const calcSubmit = section.querySelector("input[value='계산하기']");
    const resultSpan = section.querySelector(".result-span");

    let x = 3;
    let y = 4;

    xInput.value = x;
    yInput.value = y;

    calcSubmit.onclick = (e)=>{
        e.preventDefault();
        let x = parseInt(xInput.value);
        let y = parseInt(yInput.value);
        let result = x+y;
        console.log(x+y);
        // resultSpan.innerText = result;
        resultSpan.textContent="계산결과: "+(result);
    }

    initSumbmit.onclick = (e)=>{
        e.preventDefault();
        let x = 0;
        let y = 0;
        let result = 0;
        resultSpan.textContent="계산결과: "+(result);
    }



});
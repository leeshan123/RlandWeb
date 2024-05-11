export default function test1(){
    console.log("module2 test1");
}

function test2(){
    console.log("module2 test2");
}
function test3(){
    console.log("module2 test3");
}


//객체 뽀개기가 비슷하다.
export {test2, test3}
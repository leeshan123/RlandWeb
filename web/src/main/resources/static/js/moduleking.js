console.log("\n");
console.log("\n");
console.log("4월 12일");
console.log("\n");
console.log("\n");


//Module
//HTML에 타입에 module이라고 지정해줘야함
//default는 이름이 쉽게 바뀌지만 default가 아닌 값은 쉽게 바뀌지 않음.
//as ~형식으로 바꿔줘야함.
import m1test1,{test2} from 'gm';
import m2test1,{test2 as m2test2, test3 as t3} from './module2.js';

{
    //default는 중괄호에 안넣어도 되고 default가 아닌 값은 중괄호를 넣어줘야함

    m1test1();
    test2();
    m2test1();
    m2test2();
    t3();

    let rand = 1;

    if(rand == 1){
        import("./module1.js")
        .then(({default:test1, test4 ,test3})=>{
            test3()
            test4()
            test1()
        });
    }
}

//프록시함수
{
    let exam = {kor:10, eng:20, math:30} //왕자님 : target
    console.log("target, kor:", exam.kor);

    //방법1
    let logHandler1 = {
        get(target, prop, receiver){
            console.log("logHandler시작1");
            return "world";
        },
    };

    // 방법2 3가지 다 가능
    let logHandler2 = {
        get(target, prop, receiver){
            console.log("logHandler시작2");
            
            return target[prop];
            // return Reflect.get(target,prop,receiver);
            // return Reflect.get(...arguments);
        },
    };

    let proxy = new Proxy(exam, logHandler2);
    console.log("proxy: ", proxy.kor, proxy.eng, proxy.math);
}


//{} 중괄호 : 객체 [] 대괄호 : 배열.

// Advanced JSON #1 #2 
{
    let kor = 30;
    let eng = 40;
    let math = 100;

    // let exam = {
    //     kor:kor,
    //     eng:eng,
    //     math:math
    // }



    let exam = {
        kor,
        eng,
        math,
        total(){
            return this.kor+this.eng+this.math;
        }
    };
    console.log(exam.kor, ",", exam.eng, ",", exam.total());

}

// Advanced JSON #3 Computed Property
// 심볼쓰려고 쓴다. 아직은 이해가 안됨
{
    let col = "kor";
    let eng = 40;
    let math = 100;

    //오브잭트를 생성
    let exam = {
        [col]:10,
        eng,
        math,
        total(){
            return this.kor+this.eng+this.math;
        }
    };
    console.log(exam.kor, ",", exam.eng, ",", exam.total());
}

// Advanced JSON #4 Destructing
{

    function print(exam){ //객체를 뽀개면서 해도 잘된다.exam -> {kor,eng,math}

    

        // let total = exam.kor + exam.eng + exam.math;
        // console.log(exam.kor,exam.eng, total);

        //낱개로 뿌시기(Destruckturing)
        // let kor = exam.kor;
        // let eng = exam.eng;
        // let math = exam.math;
        //변수선언
        //순서 바꿔도 알아먹음
        let{eng,math,kor} = exam;

        let total = kor+eng+math;
        console.log(kor,eng,math,total);


    }
    print({kor: 10, eng: 20, math: 30 });
    

}

// Advanced JSON #4-1 alias
{
    function print({kor,eng:englist,math}){ 
        //객체를 뽀개면서 해도 잘된다.exam -> {kor,eng,math}

        // let total = exam.kor + exam.eng + exam.math;
        // console.log(exam.kor,exam.eng, total);

        //낱개로 뿌시기(Destruckturing)
        // let kor = exam.kor;
        // let eng = exam.eng;
        // let math = exam.math;
        //변수선언
        //순서 바꿔도 알아먹음
        let total = kor+englist+math;
        console.log(kor,englist,total);

    }
    print({kor:10,eng:30,math:40})


}

// Advanced JSON #4-2
{
    function print({kor,eng:englist /*,math */, com = 90}){ 


        let total = kor+englist+com;
        console.log(kor,englist,`com:${com}`,total); //1옆에 `다.


    }
    // print({kor:10,eng:30,math:40})
    let exam1 = {kor:10,eng:30,math:40};
    let {kor,eng} = exam1;
    exam1.kor++;
    exam1.eng+=2;

    // 이게 없으면 exam1 = 11,32,40 {kor,eng}는 10,30
    ({kor,eng} = exam1);

    console.log(exam1, {kor,eng});


}

// Advanced JSON #4-2 Destructuring : Nested
{
    let exam = {kor:20,eng:30,math:40,student:{id:1,name:'홍길동'}};

    let {kor, student:{name}} = exam;
    console.log(kor, name);

}

// Advanced JSON #1 Array Destructuring
{
    // let kor1, kor2, kor3 = [10,20,50];

    //undefined undefinded (3) [10, 20, 50]
    
    //10 20 50
    let [kor1,kor2,kor3] = [10,20,50];
    
    console.log(kor1, kor2, kor3);
}

// Advanced JSON #1 Array Destructuring
{

    let arr = [10,20,50];
    let [kor1,,kor3] = arr;
    arr[0] = 60;
    [kor1,,kor3] = arr;
    
    console.log(kor1,kor3);

    //swap
    let x = 3;
    let y = 5;

    console.log("before",x,y);

    [x,y] = [y,x];
    console.log("after",x,y);
}

//Rest Parameters & Spread Operator
//나머지 값만 따로 담아주면 안되겠니?
{
    function sum(n1, n2, ...args){
        let result = 0;
        //나머지 출력
        // let =length = arguments.length-2;
        // for(let i =0; i<length; i++)
        //     console.log(arguments[i+2]);
        for(let arg of args)
            console.log(arg);

            return n1+n2;

    }

    console.log("sum: ", sum(2,3));
    console.log("sum: ", sum(2,3,5,3,2,3,4,10));

    //스프레드
    let kors = [20,40,20];
    console.log("sum3:", sum(kors[0],kors[1]));
    console.log("sum3:", sum(...kors));
    console.log();

}
// -------------------------------4-5---------------------------
console.log("------------4월5일---------------------------------");
{
    let arr1 = [2,3,4];
    // let arr2 = [6,5,arr1];
    let arr2 = [6,5,...arr1];
    

    console.log("arr2:",arr2)
    console.log("\n");
}

//기본값 지원1
{
function add(x, y=10, z){
    console.log(x+","+y+","+z);
    console.log("arguments length:", arguments.length);
    


    }

//null은 값으로 인식할까?
console.log(add(10,null,30)); //10 10 30
console.log("\n");
console.log(add(10,undefined,30)); // undefined
console.log("\n");

}

//기본값 지원2
{
    function getCount(){
        return 3; // 쿠키,로컬 저장소, 원격 데이터
    }
    function add(x, y=10, z=getCount(), a=z+1){
        console.log(x+","+y+","+z+","+a);
        //기본값으로 사용된 y는 카운트 될 까?
        console.log("arguments.length: " + arguments.length);
        
            //퀴즈 2: 전달된 arguments의 콜렉션에 담긴 값은 별칭 인자의 값이 바뀌면 같이 바뀔까?
    //자바스크립트의 모든 값은 참조변수다.
    console.log(
        "인자 값을 바꾸기 전: ",
        x == arguments[0],
        x === arguments[0],
        y == arguments[1],
        y === arguments[1],
    );

    console.log(x);
    console.log(arguments[0]);
    console.log(y);
    console.log(arguments[1]);
    console.log(z);
    console.log(arguments[2]);
    console.log(a);
    console.log(arguments[3]);

    console.log("\n");

    x = 50;
    y = 60;
    console.log(
        "인자 값을 바꾼 후: ",
        x == arguments[0],
        x === arguments[0],
        y == arguments[1],
        y === arguments[1],
    );

    console.log("\n");
    console.log(x);
    console.log(arguments[0]);
    console.log(y);
    console.log(arguments[1]);
    console.log("\n");
    }

    add(10); //1 10 10
    add(10,30); // 2 10 30
    add(undefined); // 1 undefined, 10
    

}

//Arrow Function
{
    {
        let arr = [2,3,45,2,1,2,3];
        arr.sort((a,b) =>a-b); //오름차순
        console.log(arr);
        console.log("\n");

        arr.sort((a,b) =>b-a); //내림차순
        console.log(arr);
        console.log("\n");
    }

    {
        let arr = [[2,3],[45,2],[1,2,3]];
        arr.sort((a,b) =>a[0]-b[0]); //오름차순
        console.log(arr);
        console.log("\n");

        arr.sort((a,b) =>b[0]-a[0]); //내림차순
        console.log(arr);
        console.log("\n");
    }

    {
        //스프레드이용
        let arr = [...[2,3],...[45,2],...[1,2,3]];
        arr.sort((a,b) =>a-b); //오름차순
        console.log(arr);
        console.log("\n");

        arr.sort((a,b) =>b-a); //내림차순
        console.log(arr);
        console.log("\n");
    }

    //1. 차이점 : this, super가 없다(생성자 또는 멤버 메서드로 사용될 수 없다.)
    //2. arguments 콜렉션이 없다. (코드를 나누는 역할자로 사용하지 않는다.)
    //(함수 모듈로 사용될 수 없다. 함수 지역화가 안된다.)
    //3. new.target이 없다. new 연산자로 생성될 수 없다.

    let exam = {
        kor:10, //코드 영역이 아니라 exam 객체의 속성임.
        eng:20,
        // total:function(){
        //     return this.kor + this.eng;
        // }
        
        //퀴즈1: 함수 Arrow Function으로 바꿀 수 있을까?
        // total:() =>{
        //     return this.kor + this.eng; //Undefined + Undefined = NaN
        // }
        total: () => {
            return this.kor+this.eng;
        },
        delayedPrint(){
            //3초 뒤 다음 callback 호출되면 this.kor가 undefined가 나온다
            // 그 이유는 함수만 호출했기 떄문에 누가? 넘겨받는애(setTimeout)가
            // setTimeout(function(){
            //     console.log("딜레이야.", this.kor);
            // },3000);
            
            //그 대안으로 bind를 할 수 있지만
            // setTimeout(function(){
            //     console.log("딜레이야.", this.kor, this);
            // }.bind(this),3000);
            
            //콜백함수는 에로우 funtion이다. 깔꼼하게 처리가능
            setTimeout(()=>{
                console.log("딜레이야.", this.kor,this);
            },3000);
        }

    };

    //예제 1: 메소드로 사용할 수 있나?
    //this가 있다는 말은 total() 메소드를 호출할 때 exam을 this로 받는다는 것을 말한다.
    //Arrow Function은 그것(exam)을 안 받는다 아니 못 받는다.
    //따라서 total() 메소드의 연산은 Undefined + Undefined = NaN이 된다.
    console.log(exam.total());
    console.log(exam.delayedPrint());
    console.log("\n");

}

//예제2 : 일반 함수로 사용할 수는 있나?
{
    // function add(a,b){
    //     console.log("add arguments length : ", arguments.length); //나머지 값도 처리 할 수 있다.
    //     return a+b;
    // }

    //this 쓸일 없고 객체와 관련된 일이 아니라면 코드가 깔끔하고 더 좋아 보인다.
    //오히려 this를 사용할 수 없던 고전적인 함수를 구현할 떄로 돌아간 느낌이라
    //앞으로는 순수 함수가 필요할떄는 이걸로^_^
    let add = (a,b, ...args)=> {
        console.log("rest arguments length : ", args.length); //나머지 값도 처리 할 수 있다.
        return a+b;
    }


    console.log("add(3,4,5):", add(3,4,5));
    console.log("\n");

}

//추가적인 내용 apply, call, bind 메소드의 용법ㅂ과 차이
//자바스크립트에서 function을 호출하면서 객체를 전달하는 방법을 제공한다
{
    function total(){
        return this.kor+this.eng;
    }

    //이렇게 호출된 total에서의 this는 window 객체가 된다.
    console.log("total", total());
    //total을 호출하면서 this로 사용할 객체를 전달할 수 있다.
    //방법 1: apply를 사용하는 방법
    //배열로 감쌀라면 apply
    console.log("apply total", total.apply({kor:100, eng:90},["hello","hihi"]));
    //방법 2: call를 사용하느 방법
    console.log("call total", total.call({kor:100, eng:90},"good","hi"));

    let aa = {
        name:"짜장면",
        closeCallback(){
            console.log("짜장면 이름: ", this.name);
        }
    }

    let onclose = aa.closeCallback.bind(aa);

    onclose();
    console.log("\n");
}

////////////////////////// 4월8일 /////////////////////////////

//Class
//생성자 -> 컨스트럭터로 바뀜
//프로토타입 -> total()로 바뀜
{
    // function createExam(){
    //     return 
        class Exam{
            #kor
            #eng
            #math
            static #staticVariable

            static {
                this.#staticVariable = 30;
            }

            static get staticvariable(){
                return Exam.#staticVariable;
            }

            constructor(kor=2,eng=0,math=0){
                this.#kor = kor;
                this.eng = eng;
                this.math = math;
            }
            //,로 안함 이건 오브젝트 만들떄 사용

            //이렇게 잘안쓴다
            // getKor(){
            //     return this.#kor;
            // }

            // setKor(value){
            //     this.#kor = value;
            // }
            get kor(){
                return this.#kor;
            }

            set kor(value){
                this.#kor = value;
            }


            total(){
                return this.#kor+this.#eng+this.#math;
            }


        }
    // }

    // let ExamClass = createExam();
    // let exam = new ExamClass();
    // exam.setKor(exam.getKor()+1);
    // exam.kor = 40;
    // exam.kor++;
    // console.log("ExamClass total: ", exam.total(), exam.kor, exam.getKor());
    // console.log("ExamClass total: ", exam.total(), exam.kor);
    console.log("#staticVariable = ", Exam.staticvariable);

    // let exam1 = new Exam();
    // console.log("Exam() =", exam1);
    // console.log("total()", exam1.total());
    // console.log(typeof Exam);
    // console.log("\n");

    // let exam2 = new Exam(10,20,30);
    // console.log("Exam(10,20,30) =", exam2);
    // console.log("total(10,20,30) =", exam2.total());
    // console.log("\n");





}

//여기서 자바스크립트 파일을 가져오기? 불가능하다.

//Inheritance
{
    class Exam{
        #kor
        #eng
        #math

        constructor(kor=20,eng=0,math=0){
            this.#kor = kor;
            this.#eng = eng;
            this.#math = math;
        }

        get kor(){
            return this.#kor;
        }

        set kor(value){
            this.#kor = value;
        }


        total(){
            return this.#kor+this.#eng+this.#math;
        }
    }

    class NewlecExam extends Exam{
            #com
            constructor(kor = 10,eng=20,math=30){
                super(kor,eng,math);
                this.#com = 20;
            }

            total(){
                return super.total()+this.#com;
        }

        avg(){
            return (this.total()+this.#com) /4 ;
        }
    }


    console.log(new NewlecExam().total());
    console.log(new NewlecExam().avg());



}

// Symbol + Computed Property
// 충돌나지 않게하기위해서 심볼을 쓴다
// new쓰면 타입에러
console.log("---------------------4월9일---------------------");

{
    const getList = Symbol();

    class NoticeServiceImp /* implements NoticeService */{
        [getList](){
            return "hahaha";
        }
    }

    class NoticeController {
        constructor(){
            // NoticeController this.service = new NoticeController();
            this.service = new NoticeServiceImp();
        }
        printList(){
            console.log(this.service[getList]());
        }
    }

    let controller = new NoticeController();
    controller.printList();


    console.log("\n");
}

// Set, List, Map Collection
{
    //타입을 정해놓고 쓸떄 사용
    let map = new Map();
    map.set("id",1);
    map.set("title","Hello");
    map.set("content","hahahahaha");

    // 1번째 방법
    // for(let entry /*[k,v] */of map.entries())
    //     console.log(entry[0],entry[1]);

    //2번째 방법
    for(let [k,v] of map.entries())
        console.log(k,v);

        console.log("\n");

    map.forEach((v,k)=>{
        console.log("foreach:",k,v);
    });

        console.log("\n");

    for(let k of map.keys())
        console.log(k);
    for(let k of map.values())
        console.log(k);
    console.log("map 끝~")

    console.log("\n");


// ===========================================
    let set = new Set();
    set = new Set([3,5,2,3,4,7,5,3,6]);
    console.log(set.size);

    set.delete(5);
    console.log(set.size);

    set.add(10);
    console.log(set.size);

    // set.clear();
    // console.log(set.size);
    
    //이터레이터가 없는 객체는 사용이 안됨
    //ex) let exam = {kor:1, eng:23};
    console.log("이터레이터");
    
    for(let n of set)
        console.log(n);
    console.log("끝\n");


}

// Symbol+ComputED Property
{
    class NoticeService{
        static getList = Symbol();
        static getById = Symbol();

    }

    class NoticeServiceImp{
    [NoticeService.getList](){
        return "hehehe list";
    }
    }

    class NoticeController {
        constructor(){
            this.service = new NoticeServiceImp();
        }
        printList(){
            console.log(this.service[NoticeService.getList]());
        }
    }
    let no = new NoticeController();
    no.printList();
}

//Iterator , Generator(Index 조작을 자동생성 nexy 메소드도 생성해주는 녀석)
//next()를 이용하기 위해서 사용
{
    class Exam{
        constructor(){
            this.current = 0;
            this.kor = 20;
            this.eng = 40;
            this.math = 50;
        }

        [Symbol.iterator](){
            return this;
        }

        //done: 반복이 완료되었나의 여부를 나타냄
        next(){
            this.current++;
            switch(this.current){
                case 1:
                    return {done:false, value:this.kor};
                case 2:
                    return {done:false, value:this.eng};
                case 3:
                    return {done:false, value:this.math};
                case 4:
                    return {done:true, value:-1};
            }
        }
    }

    let exam = new Exam();
    // for of문은 자동적으로 Symbol.iterator 이름으로 구현한 메서드를 호출한다.
    for(let n of exam) 
            console.log("it",n);

    console.log(exam.next());
    console.log(exam.next());
    console.log(exam.next());


}

//Generator을 이용한 iterator 구현방법
{
    class Exam{
        constructor(){
            this.current = 0;
            this.kor = 20;
            this.eng = 40;
            this.math = 50;
        }

        //*만 붙히면 next()로 순차적으로 호출할 수 있는 값을 나열 할 수 있다.
        *[Symbol.iterator](){
            yield this.kor;
            yield this.eng;
            yield this.math;

        }

        entries(){
        // Object.entries 메서드를 사용하여 객체의 키-값 쌍 배열을 생성합니다.
        // const entries = Object.entries(this);
        // 키-값 쌍 배열을 반환합니다.
        // return entries;
        let [kor,eng,math]= this;
        return  {
            
            *[Symbol.iterator](){
            yield ["kor", kor];
            yield ["eng", eng];
            yield ["math", math];
        }
        };

        }


    }
    let exam1 = new Exam();
    for(let [k,v] of exam1.entries())
        console.log(k,v);


    let exam = new Exam();
    for(let n of exam)
        console.log("gener", n);

}

//Promise
//성공, 실패에 대한 이벤트 처리 로직을 분리하게 해주는 객체
{
    //프로미스 쓰기 전
    //비동기 처리 함수1: 콜백 방식의 비동기 처리 함수
    function delayedPrint(value,completionHandler){
        let rand = Math.floor(Math.random()*2000)+1000;

        setTimeout(()=>{
            console.log(value);
            completionHandler();
        },rand);
    }
    
    //이용하는 쪽의 콜백함수의 중첩 등이 복잡하게 느껴 질 수 있다.
    // 함수 하나 호출하는데 값이 안보인다.
    // 호출하는 함수보다 코드 구현이 더 눈에 보임.
    delayedPrint("hello",()=>{
        console.log("printed after");
});

    //비동기 처리 함수2: Promise 방식의 비동기 처리함수
    function delayedPrint1(value,completionHandler){
        let rand = Math.floor(Math.random()*2000)+1000;

        setTimeout(()=>{
            console.log(value);
            completionHandler();
        },rand);
    }


}
// 4월 11일
console.log("\n");
console.log("\n");
console.log("4월 11일");
console.log("\n");
console.log("\n");

// 여기서 자바스크립트 파일을 가져오기? 불가능... 모듈화는 안된다?? 되는것 같은데..

// Promise // 성공, 실패에 대한 이벤트 처리 로직을 분리하게 해주는 객체


{
    function delaydPrint1(value,completionHandler,failureHandler){
        const promise = new Promise((resolve, reject)=>{

            let rand = Math.floor(Math.random()*2000)+1000;
            console.log(rand);
            
            setTimeout(()=>{
                console.log(value);
                resolve();
                // reject();
            },rand);
        });
        return promise;
    }
    
    let pr =delaydPrint1("haha")

    pr.then(()=>{
        console.log("printed111 after");
    });

    //await 다음 코드는 await 코드가 실행이 되야 실행된다(비동기 블럭에서 동기화를위해 사용)
    // await delaydPrint1("haha");
    console.log("printed async");

    (async () =>{
        await delaydPrint1("ㄱㄷㄱㄷ");
        console.log("pr async");
    })();

    class MenuRepository{

        findAllPromise(){
            return fetch("/api/menus");
        }
            // return new Promise((resolve)=>{
            //     const xhr = new XMLHttpRequest();
            //     xhr.withCredentials = true;
        
            //     //콜백할때 쓰이는 함수가 콜백함수.
            //     xhr.onload = function () {
            //         const list = JSON.parse(this.responseText);
            //         resolve(list);
            //     };
            //     const url = `http://localhost:8080/api/menus`;
            //     const method = "GET";
    
            //     xhr.open(method, url);
            //     xhr.send();
            // });

        // promise 쓰기전
        findAll(resolve){
            const xhr = new XMLHttpRequest();
            xhr.withCredentials = true;
    
            //콜백할때 쓰이는 함수가 콜백함수.
            xhr.onload = function () {
                const list = JSON.parse(this.responseText);
                resolve(list);
            };
            const url = `http://localhost:8080/api/menus`;
            const method = "GET";

            xhr.open(method, url);
            xhr.send();
        }
    }

    async function printList3(){
        let repository = new MenuRepository();
        let response = await repository.findAllPromise();
        let list = await response.json();
        console.log("printList"),list
    }

    printList3()
    //promise call method 1 : to seperate
    let repository = new MenuRepository();
    // repository.findAll((list)=>{
    //     console.log(list)
    // });

    let promise = repository.findAllPromise();

    promise
    //fetch 함수가 반환할때는 response 객체를 통해 ㅅ상태값도 같이전달한다.
    .then(response=>response.json())
    .then(list=>{
        console.log("list",list);
        return list[0];
    })
    .then((list)=>{
        return list[0];
    })
    .then((menu)=>{
        return menu.korName;
    })
    .then(korName=>{
        console.log(korName);   
    });

    promise
    .then((list)=>list[1])
    .then((menu)=>menu.korName)
    .then((korName)=>console.log(korName));

    // repository.findAll((list)=>{
    //     console.log(korName);
    // });
    async function printList(){
        let repository = new MenuRepository();
        let lisr=await repository.findAllPromise();
        confirm.log("prinrLists")
    }
    
}



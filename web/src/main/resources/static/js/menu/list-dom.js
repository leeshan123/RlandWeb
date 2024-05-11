// WARNING: For GET requests, body is set to null by browsers.


//(window).XMLHttpRequest


//동기적 -> 작성했던 순서대로 일함.
//비동기적 -> 효율적으로 일함.

//readystatechange 상태에 따라서 달라지는 것을 알려줌.
//0-4가 있는데 4가 done(완료)를 나타냄

// xhr.addEventListener("readystatechange", function() {
//   if(this.readyState === 4) {
//     //제이슨이
//     var list = JSON.parse(this.responseText);
//     alert(list[0].korName);
//   }
// });
function Cookie(){
    this.map = {};

    console.log(document.cookie);

    

    //window.document.
    var cookieDecoded = decodeURIComponent(document.cookie);
    //쿠키 구분자?
    var cookieTokens = cookieDecoded.split(";");

    for(c of cookieTokens){
        var temp = c.split("=");
        var key = temp[0];
        var value = JSON.parse(temp[1]);

        this.map[key] = value;
    }

    console.log(this.map);
};

Cookie.prototype = {
    get: function(name){
        return this.map[name];
    },
    save: function(){

        var list = this.map["menus"];
        var size = list.length;
        var lastIndex = size-1;
        var str = "[";
        
        for(var m of list){
        str += JSON.stringify(m); //this.map 돌면서 ->[{id:....},{id:....},{id:....},{id:....}]
        if(m !== list[lastIndex]) //마지막 항목이 아니면
            str +=",";
        }


        var encoded = encodeURIComponent(str);
        document.cookie = `menus=${encoded}; path=/;`;
    },
    remove(name){

    },
    add(name,value){

    },
    addItem(name,item){
        var list = this.map[name];
        list.push(item);

    },
    set(name,value){

    }
};


window.addEventListener("load",function(){

        




        // console.log(decodeURIComponent(this.document.cookie.split("=")));
        // var val = decodeURIComponent(this.document.cookie.split("=")[1]);
        // console.log(JSON.parse(val)[0].korName);


        
        var cookie = new Cookie();
        console.log(cookie.get("menus"));



        var categoryFilter = this.document.querySelector(".category-filter");
        var li1 = categoryFilter.querySelector("ul>li:nth-child(1)");


        var queryForm = this.document.getElementById("query-form");
        var queryButton = queryForm.getElementsByClassName("icon-find")[0];
        var queryInput = queryForm.getElementsByClassName("query-input")[0];

        var menuCardList = this.document.getElementById("menu-card-list");
        // var menuContent = menuCardList.getElementsByClassName("content")[0];
        var menuContent = menuCardList.querySelector(".content");

        menuContent.onclick = function(e){
            
            //좋아요~부분
            let isValid =
            (e.target.classList.contains("btn-cart") 
            || e.target.classList.contains("icon-heart"))
            

            if(!isValid)
                return;

            console.log("valid");
            
            // if(!e.target.classList.contains("btn-cart"))
            //     return;

            //icon-heart handler
            {
                // /api/menu-likes, POST

            }


            // btn-card handler
            {
            var item = {};
            item.id = e.target.dataset.id;
            item.korName = e.target.dataset.korName;
            item.engName = e.target.dataset.engName;
            item.price = e.target.dataset.price;
            item.regdate = e.target.dataset.regDate;
            item.img = e.target.dataset.img;
            item.categoryId = e.target.dataset.categoryId;
            //...

            // cookie.remove("menus");
            // cookie.add("new cookie name", /*value*/);
            cookie.addItem(/*name*/"menus", item);
            // cookie.set("menus", );
            cookie.save();

            // cookie.save();
            e.preventDefault();
            }

            // alert("haha");
        }


        categoryFilter.onclick = function(e){
            
            
            if(e.target.tagName != "A")
                return;
            
            // if(e.target.tagName)
            e.target.dataset.id

            //페이지 이동을 막음
            e.preventDefault();
            console.log(e.target.tagName);
            console.log(e.target.dataset.id)
            
        
            var url = `http://localhost:8080/api/menus?c=${e.target.dataset.id}`;
            
            request(url,function(list){
                bind(list);
                console.log("검색어 목록 재로드.");
            });

        };

        function request(url,callback,method){
            
            method = method || "GET";

            var xhr = new XMLHttpRequest();
            xhr.withCredentials = true;

        //콜백할때 쓰이는 함수가 콜백함수.
        xhr.onload = function(){
            var list = JSON.parse(this.responseText);
            callback(list);
            // bind(list);
        };
    

        var q = queryInput.value;
        //false로 하면 동기적인 실행 true나 지워버리면 비동기
        //3개 다 같은 뜻
        // xhr.open("GET", "http://localhost:8080/api/"
        // +"menus?q="+q+"&p=1");
        // xhr.open("GET", "http://localhost:8080/api/ \
        // menus?q="+q+"&p=1");
        xhr.open(method,url);
        xhr.send(); //요청이 가고 --> 응답이 옴.
        }



        queryButton.onclick = function(e){

            e.preventDefault();

            var url = `http://localhost:8080/api/menus?q=${q}`;
            
    
            request(url,function(list){
                bind(list);
                console.log("검색어 목록 재로드.");
            });

        
        };

            function bind(list){

                menuContent.classList.add("fade-out");
                console.log("fade-out 시작");
                
                
                // setTimeout(function(){
                    menuContent.ontransitionend = function(){
                        console.log("fade-out 끝");
                        // null로 만들어주면 두번 호출되지않는다.
                        menuContent.ontransitionend = null;

                        
                        menuContent.classList.remove("fade-out");
                        menuContent.innerHTML="";

            list.forEach(menu=>{

            // var menu = list[0];
            // var queryInput = document.getElementById("query-input");

            var sectionHTML = `
                <section class="menu-card">
                    <h1>
                        <a class="heading-3" href="detail.html">${menu.korName}</a></h1>
                    <h2 class="heading-2 font-weight:normal color:base-5">${menu.engName} Latte</h2>
                    <div class="price-block d:flex align-items:flex-end"><span class="font-weight:bold">${menu.price}</span>원<span class="soldout-msg ml:auto mr:auto md:d:none">SOLD OUT</span></div>
                    <div class="img-block">
                        <a href="detail.html?id=1"><img src="/image/menu/8.jpg"></a>
                    </div>
                    <div class="like-block d:flex justify-content:flex-end">
                        <a class="icon icon-heart-fill icon-color:base-4" href="">좋아요</a>
                        <span class="font-weight:bold ml:1">2</span>
                    </div>
                    <div sec:authorize="hasRole('ADMIN')">
                        <button>삭제</button>
                    </div>
                    <div class="pay-block d:flex">
                        <!-- <a class="icon md:icon:none icon-cart icon-color:base-0 color:base-0 btn-type:icon btn-cart md:btn-type:text" href="">담기</a> -->
                        <form action="/cart/add-menu" method="post">
                            <input type="hidden" name="id">
                            <button class="icon md:icon:none icon-cart icon-color:base-0 color:base-0 btn-type:icon btn-cart md:btn-type:text">담기</button>
                        </form>
                        <a class="icon md:icon:none icon-card icon-color:base-0 color:base-0 btn-type:icon btn-card md:btn-type:text" href="">주문하기</a>
                    </div>
                </section>
            `;

            //menuContent.appendChild(section);
            menuContent.insertAdjacentHTML("beforeend",sectionHTML);

            // alert(list[0].korName);
            // queryInput.value=list[0].korName;
        });

            };
        };
        
    });




console.log("언제옴? ㅅㅂ");

//defer랑 같이 나중에 js 코드가 들어올수있게하는것
// window.onload = function(){
//     console.log("script")
// }

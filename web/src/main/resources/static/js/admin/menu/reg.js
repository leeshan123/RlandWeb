function InputFileList(input){
    this.input = input;
}
InputFileList.prototype = {
    add:function(file){
        var dt = new DataTransfer(); //데이타를 담을 수 있는 객체
        var files = this.input.files;

        //new InputFileList(imgInput).add(files);
        //즉 imgInput 에 있는 파일들을 위의 for문에서
        // 나머지 들어온 file들을 아래 for문제에서 돌려서
        //dr에 담고 그걸 input.files가 가르키게함.
        //기존에 있는 input이 가지고 있는 데이터를 담는 작업
        for(var i = 0; i < files.length; i++) {
            dt.items.add(files[i]);
        }
        //추가로 담는 파일
        for(var i =0; i<file.length; i++)
        dt.items.add(file[i]);

        this.input.files = dt.files;
    }
}

window.addEventListener("load", function(){
    var regFrom = this.document.querySelector("#reg-form");
    var imgInput = regFrom.querySelector(".img-input");
    var priceInput = regFrom.querySelector('input[name="price"]');
    var previewPanel = regFrom.querySelector(".preview-panel");
    var imgLabel = regFrom.querySelector(".img-label");

    imgLabel.ondragenter = function(e){
        console.log("enter");
    }
    
    imgLabel.ondragleave = function(e){
        
        console.log("leave");
        imgLabel.classList.remove("valid");
        imgLabel.classList.remove("invalid");


    }

    imgLabel.ondragover = function(e){
        e.stopPropagation();
        e.preventDefault();
        console.log("over");

        e.dataTransfer.types

        var valid = e.dataTransfer &&
                    e.dataTransfer.types &&
                    e.dataTransfer.types.indexOf("Files") >= 0;

        if(valid)
            imgLabel.classList.add("valid");
        else
            imgLabel.classList.add("invalid");


    }

    imgLabel.ondrop = function(e){
        e.stopPropagation(); //현재 이벤트가 캡처링/버블링 단계에서 더 이상 전파가 되지 않도록 방지
        e.preventDefault(); //각 핸들러는 preventDefault()를 호출해 추가적인 이벤트(터치 이벤트나 포인터 이벤트)가 일어나지 않도록 한다.

        console.log("drop");

        console.log(e.dataTransfer);
        console.log(e.dataTransfer.files);
        var files = e.dataTransfer.files;
        var file = files[0];

        // 오류남
        // alert(imgInput);
        // alert(imgInput.files);
        
        new InputFileList(imgInput).add(files);

        if(file.type.indexOf("image/")!=0){
            alert("이미지만 업로드 가능합니다.");
            return;
        }

        if(file.size > 180*1024){
            alert("크기는 180K 바이트 이하만 업로드 가능해요.");
            return;
        }

        //파일 올린 것을 읽는 객체 생성
        //클라이언트 측 파일 읽기를 가능하게 하는 API
        var reader = new FileReader();
        reader.onload = function(e){
            //HTML 요소를 동적으로 생성해줌. <img>태그르 만들어줌.
            var img = document.createElement("img");
            img.src = e.target.result;
            //reader.result = e.target.result 다.
            console.log(e.target.result);

        

            //preview 안에 img를 추가한다
            previewPanel.append(img);

            setTimeout(()=>{
            //<img>태그의 class를 만들어줌.
            img.classList.add("fade-in");
            },10);

            setTimeout(()=>{
                img.classList.add("silde-in");
                },100);

        };

        //비동기로 파일을 읽어들이고 해당 파일의 내용을 데이터 URL로 변환하여 JS에서 사용가능
        reader.readAsDataURL(file);

        for(var k in e.dataTransfer)
            console.log(k);

        console.log(e.dataTransfer.types);
    }
    


    imgInput.oninput = function(e){
        //imgInput.files[0]
        //파일에 대한 정보를 알 수 있다.
        //마인타입에 대해 잘알기.

        for(var key in imgInput.files[0])
            console.log(key,":",imgInput.files[0][key]);

        var file = imgInput.files[0];
        //= var [file] = imgInput.files;
        

        if(file.type.indexOf("image/")!=0){
            alert("이미지만 업로드 가능합니다.");
            return;
        }

        if(file.size > 180*1024){
            alert("크기는 180K 바이트 이하만 업로드 가능해요.");
            return;
        }

        var reader = new FileReader();
        reader.onload = function(e){
            //HTML 요소를 동적으로 생성해줌. <img>태그르 만들어줌.
            var img = document.createElement("img");
            img.src = e.target.result;
            console.log(e.target.result);

            //preview 안에 img를 추가한다
            previewPanel.append(img);

            setTimeout(()=>{
            //<img>태그의 class를 만들어줌.
            img.classList.add("fade-in");
            },10);

            setTimeout(()=>{
                img.classList.add("silde-in");
                },100);

        };
        //로드가 되면은 해라
        reader.readAsDataURL(file);
        
        console.log("ㅎㅇ");

        
    };

    priceInput.oninput = function(){
        // alert("비이이이사아아앙");

    }

})
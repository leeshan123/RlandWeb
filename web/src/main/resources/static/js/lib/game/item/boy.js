export default class boy {
    #name
    #gender
    #x
    #y
    #vx
    #vy
    #dx
    #dy
    #w
    #h
    #img
    #moveIndex
    #movedelayCount
    #dirIndex

    constructor(){
        this.#img = new Image();
        this.#img.src = "./res/boy.png";
        this.#w = this.#img.width/3;
        this.#h = this.#img.height/4;
        this.#x = 300;
        this.#y = 300;
        this.#vx = 0;
        this.#vy = 0;
        this.#dx = this.#x;
        this.#dy = this.#y;
        this.#moveIndex = 1;
        this.#movedelayCount = 10;
        this.#dirIndex = 2;

    }
    //애니메이션을 위한 필수 메서드
    draw(ctx){
        let mi = this.#moveIndex;
        let di = this.#dirIndex;
        
        let w = this.#w;
        let h = this.#h;
        let sx = w*mi;
        let sy = h*di;

        //마우스의 커서 위치를 나타냄.
        // let dx = this.#x;
        // let dy = this.#y;
        let dx = this.#x-w/2;
        let dy = this.#y-h/2-20;

        

        // drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
        // 여기서:    
        // sx: 원본 이미지에서 잘라내기 시작할 x 좌표입니다.
        // sy: 원본 이미지에서 잘라내기 시작할 y 좌표입니다.
        // sWidth: 원본 이미지에서 잘라낼 영역의 너비입니다.
        // sHeight: 원본 이미지에서 잘라낼 영역의 높이입니다.
        // dx: 캔버스에 그릴 때 이미지가 그려질 x 좌표입니다.
        // dy: 캔버스에 그릴 때 이미지가 그려질 y 좌표입니다.
        // dWidth: 그려진 이미지의 너비입니다.
        // dHeight: 그려진 이미지의 높이입니다.
        
        ctx.drawImage(this.#img,
        //이미지에서 그림에 사용할 영역
        sx,sy,w,h,
        //위에서 선택한 영역을 출력할 영역
        dx,dy,w,h);
        
    }

    update(){
        this.#x += this.#vx;
        this.#y += this.#vy;
        // console.log(this.#vx,this.#vy);
        
        if(this.#dx > this.#x){
            console.log(this.#x,this.#dx);
        }

        if (Math.floor(this.#x) == this.#dx || Math.floor(this.#y) == this.#dy) {
            this.#vx = 0;
            this.#vy = 0;
            this.#dirIndex = 2;
            this.#moveIndex = 1; // 멈춤이미지
            this.#movedelayCount = 10;
        }
        else
            if(this.#movedelayCount-- == 0){
                this.#moveIndex = this.#moveIndex == 0 ? 2 : 0;
                this.#movedelayCount = 10;
            }

    }

    // ----------------행위-------------
    move(x,y){
        // this.#x = x;
        // this.#y = y;

        let w = x - this.#x;
        let h = y - this.#y;

        let d = Math.sqrt(w*w+h*h);
        this.#vx = w/d;
        this.#vy = h/d;
        this.#dx = x;
        this.#dy = y;

        if(Math.abs(w)>Math.abs(h)){
            if(w<0)
                this.#dirIndex = 3;
            else
                this.#dirIndex = 1;
        }
        else{
            if(h<0)
                this.#dirIndex = 0;
            else
                this.#dirIndex = 2;
        }





    }

    moveBy(dir){

    }
    
}
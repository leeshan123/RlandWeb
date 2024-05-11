import Boy from "../item/boy.js";

export default class Room{
    //캡슐화를 위해 쓰는 것들.
    #img
    #ctx
    #boy
    #canvas
    #timerId
    constructor(){
        
        
        
        const gameSection = document.querySelector("#game-section");
        this.#canvas = gameSection.querySelector(".room");
        // bind해서 묶어줘야함
        // bind하면 클래스가 아닌 객체를 참조
        this.#canvas.onclick = this.clickHandler.bind(this);

        /** @type {CanvasRenderingContext2D} */
        this.#ctx = this.#canvas.getContext("2d");

        this.#img = new Image();
        this.#img.src = "./res/map.png";

        this.#boy = new Boy();

        this.run();

    }

    // for event handling--------------------------
    clickHandler(e){
        console.log(this);
        this.#boy.move(e.x,e.y);
        console.log(this.#ctx);
        this.#boy.draw(this.#ctx);
        console.log(e.x,e.y,screenX,screenY);
    }

    // for animation ---------------------------
    draw(){
        
        //계속 덮어씌워서 지워지는 효과
        this.#ctx.drawImage(this.#img,0,0)
        
        this.#boy.draw(this.#ctx);

    }

    update(){
        this.#boy.update();
    }

    run(){
        this.#timerId = setInterval(()=>{
            this.update();
            this.draw();
        },17); //1000/60
    }

    stop(){
        clearInterval(this.#timerId);
    }

}
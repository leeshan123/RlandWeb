//document를 사용하지 않고 노드라는 개념을 바인딩만해서 사용한다.
export default{
    data(){
        return {
            x:3,
            y:4,
            result:0
        }
    },
    methods:{
        //모델바인딩은 알아서 해준다.
        calcSubmitHandler(e){
            
            //Model을 이용한 MVC 방식.
            //이 방법을 이용하면 2way 바인딩이 되야한다.
            // 1way: v-bind, :  | 2way : v-model
            this.result = this.x +this.y;
            console.log("ㅎㅇ");
        }
    },
    template:`
        <section id="form-section">
        <h1>덧셈 계산기</h1>
        <form>
            <fieldset>
                <legend>계산기 입력폼</legend>
                <div>
                    <label>x:</label>
                    <input name="x" dir="rtl" v-model.number="x">
                    <label>y:</label>
                    <input name="y" dir="rtl" v-model.number="y">
                    <span>=</span>
                    <span class="result-span" v-text="result"> </span>
                    <span >{{x+y}}</span>
                </div>
                <hr>
                <div>
                    <input type="submit" name="cmd" value="초기화">
                    <input type="submit" name="cmd" value="계산하기"
                    @click.prevent="calcSubmitHandler">
                </div>
            </fieldset>
        </form>
    </section>
    `
}
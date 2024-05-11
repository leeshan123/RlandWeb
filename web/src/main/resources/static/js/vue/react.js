let hello = "fuck";
let clickHandler = function(e){
    e.preventDefault();
    console.log("박준순 ㅡㅡ");
}

ReactDOM.render( 
    <section>
    {/* {덧셈 계산기} */}
    <h1>덧셈 계산기</h1>
    <form>
        <fieldset>
            <legend>react계산기 입력폼</legend>
            <div>
            <label className="color:blue;">x:</label>
            <input name="x" dir="rtl" value="0"/>
            <label>y:</label>
            <input name="y" dir="rtl" value="y"/>
            <span>=</span>
            <span>0</span>
            <span >{hello}</span>
        </div>
        <hr/>
        <div>
            <input type="submit" name="cmd" value="초기화"/>
            <input onClick={clickHandler} type="submit" name="cmd" value="계산하기"/>
        </div>
    </fieldset>
</form>
</section>,
    // React.createElement('span', null, '더엇셈 계산기'),
    document.querySelector("#root")
);
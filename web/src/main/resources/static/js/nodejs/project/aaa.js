const connect = require("connect");
const app = connect();


app.use("/index", (req, resp)=>{
    resp.end("index 페이지");
});

// app.use("/aaaaa", (req, resp)=>{
//     resp.end("aaaaa 페이지");
// });

app.use("/menu/list", (req, resp)=>{
    resp.end("menulist 페이지");
});

console.log("서버가 80번 포트로 시작되었습니다...");

app.listen(80);
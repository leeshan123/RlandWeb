const fs = require('fs');

function findAll(path){
    let fileList = fs.readdirSync(path,{withFileTypes:true});

    //디렉토리를 필터링
    fileList = fileList.filter(item =>item.isDirectory());

    //파일 이름만 추출(map)
    fileList = fileList.map(item=>item.name);


    return fileList;
}

exports.findAll = findAll;
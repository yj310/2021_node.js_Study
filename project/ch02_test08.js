var path = require('path');

// 디렉토리 합치기
var directories = ["users", "sunny", "docs"];
var docsDirectory = directories.join(path.sep);
console.log('문서 디렉토리 : %s', docsDirectory);

// 디렉토리명과 파일명 합치기
var curPath = path.join('/Users/sunny', 'notepad.exe');
console.log('파일 패스 : %s', curPath);

// 패스에서 디렉토리, 파일명, 확장자 구분하기
var filename = "C:\\Users\\sunny\\notepad.exe"
var dirname = path.dirname(filename);
var basename = path.basename(filename);
var extname = path.extname(filename);
console.log('디렉토리 : %s, 파일이름 : %s, 확장자 : %s', dirname, basename, extname);

let content = document.getElementById("content");
let contentSize = 1;
const contentSizeConst = .125;

function biggerText() {
    if (content == null) {
       return 
    }
    contentSize += contentSizeConst;
    content.style.fontSize = `${contentSize}rem`;
}

function smallerText() {
    if (content == null) {
        return
    }
    contentSize -= contentSizeConst;
    content.style.fontSize = `${contentSize}rem`;
}
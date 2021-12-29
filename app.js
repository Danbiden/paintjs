const canvas = document.querySelector("#jsCanvas");
const ctx = canvas.getContext("2d");
// context는 canvas 안에서 픽셀을 다루는 거!

                 
const colors = document.querySelectorAll("jsColor");

ctx.strokeStyle = "#2c2c2c"; //line 색!!
ctx.lineWitdh = 2.5;

//  픽셀을 다루는 window 크기도 꼭 줘야함>> width height  줘야한다!
canvas.width = 700;
canvas.height =  700;


let painting = false;

function stopPainting(){
    painting = false;
}


function startPainting() {
    painting = true;
}

// path를 만드는 건 starting line 선의 시작점 만드는 거

function onMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;
    // path를 만드는 건 starting line 선의 시작점 만드는 거
    //클릭하고 움직이면 요밑에 if 작동 x 
    if(!painting){
        //not painting 할 때 작동요
        ctx.beginPath(); // path === line
        ctx.moveTo(x,y);
    } else {
        ctx.lineTo(x,y); // 마우스 움직일때마다 조그만한 선 계속 연결연결!!
        ctx.stroke(); // 위에서 이미 정의했다용
    }
}

function onMouseDown(event) {
    painting = true;
}


if(canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting); 
}
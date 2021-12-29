const canvas = document.querySelector("#jsCanvas");
const ctx = canvas.getContext("2d");
// context는 canvas 안에서 픽셀을 다루는 거!

                        //all  해야 모든 jsColor가져올 수 있다!
const colors = document.querySelectorAll(".jsColor");

const range = document.querySelector("#jsRange");

const modeBtn = document.querySelector("#jsMode");



ctx.strokeStyle = "#2c2c2c"; //line 색!!
ctx.lineWidth = 2.5;

//  픽셀을 다루는 window 크기도 꼭 줘야함>> width height  줘야한다!
canvas.width = 700;
canvas.height =  700;


let painting = false;

let filling = false;

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


function handleColorClick(event) {
    // console.log(event.target.style);
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color; //this is override!!
}


function handleRangeChange(event) {
    const size = event.target.value;
    ctx.lineWidth  = size;
}

function handleModeClick() {
    if(filling === true) {
        filling = false;
        modeBtn.innerText = "fill";
    } else {
        filling = true; 
        modeBtn.innerText = "Paint";
    }


}

if(canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting); 
}
colors.forEach(color => color.addEventListener("click", handleColorClick));



if(range) {
    range.addEventListener("input", handleRangeChange);

}

if(modeBtn) {
    modeBtn.addEventListener("click", handleModeClick);
}
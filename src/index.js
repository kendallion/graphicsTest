var imgSmallHouse = new Image();
var imgLargeHouseLeft = new Image();
var imgLargeHouseRight = new Image();
var imgSmithyLeft = new Image();
var imgSmithyRight = new Image();

var imgHorizontalRoad = new Image();
var imgVerticalRoad = new Image();
var imgTopRightRoad = new Image();
var imgBottomRightRoad = new Image();
var imgTopLeftRoad = new Image();
var imgBottomLeftRoad = new Image();

var imgRoadEndTop = new Image();
var imgRoadEndRight = new Image();
var imgRoadEndBottom = new Image();
var imgRoadEndLeft = new Image();
var imgRoadEnd = new Image();

var imgIntersectionTopRoad = new Image();
var imgIntersectionRightRoad = new Image();
var imgIntersectionBottomRoad = new Image();
var imgIntersectionLeftRoad = new Image();
var imgFourWayRoad = new Image();

imgSmallHouse.src = "assets/buildings/smallHouse.png";
imgLargeHouseLeft.src = "assets/buildings/largeHouseLeft.png";
imgLargeHouseRight.src = "assets/buildings/largeHouseRight.png";
imgSmithyLeft.src = "assets/buildings/smithyLeft.png";
imgSmithyRight.src = "assets/buildings/smithyRight.png";

imgHorizontalRoad.src = "assets/roads/horizontalRoad.png"; //1
imgVerticalRoad.src = "assets/roads/verticalRoad.png"; //2
imgTopRightRoad.src = "assets/roads/topRight.png"; //3
imgBottomRightRoad.src = "assets/roads/bottomRight.png"; //4
imgTopLeftRoad.src = "assets/roads/topLeft.png"; //5
imgBottomLeftRoad.src = "assets/roads/bottomLeft.png"; //6

imgRoadEndTop.src = "assets/roads/roadEndTop.png";
imgRoadEndRight.src = "assets/roads/roadEndRight.png";
imgRoadEndBottom.src = "assets/roads/roadEndBottom.png";
imgRoadEndLeft.src = "assets/roads/roadEndLeft.png";
imgRoadEnd.src = "assets/roads/roadEnd.png";

imgIntersectionTopRoad.src = "assets/roads/intersectionTop.png";
imgIntersectionRightRoad.src = "assets/roads/intersectionRight.png";
imgIntersectionBottomRoad.src = "assets/roads/intersectionBottom.png";
imgIntersectionLeftRoad.src = "assets/roads/intersectionLeft.png";
imgFourWayRoad.src = "assets/roads/fourWay.png";

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
c.addEventListener('mousedown', function(e) {
    addRoadWithCoords(c, e)
});
var map = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];
function drawBoard(){
    var bw = 1664;
    var bh = 960;
    ctx.lineWidth = 2;
    ctx.strokeStyle = "rgb(0,0,0)";
    for (var x = 0; x < bw; x += 64) {
        for (var y = 0; y < bh; y += 64) {
            ctx.strokeRect(x, y, 64, 64);
        }
    }
}
renderMap();

function renderMap(){
    ctx.clearRect(0,0,1664,960);
    drawBoard();
    for(var x=0;x<map[0].length;x++){
        for(var y=0;y<map.length;y++){
            if(map[y][x] == 1){
                var roadType = 0;
                if(Array.isArray(map[y-1]) && map[y-1][x] == 1) roadType += 1;
                if(map[y][x+1] != undefined && map[y][x+1] == 1) roadType += 2;
                if(Array.isArray(map[y+1]) && map[y+1][x] == 1) roadType += 4;
                if(map[y][x-1] != undefined && map[y][x-1] == 1) roadType += 8;

                if(roadType == 1) ctx.drawImage(imgRoadEndBottom, x*64, y*64);
                else if(roadType == 2) ctx.drawImage(imgRoadEndLeft, x*64, y*64);
                else if(roadType == 3) ctx.drawImage(imgBottomLeftRoad, x*64, y*64);
                else if(roadType == 4) ctx.drawImage(imgRoadEndTop, x*64, y*64);
                else if(roadType == 5) ctx.drawImage(imgVerticalRoad, x*64, y*64);
                else if(roadType == 6) ctx.drawImage(imgTopLeftRoad, x*64, y*64);
                else if(roadType == 7) ctx.drawImage(imgIntersectionLeftRoad, x*64, y*64);
                else if(roadType == 8) ctx.drawImage(imgRoadEndRight, x*64, y*64);
                else if(roadType == 9) ctx.drawImage(imgBottomRightRoad, x*64, y*64);
                else if(roadType == 10) ctx.drawImage(imgHorizontalRoad, x*64, y*64);
                else if(roadType == 11) ctx.drawImage(imgIntersectionBottomRoad, x*64, y*64);
                else if(roadType == 12) ctx.drawImage(imgTopRightRoad, x*64, y*64);
                else if(roadType == 13) ctx.drawImage(imgIntersectionRightRoad, x*64, y*64);
                else if(roadType == 14) ctx.drawImage(imgIntersectionTopRoad, x*64, y*64);
                else if(roadType == 15) ctx.drawImage(imgFourWayRoad, x*64, y*64);
                else ctx.drawImage(imgRoadEnd, x*64, y*64);
            }
            else if(map[y][x] == 2) ctx.drawImage(imgSmallHouse, x*64, y*64);
            else if(map[y][x] == 3) ctx.drawImage(imgLargeHouseLeft, x*64, y*64);
            else if(map[y][x] == 4) ctx.drawImage(imgLargeHouseRight, x*64, y*64);
            else if(map[y][x] == 5) ctx.drawImage(imgSmithyLeft, x*64, y*64);
            else if(map[y][x] == 6) ctx.drawImage(imgSmithyRight, x*64, y*64);
        }
    }
}

function addRoadWithCoords(canvas, event) {
    const rect = canvas.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    if(map[Math.floor(y/64)][Math.floor(x/64)] == 0) map[Math.floor(y/64)][Math.floor(x/64)] = 1;
    renderMap();
}

function addRoadRandom(){
    var randX = Math.floor(Math.random() * map[0].length);
    var randY = Math.floor(Math.random() * map.length);
    if(map[randY][randX] != 0) {
        addRoadRandom();
        return;
    }
    map[randY][randX] = 1;
    renderMap();
}

function addHouse(){
    var randX = Math.floor(Math.random() * map[0].length);
    var randY = Math.floor(Math.random() * map.length);
    var randHouse = Math.ceil(Math.random() * 3);
    if(map[randY][randX] != 0 || map[randY][randX+1] != 0) {
        addHouse();
        return;
    }
    else {
        if(randHouse == 1) map[randY][randX] = 2;
        else if(randHouse == 2) {
            map[randY][randX] = 3;
            map[randY][randX+1] = 4;
        }
        else if(randHouse == 3) {
            map[randY][randX] = 5;
            map[randY][randX+1] = 6;
        }
    }
    renderMap();
}

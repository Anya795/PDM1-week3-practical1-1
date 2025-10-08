let circleX = 300
let circleY = 300
let circleW = 550


function setup() {
createCanvas(600,600);
fillColour = color(random(255), random(255));
fill(fillColour);
circle(circleX, circleY, circlew);
}

function draw () {
    background(255);
    triangle(30, 75, 58, 20, 86, 75);
    
    function KeyPressed() {
        if (key === 'w');{
            circleY -= 5
             }

    if (key === 's'); {
        circleY -= 5

    }
    if (key === 'a'); {
        circleX -= 5

    }
    if (key === 'd'); {
        circleX -= 5
    }
       
        
    
}

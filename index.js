var bc=1;
var r=0;
var g=0;
var b=0;
var bcol=255;
var ran=0;
var sel=255;
var cr=255;
var x;
var y;
var UP=255;
function setup() {
 createCanvas(600, 300);
 background(bcol);

}


function draw() {

noFill(); 
stroke(0);
 rect(0,0,599,299);
fill(25,25,34);
noStroke();
text("By Osman",3,15)
if(bc==0){
bc=1;
background(bcol);
}
if(ran==1){
r=round(random(0,255));
b=round(random(0,255));
g=round(random(0,255));
}
fill(bcol,50);
stroke(bcol);
rect(570,20,28,60);
fill(0);
text("Red-"+r,551,32);
text("Green-"+g,540,52);
text("Blue-"+b,548,72);

if(cr!=255){
if(mouseIsPressed){
stroke(r,g,b);
fill(255);
ellipse(x,y,mouseX-x,mouseX-x);
}}


if(sel==0){
if(mouseIsPressed){
stroke(255);
fill(255);
rect(mouseX,mouseY,20,20);
}}

if(UP!=255){
if(mouseIsPressed){
stroke(r,g,b);
fill(255);
ellipse(x,y,mouseX-x,mouseY-y);
}}

if(sel!=0&&UP==255&&cr==255){

if(mouseIsPressed){
stroke(r,g,b);
fill(r,g,b);
ellipse(mouseX,mouseY,5,5);
}
}
if(g!=255){
if (keyIsDown(RIGHT_ARROW)==true&&keyIsDown(LEFT_ARROW)==true)
{g=g+1;}}
if(g!=0){
if (keyIsDown(UP_ARROW)==true&&keyIsDown(DOWN_ARROW)==true)
{g=g-1;}
}

if(r!=255){
if (keyIsDown(RIGHT_ARROW))
{r=r+1;}}
if(r!=0){
if (keyIsDown(LEFT_ARROW))
{r=r-1;}
}


if(b!=255){
if (keyIsDown(UP_ARROW))
{b=b+1;}}
if(b!=0){
if (keyIsDown(DOWN_ARROW))
{b=b-1;}
}
noStroke();
fill(0);
rect(530,110,68,20);
fill(0);
rect(530,130,68,20);
fill(0);
rect(530,150,68,20);
rect(530,170,68,20);
fill(0);
rect(530,90,68,20)
fill(255);
text("Random",539,104);
text("Reset",539,124);
fill(255,cr,cr);
text("Circle",539,184);
fill(255,UP,UP);
text("UniPat",539,164);
fill(255,sel,sel);
text("Eraser",539,144);
fill(r,g,b);
rect(580,2,18,18);
fill(255);
ellipse(590,10.5,10,10);
fill(r,g,b);
text('c',587,14);
}
function mousePressed(){
if(mouseX>580&&mouseY>0&&mouseX<600&&mouseY<20)
{bc=0;

}
if(mouseX>530&&mouseY>90&&mouseX<600&&mouseY<110)
{
if(ran==1)
{ran=0;}
else if(ran==0) {
ran=1;}}
if(mouseX>530&&mouseY>110&&mouseX<600&&mouseY<130)
{r=0;
b=0;
g=0;}
if(mouseX>530&&mouseY>130&&mouseX<600&&mouseY<150)
{if(sel==255)
{sel=0;}
else if(sel==0) {
sel=255;}
cr=255;
UP=255;
}
if(mouseX>530&&mouseY>150&&mouseX<600&&mouseY<170)
{if(UP==255)
{UP=0;}
else if(UP==0) {
UP=255;}
cr=255;
sel=255;}

if(mouseX>530&&mouseY>170&&mouseX<600&&mouseY<190)
{if(cr==255)
{cr=0;}
else if(cr==0) {
cr=255;}
UP=255;
sel=255;}

x=mouseX;
y=mouseY;
}


function keyTyped(){

if (key==='r')
{bc=0;}

}
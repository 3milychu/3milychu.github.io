PShape s; // The PShape starting pattern
PVector pos;
PVector vel, grav;
float theta = 0;
float angle;
void setup() {
size(windowWidth, windowHeight);
background(255,221,200);
//movement and behavior
pos = new PVector(0,0);
vel = new PVector(0,1.5);
grav = new PVector(0,1);
frameRate(100);
// Creating a custom via vertices
s = createShape();
s.beginShape();
s.fill(0, 1);
s.noStroke();
scale(0.01);
s.vertex(170, 284);
s.vertex(335, 278);
s.vertex(328, 260);
s.vertex(453, 163);
s.vertex(453, 324);
s.vertex(475, 314);
s.vertex(574, 440);
s.vertex(410, 440);
s.vertex(420, 455);
s.vertex(287, 550);
s.vertex(291, 391);
s.vertex(270, 403);
s.endShape(CLOSE);
}
void draw() {
//pos.x = scale(
// for(int i=0, i<10, i++){
// i* cos(theta)
// }
// );
//pos.x = 1 * cos(theta);
//pos.y = 2 * sin(theta);
pushMatrix();
translate(width/2, height/2);
scale(0.5);
rotate(radians(angle));
shape(s, pos.x, pos.y);
angle++;
popMatrix();
//pushMatrix();
////translate(width/2, pos.y);
//rotate(radians(angle));
////scale(0);
////shape(s, 0, 0);
//popMatrix();
//theta += .1;
//scale() += 0.1;
}
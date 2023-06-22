


function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');

	video = createCapture(VIDEO);
	video.size(800,400);
	video.parent("game_console");
	
	instializeInSetup(mario);

	posenet = ml5.poseNet(video, ModelLoaded);
	posenet.on(pose, gotPoses);

}

function ModelLoaded(){
	console.log("ready");
}

function gotPoses(results){
	if (results.length > 0){
		console.log(results);
		nose_x = results[0].pose.nose.x;
		nose_y = results[0].pose.nose.y;

	}
}

function draw() {
	game()
}

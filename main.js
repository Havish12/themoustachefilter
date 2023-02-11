nosex=0;
nosey=0;

function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotposes);
}

function modelLoaded()
{
    console.log("poseNet is initialized");
}

function gotposes(results)
{
    if(results.length > 0)
    {
        console.log(results);
        console.log("nosex= " + results[0].pose.nose.x);
        console.log("nosey= " + results[0].pose.nose.y);

        nosex=results[0].pose.nose.x-25;
        nosey=results[0].pose.nose.y-7;
    }
}

function draw()
{
    image(video, 0, 0, 300, 300);
    image(img, nosex, nosey, 50, 50)
}

function take_snapshot()
{
    save('yourimage.png');
}


function preload()
{
    img= loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}

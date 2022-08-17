var canvas = new fabric.Canvas('mycanvas');
blockwidth = 30;
blockheight = 30;
playerx = 10;
playery = 10;

var playerobject = "";

function playerupdate() {
    fabric.Image.fromURL("player.png", function (Img) {
        playerobject = Img;
        playerobject.scaleToWidth(150);
        playerobject.scaleToHeight(150);
        playerobject.set({
            top: playery,
            left: playerx
        });
        canvas.add(playerobject);
    });
}

function newimage(getimage) {
    fabric.Image.fromURL(getimage, function (Img) {
        blockobject = Img;
        blockobject.scaleToWidth(blockwidth);
        blockobject.scaleToHeight(blockheight);
        blockobject.set({
            top: playery,
            left: playerx
        });
        canvas.add(blockobject);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keypress = e.keyCode;
    console.log(keypress);

    if (e.shiftKey == true && keypress == "80") {
        console.log("shift & p pressed together");
        blockwidth = blockwidth + 10;
        blockheight = blockheight + 10;
        document.getElementById("currentwidth").innerHTML = blockwidth;
        document.getElementById("currentheight").innerHTML = blockheight;
    }

    if (e.shiftKey == true && keypress == "77") {
        console.log("shift & m pressed together");
        blockwidth = blockwidth - 10;
        blockheight = blockheight - 10;
        document.getElementById("currentwidth").innerHTML = blockwidth;
        document.getElementById("currentheight").innerHTML = blockheight;
    }

    if (keypress == "37") {
        left();
        console.log("left");
    }

    if (keypress == "38") {
        up();
        console.log("up");
    }

    if (keypress == "39") {
        right();
        console.log("right");
    }

    if (keypress == "40") {
        down();
        console.log("down");
    }

    if (keypress == "67") {
        newimage("cloud.jpg");
        console.log("c");
    }


    if (keypress == "68") {
        newimage("dark_green.png");
        console.log("d");
    }


    if (keypress == "71") {
        newimage("ground.png");
        console.log("g");
    }

    
    if(keypress=="76")
    {
    newimage("light_green.png");
    console.log("l");
    }

    
    if(keypress=="81")
    {
    newimage("roof.jpg");
    console.log("r");
    }

    
    if(keypress=="84")
    {
    newimage("trunk.jpg");
    console.log("t");
    }

    
    if(keypress=="85")
    {
    newimage("unique.png");
    console.log("u");
    }

    
    if(keypress=="87")
    {
    newimage("wall.jpg");
    console.log("w");
    }

    
    if(keypress=="89")
    {
    newimage("yellow_wall.png");
    console.log("y");
    }
}

function up()
{
  if(playery>=0) 
  {
   playery=playery-blockheight;
   console.log("blockheight : "+ blockheight);
   console.log("when up arrow key is pressed x=" +playerx,"y="+playery);
   canvas.remove(playerobject);
   playerupdate();
  }
}

function down()
{
  if(playery<=500) 
  {
   playery=playery+blockheight;
   console.log("blockheight : "+ blockheight);
   console.log("when down arrow key is pressed x=" +playerx,"y="+playery);
   canvas.remove(playerobject);
   playerupdate();
  }
}

function left()
{
  if(playerx>=0) 
  {
   playerx=playerx-blockwidth;
   console.log("blockwidth : "+ blockwidth);
   console.log("when left arrow key is pressed x=" +playerx,"y="+playery);
   canvas.remove(playerobject);
   playerupdate();
  }
}

function right()
{
  if(playerx<=900) 
  {
   playerx=playerx+blockwidth;
   console.log("blockwidth : "+ blockwidth);
   console.log("when right arrow key is pressed x=" +playerx,"y="+playery);
   canvas.remove(playerobject);
   playerupdate();
  }
}
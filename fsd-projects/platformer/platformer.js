$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////
    
    // TODO 1 - Enable the Grid
     


    // TODO 2 - Create Platforms
    createPlatform(100,300,300,10);
    createPlatform(100,600,150,10);
    createPlatform(0,739,1400,1);
    createPlatform(400,461,300,10);
    createPlatform(400,350,250,5);
    createPlatform(650,300,10,50)
    createPlatform(1190,250,10,100);
    createPlatform(1100,350,100,10);
    createPlatform(100,150,10,150)



    // TODO 3 - Create Collectables
    createCollectable("ring",150,500,1,0.5);
    createCollectable("knuckles",500,400,1,0.5);
    createCollectable("tails",1150,300,1,0.5);
    createCollectable("shadow",600,300,1,0.5);
    createCollectable("eggman",150,250,1,0.5);
    



    
    // TODO 4 - Create Cannons

    createCannon("top",400,1000);
    createCannon("left",350,5000);
    createCannon("top",1000,1500);
    createCannon("top",900,1500);
    createCannon("top",1100,1500);





    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});

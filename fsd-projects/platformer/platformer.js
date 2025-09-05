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
     toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(1000,200,300,50);
    createPlatform(100,600,150,10);
    createPlatform(0,739,1400,1)
    createPlatform(400,461,300,10)
    createPlatform(1100,380,100,10)
    createPlatform(1190,300,10,80)




    // TODO 3 - Create Collectables
    createCollectable("ring",375,500,1,0.5);
    createCollectable("knuckles",400,500,1,0.5);
    createCollectable("tails",450,500,1,0.5);
    createCollectable("shadow",500,500,1,0.5);
    createCollectable("eggman",550,500,1,0.5);
    



    
    // TODO 4 - Create Cannons
    createCannon("top",700,1000);
    createCannon("top",300,1000);
    createCannon("left",200,1000);
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});

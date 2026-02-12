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
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "pink"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(200, 620, 290, 20, "pink");
    createPlatform(90, 500, 200, 20, "pink");
    createPlatform(500, 400, 200, 20, "pink");
    createPlatform(667, 280, 300, 20, "pink");
    createPlatform(900, 450, 20, 290, "pink");
    createPlatform(1200, 550, 100, 20, "pink");
    createPlatform(750, 620, 70, 20, "beige");
    createPlatform(830, 500, 70, 20, "beige");
    createPlatform(1100, 620, 70, 20, "beige");
    // TODO 3 - Create Collectables
    createCollectable("cookie", 120, 170, 0.5, 0.7);
    createCollectable("cake", 790, 0, 0.5, 0.7);
    createCollectable("brownie", 1220, 0, 0.5, 0.7);
    
    // TODO 4 - Create Cannons
    createCannon("top", 1390, 200, 100, 100);
    createCannon("left", 70, 900, 100, 100);
    createCannon("bottom", 660, 10000, 2000, 2000);
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});

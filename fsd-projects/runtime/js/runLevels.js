var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(true);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE
    function createObstacle(x, y, damage){
      var hitZoneSize = 25;
      var damageFromObstacle = damage;//determines how much damage the obsiticle does
      var obstacleHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);//creates the obstacle, gives a size and damage
      obstacleHitZone.x = x;//sets the x position
      obstacleHitZone.y = y;//sets y position
      game.addGameItem(obstacleHitZone);//takes obstacle and adds the hitzone of the obstacle
      var obstacleImage = draw.bitmap("img/sawblade.png");//creates a bitmap and stores it as an obstacleImage
      obstacleHitZone.addChild(obstacleImage);//takes the image and puts it onto the hitzone
      obstacleImage.x=-25;//offsets the image horizontally relative to the hitzone
      obstacleImage.y=-25;//offsets the image vertically relative to the hitzone
      obstacleHitZone.rotationalVelocity = 10;
    }


    

    createObstacle(400,groundY-177,10000);
    createObstacle(400,groundY-36,10000);
    createObstacle(750,groundY-185,10000);
    createObstacle(750,groundY-50,10000);
    

    var enemy = game.createGameItem("enemy", 25);
    var redSquare = draw.rect(50, 50, "red");
    redSquare.x = -25;
    redSquare.y = -25;
    enemy.addChild(redSquare);
    enemy.x = 400;
    enemy.y = groundY - 50;
    game.addGameItem(enemy);
    enemy.velocityX = -1;

    enemy.onPlayerCollision = function () {
      game.changeIntegrity(-10);
    };

    enemy.onProjectileCollision = function () {
      game.increaseScore(10000);
      enemy.fadeOut();
    };


    function startLevel() {
      // TODO 13 goes below here



      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined" 
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}

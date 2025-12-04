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
    function createObstacle(x, y, damage,rotation,image, scaleX, scaleY, offsetX, offsetY){
      var hitZoneSize = 25;
      var damageFromObstacle = damage;//determines how much damage the obsiticle does
      var obstacleHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);//creates the obstacle, gives a size and damage
      obstacleHitZone.x = x;//sets the x position
      obstacleHitZone.y = y;//sets y position
      game.addGameItem(obstacleHitZone);//takes obstacle and adds the hitzone of the obstacle
      var obstacleImage = draw.bitmap(image);//creates a bitmap and stores it as an obstacleImage
      obstacleHitZone.addChild(obstacleImage);//takes the image and puts it onto the hitzone
      obstacleImage.x=offsetX;//offsets the image horizontally relative to the hitzone
      obstacleImage.y=offsetY;//offsets the image vertically relative to the hitzone
      obstacleImage.scaleX = scaleX;
      obstacleImage.scaleY = scaleY;
      obstacleHitZone.rotationalVelocity = rotation;
    }

    



    
    
    function createEnemy(x,y) {
      var enemy = game.createGameItem("enemy", 25); //creates enemy game item and stores its hit zone as 25 
      var enemyImage = draw.rect(50, 50, "red"); //creates image of enemy
      enemyImage.x = -25;//offsets the image by 25 in the x direction
      enemyImage.y = -25;//offsets the image by 25 in the y direction
      enemy.addChild(enemyImage);//attaches the image to the enemy object
      enemy.x = x;//sets x posititon
      enemy.y = y;//sets x posititon
      game.addGameItem(enemy); //adds the enemy to the game
      enemy.velocityX = -1;//animates the enemy

      enemy.onPlayerCollision = function () {//handles when the enemy collides with the player
        game.changeIntegrity(-20);//enemy's damage to the player
      };

      enemy.onProjectileCollision = function () {//handles when the projectiles hit the enemies
        game.increaseScore(100);//gives points based on if you kill the enemy 
        enemy.fadeOut();//makes the enemy fade out of the game
      };
    }
    
    function createReward(x,y) {
      var reward = game.createGameItem("reward", 25); //creates reward game item and stores its hit zone as 25 
      var rewardImage = draw.rect(50, 50, "blue"); //creates image of reward
      rewardImage.x = -25;//offsets the image by 25 in the x direction
      rewardImage.y = -25;//offsets the image by 25 in the y direction
      reward.addChild(rewardImage);//attaches the image to the reward object
      reward.x = x;//sets x posititon
      reward.y = y;//sets x posititon
      game.addGameItem(reward); //adds the reward to the game
      reward.velocityX = -1;//animates the reward

      reward.onPlayerCollision = function () {//handles when the reward collides with the player
        game.changeIntegrity(20);//reward's damage to the player
        reward.fadeOut();
      };

      
    }
    
    function createLevelMarker(x,y) {
      var levelMarker = game.createGameItem("Level", 25); //creates levelMarker game item and stores its hit zone as 25 
      var levelImage = draw.rect(50, 50, "yellow"); //creates image of levelMarker
      levelImage.x = -25;//offsets the image by 25 in the x direction
      levelImage.y = -25;//offsets the image by 25 in the y direction
      levelMarker.addChild(levelImage);//attaches the image to the levelMarker object
      levelMarker.x = x;//sets x posititon
      levelMarker.y = y;//sets x posititon
      game.addGameItem(levelMarker); //adds the levelMarker to the game
      levelMarker.velocityX = -1;//animates the levelMarker

      levelMarker.onPlayerCollision = function () {//handles when the levelMarker collides with the player
        game.changeIntegrity(20);//levelMarker's damage to the player
        levelMarker.fadeOut();
        startLevel();
      };

      
    }
    
    function startLevel() {
      // TODO 13 goes below here
      var level = levelData[currentLevel];//fetches the current level from the levelData array and stores it inside of level 
      var levelObjects = level.gameItems;//retrieves the array of gameItems and stores it in levelObjects variable
      for (var i = 0;i<levelObjects.length;i++){
        var element = levelObjects[i];
        if (element.type === "obstacle") {
          createObstacle(element.x,element.y,element.damage, element.rotation,element.image, element.scaleX, element.scaleY, element.offsetX, element.offsetY);
        }
        if (element.type === "enemy") {
          createEnemy(element.x,element.y);
        }
        if (element.type === "reward") {
          createReward(element.x,element.y);
        }
        if (element.type === "levelMarker") {
          createLevelMarker(element.x,element.y);
        }
      }

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

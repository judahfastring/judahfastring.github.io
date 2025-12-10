var makeLevelData = function (window) {
  window.opspark = window.opspark || {};

  window.opspark.makeDataInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game

    // TODO 12: change the below data
    var levelData = [
      {
        name: "Robot Romp",
        number: 1,
        speed: -3,
        gameItems: [
          { type: "obstacle", x: 400, y: groundY-110,damage:101, rotation: 5, image:"img/sawblade (2).png", scaleX: 1, scaleY: 1, offsetX: -28, offsetY:-28, hitZone:25 },
          { type: "obstacle", x: 600, y: groundY-10,damage:101, rotation: 5, image:"img/sawblade (2).png", scaleX: 1, scaleY: 1, offsetX: -28, offsetY:-28, hitZone:25  },
          { type: "obstacle", x: 800, y: groundY-110,damage:101, rotation: 5, image:"img/sawblade (2).png", scaleX: 1, scaleY: 1, offsetX: -28, offsetY:-28, hitZone:25 },
          { type: "obstacle", x: 1000, y: groundY-10,damage:101, rotation: 0, image:"img/spike (1).png", scaleX: .50, scaleY: .50, offsetX: -30, offsetY:-50, hitZone:25 },
          { type: "obstacle", x: 1200, y: groundY-10,damage:101, rotation: 0, image:"img/block.png", scaleX: .75, scaleY: .75, offsetX: -21.5, offsetY:-31.5, hitZone:25 },
          { type: "enemy", x: 400, y: groundY-50,damage:-20,image: "img/spaceship.png", scaleX:.25, scaleY:.25, offsetX:-27, offsetY:-27, score:100, velocity:-1, hitZoneSize:25},
          { type: "enemy", x: 500, y: groundY-50,damage:-20,image: "img/ufo.png", scaleX:-.08, scaleY:.08, offsetX:22, offsetY:-21, score:100, velocity:-1, hitZoneSize:25},
          { type: "reward", x: 700, y: groundY,heal:20,image: "img/silver coin.png", scaleX:.225, scaleY:.225, offsetX:-27, offsetY:-27, score:100, velocity:-1, hitZoneSize:25},
          { type: "reward", x: 900, y: groundY,heal:20,image: "img/gold coin.png", scaleX:.065, scaleY:.065, offsetX:-25, offsetY:-25, score:100, velocity:-1, hitZoneSize:25},
          { type: "levelMarker", x: 1300, y: groundY-110,heal:20,image: "img/endLevel.png", scaleX:.75, scaleY:.76, offsetX:-300, offsetY:-358, score:100, velocity:-1, hitZoneSize:50},
          { type: "enemy", x: 600, y: groundY-50,damage:-20,image: "img/arrow (1).png", scaleX:.75, scaleY:.75, offsetX:-27, offsetY:-27, score:100, velocity:-1, hitZoneSize:25},
          
        ],
      },
      {
        name: "Robot Rampage",
        number: 2,
        speed: -3,
        gameItems: [
          { type: "reward", x: 900, y: groundY,heal:20,image: "img/key.png", scaleX:1, scaleY:1, offsetX:-25, offsetY:-25, score:100, velocity:-1, hitZoneSize:25},
          { type: "enemy", x: 400, y: groundY-50,damage:-20,image: "img/arrow (1).png", scaleX:.75, scaleY:.75, offsetX:-27, offsetY:-27, score:100, velocity:-1, hitZoneSize:25},
          { type: "obstacle", x: 600, y: groundY-10,damage:101, rotation: 0, image:"img/block.png", scaleX: .75, scaleY: .75, offsetX: -21.5, offsetY:-31.5, hitZone:25 },
          { type: "obstacle", x: 700, y: groundY-10,damage:101, rotation: 0, image:"img/block.png", scaleX: .75, scaleY: .75, offsetX: -21.5, offsetY:-31.5, hitZone:25 },
          { type: "obstacle", x: 800, y: groundY-10,damage:101, rotation: 0, image:"img/block.png", scaleX: .75, scaleY: .75, offsetX: -21.5, offsetY:-31.5, hitZone:25 },
          { type: "obstacle", x: 900, y: groundY-10,damage:101, rotation: 0, image:"img/block.png", scaleX: .75, scaleY: .75, offsetX: -21.5, offsetY:-31.5, hitZone:25 },
          { type: "obstacle", x: 1300, y: groundY-20,damage:0, rotation: 0, image:0, scaleX:0, scaleY:0, offsetX:0, offsetY:0, hitZone:45 },
          { type: "obstacle", x: 1390, y: groundY-20,damage:101, rotation: 0, image:"img/spike (1).png", scaleX: .70, scaleY: .70, offsetX: -54, offsetY:-72, hitZone:45 },
          { type: "obstacle", x: 1480, y: groundY-20,damage:101, rotation: 0, image:"img/spike (1).png", scaleX: .70, scaleY: .70, offsetX: -54, offsetY:-72, hitZone:45 },
          { type: "obstacle", x: 1570, y: groundY-20,damage:101, rotation: 0, image:"img/spike (1).png", scaleX: .70, scaleY: .70, offsetX: -54, offsetY:-72, hitZone:45 },
          { type: "obstacle", x: 1660, y: groundY-20,damage:101, rotation: 0, image:"img/spike (1).png", scaleX: .70, scaleY: .70, offsetX: -54, offsetY:-72, hitZone:45 },
          { type: "obstacle", x: 1750, y: groundY-20,damage:101, rotation: 0, image:"img/spike (1).png", scaleX: .70, scaleY: .70, offsetX: -54, offsetY:-72, hitZone:45 },
        ],  
      },
    ];
    window.opspark.levelData = levelData;
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = makeLevelData;
}

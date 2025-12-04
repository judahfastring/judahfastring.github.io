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
          { type: "obstacle", x: 400, y: groundY-110,damage:101, rotation: 5, image:"img/sawblade (2).png", scaleX: 1, scaleY: 1, offsetX: -28, offsetY:-28 },
          { type: "obstacle", x: 600, y: groundY-10,damage:101, rotation: 5, image:"img/sawblade (2).png", scaleX: 1, scaleY: 1, offsetX: -28, offsetY:-28  },
          { type: "obstacle", x: 800, y: groundY-110,damage:101, rotation: 5, image:"img/sawblade (2).png", scaleX: 1, scaleY: 1, offsetX: -28, offsetY:-28 },
          { type: "obstacle", x: 1000, y: groundY-20,damage:101, rotation: 0, image:"img/spike (1).png", scaleX: .50, scaleY: .50, offsetX: -30, offsetY:-40 },
          { type: "obstacle", x: 1000, y: groundY-20,damage:101, rotation: 0, image:"img/block.png", scaleX: .50, scaleY: .50, offsetX: -30, offsetY:-40 },
          { type: "enemy", x: 400, y: groundY-50},
          { type: "enemy", x: 500, y: groundY-50},
          { type: "reward", x: 700, y: groundY},
          { type: "reward", x: 900, y: groundY},
          { type: "levelMarker", x: 1100, y: groundY},
        ],
      },
      {
        name: "Robot Rampage",
        number: 2,
        speed: -3,
        gameItems: [
          { type: "obstacle", x: 400, y: groundY },
          { type: "obstacle", x: 600, y: groundY },
          { type: "obstacle", x: 900, y: groundY },
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

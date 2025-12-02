var background = function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        /* Error Checking - DO NOT DELETE */
        if(!app) {
            throw new Error("Invalid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }
        
        // useful variables
        var canvasWidth = app.canvas.width;
        var canvasHeight = app.canvas.height;
        var groundY = ground.y;
        
        // container which will be returned
        var background;
        
        //////////////////////////////////////////////////////////////////
        // ANIMATION VARIABLES HERE //////////////////////////////////////
        //////////////////////////////////////////////////////////////////
        // TODO (several):
        var tree;
        var buildings = [];
      
        // called at the start of game and whenever the page is resized
        // add objects for display in background. draws each image added to the background once
        function render() {
            background.removeAllChildren();

            // TODO 1:
            // this currently fills the background with an obnoxious yellow;
            // you should modify both the height and color to suit your game
            var backgroundFill = draw.rect(canvasWidth,groundY,'blue');//draws a rectangle and gives it a color
            background.addChild(backgroundFill);//adds the backgroundfill to the background object 
            
            // TODO 2: - Add a moon and starfield
            for (var i =0;i<50;i++) {
                var circle = draw.circle(2, "white", "LightGray", 2);//creates a circle with a specified radius, border color, fill color, and alpha and stores it in circle
                circle.x = canvasWidth * Math.random();//sets random x position
                circle.y = groundY * Math.random();//sets random y position
                background.addChild(circle); //adds stars to the background container
            }
            var moon = draw.bitmap("img/moon.png");//creates bitmap object
            moon.x = canvas.width - 425;//sets moons x position
            moon.y = canvas.height-925;//sets moons y position
            moon.scaleX = 1.0; //scales the moons width
            moon.scaleY = 1.0; //scales the monns height
            background.addChild(moon); //adds the moon to the background container
            
            
            // TODO 4: Part 1 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
            for (var i = 0; i < 5; ++i) {
            var buildingHeight = Math.random()*300;
            var buildingColors = ["pink", "red", "orange","green","purple"]
            var building = draw.rect(75, buildingHeight, buildingColors[i], buildingColors[i], 0); // sets bulding width, height, fill color, outline, and strokeweight
            building.x = 200 * i;//x values for buildings
            building.y = groundY - buildingHeight;//y values for buildings
            background.addChild(building);//calls moon to conainer
            buildings.push(building);//pushes building to the array
            }
            
            // TODO 3: Part 1 - Add a tree
            tree = draw.bitmap("img/tree.png");//creates bitmap object using the tree image
            tree.x = 600;//sets the x postition
            tree.y = groundY-230;//sets the y position
            background.addChild(tree);//adds the tree to background container
            
        } // end of render function - DO NOT DELETE
        
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            // TODO 3: Part 2 - Move the tree!
            tree.x = tree.x - 3;//moves tree to the left by subtracting form current x position
            if (tree.x < -200) {//checks if tree has gone off left side of screen and resets it
            tree.x = canvasWidth;
            }
            
            // TODO 4: Part 2 - Parallax
            for (var i = 0; i < buildings.length; i++) {
                var building = buildings[i];
                building.x -=1;//takes the x value and subtracts one so it moves to the left
                if (building.x<-100){//checks if x value has gone off the screen, and if so, it sets it to the right side of the screen
                    building.x = canvasWidth;
                }
            }

            

        } // end of update function - DO NOT DELETE
        
        
        
        /* Make a createjs Container for the background and let it know about the render and upate functions*/
        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        /* make the background able to respond to resizing and timer updates*/
        app.addResizeable(background);
        app.addUpdateable(background);
        
        /* render and return the background */
        render();
        return background;
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}

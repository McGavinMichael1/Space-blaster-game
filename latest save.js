/**
 * Generated from the Phaser Sandbox
 *
 * http://phaser.io/sandbox/bsNgUReJ
 *
 * This source requires Phaser 2.6.1
 */

var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update, render: render });

function preload() {
//phaser requires these lines

game.load.baseURL = 'http://examples.phaser.io/assets/';
game.load.crossOrigin = 'Anonymous';
game.load.image('stars', 'misc/starfield.jpg');
game.load.spritesheet('ship', 'sprites/humstar.png', 32, 32);

}

var starfield; //this is the background
var ship;     // this is the little hamster ship
function create() {

//this is to start the system
game.world.setBounds(0,0, 1600, 1200);
game.physics.startSystem(Phaser.Physics.P2JS);
game.physics.p2.defaultRestitution = 0.9;

//add the bacground image starfield
starfield = game.add.tileSprite(0,0, 800, 600, 'stars');
starfield.fixedToCamera = true;
console.log(starfield);
//hamster animations
ship = game.add.sprite(200,100, 'ship');
ship.scale.set(2);
ship.smoothed = false;
ship.animations.add('fly', [0,1,2,3,4,5], 10, true);
ship.play('fly');

//ship physics
game.physics.enable(ship, Phaser.Physics.ARCADE);
game.camera.follow(ship);
ship.body.collideWorldBounds = true;
}

function update() {

//WASD controls                         cursor.up

movementControlsForShip();
//move the background with us!
moveBackground();

//function to move the background with the ship
function moveBackground(){
    if(!game.camera.atLimit.x){
        starfield.tilePosition.x -= (ship.body.velocity.x * game.time.physicsElapsed);
    }
    if(!game.camera.atLimit.y){
        starfield.tilePosition.y -= (ship.body.velocity.y * game.time.physicsElapsed);
    }
}
function movementControlsForShip(){
    
var wasdControls = {
  up   : game.input.keyboard.addKey(Phaser.Keyboard.W), 
  down : game.input.keyboard.addKey(Phaser.Keyboard.S), 
  left : game.input.keyboard.addKey(Phaser.Keyboard.A), 
  right: game.input.keyboard.addKey(Phaser.Keyboard.D) 
};
ship.body.velocity.setTo(0,0);

if(wasdControls.left.isDown){
    ship.body.velocity.x = -400;
}
else if(wasdControls.right.isDown){
    ship.body.velocity.x = 400;
}

if(wasdControls.up.isDown){
    ship.body.velocity.y = -400;
}
else if(wasdControls.down.isDown){
    ship.body.velocity.y = 400;
}
}
}

function render() {

}

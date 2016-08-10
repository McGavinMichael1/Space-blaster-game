/**
 * Generated from the Phaser Sandbox
 *
 * http://phaser.io/sandbox/IUKskfRS
 *
 * This source requires Phaser 2.6.1
 */

var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update, render: render });

function preload() {
var score;
var playerlives = 3;
//The player, has properties relating to lives, firerate, lives
var Spaceship = {
speed : 15,
firerate : 25,
lives: 3
};
//The enemies, has speed, lives, and (random placement and stuff)
var Enemy = {
speed: 30,
lives: 1
};
//The bullet entity is created when the player clicks, is faster than enemies
var Bullet = {
speed: 40
};
//collision event between player and enemy
function collision(playerlives){
playerlives - 1;
}









}

function create() {

}

function update() {

}

function render() {

}

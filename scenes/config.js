
import {mainScene} from "/scenes/main_scene.js";
import {roulette_scene} from "/scenes/roulette_scene.js";




const config = {
    type: Phaser.AUTO,
    width: w_width,
    height: w_height,
    backgroundColor: '#000000',
    parent: 'trivia_multiplayer',
    scene: [mainScene,roulette_scene],
    
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
            //gravity: { y: 300 }
        }
    },
    fx: {
        glow: {
            distance: 32,
            quality: 0.1
        }
    }
};

game = new Phaser.Game(config);
console.log(game);
game.scene.start('mainScene');


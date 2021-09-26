# Game Design Document for Space Shooter Game 

## Objective

* Develop a Space Shooter game using Phaser 3, Webpack 5, and JavaScript that runs when deployed online and played locally.The player must kill all the enemies with lasers and avoid either colliding with the enemies or the enemy lasers. The key entities in the game include the player, ChaserShip, CarrierShip, and GunShip.

* Implement a scoring  and ranking system, so that when the user completes a game they are given a score.
* A leader board that makes use of the scores and rank various people that played the game.

## Development process

 ### Understanding Phaser
  At this stage, 
  * I Learned and understood the Phaser framework necessary for the project due to the project's tight deadline.

  * learned and practiced setting up Webpack with phaser that is necessary for the bundling of the project dependencies


 ### Gather Assets

 Gathered and arranged all the necessary assets (images, sprites, sounds, etc.)for the game. All the assets were gotten from open game art, other free online resources. Data used in compliance with the assets license agreement.

 Enemies: [ansimuz](https://opengameart.org/content/space-ship-shooter-pixel-art-assets) 

Enemies: [hookiz](https://opengameart.org/content/ship-space-0)


Background Image: [Free Background Image](https://wallpaperaccess.com/full-military-battle)

### Game setup and Scenes implementation

At this stage, I implemented the following Scenes;

* The Boot Scene, which boots the game and loads all the assets
* The Preloader Scene, where all the assets necessary for the game were added.
* The Title Scene, to display the title of the project along side 3 buttons viz: Play, Leaderboard and quit buttons.
* The Game scene for the core functionalities of the game.

### Adding functionalities to the Game Scene.
Here focus was on adding the core functionalies of the game like,
- make the players to move in all directions.
- releasing lasers whenever the user hits the spacebar key.
- Make sure that the player can meet some enemies on its way.
- Make sure that that your player and its enemies can use lasers.

### Implement Scoring system

At this stage, when the game is working already, I implemented the scoring system to make sure that I keep track of players scores and send them to the leaderboard API.

### Implement the Game over scene
* Add functionality for the user to replay the game.
* Add button for menu which takes the user back to the title page
* Add the button and functionality for the user to quit the game and return back to the User name Scene where the user is ecpected to enter a nickname/username to continue playing.
# Asteroids

[Live Link][sitelink]

[sitelink]: http://stearagon.github.io/asteroids

The future is now? Well, actually the past. This is my rendition of the 1979 hit,
Asteroids. You'll have a few seconds of invulnerability after you spawn.

Enjoy!


## Languages
  - JavaScript
  - HTML/CSS

## Plugins
  - jQuery
  - keymaster.js

## Technical Implementation
  I used HTML5 Canvas to create a game field. To add asteroids into play I used
  Canvas' drawImage which loads a .png file of the asteroid. To give the spaceship
  rotation, I added a method to calculate how to draw the triangle based on the
  ship's direction. To check if objects collide with each other, I calculated the
  distance between two objects centers. If the distance was less than the combined
  radii of the two objects, the objects have collided.

## Future Features
  - Collision Explosions
  - Choose Ship
  - Choose Asteroids

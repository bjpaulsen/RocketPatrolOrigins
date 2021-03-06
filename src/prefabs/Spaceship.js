class Spaceship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture) {
        super(scene, x, y, texture);
        scene.add.existing(this);
        this.points = 10;
        this.moveSpeed = this.moveSpeed = game.settings.spaceshipSpeed;
    }

    update() {
        this.x -= this.moveSpeed;

        if (this.x < 0) {
            this.x = game.config.width;
        }
    }
    
    reset() {
        this.x = game.config.width;
    }
}
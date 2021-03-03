controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    bala = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 5 5 . . . . . . . . . . . . 
        . . . 5 5 5 5 5 5 5 5 5 5 5 5 5 
        . . . 5 5 5 5 5 5 5 5 5 5 5 5 5 
        . . 5 5 . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, nave, 200, 0)
    music.pewPew.play()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.destroy(effects.fire, 500)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
    nave.startEffect(effects.disintegrate)
})
let enemis: Sprite = null
let bala: Sprite = null
let nave: Sprite = null
nave = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    2 2 . . . . . . . . . . . . . . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    5 5 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    5 5 2 2 2 2 2 2 2 2 9 9 2 2 2 . 
    5 5 2 2 2 2 2 2 2 2 9 9 2 2 2 . 
    5 5 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    2 2 . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
nave.setFlag(SpriteFlag.StayInScreen, true)
info.setLife(3)
controller.moveSprite(nave, 200, 200)
game.onUpdateInterval(500, function () {
    enemis = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . c c . . . c c . . . . . 
        . . . . . c c c c c 7 7 7 7 7 7 
        . . . . . c f c f c 5 5 5 5 5 5 
        . . . . . c c c c c 3 3 3 3 3 3 
        . . . . . c f f f c 2 2 2 2 2 2 
        . . . . . c c c c c 9 9 9 9 9 9 
        . . . . . c c c c c 4 4 4 4 4 4 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    enemis.setVelocity(-100, 0)
    enemis.setPosition(180, randint(8, 112))
})

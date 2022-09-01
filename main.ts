scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairNorth, function (sprite, location) {
    Some = 1
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairWest, function (sprite, location) {
    info.startCountdown(120)
})
info.onCountdownEnd(function () {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    Some2 = 1
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLarge, function (sprite, location) {
    game.over(true)
    tiles.placeOnRandomTile(mySprite, sprites.castle.tileGrass1)
    tiles.setCurrentTilemap(tilemap`level2`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    info.startCountdown(20)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false)
})
let Enemy1: Sprite = null
let mySprite: Sprite = null
let Some2 = 0
let Some = 0
Some = 0
Some2 = 0
tiles.setCurrentTilemap(tilemap`level1`)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f . . . . . . . 
    . . . . . . f f f . . . . . . . 
    . . . . . . f f f . . . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . . . f f f . . . . . . . 
    . . . . . f . f . f . . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . . . f . f . . . . . . . 
    . . . . . . f . f . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite.setStayInScreen(false)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite)
mySprite.sayText("I need to get of here", 1000, false)
mySprite.setPosition(6, 37)
forever(function () {
    if (Some == 1) {
        mySprite.sayText("What was that", 2000, false)
        music.spooky.playUntilDone()
        Enemy1 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 2 2 2 . . . . . . . 
            . . . . . . 2 2 2 . . . . . . . 
            . . . . . . 2 2 2 . . . . . . . 
            . . . . . . . 2 . . . . . . . . 
            . . . . . . 2 2 2 . . . . . . . 
            . . . . . 2 . 2 . 2 . . . . . . 
            . . . . . . . 2 . . . . . . . . 
            . . . . . . . 2 . . . . . . . . 
            . . . . . . 2 . 2 . . . . . . . 
            . . . . . . 2 . 2 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy)
        tiles.placeOnRandomTile(Enemy1, sprites.dungeon.stairLarge)
        Some = 2
    }
    if (Some == 2) {
        pause(1500)
        Enemy1.follow(mySprite)
    }
    if (Some2 == 1) {
        mySprite.sayText("What was that", 2000, false)
        music.spooky.playUntilDone()
        for (let index = 0; index < 2; index++) {
            Enemy1 = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . 2 2 2 . . . . . . . 
                . . . . . . 2 2 2 . . . . . . . 
                . . . . . . 2 2 2 . . . . . . . 
                . . . . . . . 2 . . . . . . . . 
                . . . . . . 2 2 2 . . . . . . . 
                . . . . . 2 . 2 . 2 . . . . . . 
                . . . . . . . 2 . . . . . . . . 
                . . . . . . . 2 . . . . . . . . 
                . . . . . . 2 . 2 . . . . . . . 
                . . . . . . 2 . 2 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Enemy)
            tiles.placeOnRandomTile(Enemy1, sprites.dungeon.floorDark2)
            Some2 = 2
        }
    }
    if (Some2 == 2) {
        pause(1500)
        Enemy1.follow(mySprite)
    }
})

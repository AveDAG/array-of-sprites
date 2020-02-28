controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    for (let value of list) {
        value.setPosition(Math.randomRange(0, 150), Math.randomRange(0, 170))
    }
})
let list: Sprite[] = []
list = [sprites.create(img`
. . . . . . . . . . . . . b e e b b b b . . . . . . . . . . . . 
. . . . . . . . . . . . e e b b b b 4 b b . . . . . . . . . . . 
. . . . . . . . . . . . e b 3 4 4 b b 4 b b . . . . . . . . . . 
. . . . . . . . . . . . e 4 4 3 3 4 b b 4 b b . . . . . . . . . 
. . . . . . . . . . . . e b 4 3 3 3 4 4 b 4 b e . . . . . . . . 
. . . . . . . . . . . . 4 e b 4 3 3 4 4 4 4 4 b e . . . . . . . 
. . . . . . . . . . . b d 4 e b 4 3 3 3 3 3 4 4 b b . . . . . . 
. . . . . . . . . . b 4 5 5 d 4 4 4 3 3 3 3 4 4 4 b b . . . . . 
. . . . . . . . . . 4 d 5 5 5 5 d 4 4 4 3 3 3 4 4 4 b b . . . . 
. . . . . . . . . 4 5 5 5 5 5 5 d d 4 b 4 4 4 3 4 4 4 b e . . . 
. . . . . . . . b d 5 5 5 5 d 5 5 5 d 4 b b 4 4 4 4 4 4 e e . . 
. . . . . . . . b 5 5 d d d 6 6 5 5 5 5 b b 4 b 4 4 4 4 4 e e . 
. . . . . . . b d 5 5 5 5 6 7 7 6 5 5 5 5 4 e b b 4 4 4 4 4 e b 
. . . . . . . 4 e e e e 5 5 8 8 5 5 5 5 5 d 4 e e b 4 4 b 4 e e 
. . . . . . b 4 e e e e e d d d 5 5 5 e e e d 4 e e b b b 4 b e 
. . . . . . b e e e e e e e d 5 5 5 e e e e e d b 4 e b b b b e 
. . . . . b d e e e e e e e 5 5 5 e e e e e e e d d 4 b b b b e 
. . . . . b 5 e e e e e e e 5 5 5 e e e e e e e d d d 4 e b e e 
. . . . b d 5 5 e e e e e 5 5 5 5 e e e e e e e 5 5 5 4 4 e e e 
. . . . 6 6 5 d d 5 5 5 5 5 5 5 5 5 e e e e e 5 5 d d 4 d e e e 
. . . 6 7 7 6 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 1 5 5 4 d 4 e e 
. . . 4 8 8 5 e e e 5 5 5 d d d d 6 6 5 5 5 5 1 5 4 4 d 4 e e e 
. . b 4 5 5 e e e e e 5 5 5 d d 6 7 7 6 1 1 d 4 4 4 d d e e e . 
. . 4 d 5 e e e e e e e 5 5 5 5 5 8 8 1 d 4 4 d d d 4 e e e . . 
. b d d 5 e e e e e e e 5 5 5 1 1 5 1 1 4 d 5 4 d 4 e e . . . . 
. b 5 5 d e e e e e e e 5 1 1 4 4 d 1 d 5 5 e e e e . . . . . . 
b d 5 d d d e e e e e d 4 4 4 5 5 5 d d 4 e . . . . . . . . . . 
b 5 5 5 1 1 5 d d d d 5 5 d 5 4 4 e e d e . . . . . . . . . . . 
4 5 1 1 d 4 4 4 d 5 5 4 4 e e . . . 4 d e . . . . . . . . . . . 
4 1 d 4 5 5 5 d 4 e e . . . . . . . . 4 4 . . . . . . . . . . . 
4 1 5 5 4 e e d e . . . . . . . . . . . . . . . . . . . . . . . 
4 4 e e . . . 4 e . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player), sprites.create(img`
. . . . . . b b b b a a . . . . 
. . . . b b d d d 3 3 3 a a . . 
. . . b d d d 3 4 4 4 3 3 a a . 
. . b d d 3 4 4 4 4 4 4 3 3 a . 
. b 3 d 4 4 4 d d d 4 4 3 3 a b 
. b 3 3 4 d d a a d 4 4 3 3 a b 
b 3 3 4 4 d a a d d 4 4 d a 4 b 
b 3 3 4 3 b a d d 4 4 3 d a 4 b 
b 3 3 4 3 d d d 4 3 3 d a 4 4 e 
a 3 3 4 4 4 4 4 3 3 d a 4 4 4 e 
a 3 3 3 3 3 3 3 d d a 4 4 4 e . 
a a 3 3 3 d d d a a 4 4 4 e e . 
. e a a a a a a 4 4 4 4 e e . . 
. . e e b b 4 4 4 4 b e e . . . 
. . . e e e e e e e e . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player), sprites.create(img`
. . . . . . . . . . . . . . b b b b b b b . . . . . . . . . . . 
. . . . . . . . . . . b b 6 6 6 6 3 3 3 3 b a a . . . . . . . . 
. . . . . . . . . b b 3 3 6 7 7 7 8 8 3 3 6 6 3 a a . . . . . . 
. . . . . . . . b 3 3 3 3 3 8 8 8 8 3 3 3 8 9 6 3 3 a a . . . . 
. . . . . . . b 3 3 3 3 8 8 8 8 8 8 8 8 8 8 8 9 6 3 3 a a . . . 
. . . . . . b 3 4 4 8 8 8 3 5 8 5 5 3 3 3 8 8 8 6 3 3 b a e . . 
. . . . . b 3 4 5 8 4 3 5 5 8 3 3 5 5 5 3 8 4 4 3 3 3 3 5 e . . 
. . . . b 3 3 3 8 2 3 5 8 8 d d d 3 3 5 8 4 5 5 2 3 3 5 a e e . 
. . . b 3 d 3 3 8 3 5 8 d d 3 b b b 8 8 5 3 2 2 3 3 5 d a b e . 
. . b 3 d 3 3 3 8 3 8 d 3 b b 3 8 8 b 3 5 3 3 3 3 5 3 d a 4 e . 
. . b d 3 5 3 3 8 8 3 3 b 3 3 8 8 8 8 8 8 8 3 3 5 2 2 3 a 4 e e 
. b 3 d 3 5 6 3 8 8 3 8 8 8 8 a b 3 5 5 6 6 3 5 2 4 4 2 b 4 e e 
. b d 3 b 9 5 3 8 3 8 a 8 a a 3 3 5 5 3 8 7 6 5 3 e e 3 b 4 e e 
. b d 6 9 8 5 3 8 8 b 8 a a 3 3 3 5 3 3 3 8 5 6 3 3 b b 4 b e e 
b 3 d 6 8 3 8 8 8 8 b 8 a 3 3 3 3 5 3 3 3 5 8 6 3 b a 4 4 e b e 
b d d 3 3 8 8 5 5 8 8 8 5 5 5 5 5 5 3 3 3 5 3 3 3 a 4 4 b e b e 
a d d 6 6 8 6 5 5 8 3 8 5 2 2 3 3 3 3 6 5 3 3 3 b a 4 4 b b b e 
a d 6 7 8 8 6 3 5 5 8 8 8 8 4 2 3 3 6 9 5 3 d 3 a 4 4 4 b 4 e . 
a d d 8 8 8 b 3 5 3 3 8 8 8 8 8 8 6 9 5 5 3 d 3 a 4 4 b 4 4 e . 
a d d 3 3 8 3 3 5 5 3 3 8 3 8 8 8 8 5 5 3 d 3 a 4 4 4 b 4 e . . 
a 3 d d 3 8 3 3 3 5 5 4 8 3 3 3 3 8 8 d d 3 a 4 4 4 b 4 4 e . . 
a b 3 3 d 8 d 3 2 5 5 4 3 8 3 3 d 8 3 8 8 8 4 4 4 b 4 4 e . . . 
. e a b b 3 8 d 3 2 2 5 3 3 8 3 8 5 a a 4 4 8 8 b 4 4 e . . . . 
. e b a b b 3 8 3 3 3 5 3 3 8 8 5 4 4 4 4 4 3 8 4 4 e . . . . . 
. . e b a a b 8 8 8 8 8 8 8 8 8 4 4 4 4 3 3 8 8 4 e . . . . . . 
. . e e b b a a b 3 3 a 4 5 5 8 8 8 8 8 8 8 4 4 e . . . . . . . 
. . . e e e b b a a b 4 4 5 b 3 3 3 b 4 4 4 4 e . . . . . . . . 
. . . . e b e e e b b b b b b b b 4 4 4 4 e e . . . . . . . . . 
. . . . . e e b b b b 4 4 4 4 4 4 4 4 e e . . . . . . . . . . . 
. . . . . . . e e e b b b 4 4 4 e e e . . . . . . . . . . . . . 
. . . . . . . . . . e e e e e e . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player), sprites.create(img`
. . . . . . 9 9 9 9 . . . . . . 
. . . . 9 9 5 5 5 5 9 e . . . . 
. . . 9 5 d 1 1 d d 5 9 e . . . 
. . 9 5 1 d 5 5 5 d d 5 e . . . 
. 9 5 1 5 5 5 5 5 d 1 5 b e . . 
. 9 1 d 5 5 5 5 d 5 5 1 5 b b . 
9 5 1 d 5 5 1 1 5 5 5 1 5 4 b b 
9 d 5 5 d 1 5 1 5 5 5 1 5 4 4 b 
9 d 5 5 5 1 5 1 5 5 5 1 b 4 4 e 
9 d 5 5 5 1 1 5 5 5 5 1 b 4 4 e 
e d 5 5 5 5 d 5 5 5 d d b 4 4 e 
e d d 5 5 5 d 5 5 5 1 5 b 4 b e 
e 5 d 5 5 1 d d 5 d 1 b b e e . 
. e 5 1 1 d d 1 1 1 b b e e e . 
. . e 5 5 5 5 5 5 b e e e e . . 
. . . e e e e e e e e e e . . . 
`, SpriteKind.Player), sprites.create(img`
. . . . . . . 6 . . . . . . . . 
. . . . . . 8 6 6 . . . 6 8 . . 
. . . e e e 8 8 6 6 . 6 7 8 . . 
. . e 2 2 2 2 e 8 6 6 7 6 . . . 
. e 2 2 4 9 9 7 7 7 7 7 8 6 . . 
. e 2 4 9 9 6 7 7 7 6 7 6 8 8 . 
e 2 4 5 9 9 6 7 7 6 9 7 7 6 . . 
e 2 4 4 9 9 6 7 6 9 9 6 7 7 6 . 
e 2 4 2 9 9 6 6 9 9 2 e 7 7 6 . 
e 2 4 2 9 9 9 9 9 4 2 2 e 7 6 . 
e 2 4 2 9 9 9 9 9 9 2 2 e c 6 . 
e 2 2 2 9 9 9 9 9 e 2 e e c . . 
e e 2 e 2 2 4 2 9 e e e c . . . 
e e e e 2 e 2 2 e e e c . . . . 
e e e 2 e e c e c c c . . . . . 
. c c c c c c c . . . . . . . . 
`, SpriteKind.Player)]

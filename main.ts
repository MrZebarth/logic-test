enum ActionKind {
    LWalk,
    RWalk,
    LIdle,
    RIdle,
    Walking,
    Idle,
    Jumping
}
function Setup_Animations () {
    Left_Walk()
    Right_Walk()
    Left_Idle()
    Right_Idle()
}
function Right_Idle () {
    rightIdleAnim = animation.createAnimation(ActionKind.RIdle, 1000)
    rightIdleAnim.addAnimationFrame(assets.image`Mario Idle`)
    animation.attachAnimation(mySprite, rightIdleAnim)
}
function Right_Walk () {
    rightWalkAnim = animation.createAnimation(ActionKind.RWalk, 100)
    rightWalkAnim.addAnimationFrame(assets.image`mario_run_1`)
    rightWalkAnim.addAnimationFrame(assets.image`mario_run_2`)
    rightWalkAnim.addAnimationFrame(assets.image`mario_run_3`)
    rightWalkAnim.addAnimationFrame(assets.image`mario_run_2`)
    animation.attachAnimation(mySprite, rightWalkAnim)
}
function Left_Walk () {
    leftWalkAnim = animation.createAnimation(ActionKind.LWalk, 100)
    leftWalkAnim.addAnimationFrame(assets.image`mario_run_4`)
    leftWalkAnim.addAnimationFrame(assets.image`mario_run_5`)
    leftWalkAnim.addAnimationFrame(assets.image`mario_run_6`)
    leftWalkAnim.addAnimationFrame(assets.image`mario_run_5`)
    animation.attachAnimation(mySprite, leftWalkAnim)
}
function Left_Idle () {
    leftIdleAnim = animation.createAnimation(ActionKind.LIdle, 100)
    leftIdleAnim.addAnimationFrame(assets.image`Mario Idle2`)
    animation.attachAnimation(mySprite, leftIdleAnim)
}
let leftIdleAnim: animation.Animation = null
let leftWalkAnim: animation.Animation = null
let rightWalkAnim: animation.Animation = null
let rightIdleAnim: animation.Animation = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
Setup_Animations()
animation.setAction(mySprite, ActionKind.RIdle)
controller.moveSprite(mySprite, 100, 0)

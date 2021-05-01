var canvas = new fabric.Canvas ('myCanvas');
block_image_width = 30;
block_image_height = 30;
player_x = 10
player_y = 10
var player_object = "";

function player_update()
{
fabric.Image.fromURL ("player.png", function(img) 
{
    player_object=Img;
    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    player_object.set({
    top: player_y,
    top: player_x,
});
    canvas.add(player_object);
});
}


function new_image(get_image)
{
fabric.Image.fromURL (get_image, function(img) 
{
    block_image_object =  img;
    block_image_object.scaleToWidth(150);
    block_image_object.scaleToHeight(140);
    block_image_object.set({
    top: player_y,
    top: player_x,
});
    canvas.add(block_image_object);
});
}


window.addEventListener ("keydown" , my_keydown);

function my_keydown (e)
{
keyPressed = e.keyCode;
console.log (keyPressed);
if (e.shiftKey == true && keyPressed == '80')
{
console.log ("p and shift pressed together");
block_image_width = block_image_width + 10;
block_image_height = block_image_height + 10;
document.getElementById ("current_width").innerHTML = block_image_width
document.getElementById ("current_height").innerHTML = block_image_height
}
if (e.shiftKey == true && keyPressed == '77')
{
console.log ("p and shift pressed together");
block_image_width = block_image_width - 10;
block_image_height = block_image_height - 10;
document.getElementById ("current_width").innerHTML = block_image_width
document.getElementById ("current_height").innerHTML = block_image_height
}


if ( keyPressed == '69')
{ new_image ('captain_america_left_hand.png');
}

if ( keyPressed == '70')
{ new_image ('hulk_face.png');
}
if ( keyPressed == '71')
{ new_image ('hulk_left_hand.png');
}
if ( keyPressed == '72')
{ new_image ('hulk_right_hand.png');
}
if ( keyPressed == '73')
{ new_image ('hulk_body.png');
}
if ( keyPressed == '74')
{ new_image ('hulk_legs.png');
}
if ( keyPressed == '75')
{ new_image ('ironman_body.png');
}
if ( keyPressed == '76')
{ new_image ('ironman_face.png');
}
if ( keyPressed == '77')
{ new_image ('ironman_left_hand.png');
}
if ( keyPressed == '78')
{ new_image ('ironman_left_hand.png');
}
if ( keyPressed == '79')
{ new_image ('ironman_legs.png');
}
if ( keyPressed == '80')
{ new_image ('ironman_right_hand.png');
}
if ( keyPressed == '81')
{ new_image ('spiderman_body.png');
}
if ( keyPressed == '82')
{ new_image ('spiderman_face.png');
}
if ( keyPressed == '83')
{ new_image ('spiderman_left_hand.png');
}
if ( keyPressed == '84')
{ new_image ('spiderman_legs.png');
}
if ( keyPressed == '85')
{ new_image ('spiderman_right_hand.png');
}
if ( keyPressed == '86')
{ new_image ('thor_face.png');
}
if ( keyPressed == '87')
{ new_image ('thor_left_hand.png');
}
if ( keyPressed == '88')
{ new_image ('thor_right_hand_png');
}
if ( keyPressed == '38')
{ up ();
}
if ( keyPressed == '40')
{ down ();
}
if ( keyPressed == '37')
{ left ();
}
if ( keyPressed == '39')
{ right ();
}
}

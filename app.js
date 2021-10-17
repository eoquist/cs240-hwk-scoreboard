/**
 * Scoreboard Homework
 * @author Emilee Oquist
 */

/**
I’d start by ensuring that each box in the box score has an identifier or is uniquely named.
To access the DOM, query for all the boxes, and store them in an appropriate data structure so that they’re easily
identified and updated later in your code. I think a JS object makes sense here, but that I’ll leave it up to you.

After you’ve got DOM access to all the boxes, run some test code to see if you can get the values to change.
For instance, just set a node’s innerHTML property to a different value.

Now move on to the control center. Run a query for the 6 manipulable elements. Recall that each option in a drop-down
menu is specified in the value attribute.

Images and Sounds: To play sounds using JavaScript is quite simple: look into the Audio class.
Four music files (mp3) have been provided to you.

When the left button (the one with music notes) is pressed, randomly play one of: charge1.mp3, charge2.mp3,
or buildup.mp3. Also randomly display one of the images to the right of the box score.
When the right button (the one with a keyboard) is pressed, play the Chicken Dance: chickendance.mp3,
and always display the sdchicken.jpg to the right of the box score. Pressing on another button before the song
has finished may cause the music to overlap. This is okay (for now) because we don’t know how to wait for the song to end.
 */

// later idea: fill arrays with pathnames
var $imgs = ["images/ups.png", "images/megaphone.png", "images/sdchicken.jpg"],
    $sfx = ["sounds/buildup.mp3", "sounds/charge1.mp3", "sounds/charge2.mp3"],
    $song = "sounds/chickendance.mp3";

// get running total from score boxes
function getTotal(teamName) {
    var total = 0;
    for (i = 1; i <= 7; i++) {
        var $id = teamName + i;
        total += parseInt(document.getElementById($id).textContent);
    }
    console.log(total);
    return total;
}

//on click events for the run++ and run-- buttons
document.getElementById("run++").addEventListener("click", function () {
    var $team = document.querySelector("#who").value,
        $inning = document.querySelector("#inning").value,
        $id = $team.concat($inning),
        $idVal = document.getElementById($id).textContent,
        scoreChange = document.getElementById($id).innerHTML = parseInt($idVal) + 1;
    document.getElementById($team.concat('R')).innerHTML = getTotal($team);
});
document.getElementById("run--").addEventListener("click", function () {
    var $team = document.querySelector("#who").value,
        $inning = document.querySelector("#inning").value,
        $id = $team.concat($inning),
        $idVal = document.getElementById($id).textContent;
    if ($idVal > 0) { // make sure the run score can never be negative
        var scoreChange = document.getElementById($id).innerHTML = parseInt($idVal) - 1;
        document.getElementById($team.concat('R')).innerHTML = getTotal($team);
    }
});

// on click events for the music
document.getElementById("cheer").addEventListener("click", function () {
    var ransong = $sfx[Math.floor(Math.random() * $sfx.length)]; // grab random cheer
    (new Audio(ransong)).play();
});
document.getElementById("song").addEventListener("click", function () {
    document.querySelector(".icon").src = $imgs[2]; // chicken image
    (new Audio($song)).play();
});
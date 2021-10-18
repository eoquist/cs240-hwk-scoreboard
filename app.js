/**
 * Scoreboard Homework
 * @author Emilee Oquist
 */

// later research possibility of getting an array of path names in a directory? 
var $imgs = ["images/ups.png", "images/megaphone.png", "images/sdchicken.jpg"],
    $sfx = ["sounds/buildup.mp3", "sounds/charge1.mp3", "sounds/charge2.mp3"],
    $song = "sounds/chickendance.mp3";

/**
 * Get total from across all score boxes
 * @param {*} teamName is a string of the teamname used to identity the id of the scorebox
 * @returns total of all score boxes in specified team
 */
function getTotal(teamName) {
    var total = 0;
    for (i = 1; i <= 7; i++) {
        var $id = teamName + i;
        total += parseInt(document.getElementById($id).textContent);
    }
    return total;
}

//on click events for the run++ and run-- buttons
document.getElementById("run++").addEventListener("click", function () {
    var $team = document.querySelector("#who").value,
        $inning = document.querySelector("#inning").value,
        $id = $team.concat($inning),
        $idVal = document.getElementById($id).textContent;
    document.getElementById($id).innerHTML = parseInt($idVal) + 1; // update selected box
    document.getElementById($team.concat('R')).innerHTML = getTotal($team); // update total
});
document.getElementById("run--").addEventListener("click", function () {
    var $team = document.querySelector("#who").value,
        $inning = document.querySelector("#inning").value,
        $id = $team.concat($inning),
        $idVal = document.getElementById($id).textContent;
    if ($idVal > 0) { // make sure the run score can never be negative
        document.getElementById($id).innerHTML = parseInt($idVal) - 1; // update selected box
        document.getElementById($team.concat('R')).innerHTML = getTotal($team); // update total
    }
});

// on click events for the music
document.getElementById("cheer").addEventListener("click", function () {
    document.querySelector(".icon").src = $imgs[Math.round(Math.random())]; // random image (that isn't the chicken image)
    var ransong = $sfx[Math.floor(Math.random() * $sfx.length)]; // grab random cheer
    (new Audio(ransong)).play();
});
document.getElementById("song").addEventListener("click", function () {
    document.querySelector(".icon").src = $imgs[2]; // chicken image
    (new Audio($song)).play();
});
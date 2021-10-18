/**
 * Scoreboard Homework
 * @author Emilee Oquist
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
    document.querySelector(".icon").src = $imgs[Math.round(Math.random())]; // random image (that isn't the chicken image)
    var ransong = $sfx[Math.floor(Math.random() * $sfx.length)]; // grab random cheer
    (new Audio(ransong)).play();
});
document.getElementById("song").addEventListener("click", function () {
    document.querySelector(".icon").src = $imgs[2]; // chicken image
    (new Audio($song)).play();
});
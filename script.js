document.addEventListener("DOMContentLoaded", () => {
  showTeam();
});



MapsBanned = 0

//show team names
function ShowTeamNames() {
  if (document.getElementById('team1').value != '') {
    document.getElementById("team1_name").innerHTML = document.getElementById('team1').value;
    document.getElementById("1team-load-button").innerHTML = 'Choose logo for ' + document.getElementById('team1').value;
  }
  if (document.getElementById('team2').value != '') {
    document.getElementById("team2_name").innerHTML = document.getElementById('team2').value;
    document.getElementById("2team-load-button").innerHTML = 'Choose logo for ' + document.getElementById('team2').value;
  }
  showTeam();
};

//ban map

function BanMap(id = 0) {
  console.log(id);
  document.getElementById(id).classList.add('ban');
  document.getElementById(id).classList.remove('map');
  document.getElementById("ban-img-" + id).style.display = "block";

  MapsBanned++;
  showTeam();
}

function showTeam() {
  if (MapsBanned % 2 === 0) {
    teamName = document.getElementById('team1').value;
    if (teamName ==""){
      teamName = 'Team 1'
    }

    document.getElementById("teamnowban").innerHTML = teamName;
  } else {
    teamName = document.getElementById('team2').value;
    if (teamName ==""){
      teamName = 'Team 2'
    }

    document.getElementById("teamnowban").innerHTML = teamName;
  }
}

// var audio = document.getElementsByTagName("audio")[0];
// audio.play();

// or with an ID


var audio = $("#mySoundClip")[0];
$("nav a").mouseenter(function () {
  audio.play();
});

function play() {
  var audio = document.getElementById("audio");
  audio.play();
}

function hoverplay() {
  var hoveraudio = document.getElementById("hoveraudio");
  hoveraudio.play();
}


// const nickname = JSON.parse(sessionStorage.getItem("nickname"));
// const nameSpan = document.getElementById('nameSpan');

// nameSpan.innerText = nickname.nickname;

// let newscore = sessionStorage.getItem("scorewhat");

// document.getElementById("scorehere").innerText = newscore;

let scoredata = null;

const leaders = new XMLHttpRequest();
leaders.onload = function () {
    const parsedScoreData = JSON.parse(leaders.responseText);
    scoredata = parsedScoreData;
    displayleaders(parsedScoreData);

};


//Code below is to show database on leaderboard.

leaders.open('GET', 'http://localhost:8080/');

leaders.send();

function displayleaders(scoredata){
    
    thearray = ["savedscore1","savedscore2","savedscore3","savedscore4","savedscore5"];
    thearray2 = ["savednickname1","savednickname2","savednickname3","savednickname4","savednickname5"];
    let p=0;
while(p<5){
    
    document.getElementById(thearray[p]).innerText=scoredata[p].score;
    document.getElementById(thearray2[p]).innerText=scoredata[p].nickname;
    p++;
}
}


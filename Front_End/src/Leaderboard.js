let nickname = JSON.parse(sessionStorage.getItem("nickname"));
let newscore=sessionStorage.getItem("scorewhat");
let timeres=sessionStorage.getItem("whattimeleaderboard");
// const nameSpan = document.getElementById('nameSpan');

// nameSpan.innerText = nickname.nickname;

// let newscore = sessionStorage.getItem("scorewhat");

// document.getElementById("scorehere").innerText = newscore;

let scoredata = null;

const leaders = new XMLHttpRequest();
leaders.onload = function () {
    const parsedScoreData = JSON.parse(leaders.responseText);
    scoredata = parsedScoreData;
    parsedScoreData.push({"id":3,"time":timeres,"nickname":nickname,"score":newscore});
    displayleaders(parsedScoreData);
};


//Code below is to show database on leaderboard.

leaders.open('GET', 'http://localhost:8080/');

leaders.send();

function displayleaders(scoredata){
    
    thearray = ["savedscore1","savedscore2","savedscore3","savedscore4","savedscore5"];
    thearray2 = ["savednickname1","savednickname2","savednickname3","savednickname4","savednickname5"];
    thearray3 = ["savedtime1","savedtime2","savedtime3","savedtime4","savedtime5"];
    let p=0;
while(p<5){
    
    document.getElementById(thearray[p]).innerText=scoredata[p].score;
    document.getElementById(thearray2[p]).innerText=scoredata[p].nickname;
    document.getElementById(thearray3[p]).innerText=scoredata[p].time;
    p++;
}
}


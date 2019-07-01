const nickname = JSON.parse(sessionStorage.getItem("nickname"));
const nameSpan = document.getElementById('nameSpan');

nameSpan.innerText = nickname.nickname;

let newscore=sessionStorage.getItem("scorewhat");
    
    document.getElementById("scorehere").innerText=newscore;

let newtime=sessionStorage.getItem("whattime");

    document.getElementById("timehere").innerText=newtime;
    
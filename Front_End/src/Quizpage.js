const nickname = JSON.parse(sessionStorage.getItem("nickname"));
const nameSpan = document.getElementById('nameSpan');

nameSpan.innerText = nickname.nickname;

let data = null;

const request = new XMLHttpRequest();
request.onload = function () {
    const parsedData = JSON.parse(request.responseText);
    data = parsedData;
    console.log(parsedData);
    displayquestions(parsedData);

};

request.open('GET', 'https://opentdb.com/api.php?amount=6&difficulty=hard&type=multiple');

request.send();

function displayquestions(data) {

    document.getElementById('q1').innerHTML = data.results[0].question;
    document.getElementById('q2').innerHTML = data.results[1].question;
    document.getElementById('q3').innerHTML = data.results[2].question;
    document.getElementById('q4').innerHTML = data.results[3].question;
    document.getElementById('q5').innerHTML = data.results[4].question;
    document.getElementById('q6').innerHTML = data.results[5].question;

    let array1 = ['ba1', 'ba2', 'ba3', 'ba4'];
    let array2 = ['bb1', 'bb2', 'bb3', 'bb4'];
    let array3 = ['bc1', 'bc2', 'bc3', 'bc4'];
    let array4 = ['bd1', 'bd2', 'bd3', 'bd4'];
    let array5 = ['be1', 'be2', 'be3', 'be4'];
    let array6 = ['bf1', 'bf2', 'bf3', 'bf4'];

    i = 0; j = 0; r2=10; n=4;

    while (i < 4 && j < 3 && n>=1) {
        let r = Math.floor(Math.random() * n);
        if(r==r2){ 
        }
        else{
        if (i == 0) {
            document.getElementById(array1[r]).innerHTML = data.results[0].correct_answer;
        }
        else {
            document.getElementById(array1[r]).innerHTML = data.results[0].incorrect_answers[j]; j++;
        }i++;array1.splice(r, 1); n--;
        }
        r2=r;      
    }
  
    i = 0; j = 0; r2=10; n=4;

    while (i < 4 && j < 3 && n>=1) {
        let r = Math.floor(Math.random() * n);
        if(r==r2){ 
        }
        else{
        if (i == 0) {
            document.getElementById(array2[r]).innerHTML = data.results[1].correct_answer;
        }
        else {
            document.getElementById(array2[r]).innerHTML = data.results[1].incorrect_answers[j]; j++;
        }i++;array2.splice(r, 1); n--;
        }
        r2=r;      
    }

    i = 0; j = 0; r2=10; n=4;

    while (i < 4 && j < 3 && n>=1) {
        let r = Math.floor(Math.random() * n);
        if(r==r2){ 
        }
        else{
        if (i == 0) {
            document.getElementById(array3[r]).innerHTML = data.results[2].correct_answer;
        }
        else {
            document.getElementById(array3[r]).innerHTML = data.results[2].incorrect_answers[j]; j++;
        }i++;array3.splice(r, 1); n--;
        }
        r2=r;      
    }

    // i = 0; j = 0; r2=10; n=4;

    // while (i < 4 && j < 3 && n>=1) {
    //     let r = Math.floor(Math.random() * n);
    //     if(r==r2){ 
    //     }
    //     else{
    //     if (i == 0) {
    //         document.getElementById(array4[r]).innerHTML = data.results[3].correct_answer;
    //     }
    //     else {
    //         document.getElementById(array4[r]).innerHTML = data.results[3].incorrect_answers[j]; j++;
    //     }i++;array4.splice(r, 1); n--;
    //     }
    //     r2=r;      
    // }

    // i = 0; j = 0; r2=10; n=4;

    // while (i < 4 && j < 3 && n>=1) {
    //     let r = Math.floor(Math.random() * n);
    //     if(r==r2){ 
    //     }
    //     else{
    //     if (i == 0) {
    //         document.getElementById(array5[r]).innerHTML = data.results[4].correct_answer;
    //     }
    //     else {
    //         document.getElementById(array5[r]).innerHTML = data.results[4].incorrect_answers[j]; j++;
    //     }i++;array5.splice(r, 1); n--;
    //     }
    //     r2=r;      
    // }

    // i = 0; j = 0; r2=10; n=4;

    // while (i < 4 && j < 3 && n>=1) {
    //     let r = Math.floor(Math.random() * n);
    //     if(r==r2){ 
    //     }
    //     else{
    //     if (i == 0) {
    //         document.getElementById(array6[r]).innerHTML = data.results[5].correct_answer;
    //     }
    //     else {
    //         document.getElementById(array6[r]).innerHTML = data.results[5].incorrect_answers[j]; j++;
    //     }i++;array6.splice(r, 1); n--;
    //     }
    //     r2=r;      
    // }


}

// Change button colour after click
document.getElementById('ba1').onclick = function () {
    this.style.backgroundColor = '#ADD8E6';
    ba2.style.backgroundColor = '#00008B'
    ba3.style.backgroundColor = '#00008B'
    ba4.style.backgroundColor = '#00008B'
    formdata2 = ba1.innerHTML;

}
document.getElementById('ba2').onclick = function () {
    this.style.backgroundColor = '#ADD8E6';
    ba1.style.backgroundColor = '#00008B'
    ba3.style.backgroundColor = '#00008B'
    ba4.style.backgroundColor = '#00008B'
    formdata2 = ba2.innerHTML;


}
document.getElementById('ba3').onclick = function () {
    this.style.backgroundColor = '#ADD8E6';
    ba1.style.backgroundColor = '#00008B'
    ba2.style.backgroundColor = '#00008B'
    ba4.style.backgroundColor = '#00008B'
    formdata2 = ba3.innerHTML;

}
document.getElementById('ba4').onclick = function () {
    this.style.backgroundColor = '#ADD8E6';
    ba1.style.backgroundColor = '#00008B'
    ba2.style.backgroundColor = '#00008B'
    ba3.style.backgroundColor = '#00008B'
    formdata2 = ba4.innerHTML;

}






document.getElementById('bb1').onclick = function () {
    this.style.backgroundColor = '#ADD8E6';
    bb2.style.backgroundColor = '#00008B'
    bb3.style.backgroundColor = '#00008B'
    bb4.style.backgroundColor = '#00008B'
    formdata2b = bb1.innerHTML;

}
document.getElementById('bb2').onclick = function () {
    this.style.backgroundColor = '#ADD8E6';
    bb1.style.backgroundColor = '#00008B'
    bb3.style.backgroundColor = '#00008B'
    bb4.style.backgroundColor = '#00008B'
    formdata2b = bb2.innerHTML;

}
document.getElementById('bb3').onclick = function () {
    this.style.backgroundColor = '#ADD8E6';
    bb1.style.backgroundColor = '#00008B'
    bb2.style.backgroundColor = '#00008B'
    bb4.style.backgroundColor = '#00008B'
    formdata2b = bb3.innerHTML;

}
document.getElementById('bb4').onclick = function () {
    this.style.backgroundColor = '#ADD8E6';
    bb1.style.backgroundColor = '#00008B'
    bb2.style.backgroundColor = '#00008B'
    bb3.style.backgroundColor = '#00008B'
    formdata2b = bb4.innerHTML;

}

document.getElementById('bc1').onclick = function () {
    this.style.backgroundColor = '#ADD8E6';
    bc2.style.backgroundColor = '#00008B'
    bc3.style.backgroundColor = '#00008B'
    bc4.style.backgroundColor = '#00008B'
    formdata2c = bc1.innerHTML;

}
document.getElementById('bc2').onclick = function () {
    this.style.backgroundColor = '#ADD8E6';
    bc1.style.backgroundColor = '#00008B'
    bc3.style.backgroundColor = '#00008B'
    bc4.style.backgroundColor = '#00008B'
    formdata2c = bc2.innerHTML;

}
document.getElementById('bc3').onclick = function () {
    this.style.backgroundColor = '#ADD8E6';
    bc1.style.backgroundColor = '#00008B'
    bc2.style.backgroundColor = '#00008B'
    bc4.style.backgroundColor = '#00008B'
    formdata2c = bc3.innerHTML;

}
document.getElementById('bc4').onclick = function () {
    this.style.backgroundColor = '#ADD8E6';
    bc1.style.backgroundColor = '#00008B'
    bc2.style.backgroundColor = '#00008B'
    bc3.style.backgroundColor = '#00008B'
    formdata2c = bc4.innerHTML;

}



document.getElementById('bd1').onclick = function () {
    this.style.backgroundColor = '#ADD8E6';
    bd2.style.backgroundColor = '#00008B'
    bd3.style.backgroundColor = '#00008B'
    bd4.style.backgroundColor = '#00008B'
    formdata2d = bd1.innerHTML;

}
document.getElementById('bd2').onclick = function () {
    this.style.backgroundColor = '#ADD8E6';
    bd1.style.backgroundColor = '#00008B'
    bd3.style.backgroundColor = '#00008B'
    bd4.style.backgroundColor = '#00008B'
    formdata2d = bd2.innerHTML;

}
document.getElementById('bd3').onclick = function () {
    this.style.backgroundColor = '#ADD8E6';
    bd1.style.backgroundColor = '#00008B'
    bd2.style.backgroundColor = '#00008B'
    bd4.style.backgroundColor = '#00008B'
    formdata2d = bd3.innerHTML;

}
document.getElementById('bd4').onclick = function () {
    this.style.backgroundColor = '#ADD8E6';
    bd1.style.backgroundColor = '#00008B'
    bd2.style.backgroundColor = '#00008B'
    bd3.style.backgroundColor = '#00008B'
    formdata2d = bd4.innerHTML;

}




document.getElementById('be1').onclick = function () {
    this.style.backgroundColor = '#ADD8E6';
    be2.style.backgroundColor = '#00008B'
    be3.style.backgroundColor = '#00008B'
    be4.style.backgroundColor = '#00008B'
    formdata2e = be1.innerHTML;

}
document.getElementById('be2').onclick = function () {
    this.style.backgroundColor = '#ADD8E6';
    be1.style.backgroundColor = '#00008B'
    be3.style.backgroundColor = '#00008B'
    be4.style.backgroundColor = '#00008B'
    formdata2e = be2.innerHTML;

}
document.getElementById('be3').onclick = function () {
    this.style.backgroundColor = '#ADD8E6';
    be1.style.backgroundColor = '#00008B'
    be2.style.backgroundColor = '#00008B'
    be4.style.backgroundColor = '#00008B'
    formdata2e = be3.innerHTML;

}
document.getElementById('be4').onclick = function () {
    this.style.backgroundColor = '#ADD8E6';
    be1.style.backgroundColor = '#00008B'
    be2.style.backgroundColor = '#00008B'
    be3.style.backgroundColor = '#00008B'
    formdata2e = be4.innerHTML;

}



document.getElementById('bf1').onclick = function () {
    this.style.backgroundColor = '#ADD8E6';
    bf2.style.backgroundColor = '#00008B'
    bf3.style.backgroundColor = '#00008B'
    bf4.style.backgroundColor = '#00008B'
    formdata2f = bf1.innerHTML;

}
document.getElementById('bf2').onclick = function () {
    this.style.backgroundColor = '#ADD8E6';
    bf1.style.backgroundColor = '#00008B'
    bf3.style.backgroundColor = '#00008B'
    bf4.style.backgroundColor = '#00008B'
    formdata2f = bf2.innerHTML;

}
document.getElementById('bf3').onclick = function () {
    this.style.backgroundColor = '#ADD8E6';
    bf1.style.backgroundColor = '#00008B'
    bf2.style.backgroundColor = '#00008B'
    bf4.style.backgroundColor = '#00008B'
    formdata2f = bf3.innerHTML;

}
document.getElementById('bf4').onclick = function () {
    this.style.backgroundColor = '#ADD8E6';
    bf1.style.backgroundColor = '#00008B'
    bf2.style.backgroundColor = '#00008B'
    bf3.style.backgroundColor = '#00008B'
    formdata2f = bf4.innerHTML;

}




let formdata2 = null

let formdata2b = null

let formdata2c = null

let formdata2d = null

let formdata2e = null

let formdata2f = null







function handleSubmit2(event2) {

    console.log("Submitted!", formdata2, formdata2b, formdata2c, formdata2d, formdata2e, formdata2f);
    event2.reset();

    if (formdata2 == null || formdata2b == null || formdata2c == null || formdata2d == null || formdata2e == null || formdata2f == null) {
        window.alert("Please answer all the questions before submitting.")
    }
    else {
        scorer();
        //document.getElementById("bsub") Disable button after first submit.
        window.location = "FinalScore.html";
    }

    return false;

}

var count = 300;
var interval = setInterval(function () {
    document.getElementById('count').innerHTML = count;
    count--;
    if (count === -2) {
        clearInterval(interval);
        var h40 =
            document.createElement("h1")
        h40.innerHTML = "Oh no! You are out of time. Please try again tomorrow...";
        var body = document.getElementsByTagName("body")[0];
        body.appendChild(h40);
        document.getElementById("formquiz").outerHTML = "";
        document.getElementById("count").outerHTML = "";
        document.getElementById("nicknamer").outerHTML = "";
        document.getElementById("nameSpan").outerHTML = "";
        document.getElementById("timeleft").outerHTML = "";

    }
}, 1000);

let score = 0;


function scorer() {
    if (formdata2 == data.results[0].correct_answer) {
        score++;
    }
    if (formdata2b == data.results[1].correct_answer) {
        score++;
    }
    if (formdata2c == data.results[2].correct_answer) {
        score++;
    }
    if (formdata2d == data.results[3].correct_answer) {
        score++;
    }
    if (formdata2e == data.results[4].correct_answer) {
        score++;
    }
    if (formdata2f == data.results[5].correct_answer) {
        score++;
    }
    console.log("submitted", score);

    sessionStorage.setItem("scorewhat", score);
}
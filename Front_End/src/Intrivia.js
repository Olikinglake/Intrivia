const formdata = {

}


function handleSubmit(event) {

    for (let control of event) {
        formdata[control.id] = control.value;
    }


    console.log("Submitted!", formdata);
    event.reset();

    sessionStorage.setItem("nickname", JSON.stringify(formdata));
    window.location = "Quizpage.html";


    return false;
}



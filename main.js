function dropdown(question_id) {
    var answer = document.getElementById(question_id + "-answer");
    if (answer.style.maxHeight){
        answer.style.maxHeight = null;
    } else {
        answer.style.maxHeight = answer.scrollHeight + "px";
    }
    var plus = document.getElementById(question_id).firstChild.nextSibling;
    if (plus.style.display == "none") {
        plus.style.display = "block";
        plus.nextSibling.nextSibling.style.display = "none";
    } else {
        plus.style.display = "none";
        plus.nextSibling.nextSibling.style.display = "block";
    }
}
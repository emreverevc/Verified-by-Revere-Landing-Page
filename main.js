function dropdown(question_id) {
    console.log("hello");
    console.log(question_id);
    var answer = document.getElementById(question_id + "-answer");
    if (answer.style.maxHeight){
        answer.style.maxHeight = null;
    } else {
        answer.style.maxHeight = answer.scrollHeight + "px";
    }
}
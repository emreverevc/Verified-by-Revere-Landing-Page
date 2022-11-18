function dropdown() {
    var row = document.getElementsByClassName("accordian-item");
    var i;
  
    for (i = 0; i < row.length; i++) {
      row[i].addEventListener("click", function() {
        
        var blah = document.getElementsByClassName("row");
            for (w = 0; w < blah.length; w++) {
                if (row[w].classList.contains("row_selected")){
                    if (row[w] == this) {
                    
                    } else {
                    row[w].classList.remove("row_selected");
                    var blahblah = row[w].nextElementSibling;
                    if (blahblah.style.maxHeight){
                        blahblah.style.maxHeight = null;
                    } else {
                        blahblah.style.maxHeight = blahblah.scrollHeight + "px";
                    }
                    }
                }
            }
            this.classList.toggle("row_selected");
        });
    }
}
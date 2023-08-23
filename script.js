document.addEventListener("DOMContentLoaded", function() {
    const myLibrary = [];
    
    console.log("Dom content loaded")
    let dialog = document.getElementById("sidebar"); 
    let addbtn = document.getElementById("addbook");
    let sbmt = document.getElementById("submit")
    addbtn.addEventListener("click", function(e) {
        e.stopImmediatePropagation();
        e.preventDefault();
        if (dialog.open)
        dialog.close();
    else
    dialog.show();
        openCheck(dialog);
    });
    sbmt.addEventListener("click", function(e) {
        openCheck(dialog);
    })
const form = document.querySelector("form");
console.log(form);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    e.stopImmediatePropagation();
    const formData = new FormData(form);
    form.reset();
    for (item of formData){
        console.log(item[0], item[1])
    }
    addcard(formData);
    })
function openCheck(dialog){
    if (dialog.open)
    console.log("Open");
else 
console.log("Closed");
}
function addcard(formdata){
    const cards = document.querySelector(".cards")
    let card = document.createElement("div");
    card.classList.add("card");
    for (item of formdata){
        card.innerHTML += item[0] + item[1];
        card.innerHTML += "<br>"
    }
    cards.appendChild(card);
    let cross = document.createElement("button");
    let read = document.createElement("button");
    cross.classList.add("delete");
    read.classList.add("readbook")
    cross.innerHTML = "&#9587";
    read.innerHTML = "Finished Reading"
    card.appendChild(read);
    card.appendChild(cross);
    cross.addEventListener("click", function(e) {
        var source = e.target;
        source.parentNode.remove()
    });
    read.addEventListener("click", function(e){
        e.target
    })
}
});


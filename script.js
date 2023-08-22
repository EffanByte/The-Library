document.addEventListener("DOMContentLoaded", function() {
    const myLibrary = [];
    
    console.log("Dom content loaded")
    let dialog = document.getElementById("sidebar"); 
    let addbtn = document.getElementById("addbook");
    let sbmt = document.getElementById("submit")
    addbtn.addEventListener("click", function(e) {
        e.stopImmediatePropagation();
        e.preventDefault();
        dialog.show();
        openCheck(dialog);
    });
    sbmt.addEventListener("click", function(e) {
        dialog.close();
        openCheck(dialog);
    })
const form = document.querySelector("form");
console.log(form);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    e.stopImmediatePropagation();
    const formData = new FormData(form);
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
    let card = document.createElement("textarea");
    card.classList.add("card");
    for (item of formdata){
        card.innerHTML += item[0] + item[1] + "\r\n";
    }
    cards.appendChild(card);
    card.setAttribute('disabled', '')
}
});


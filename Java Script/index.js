//document.getElementById("count-el").innerText = 5; 
let count = 0;

function increment() {
    count += 1;
    document.getElementById("count-el").innerText = count;
}


let texts = document.getElementById("saved-el");
function save() {
    texts.innerText += count + "-";
    count = 0;

}
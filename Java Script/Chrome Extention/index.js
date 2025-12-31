
let myLeads = ["www.google.com"]
const inputEl = document.getElementById("input-el") //const bc we don't want to reassign it
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")


let link = "www.awesomelead.com";
inputBtn.addEventListener("click", () =>{
    myLeads.push(inputEl.value);
    renderLeads();
    inputEl.value = "" //clears the text in the input field
})

// function renderLead() {
//     //this takes the input straight from the user and displays it
//     let listItems = "<li>" + inputEl.value + "</li>"
//     ulEl.innerHTML += listItems;
// }

//this takes more time by looping over the array so unless we want to store the data, instead we can use the above method
function renderLeads() {
    let listItems = ""

for (let i = 0; i < myLeads.length; i++) {
    listItems += "<li><a href='" + myLeads[i] + "' target='_blank'>" + myLeads[i] + "</a></li>" //or we can use the following options => this is more performative than the other options
    // b/c it's better to do more DOM manipulation outside of a loop than inside

    //(option 2) ulEl.innerHTML +=  "<li>" + myLeads[i] + "</li>" //the browser consider the <li> element as html elment
    //another way to do it is by following this step => create element -> set text content -> append to ul

    //(option 3) const li = document.createElement("li");
    // li.textContent = myLeads[i];
    // ulEl.append(li);
}
ulEl.innerHTML = listItems;
console.log(listItems)
}


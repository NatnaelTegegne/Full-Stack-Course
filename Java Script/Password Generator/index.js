const characters = ["A", "B", "C", "D", "E", "F", "G", "H","I","J","K","L","M","N","0","P","Q","R",
 "U","V","w","X", "Y", "Z", "a", "b", "c", "d", "e","f", "g","h","i","j","k","l","m","n","o",
 "p", "q", "r", "s","t", "u","v", "w", "x", "y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
"~","!","@", "$", "/", "%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";",
"<",">",".","?","/"];


//TODO: randmo number generator and array to store random numbers
//based on the length of password required

function getRandom() {
  return Math.floor(Math.random() * characters.length);
}

let generated = document.getElementById("generate-btn");


let passwordOneEl = document.getElementById("password-one");
let passwordTwoEl = document.getElementById("password-two");
let noticeEl = document.getElementById("notice");
let isGenerated = false;

function generate(e) {
    e.preventDefault();
    let passwordLength = document.getElementById("length-input").value;
    if (!passwordLength) return;
    //max password should be 15 char
    if(passwordLength > 15) {
        passwordLength = 15;
    }
  console.log("clicked");
  let passwordOne = "";
  let passwordTwo = "";
  for (let i = 0; i < passwordLength; i++) {
    passwordOne += characters[getRandom()];
    passwordTwo += characters[getRandom()];
  }
  passwordOneEl.textContent = passwordOne;
  passwordTwoEl.textContent = passwordTwo;
  isGenerated = true;
}

function copy() {
  if (isGenerated) {
    passwordOneEl.addEventListener("click", () => {
      //get the text
      const password = passwordOneEl.innerText;
      //check if empty or it has a place holder
      if (!password || password === "Password one") return;

      //copy to clipboard
      navigator.clipboard
        .writeText(password)
        .then(() => {
          //success feedback by changing the color
          passwordOneEl.style.backgroundColor = "#20a225ff";
          noticeEl.innerText = "Password copied to clipboard!";
          setTimeout(() => {
            passwordOneEl.style.backgroundColor = ""; //revert to original css
            noticeEl.innerText = "";
          }, 500);
        })
        .catch((err) => {
          console.error("Failed to copy:", err);
        });
    });

    passwordTwoEl.addEventListener("click", () =>{
        //get the text first
        const password = passwordTwoEl.innerText;
        //check if empty or it has a place holder
        if(!password || password === "Password two") return;

        //copy to clipboard
        navigator.clipboard.writeText(password).then(() =>{
            //success feedback by changing the color
            passwordTwoEl.style.backgroundColor = "#20a225ff";
            noticeEl.innerText = "Password copied to clipboard!";
            setTimeout(() => {
                passwordTwoEl.style.backgroundColor = ""; //to CSS default
                noticeEl.innerText = "";
            }, 500);
        }).catch((err) => {
            console.error("Failed to copy:", err);
        });
    });
  }
}





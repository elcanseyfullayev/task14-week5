// Button
const button = document.createElement("button");
button.textContent = "Click Me!";
button.style.width = "200px";
button.style.height = "120px";
button.style.display = "flex";
button.style.justifyContent = "center";
button.style.alignItems = "center";
button.style.borderRadius = "10px"
button.style.background = "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(86,7,68,1) 29%, rgba(72,9,121,1) 54%, rgba(91,8,124,1) 61%, rgba(111,8,127,1) 71%, rgba(122,9,9,1) 79%, rgba(255,0,221,1) 93%)"
button.style.fontSize = "30px"
button.style.color = "white"


// modal
const modal = document.createElement("div");
modal.style.display = "none";
modal.style.width = "100%";
modal.style.height = "100%";
modal.style.display = "flex";
modal.style.justifyContent = "center";
modal.style.alignItems = "center";

// modalinside
const insidemodal = document.createElement("div")
insidemodal.style.backgroundColor = "rgb(2,0,36)"
insidemodal.style.background = "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)"
insidemodal.style.height = "150px"
insidemodal.style.width = "300px"
insidemodal.style.display = "flex"
insidemodal.style.alignItems = "center"
insidemodal.style.justifyContent = "center"
insidemodal.style.flexDirection = "column"
insidemodal.style.gap = "10px"
insidemodal.style.color = "white"
insidemodal.style.borderRadius = "10px"
insidemodal.style.borderWidth = "10px"
insidemodal.style.borderStyle = "solid"
insidemodal.style.borderImage = "linear-gradient(to right, darkblue, darkorchid) 1"
insidemodal.style.fontSize = "18px"



// modaltext
const insidetext = document.createElement("div")
insidetext.textContent = "You opened the modal"
const insidetext2 = document.createElement("div")
insidetext2.textContent = "You can close it with button under me."

// Cancel Button
const cancelbutton = document.createElement("button")
cancelbutton.textContent= "Cancel"
cancelbutton.style.backgroundColor = "rgb(2,0,36)"
cancelbutton.style.background = "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,121,19,1) 35%, rgba(0,212,255,1) 100%)"
cancelbutton.style.borderRadius = "5px"
cancelbutton.style.color = "white"
cancelbutton.style.height = "30px"
cancelbutton.style.width = "80px"

// append
document.body.append(button);
document.body.append(modal);
modal.append(insidemodal);
insidemodal.append(insidetext);
insidemodal.append(insidetext2);
insidemodal.append(cancelbutton);

button.addEventListener("click",function () {
    modal.style.display = "flex"
});
cancelbutton.addEventListener("click", function () {
    modal.style.display = "none"
});




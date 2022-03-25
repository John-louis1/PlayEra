function replay(){
    window.location.reload();
}

let arr = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
let colorParts = [];

for(let i = 0; i < 6; i++){
    colorParts.push(arr[Math.floor(Math.random() * arr.length)]);
}

let color = `#${colorParts.join("")}`;
document.getElementById("hex").innerHTML = color;

var index = [0,1,2];
var i = Math.floor(Math.random()*3);
document.getElementById(`c${i}`).style.backgroundColor=color;

index.splice(i,1);

let colorParts1 = [];
for(let j = 0;j < 6;j++){
    colorParts1.push(arr[Math.floor(Math.random() * arr.length)]);
}
color1 = `#${colorParts1.join("")}`;
document.getElementById(`c${index[0]}`).style.backgroundColor=color1;

colorParts2 = [];
for(let j = 0;j < 6;j++){
    colorParts2.push(arr[Math.floor(Math.random() * arr.length)]);
}
color2 = `#${colorParts2.join("")}`;
document.getElementById(`c${index[1]}`).style.backgroundColor=color2;

function guess(){
    if(document.activeElement.id==`c${i}`){
        document.getElementById("hex").innerHTML = "CORRECT !!";
        document.getElementById("hex").style.color = "darkgreen";
    } else {
        document.getElementById("hex").innerHTML = "WRONG !!";
        document.getElementById("hex").style.color = "red";
    }
    document.getElementsByClassName("color")[0].removeAttribute("onclick");
    document.getElementsByClassName("color")[1].removeAttribute("onclick");
    document.getElementsByClassName("color")[2].removeAttribute("onclick");
}
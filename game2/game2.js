function replay(){
    window.location.reload();
}

function play(){
    let index = [0,1,2];
    let i = document.activeElement.id;
    index.splice(i,1);
    let comp = index[Math.floor(Math.random()*2)];

    // 0 paper
    // 1 rock
    // 2 scissors
    if((i == '0' && comp == '1') || (i == '1' && comp == '2') || (i == '2' && comp == '0')){
        document.getElementById("status").innerHTML = "You win!";
        document.getElementById("status").style.color = "darkgreen";
        document.getElementById("player").innerHTML++;
        
    }

    else if (i == comp) {
        document.getElementById("status").innerHTML = "It's a tie!";
        document.getElementById("status").style.color = "darkblue";
    }
    
    else {
        document.getElementById("status").innerHTML = "You lose!";
        document.getElementById("status").style.color = "darkred";
        document.getElementById("computer").innerHTML++;
    }



    if(document.getElementById("computer").innerHTML == '3' || document.getElementById("player").innerHTML == '3') {
        document.getElementsByClassName("prs")[0].removeAttribute("onclick");
        document.getElementsByClassName("prs")[1].removeAttribute("onclick");
        document.getElementsByClassName("prs")[2].removeAttribute("onclick");
    }
    
}


function flipTheme(){
    let index=["Light Mode", "Dark Mode"];
  
    if (document.activeElement.innerHTML== index[0]) {
      document.activeElement.innerHTML= index[1];
      document.getElementById('html').style.backgroundColor = "#EDDEA4";
      document.getElementById('html').style.color = "#000"; 
    }
    else {
      document.activeElement.innerHTML= index[0];
      
      document.getElementById('html').style.backgroundColor = "#080708";
      document.getElementById('html').style.color = "#fff"; 
    }
}
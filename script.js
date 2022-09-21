// if (document.body.animate) {
//   document
//     .querySelectorAll(".button")
//     .forEach((button) => button.addEventListener("click", pop));
// }

// function pop(e) {
//   for (let i = 0; i < 30; i++) {
//     createParticle(e.clientX, e.clientY, e.target.dataset.type);
//   }
// }

// function createParticle(x, y, type) {
//   const particle = document.createElement("particle");
//   document.body.appendChild(particle);

//   const size = Math.floor(Math.random() * 20 + 5);

//   particle.style.width = `${size}px`;
//   particle.style.height = `${size}px`;

//   const destinationX = x + (Math.random() - 0.5) * 2 * 75;
//   const destinationY = y + (Math.random() - 0.5) * 2 * 75;

//   switch (type) {
//     case "square":
//       particle.style.background = `hsl(${Math.random() * 90 + 270}, 70%, 60%)`;
//       particle.style.border = "1px solid white";
//       break;
//     case "circle":
//       particle.style.background = `hsl(${Math.random() * 90 + 180}, 70%, 60%)`;
//       particle.style.borderRadius = "50%";
//       break;
//       case "triangle":
//         particle.style.background = `hsl(${Math.random() * 90 + 90}, 70%, 60%)`;
//         particle.style.borderRadius = "50%";
//         break;
//     default:
//       particle.style.background = `hsl(${Math.random() * 90 + 180}, 70%, 60%)`;
//   }

//   const animation = particle.animate(
//     [
//       {
//         // Set the origin position of the particle
//         // We offset the particle with half its size to center it around the mouse
//         transform: `translate(${x - size / 2}px, ${y - size / 2}px)`,
//         opacity: 1,
//       },
//       {
//         // We define the final coordinates as the second keyframe
//         transform: `translate(${destinationX}px, ${destinationY}px)`,
//         opacity: 0,
//       },
//     ],
//     {
//       duration: 500 ,
//       easing: "cubic-bezier(0, .9, .57, 1)",
//       delay: Math.random() * 200,
//     }
//   );

//   animation.onfinish = () => {
//     particle.removeParticle;
//   };
// }

// function removeParticle(e) {
//   e.srcElement.effect.target.remove();
// }



// var url1 = document.getElementById('link1');

// url1.addEventListener('click', (e)=>{
//     e.preventDefault();

//     setTimeout(() =>{
//         window.location.href = "http://127.0.0.1:5500/game1/game1.html";
//     }, 500);
// });

// var url2 = document.getElementById('link2');

// url2.addEventListener('click', (e)=>{
//     e.preventDefault();

//     setTimeout(() =>{
//         window.location.href = "http://127.0.0.1:5500/game2/game2.html";
//     }, 500);
// });

// var url3 = document.getElementById('link3');

// url3.addEventListener('click', (e)=>{
//     e.preventDefault();

//     setTimeout(() =>{
//         window.location.href = "http://127.0.0.1:5500/game3/game3.html";
//     }, 500);
// });

// function flipTheme(){
//   let index=["Light Mode", "Dark Mode"];

//   if (document.activeElement.innerHTML== index[0]) {
//     document.activeElement.innerHTML= index[1];
//     document.getElementById('html').style.backgroundColor = "#FFFFFF";
//     document.getElementById('nav').style.backgroundColor = "#FF5964"; 
//     document.getElementById('html').style.color = "#000"; 
//   }
//   else {
//     document.activeElement.innerHTML= index[0];
    
//     document.getElementById('html').style.backgroundColor = "#202C59";
//     document.getElementById('nav').style.backgroundColor = "#0F1A20"; 
//     document.getElementById('html').style.color = "#fff"; 
//   }
// }

function changeMode() {
  let root = document.querySelector(':root');
  let rs = getComputedStyle(root);
  let navLinks = document.querySelectorAll("header a");
  let games = document.querySelectorAll(".games article");
  let names = document.querySelectorAll(".games article h3, .games article p");
  let links = document.querySelectorAll(".info a");
  let photo = document.querySelector(".img-sec .bckg-col");
  if (document.getElementById("nightmode-input").checked) { // Night mode
    document.getElementById("logo").src = "assets/playera-night-no-bckgnd.png";
    document.body.style.backgroundColor = rs.getPropertyValue("--clr-night-dark");
    document.body.style.color = rs.getPropertyValue("--clr-night-light");
    document.getElementsByClassName("header")[0].style.backgroundColor = rs.getPropertyValue("--clr-night-pop");
    for (let i = 0; i < navLinks.length; i++) {
      navLinks[i].style.color = rs.getPropertyValue("--clr-night-light");}
    for (let i = 0; i < games.length; i++) {
      games[i].style.backgroundColor = rs.getPropertyValue("--clr-night-shadow");}
    for (let i = 0; i <names.length; i++) {
      names[i].style.color = rs.getPropertyValue("--clr-night-light");}
    for (let i = 0; i < links.length; i++) {
      links[i].style.color = rs.getPropertyValue("--clr-night-light");}
    photo.style.backgroundImage = rs.getPropertyValue("--clr-night-gradient");
    document.getElementsByClassName("footer")[0].style.backgroundColor = rs.getPropertyValue("--clr-night-pop");
    document.querySelector(".footer p").style.color = rs.getPropertyValue("--clr-day-light");
  } else { // Day mode
    document.getElementById("logo").src = "assets/playera-no-bckgnd.png";
    document.body.style.backgroundColor = rs.getPropertyValue("--clr-day-light");
    document.body.style.color = rs.getPropertyValue("--clr-day-dark");
    document.getElementsByClassName("header")[0].style.backgroundColor = rs.getPropertyValue("--clr-day-pop");
    document.getElementsByTagName("header")[0].getElementsByTagName("a")[0].style.color = rs.getPropertyValue("--clr-day-dark");
    for (let i = 0; i < navLinks.length; i++) {
      navLinks[i].style.color = rs.getPropertyValue("--clr-day-dark");}
    for (let i = 0; i < games.length; i++) {
      games[i].style.backgroundColor = rs.getPropertyValue("--clr-day-shadow");}
    for (let i = 0; i < names.length; i++) {
      names[i].style.color = rs.getPropertyValue("--clr-day-dark");}
    for (let i = 0; i < links.length; i++) {
      links[i].style.color = rs.getPropertyValue("--clr-day-dark");}
    photo.style.backgroundImage = rs.getPropertyValue("--clr-day-gradient");
    document.getElementsByClassName("footer")[0].style.backgroundColor = rs.getPropertyValue("--clr-day-pop");
    document.querySelector(".footer p").style.color = rs.getPropertyValue("--clr-night-dark");
  }
}
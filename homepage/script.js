if (document.body.animate) {
  document
    .querySelectorAll(".button")
    .forEach((button) => button.addEventListener("click", pop));
}

function pop(e) {
  for (let i = 0; i < 30; i++) {
    createParticle(e.clientX, e.clientY, e.target.dataset.type);
  }
}

function createParticle(x, y, type) {
  const particle = document.createElement("particle");
  document.body.appendChild(particle);

  const size = Math.floor(Math.random() * 20 + 5);

  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;

  const destinationX = x + (Math.random() - 0.5) * 2 * 75;
  const destinationY = y + (Math.random() - 0.5) * 2 * 75;

  switch (type) {
    case "square":
      particle.style.background = `hsl(${Math.random() * 90 + 270}, 70%, 60%)`;
      particle.style.border = "1px solid white";
      break;
    case "circle":
      particle.style.background = `hsl(${Math.random() * 90 + 180}, 70%, 60%)`;
      particle.style.borderRadius = "50%";
      break;
      case "triangle":
        particle.style.background = `hsl(${Math.random() * 90 + 90}, 70%, 60%)`;
        particle.style.borderRadius = "50%";
        break;
    default:
      particle.style.background = `hsl(${Math.random() * 90 + 180}, 70%, 60%)`;
  }

  const animation = particle.animate(
    [
      {
        // Set the origin position of the particle
        // We offset the particle with half its size to center it around the mouse
        transform: `translate(${x - size / 2}px, ${y - size / 2}px)`,
        opacity: 1,
      },
      {
        // We define the final coordinates as the second keyframe
        transform: `translate(${destinationX}px, ${destinationY}px)`,
        opacity: 0,
      },
    ],
    {
      duration: 500 ,
      easing: "cubic-bezier(0, .9, .57, 1)",
      delay: Math.random() * 200,
    }
  );

  animation.onfinish = () => {
    particle.removeParticle;
  };
}

function removeParticle(e) {
  e.srcElement.effect.target.remove();
}











var randomColor = Math.floor(Math.random()*16777215).toString(16);







// // dog
// var object = document.getElementById('dog');

// object.onclick=function(){
//   var x;
//   var y;
//   while(true){
//     x = Math.floor(Math.random()*300);
//     y = Math.floor(Math.random()*300);
//     object.style.top = x + 'px';
//     object.style.left = y + 'px';
//   }
// };


var timeLeft = 30;
    var elem = document.getElementById('dog');
    
    var timerId = setInterval(countdown, 1000);
    
    function countdown() {
      if (timeLeft == -1) {
        clearTimeout(timerId);
        doSomething();
      } else {
        elem.innerHTML = timeLeft + ' seconds remaining';
        timeLeft--;
      }
    }


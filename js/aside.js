const parrafos = document.querySelectorAll('.animated-text-writing');

function animarParrafos(index) {
  if (index < parrafos.length) {
    const parrafo = parrafos[index];
    parrafo.style.visibility = 'visible';
    parrafo.style.animation = 'typing 3.5s steps(40, end),blink-caret .75s step-end infinite';    
    setTimeout(() => {
      parrafo.style.animation = 'none'; 
      animarParrafos(index + 1);
    }, 2000);
  }
  else
  {
    document.getElementById('career-dir-list').style.visibility = 'visible';
  }

}

animarParrafos(0);

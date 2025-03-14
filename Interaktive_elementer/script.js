// Oppgave 1 - boks 1 skal bytte farge når man holder musepekeren over boksen
let boks1El = document.querySelector('#blueBox');
boks1El.addEventListener('mouseover', byttFarge);

function byttFarge(e) {
  boks1El.style.backgroundColor = 'red';
}

// Oppgave 2 - boks 2: tekst i boksen skal byttes ut, fra 2 til, Du klikket på meg
let boks2El = document.querySelector('#pinkBox');
boks2El.addEventListener('click', byttTekst);

function byttTekst(e) {
  boks2El.textContent = 'Du klikket på meg';
}

// Oppgave 3 - boks tre - Legg til kode som gjør at boks 3 blir større når man dobbelklikker på den.
let boks3El = document.querySelector('#greenBox');
boks3El.addEventListener('dblclick', utvidBoks);

function utvidBoks(e) {
  boks3El.style.width = '100%';
  boks3El.style.height = '100%';
}

// Oppgave 4 - boks fire - Legg til kode som gjør at boks 4 begynner å rotere når du holder musepekeren over boksen.
let boks4El = document.querySelector('#yellowBox');
boks4El.addEventListener('mouseover', roterBoks);

function roterBoks(e) {
  boks4El.style.transform = 'rotate(360deg)';
  boks4El.style.transition = 'transform 0.5s ease';
}

// Oppgave 5 - Legg til kode som gjør at hele nederste rad endrer farge hvis man trykker på mellomromstasten
let rad3El = document.querySelectorAll('.rad2');

document.addEventListener('keydown', byttFargeRad);

function byttFargeRad(e) {
  if (e.code === "Space") {
    // 32 = Mellomromstasten
    //e.preventDefault(); // Hindrer scrolling

    for (let i = 0; i < rad3El.length; i++) {
      rad3El[i].style.backgroundColor = 'green';
    }
  }
}

// Oppgave 6 - Legg til kode som gjør at boks 5 endrer farge når man trykker på tastaturet

let boks5El = document.querySelector('#orangeBox');
window.addEventListener('keydown', byttFargeBoks5);
document.addEventListener('keydown', byttFargeBoks5);

function byttFargeBoks5(e) {
  boks5El.style.backgroundColor = 'black';
}

// Oppgave 7 - Legg til kode som gjør at teksten i boks 6 viser "opp" når man trykker på piltast oppover, men endres tilbake til "6" når man slipper teksten
// let boks6El = document.querySelector('#purpleBox');
// document.addEventListener('keydown', boksOpp);
// document.addEventListener('keyup', boksTilbake);

// function boksOpp(e) {
//   if (e.code === "ArrowUp") {
//     boks6El.textContent = 'Opp';
//   }
// }

// function boksTilbake(e) {
//   if (e.code === "ArrowUp") {
//     boks6El.textContent = '6';
//   }
// }

// Oppgave 8 - Endre på koden fra oppgave 6 sånn at boks 6 viser «opp», «ned», «høyre» eller «venstre» avhengig av hvilken tast man trykker ned. Når man ikke holder nede en tast skal teksten vise «9»
let boks6El = document.querySelector('#purpleBox');
document.addEventListener('keydown', boksOpp);
document.addEventListener('keyup', boksTilbake);

function boksOpp(e) {
  if (e.code === 'ArrowUp') {
    boks6El.textContent = 'Opp';
  } else if (e.code === 'ArrowDown') {
    boks6El.textContent = 'Ned';
  } else if (e.code === 'ArrowLeft') {
    boks6El.textContent = 'Venstre';
  } else if (e.code === 'ArrowRight') {
    boks6El.textContent = 'Høyre';
}
}

function boksTilbake(e) {
    if (
        e.code === "ArrowUp" ||
        e.code === "ArrowDown" ||
        e.code === "ArrowLeft" ||
        e.code === "ArrowRight"
      ) {
        boks6El.textContent = "9";
      }
    }


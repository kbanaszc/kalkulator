let klaw = document.getElementById("klawiatura");
let wynik = document.getElementById("wynik");

let arr = [
  "C",
  "/",
  "x",
  "del",
  "7",
  "8",
  "9",
  "-",
  "4",
  "5",
  "6",
  "+",
  "1",
  "2",
  "3",
  "=",
  "%",
  "0",
  ",",
];

for (y in arr) {
  klaw.insertAdjacentHTML(
    "beforeend",
    `<div class="guzik" id=guzik${y} value =${arr[y]} onclick="but(this)">${arr[y]}</div>`
  );
}

let tablica = "";

function but(x) {
  if (tablica.length < 18) {
    let dana = x.getAttribute("value");
    console.log(dana);

    if (dana === "del") tablica=tablica.slice(0, -1);
    else {
      tablica = tablica + dana;
    }
    wynik.innerHTML = tablica;
  }
}

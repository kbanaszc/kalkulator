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
let holder = "";

function but(x) {
  let dana = x.getAttribute("value");
  if (tablica.length < 13) {
    console.log(dana);

    if (dana === "del") {
      tablica = tablica.slice(0, -1);
    } else if (dana === "-") {
      if (holder === "") {
        holder = tablica;
        tablica = "";
      } else {
        holder = holder - tablica;
        tablica = "";
      }
    } else if (dana === "=") {
      tablica = holder
    } else if (dana === "C") {
      tablica = "";
      holder = "";
    } else if (dana === "%") {
      let y = tablica * 0.01;
      tablica = y.toString();
    } else if (
      "1" ||
      "2" ||
      "3" ||
      "4" ||
      "5" ||
      "6" ||
      "7" ||
      "8" ||
      "9" ||
      ","
    ) {
      tablica = tablica + dana;
    }

    wynik.innerHTML = tablica;
  }
}

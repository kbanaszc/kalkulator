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
  ".",
];

for (y in arr) {
  klaw.insertAdjacentHTML(
    "beforeend",
    `<div class="guzik" id=guzik${y} value =${arr[y]} onclick="but(this)">${arr[y]}</div>`
  );
}

let tablica = "";
let holder = "";
let flaga = 0;
let czysc = 0;

function but(x) {
  let dana = x.getAttribute("value");
  if (czysc === 1) {
    tablica = "";
    czysc = 0;
  }
  if (tablica.length < 13) {
    console.log(dana);

    if (dana === "del") {
      tablica = tablica.slice(0, -1);
    } else if (dana === "-" || dana === "+" || dana === "/" || dana === "x") {
      if (holder === "") {
        holder = tablica;
        tablica = "";
      } else if (dana === "-") {
        holder = parseFloat(holder) - parseFloat(tablica);
        tablica = "";
        flaga = "-";
      } else if (dana === "/") {
        holder = parseFloat(holder) / parseFloat(tablica);
        tablica = "";
        flaga = "/";
      } else if (dana === "x") {
        holder = parseFloat(holder) * parseFloat(tablica);
        tablica = "";
        flaga = "x";
      } else if (dana === "+") {
        holder = parseFloat(holder) + parseFloat(tablica);
        tablica = "";
        flaga = "+";
      }
    } else if (dana === "=") {
      if(flaga!=""){
        if(flaga==="-") holder = parseFloat(holder) - parseFloat(tablica);
        if(flaga==="+") holder = parseFloat(holder) + parseFloat(tablica);
        if(flaga==="*") holder = parseFloat(holder) * parseFloat(tablica);
        if(flaga==="/") holder = parseFloat(holder) / parseFloat(tablica);
      }
      tablica = holder.toString();
      czysc = 1;
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

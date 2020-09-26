// document.getElementById("1").addEventListener("click", () => {
//   console.log("1");
// });

let klaw = document.getElementById("klawiatura");

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
  "eq",
  "%",
  "0",
  ",",
];

for (y in arr) {
  klaw.innerHTML(
    '<div class="guzik" id=' +
    arr[y] +
    "value = " +
    arr[y] +
    ">" +
    arr[y] +
    "</div>")
}

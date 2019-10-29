function deling(tall1, tall2) {
  console.log(
    "tallet " + tall1 + " delt på tallet " + tall2 + " blir " + tall1 / tall2
  );
  return tall1 / tall2;
}
deling(100, 2);

function settSammenOrd(ord1, ord2) {
  console.log(ord1 + " " + ord2);
}
settSammenOrd("Pepsi", "Max");

function toTall(toTall1, toTall2) {
  console.log(
    "tallet " +
      toTall1 +
      " plusset med tallet " +
      toTall2 +
      " blir " +
      (toTall1 + toTall2)
  );
  console.log(
    "tallet " +
      toTall1 +
      " minusert med tallet " +
      toTall2 +
      " blir " +
      (toTall1 - toTall2)
  );
  console.log(
    "tallet " +
      toTall1 +
      " delt på tallet " +
      toTall2 +
      " blir " +
      toTall1 / toTall2
  );
  console.log(
    "tallet " +
      toTall1 +
      " ganget med tallet " +
      toTall2 +
      " blir " +
      toTall1 * toTall2
  );
}
toTall(20, 4);

function fiksMellomrom(setning) {
  console.log(setning.replace(/  /g, " "));
}

fiksMellomrom("Eg  e  klar  for  helg  !");

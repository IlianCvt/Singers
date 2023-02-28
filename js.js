// lepa brena
// https://youtu.be/yfxk0NuI_oA

// whitneу
// https://youtu.be/5Pze_mdbOK8

//tina
// https://youtu.be/TTfYnRQgKgY

const songs = {
  lepabrena: "https://youtu.be/yfxk0NuI_oA",
  whitneyhouston: "https://youtu.be/5Pze_mdbOK8",
  tinaturner: "https://youtu.be/TTfYnRQgKgY",
};

let lepabrenasnimka = document.querySelector(".section-2 img");
lepabrenasnimka.addEventListener("click", function (e) {
  e.stopPropagation();

  window.location.href = songs.lepabrena;
});

let whitneyhoustonsnimka = document.querySelector(".section-3 img");
whitneyhoustonsnimka.addEventListener("click", function (e) {
  e.stopPropagation();
  window.location.href = songs.whitneyhouston;
});

let tinaturnersnimka = document.querySelector(".section-4 img");
tinaturnersnimka = addEventListener("click", function (e) {
  e.stopPropagation();

  window.location.href = songs.tinaturner;
});

alert("The best singers");
prompt(
  "Who is your favorite celebrity "["a-lepa brena 1"],
  ["b-Whitney Houston 2"],
  ["c-Tina Turner 3"]
);

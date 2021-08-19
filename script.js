// awal
const newP = document.createElement("p");
const textP = document.createTextNode("paragraf baru");

newP.appendChild(textP);

const sectionA = document.getElementById("a");
sectionA.appendChild(newP);
// akhir

// awal
const liBaru = document.createElement("li");
const teksLiBaru = document.createTextNode("item baru");

liBaru.appendChild(teksLiBaru);

const ul = document.querySelector("section#b ul");
const li2 = ul.querySelector("li:nth-child(2)");
ul.insertBefore(liBaru, li2);
// akhir

const link = document.getElementsByTagName("a")[0];

sectionA.removeChild(link);

const sectionB = document.getElementById("b");
const p4 = sectionB.querySelector("p");

const h2baru = document.createElement("h2");
const teksh2baru = document.createTextNode("judul baru!");

h2baru.appendChild(teksh2baru);
sectionB.replaceChild(h2baru, p4);

newP.style.backgroundColor = "green";
h2baru.style.backgroundColor = "green";
liBaru.style.backgroundColor = "green";

var p;
var nama;
do {
  nama = prompt("masukan nama kamu");
  if (nama.toLocaleLowerCase().includes("sheilla")) {
    p = prompt(
      "hello, " + nama + " kamu cantik banget, mau jadi pacar aku ga ?"
    );
    if (
      p.toLocaleLowerCase().includes("mau") ||
      p.toLocaleLowerCase().includes("iya") ||
      p.toLocaleLowerCase().includes("aku mau")
    ) {
      alert("Love you " + nama);
      document.getElementById("response").innerText = "Love you " + nama + "😘";
    } else {
      alert("jawabannya gaboleh selain mau/iya/aku mau");
    }
  } else {
    alert("kamu bukan sheilla ya");
  }
} while (
  !(
    p.toLocaleLowerCase().includes("mau") ||
    p.toLocaleLowerCase().includes("iya") ||
    p.toLocaleLowerCase().includes("aku mau")
  )
);

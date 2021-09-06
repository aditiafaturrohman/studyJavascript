// const coba = new Promise((resolve) => {
//   setTimeout(() => {
//     alert("berhasil");
//     resolve("oke");
//   }, 2000);
// });

// coba.then(() => console.info(coba));

function cobaPromise() {
  return new Promise((resolve, rejected) => {
    const waktu = 5000;
    if (waktu <= 5000) {
      setTimeout(() => {
        const input = prompt("siapa nama anda");
        alert(`hello ${input}`);
      }, waktu);
    } else {
      console.error(err);
    }
  });
}

async function cobaAsync() {
  try {
    const coba = await cobaPromise();
    console.info(coba);
  } catch (err) {
    console.error("kelamaan");
  }
}

cobaAsync();

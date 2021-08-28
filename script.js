const mhs1 = {
  nama: "aditia ",
  umur: 17,
  jurusan: "TKJ",
  alamat: { desa: "ciakar", kecamatan: "panongan", kota: "tanggerang", provinsi: "banten" },
};

function mhs({ nama, umur, jurusan, alamat: { desa, kecamatan, kota, provinsi } }) {
  return `nama saya ${nama}, umur saya ${umur}, saya dari fakultas ${jurusan}, asal saya dari ${kota}`;
}

console.info(mhs(mhs1));

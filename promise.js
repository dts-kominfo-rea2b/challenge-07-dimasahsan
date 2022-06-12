const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  const hasilPromiseIXX = await promiseTheaterIXX();
  const hasilPromiseVGC = await promiseTheaterVGC();

  const hasilIXX = hitung(hasilPromiseIXX, emosi);
  const hasilVGC = hitung(hasilPromiseVGC, emosi);

  return hasilIXX + hasilVGC;
};

const hitung = (hasilSetalahMenonton, emosi) => {
  let total = 0;
  hasilSetalahMenonton.forEach((item) => {
    if (item.hasil == emosi) {
      total++;
    }
  });
  return total;
};

module.exports = {
  promiseOutput,
};

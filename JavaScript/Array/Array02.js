const marval_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// marval_heros.forEach(function (hero) {
//   console.log(`Hero: ${hero}`);
// });

// marval_heros.push(dc_heros); // same values
// console.log(marval_heros);
// console.log(marval_heros[3][1]);

// const all_heros = marval_heros.concat(dc_heros);
// console.log(all_heros);

// spread operater

// const all_new_heros = [...marval_heros, ...dc_heros];
// console.log(all_new_heros);

//realy use

// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
// const real_another_array = another_array.flat(Infinity);
// console.log(real_another_array);

// comman use
// console.log(Array.isArray("Yuvraj"));
// console.log(Array.from("Yuvraj"));
// console.log(Array.from({ name: "yuvraj" })); // interesting empty array in interviwe

// let score1 = 100;
// let score2 = 200;
// let score3 = 300;

// console.log(Array.of(score1, score2, score3)); // all array in  one element

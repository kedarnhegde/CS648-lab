// Q1
console.log("\nQ1");
const favMoviesQ1 = [
  "John Wick",
  "Avengers: Infinity War",
  "Avengers: Endgame",
  "Mission: Impossible - Ghost Protocol",
  "The Fast and the Furious: Tokyo Drift",
];
console.log(favMoviesQ1[1]);

// Q2
console.log("\nQ2");
const moviesQ2 = new Array(5);
moviesQ2[0] = "John Wick";
moviesQ2[1] = "Avengers: Infinity War";
moviesQ2[2] = "Avengers: Endgame";
moviesQ2[3] = "Mission: Impossible - Ghost Protocol";
moviesQ2[4] = "The Fast and the Furious: Tokyo Drift";
console.log(moviesQ2[0]);

// Q3
console.log("\nQ3");
const moviesQ3 = new Array(5);
moviesQ3[0] = "John Wick";
moviesQ3[1] = "Avengers: Infinity War";
moviesQ3[2] = "Avengers: Endgame";
moviesQ3[3] = "Mission: Impossible - Ghost Protocol";
moviesQ3[4] = "The Fast and the Furious: Tokyo Drift";
moviesQ3.splice(2, 0, "The Dark Knight");
console.log(moviesQ3.length);

// Q4
console.log("\nQ4");
const moviesQ4 = [
  "John Wick",
  "Avengers: Infinity War",
  "Avengers: Endgame",
  "Mission: Impossible - Ghost Protocol",
  "The Fast and the Furious: Tokyo Drift",
];
delete moviesQ4[0];
console.log(moviesQ4);

// Q5
console.log("\nQ5");
const moviesQ5 = [
  "John Wick",
  "Avengers: Infinity War",
  "Avengers: Endgame",
  "Mission: Impossible - Ghost Protocol",
  "The Fast and the Furious: Tokyo Drift",
  "The Dark Knight",
  "Inception",
];
for (const i in moviesQ5) console.log(moviesQ5[i]);

// Q6
console.log("\nQ6");
for (const movie of moviesQ5) console.log(movie);

// Q7
console.log("\nQ7");
for (const movie of [...moviesQ5].sort()) console.log(movie);

// Q8
console.log("\nQ8");
const leastFavMoviesQ8 = ["Twilight", "Thor: Love and Thunder", "Ant-Man and the Wasp"];
console.log("Movies I like:\n");
for (const m of moviesQ5) console.log(m);
console.log("\nMovies I regret watching:\n");
for (const m of leastFavMoviesQ8) console.log(m);

// Q9
console.log("\nQ9");
const mergedQ9 = moviesQ5.concat(leastFavMoviesQ8);
for (const m of [...mergedQ9].sort().reverse()) console.log(m);

// Q10
console.log("\nQ10");
const mergedSortedQ10 = [...mergedQ9].sort().reverse();
console.log(mergedSortedQ10.at(-1));

// Q11
console.log("\nQ11");
const mergedSortedQ11 = [...mergedQ9].sort().reverse();
console.log(mergedSortedQ11.shift());

// Q12
console.log("\nQ12");
let moviesQ12 = moviesQ5.concat(leastFavMoviesQ8);
const badIndicesQ12 = moviesQ12
  .map((movie, idx) => (leastFavMoviesQ8.includes(movie) ? idx : -1))
  .filter((idx) => idx !== -1);
console.log("Indices of movies I regret:", badIndicesQ12);
const replacementsQ12 = ["Gladiator", "The Prestige", "Top Gun: Maverick"];
badIndicesQ12.forEach((idx, i) => (moviesQ12[idx] = replacementsQ12[i]));
console.log("Updated Movies List:");
moviesQ12.forEach((m) => console.log(m));

// Q13
console.log("\nQ13");
const rankedMoviesQ13 = [
  ["John Wick", 1],
  ["Avengers: Infinity War", 2],
  ["Avengers: Endgame", 3],
  ["Mission: Impossible - Ghost Protocol", 4],
  ["The Fast and the Furious: Tokyo Drift", 5],
];
const movieNamesOnlyQ13 = rankedMoviesQ13.flat().filter((x) => typeof x === "string");
movieNamesOnlyQ13.forEach((name) => console.log(name));

// Q14
console.log("\nQ14");
const employeesQ14 = ["Zak", "Jessica", "Mark", "Fred", "Sally"];
const showEmployee = (arr) => {
  console.log("Employees:\n");
  for (const emp of arr) console.log(emp.toUpperCase());
};
showEmployee(employeesQ14);

// Q15
console.log("\nQ15");
const filterValues = (arr) => arr.filter((v) => v !== false && v !== null && v !== 0 && v !== "");
console.log(filterValues([58, "", "abcd", true, null, false, 0]));

// Q16
console.log("\nQ16");
const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
console.log(getRandomItem([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// Q17
console.log("\nQ17");
const getLargestNumber = (arr) => Math.max(...arr);
console.log(getLargestNumber([12, 5, 99, 42, 7]));

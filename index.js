import random from "random";

import generate from "./generate.js";
import solve from "./solution.js";

const nrOfCases = random.int(1, 10);
const input = generate(nrOfCases);
const cases = solve(...input);

console.log(`Array-Equilibrium: N-Arrays/Tasks, N = ${nrOfCases}`);
console.log(input);
console.log(`Solution:`);
console.log(cases);

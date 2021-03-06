import random from "random";

function generate() {
  const size = random.int(1, 10);
  const task = [...Array(size)].map(nullish => random.int(1, 5).toString() + " ").join(" ");

  return [size, task];
}

export default function(nrOfCases = 1) {
  return [
    nrOfCases,
    ...[...Array(nrOfCases)].flatMap(generate),
  ];
}

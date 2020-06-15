import random from "random";

function generate() {
  const size = random.int(1, 100);
  const task = [...Array(size)].map(nullish => random.int(1, 100).toString() + " ").split(" ");

  return [size, task];
}

export default function(nrOfCases = 1) {
  return [
    nrOfCases,
    ...[...Array(nrOfCases)].flatMap(generate),
  ];
}

export default function(T, ...inputs) {
  const result = [];

  for (let i = 0; i < T; i++) {
    const input = inputs[2 * i + 1].split('  ').map(str => +str);
    let equilibrium = -1;
    console.log(input);

    input.reduce((acc, cur, j) => {
      const accumulated = acc + cur;

      input.reduceRight((acc, cur, k) => {
        const _accumulated = acc + cur;

        if ((_accumulated) === accumulated && ((j + 1) + (input.length - k) + 1 === input.length)) {
          equilibrium = j + 1;
        }

        return _accumulated;
      }, 0);

      return accumulated;
    }, 0);

    result.push(equilibrium);
  }

  return result;
}

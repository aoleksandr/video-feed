export default function () {
  return function (input) {
    let number = parseInt(input, 10);
    if (number < 1000) {
      return `${number}`;
    }
    if (number < 1000000) {
      return `${(number/1000).toFixed(1).replace(/\.0$/, '')}k`;
    } else {
      return `${(number/1000000).toFixed(1).replace(/\.0$/, '')}m`;
    }
  };
}

function view(who, array) {
  return `
Hello, ${who}!
${array.map(no => `${no}`).join('')}
`;
}

// This function gets included
function cube ( x ) {
  return x * x * x;
}

let array = [1, 2, 3];

console.log(cube(3));
$(() => console.log(view('World', array)));
//# sourceMappingURL=main.es.js.map

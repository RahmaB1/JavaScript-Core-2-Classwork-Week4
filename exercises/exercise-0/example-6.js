let x = 1;

function printCoordinates(point) {
  let x = 2;

  console.log(`The x coordinate is ${x}`);
  console.log(`The y coordinate is ${y}`);
}

printCoordinates({ x: 10, y: 3 });

// my predection :
// the x coo is 2
// the y coor is  3

// actual answer :
//the x coo is 2
// y is not defined

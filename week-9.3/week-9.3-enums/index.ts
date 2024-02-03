enum Direction {
  Up,
  Down,
  Left,
  Right
}

function doSomething(keyPressed: Direction) {
// do something.
}

doSomething(Direction.Up)
console.log(Direction.Up)

//How to change enum values?
enum Direction {
  Up = 1,
  Down, // becomes 2 by default
  Left, // becomes 3
  Right // becomes 4
}
function doSomething(keyPressed: Direction) {
// do something.
}
doSomething(Direction.Down)

//enum values Can also be strings
enum Direction {
  Up = "UP",
  Down = "Down",
  Left = "Left",
  Right = 'Right'
}
function doSomething(keyPressed: Direction) {
// do something.
}
doSomething(Direction.Down)

//Common usecase of enum in express
enum ResponseStatus {
    Success = 200,
    NotFound = 404,
    Error = 500
}

app.get("/', (req, res) => {
    if (!req.query.userId) {
      res.status(ResponseStatus.Error).json({})
    }
    // and so on...
    res.status(ResponseStatus.Success).json({});
})

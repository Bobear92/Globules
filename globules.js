function globules() {
  function makeGrid() {
    const board = $(".board");

    for (let i = 0; i < 100; i++) {
      let newDiv = $(`<div class = 'cell' id = '${i}' ></div>`);
      board.append(newDiv);
      // creates grid with classes cell and id num 0 - 99.
    }

    $("#9, #90").addClass("redSplat");
    $("#9, #90").addClass("splat");

    $("#0").addClass("active");
    $("#0, #99").addClass("greenSplat");
    $("#0, #99").addClass("splat");
    // starts game with 2 red and 2 green in opposite corners

    $(".yourInfo").css("background-color", "green");
    $(".enemyInfo").css("background-color", "grey");
    // starts it at greens turn
  }
  makeGrid();

  // ---------------------------------------------------------------------------------------------------------------------------

  function cellsAround() {
    const cell = $(".cell.active");
    let idNum = Number(document.getElementsByClassName("cell active")[0].id); // active cell id
    const idArray = [];

    if (idNum === 0) {
      idArray.push(idNum + 1);
      idArray.push(idNum + 10);
      idArray.push(idNum + 11);
    } else if (idNum === 9) {
      idArray.push(idNum - 1);
      idArray.push(idNum + 9);
      idArray.push(idNum + 10);
    } else if (
      idNum === 10 ||
      idNum === 20 ||
      idNum === 30 ||
      idNum === 40 ||
      idNum === 50 ||
      idNum === 60 ||
      idNum === 70 ||
      idNum === 80
    ) {
      idArray.push(idNum + 1);
      idArray.push(idNum + 10);
      idArray.push(idNum + 11);
      idArray.push(idNum - 10);
      idArray.push(idNum - 9);
    } else if (idNum === 90) {
      idArray.push(idNum + 1);
      idArray.push(idNum - 10);
      idArray.push(idNum - 9);
    } else if (idNum === 99) {
      idArray.push(idNum - 1);
      idArray.push(idNum - 10);
      idArray.push(idNum - 11);
    } else if (
      idNum === 19 ||
      idNum === 29 ||
      idNum === 39 ||
      idNum === 49 ||
      idNum === 59 ||
      idNum === 69 ||
      idNum === 79 ||
      idNum === 89
    ) {
      idArray.push(idNum + 10);
      idArray.push(idNum - 10);
      idArray.push(idNum - 1);
      idArray.push(idNum + 9);
      idArray.push(idNum - 11);

      // all above is the logic for the cells on both sides of the board so they don't grab from the other side of the board
    } else if (cell) {
      if (idNum - 11 > -1 && idNum - 11 < 100) {
        idArray.push(idNum - 11);
      }
      if (idNum - 10 > -1 && idNum - 10 < 100) {
        idArray.push(idNum - 10);
      }
      if (idNum - 9 > -1 && idNum - 9 < 100) {
        idArray.push(idNum - 9);
      }
      if (idNum - 1 > -1 && idNum - 1 < 100) {
        idArray.push(idNum - 1);
      }
      if (idNum + 1 > -1 && idNum + 1 < 100) {
        idArray.push(idNum + 1);
      }
      if (idNum + 9 > -1 && idNum + 9 < 100) {
        idArray.push(idNum + 9);
      }
      if (idNum + 10 > -1 && idNum + 10 < 100) {
        idArray.push(idNum + 10);
      }
      if (idNum + 11 > -1 && idNum + 11 < 100) {
        idArray.push(idNum + 11);
      }
      // all above is for the middle of the board which all act the same.
    }

    return idArray;
  }

  function jumpAround() {
    const cell = $(".cell.active");
    let idNum = Number(document.getElementsByClassName("cell active")[0].id); // active cell id
    const jumpArray = [];

    if (idNum === 0) {
      jumpArray.push(idNum + 2);
      jumpArray.push(idNum + 12);
      jumpArray.push(idNum + 20);
      jumpArray.push(idNum + 21);
      jumpArray.push(idNum + 22);
    } else if (idNum === 1) {
      jumpArray.push(idNum + 2);
      jumpArray.push(idNum + 12);
      jumpArray.push(idNum + 19);
      jumpArray.push(idNum + 20);
      jumpArray.push(idNum + 21);
      jumpArray.push(idNum + 22);
    } else if (idNum === 8) {
      jumpArray.push(idNum - 2);
      jumpArray.push(idNum + 8);
      jumpArray.push(idNum + 18);
      jumpArray.push(idNum + 19);
      jumpArray.push(idNum + 20);
      jumpArray.push(idNum + 21);
    } else if (idNum === 9) {
      jumpArray.push(idNum - 2);
      jumpArray.push(idNum + 8);
      jumpArray.push(idNum + 18);
      jumpArray.push(idNum + 19);
      jumpArray.push(idNum + 20);
    } else if (idNum === 10) {
      jumpArray.push(idNum - 8);
      jumpArray.push(idNum + 2);
      jumpArray.push(idNum + 12);
      jumpArray.push(idNum + 20);
      jumpArray.push(idNum + 21);
      jumpArray.push(idNum + 22);
    } else if (idNum === 11) {
      jumpArray.push(idNum - 8);
      jumpArray.push(idNum + 2);
      jumpArray.push(idNum + 12);
      jumpArray.push(idNum + 19);
      jumpArray.push(idNum + 20);
      jumpArray.push(idNum + 21);
      jumpArray.push(idNum + 22);
    } else if (idNum === 18) {
      jumpArray.push(idNum - 12);
      jumpArray.push(idNum - 2);
      jumpArray.push(idNum + 8);
      jumpArray.push(idNum + 18);
      jumpArray.push(idNum + 19);
      jumpArray.push(idNum + 20);
      jumpArray.push(idNum + 21);
    } else if (idNum === 19) {
      jumpArray.push(idNum - 12);
      jumpArray.push(idNum - 2);
      jumpArray.push(idNum + 8);
      jumpArray.push(idNum + 18);
      jumpArray.push(idNum + 19);
      jumpArray.push(idNum + 20);
    } else if (
      idNum === 20 ||
      idNum === 30 ||
      idNum === 40 ||
      idNum === 50 ||
      idNum === 60 ||
      idNum === 70 ||
      idNum === 80
    ) {
      jumpArray.push(idNum - 20);
      jumpArray.push(idNum - 19);
      jumpArray.push(idNum - 18);
      jumpArray.push(idNum - 8);
      jumpArray.push(idNum + 2);
      jumpArray.push(idNum + 12);
      jumpArray.push(idNum + 20);
      jumpArray.push(idNum + 21);
      jumpArray.push(idNum + 22);
    } else if (
      idNum === 21 ||
      idNum === 31 ||
      idNum === 41 ||
      idNum === 51 ||
      idNum === 61 ||
      idNum === 71 ||
      idNum === 81
    ) {
      jumpArray.push(idNum - 21);
      jumpArray.push(idNum - 20);
      jumpArray.push(idNum - 19);
      jumpArray.push(idNum - 18);
      jumpArray.push(idNum - 8);
      jumpArray.push(idNum + 2);
      jumpArray.push(idNum + 12);
      jumpArray.push(idNum + 19);
      jumpArray.push(idNum + 20);
      jumpArray.push(idNum + 21);
      jumpArray.push(idNum + 22);
    } else if (
      idNum === 28 ||
      idNum === 38 ||
      idNum === 48 ||
      idNum === 58 ||
      idNum === 68 ||
      idNum === 78 ||
      idNum === 88
    ) {
      jumpArray.push(idNum - 22);
      jumpArray.push(idNum - 21);
      jumpArray.push(idNum - 20);
      jumpArray.push(idNum - 19);
      jumpArray.push(idNum - 12);
      jumpArray.push(idNum - 2);
      jumpArray.push(idNum + 8);
      jumpArray.push(idNum + 18);
      jumpArray.push(idNum + 19);
      jumpArray.push(idNum + 20);
      jumpArray.push(idNum + 21);
    } else if (
      idNum === 29 ||
      idNum === 39 ||
      idNum === 49 ||
      idNum === 59 ||
      idNum === 69 ||
      idNum === 79 ||
      idNum === 89
    ) {
      jumpArray.push(idNum - 22);
      jumpArray.push(idNum - 21);
      jumpArray.push(idNum - 20);
      jumpArray.push(idNum - 12);
      jumpArray.push(idNum - 2);
      jumpArray.push(idNum + 8);
      jumpArray.push(idNum + 18);
      jumpArray.push(idNum + 19);
      jumpArray.push(idNum + 20);
    } else if (idNum === 90) {
      jumpArray.push(idNum - 20);
      jumpArray.push(idNum - 19);
      jumpArray.push(idNum - 18);
      jumpArray.push(idNum - 8);
      jumpArray.push(idNum + 2);
    } else if (idNum === 91) {
      jumpArray.push(idNum - 21);
      jumpArray.push(idNum - 20);
      jumpArray.push(idNum - 19);
      jumpArray.push(idNum - 18);
      jumpArray.push(idNum - 8);
      jumpArray.push(idNum + 2);
    } else if (idNum === 98) {
      jumpArray.push(idNum - 22);
      jumpArray.push(idNum - 21);
      jumpArray.push(idNum - 20);
      jumpArray.push(idNum - 19);
      jumpArray.push(idNum - 12);
      jumpArray.push(idNum - 2);
    } else if (idNum === 99) {
      jumpArray.push(idNum - 22);
      jumpArray.push(idNum - 21);
      jumpArray.push(idNum - 20);
      jumpArray.push(idNum - 12);
      jumpArray.push(idNum - 2);
    } else if (cell) {
      if (idNum - 22 > -1 && idNum - 22 < 100) {
        jumpArray.push(idNum - 22);
      }
      if (idNum - 21 > -1 && idNum - 21 < 100) {
        jumpArray.push(idNum - 21);
      }
      if (idNum - 20 > -1 && idNum - 20 < 100) {
        jumpArray.push(idNum - 20);
      }
      if (idNum - 19 > -1 && idNum - 19 < 100) {
        jumpArray.push(idNum - 19);
      }
      if (idNum - 18 > -1 && idNum - 18 < 100) {
        jumpArray.push(idNum - 18);
      }
      if (idNum - 12 > -1 && idNum - 12 < 100) {
        jumpArray.push(idNum - 12);
      }
      if (idNum - 8 > -1 && idNum - 8 < 100) {
        jumpArray.push(idNum - 8);
      }
      if (idNum - 2 > -1 && idNum - 2 < 100) {
        jumpArray.push(idNum - 2);
      }
      if (idNum + 2 > -1 && idNum + 2 < 100) {
        jumpArray.push(idNum + 2);
      }
      if (idNum + 2 > -1 && idNum + 2 < 100) {
        jumpArray.push(idNum + 2);
      }
      if (idNum + 8 > -1 && idNum + 8 < 100) {
        jumpArray.push(idNum + 8);
      }
      if (idNum + 12 > -1 && idNum + 12 < 100) {
        jumpArray.push(idNum + 12);
      }
      if (idNum + 18 > -1 && idNum + 18 < 100) {
        jumpArray.push(idNum + 18);
      }
      if (idNum + 19 > -1 && idNum + 19 < 100) {
        jumpArray.push(idNum + 19);
      }
      if (idNum + 20 > -1 && idNum + 20 < 100) {
        jumpArray.push(idNum + 20);
      }
      if (idNum + 21 > -1 && idNum + 21 < 100) {
        jumpArray.push(idNum + 21);
      }
      if (idNum + 22 > -1 && idNum + 22 < 100) {
        jumpArray.push(idNum + 22);
      }
    }
    return jumpArray;
  }

  function convert() {
    let idArray = cellsAround(); // gets array from cellsAround
    let idNum = Number(document.getElementsByClassName("cell active")[0].id); // id of active cell
    let centerColor = $(`#${idNum}`).hasClass("greenSplat"); // grabs id number of active cell in jQuery form then asks if it has greenSplat class. true is green,  false is red

    for (let i = 0; i < idArray.length; i++) {
      // loops through array of id's around the active cell
      num = idArray[i]; // every individual id for spaces around active cell as a number
      currentCell = $(`#${num}`); // every individual id for spaces around active cell as a jQuery
      if (centerColor && currentCell.hasClass("redSplat")) {
        currentCell.removeClass("redSplat");
        currentCell.addClass("greenSplat");
        // remove red add green
      } else if (!centerColor && currentCell.hasClass("greenSplat")) {
        currentCell.removeClass("greenSplat");
        currentCell.addClass("redSplat");
        // remove green add red
      }
    }
  }

  // ---------------------------------------------------------------------------------------------------------------------------

  // Switching players

  gameState = {
    currentColor: "green",
    // decides which side goes. Starts as green, but is changed to red.
  };

  function activate() {
    if ($(this).hasClass("possibleMoveGreen")) {
      //  only can click in green possible spaces
      newActive(); // if you want to change which space is active
      if (
        // adds green into a possible green space
        gameState.currentColor === "green"
      ) {
        $(".board .cell").removeClass("active");
        $(this).addClass("active");
        $(this).addClass("splat");
        $(this).addClass("greenSplat");
        gameState.currentColor = "red"; // switches over to player red
        convert(); // looks at all around and converts to opposite color
      }
    } else if ($(this).hasClass("possibleJumpGreen")) {
      if (
        // adds green into a possible green space 2 away from active
        gameState.currentColor === "green"
      ) {
        $(".active").removeClass(["greenSplat", "splat"]);
        $(".board .cell").removeClass("active");
        $(this).addClass("active");
        $(this).addClass("splat");
        $(this).addClass("greenSplat");
        gameState.currentColor = "red"; // switches over to player red
        convert(); // looks at all around and converts to opposite color
      }
    }

    if ($(this).hasClass("possibleMoveRed")) {
      //  only can click in red possible spaces

      newActive(); // if you want to change which space is active
      if (gameState.currentColor === "red") {
        // adds red into a possible red space
        $(".board .cell").removeClass("active");
        $(this).addClass("active");
        $(this).addClass("splat");
        $(this).addClass("redSplat");
        gameState.currentColor = "green"; //  switches over to player green
        convert(); // looks at all around and converts to opposite color
      }
    } else if ($(this).hasClass("possibleJumpRed")) {
      if (
        // adds green into a possible green space
        gameState.currentColor === "red"
      ) {
        $(".active").removeClass(["redSplat", "splat"]);
        $(".board .cell").removeClass("active");
        $(this).addClass("active");
        $(this).addClass("splat");
        $(this).addClass("redSplat");
        gameState.currentColor = "green"; // switches over to player red
        convert(); // looks at all around and converts to opposite color
      }
    }
    count(); // counts all red, green, and empty cells
  }

  $(".board .cell").click(activate); // main click function of program.

  // ---------------------------------------------------------------------------------------------------------------------------

  // change active cell

  function newActive() {
    // changes active cell to another one of choice for both red and green's turn
    if (gameState.currentColor === "green" && $(this).hasClass("greenSplat")) {
      $(".board .cell").removeClass("active");
      $(this).addClass("active");
    } else if (
      gameState.currentColor === "red" &&
      $(this).hasClass("redSplat")
    ) {
      $(".board .cell").removeClass("active");
      $(this).addClass("active");
    }
    possibleCells(); // highlights possible moves for both side
    highlight(); // highlights the side who's turn it is
  }
  $(".board .cell").click(newActive); // anywhere in board can be clicked as long as passes all ifs in functions

  function possibleCells() {
    cell = $(".cell .active"); // active cell in html
    let cells = $(".cell"); // all cells
    let idArray = cellsAround(); // id for all cells around active one
    let jumpArray = jumpAround(); // id for cells 2 spaces around active
    let idNum = Number(document.getElementsByClassName("cell active")[0].id); // id of active cell
    let centerColor = $(`#${idNum}`).hasClass("greenSplat"); // true its green and false its red

    cells.removeClass("possibleMoveRed"); // removes red possible cells
    cells.removeClass("possibleMoveGreen"); // removes green removes green possible cells
    cells.removeClass("possibleJumpRed");
    cells.removeClass("possibleJumpGreen");

    for (let i = 0; i < idArray.length; i++) {
      num = idArray[i]; // every id for spaces around active cell
      currentCell = $(`#${num}`); // every individual id for spaces around active cell as a jQuery

      if (!currentCell.hasClass("splat") && centerColor === true) {
        currentCell.addClass("possibleMoveGreen"); // if green and green's turn add class which is styled in css
      } else if (!currentCell.hasClass("splat") && centerColor === false) {
        currentCell.addClass("possibleMoveRed"); // // if red and red's turn add class which is styled in css
      }
    }

    for (let i = 0; i < jumpArray.length; i++) {
      // color possible for cells 2 away from active
      num = jumpArray[i]; // every id 2 spaces from active
      currentCell = $(`#${num}`); //  every individual id 2 spaces around active cell as a jQuery

      if (!currentCell.hasClass("splat") && centerColor === true) {
        currentCell.addClass("possibleJumpGreen");
      } else if (!currentCell.hasClass("splat") && centerColor === false) {
        currentCell.addClass("possibleJumpRed");
      }
    }
  }

  function highlight() {
    // when player switch highlight's side who's turn it is.
    let cells = $(".cell");
    if (gameState.currentColor === "green") {
      $(".yourInfo").css("background-color", "green");
      $(".enemyInfo").css("background-color", "grey");
      cells.removeClass("possibleMoveRed"); // removes red when switch over
      cells.removeClass("possibleJumpRed");
    }
    if (gameState.currentColor === "red") {
      $(".enemyInfo").css("background-color", "red");
      $(".yourInfo").css("background-color", "grey");
      cells.removeClass("possibleMoveGreen"); // removes green when switched over
      cells.removeClass("possibleJumpGreen");
    }
  }

  // ---------------------------------------------------------------------------------------------------------------------------

  // Count board for both colors

  function count() {
    // loops through all 100 cells then puts into right array based off of classes
    const cell = $(".cell");
    green = [];
    red = [];
    empty = [];

    for (let i = 0; i < cell.length; i++) {
      let currentCell = cell[i];
      if ($(currentCell).hasClass("greenSplat")) {
        green.push(currentCell);
      } else if ($(currentCell).hasClass("redSplat")) {
        red.push(currentCell);
      } else {
        empty.push(currentCell);
      }
    }

    if (empty.length === 0 && green.length > red.length) {
      alert("Green Wins!");
    } else if (empty.length === 0 && green.length < red.length) {
      alert("Red Wins!");
    }
    // above displays win after empty array is zero.
    // below puts it into right place in html
    let greenTeam = $(".game .yourInfo .score h3");
    greenTeam.text(green.length);

    let redTeam = $(".game .enemyInfo .score h3");
    redTeam.text(red.length);
  }

  $("header button").click(function () {
    // when clicked gives directions on how to play.
    alert(
      'Globules is a game of skill and honor. Click on a Globule to activate it then either clone it to space next to the original cell or jump to a space 2 spaces away from original cell destroying the original. When you place a globule next to an enemies globule that enemies globule will be turned into one of yours! When a large amount of your globules gets converted to the opponents side it is customary to shout things like "Not my Globules" or "Oh no my Globs!." When all spaces are taken by a globule which ever side has the most wins.'
    );
  });

  $("footer button").click(function () {
    // resets board
    let cells = $(".cell");
    cells.removeClass("active");
    cells.removeClass("splat");
    cells.removeClass("redSplat");
    cells.removeClass("greenSplat");
    cells.removeClass("possibleMoveGreen");
    cells.removeClass("possibleMoveRed");

    $("#9, #90").addClass("redSplat");
    $("#9, #90").addClass("splat");

    $("#0").addClass("active");
    $("#0, #99").addClass("greenSplat");
    $("#0, #99").addClass("splat");

    let greenTeam = $(".game .yourInfo .score h3");
    greenTeam.text(0);

    let redTeam = $(".game .enemyInfo .score h3");
    redTeam.text(0);

    $(".yourInfo").css("background-color", "green");
    $(".enemyInfo").css("background-color", "grey");
    // starts it at greens turn
    gameState.currentColor = "green";
  });
}

globules();

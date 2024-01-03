function addInitialDataSets() {
  boardSquares.forEach(function(value) {
    if (document.getElementById(value).classList.length != 0) {
      document.getElementById(value).dataset.startsquare = document.getElementById(value).id;
      if (document.getElementById(value).classList[0].includes('stacking')) {
        document.getElementById(value).dataset.stackpiece = document.getElementById(value).classList[0];
      }
      if (document.getElementById(value).classList[0].includes('onemove')) {
        document.getElementById(value).dataset.onemove = 'false';
      }
    }
  });
}
function checkDuplicate() {
  boardSquares.forEach(function(value) {
    let piece = document.getElementById(value).classList[0];
    if (piece != null) {
      if (piece.includes('duplicate')) {
        console.log(piece)
        if (piece.includes('white')) {
          if (piece.includes('Rook')) {
            let otherPiece = playerPieces.white.rooks[0];
            if (otherPiece.includes('duplicate')) {
              otherPiece = playerPieces.white.rooks[1];
            }
            document.getElementById(value).classList.remove(piece);
            document.getElementById(value).classList.add(otherPiece);
          } else if (piece.includes('Knight')) {
            let otherPiece = playerPieces.white.knights[0];
            if (otherPiece.includes('duplicate')) {
              otherPiece = playerPieces.white.knights[1];
            }
            document.getElementById(value).classList.remove(piece);
            document.getElementById(value).classList.add(otherPiece);
          } else if (piece.includes('Bishop')) {
            let otherPiece = playerPieces.white.bishops[0];
            if (otherPiece.includes('duplicate')) {
              otherPiece = playerPieces.white.bishops[1];
            }
            document.getElementById(value).classList.remove(piece);
            document.getElementById(value).classList.add(otherPiece);
          } else if (piece.includes('Pawn')) {
            let otherPiece = playerPieces.white.pawns[0];
            if (otherPiece.includes('duplicate')) {
              otherPiece = playerPieces.white.pawns[1];
            }
            document.getElementById(value).classList.remove(piece);
            document.getElementById(value).classList.add(otherPiece);
          }
        } else if (piece.includes('black')) {
          if (piece.includes('Rook')) {
            let otherPiece = playerPieces.black.rooks[0];
            if (otherPiece.includes('duplicate')) {
              otherPiece = playerPieces.black.rooks[1];
            }
            document.getElementById(value).classList.remove(piece);
            document.getElementById(value).classList.add(otherPiece);
          } else if (piece.includes('Knight')) {
            let otherPiece = playerPieces.black.knights[0];
            if (otherPiece.includes('duplicate')) {
              otherPiece = playerPieces.black.knights[1];
            }
            document.getElementById(value).classList.remove(piece);
            document.getElementById(value).classList.add(otherPiece);
          } else if (piece.includes('Bishop')) {
            let otherPiece = playerPieces.black.bishops[0];
            if (otherPiece.includes('duplicate')) {
              otherPiece = playerPieces.black.bishops[1];
            }
            document.getElementById(value).classList.remove(piece);
            document.getElementById(value).classList.add(otherPiece);
          } else if (piece.includes('Pawn')) {
            let otherPiece = playerPieces.black.pawns[0];
            if (otherPiece.includes('duplicate')) {
              otherPiece = playerPieces.black.pawns[1];
            }
            document.getElementById(value).classList.remove(piece);
            document.getElementById(value).classList.add(otherPiece);
          }
        }
      }
    }
  });
}
function getPlayerPieces() {
  playerPieces.white.pawns.push(document.getElementById('g1').classList[0]);
  playerPieces.white.pawns.push(document.getElementById('g2').classList[0]);
  playerPieces.white.pawns.push(document.getElementById('g3').classList[0]);
  playerPieces.white.pawns.push(document.getElementById('g4').classList[0]);
  playerPieces.white.pawns.push(document.getElementById('g5').classList[0]);
  playerPieces.white.pawns.push(document.getElementById('g6').classList[0]);
  playerPieces.white.pawns.push(document.getElementById('g7').classList[0]);
  playerPieces.white.pawns.push(document.getElementById('g8').classList[0]);
  playerPieces.white.rooks.push(document.getElementById('h1').classList[0]);
  playerPieces.white.knights.push(document.getElementById('h2').classList[0]);
  playerPieces.white.bishops.push(document.getElementById('h3').classList[0]);
  playerPieces.white.queen = document.getElementById('h4').classList[0];
  playerPieces.white.king = document.getElementById('h5').classList[0];
  playerPieces.white.bishops.push(document.getElementById('h6').classList[0]);
  playerPieces.white.knights.push(document.getElementById('h7').classList[0]);
  playerPieces.white.rooks.push(document.getElementById('h8').classList[0]);

  playerPieces.black.pawns.push(document.getElementById('b1').classList[0]);
  playerPieces.black.pawns.push(document.getElementById('b2').classList[0]);
  playerPieces.black.pawns.push(document.getElementById('b3').classList[0]);
  playerPieces.black.pawns.push(document.getElementById('b4').classList[0]);
  playerPieces.black.pawns.push(document.getElementById('b5').classList[0]);
  playerPieces.black.pawns.push(document.getElementById('b6').classList[0]);
  playerPieces.black.pawns.push(document.getElementById('b7').classList[0]);
  playerPieces.black.pawns.push(document.getElementById('b8').classList[0]);
  playerPieces.black.rooks.push(document.getElementById('a1').classList[0]);
  playerPieces.black.knights.push(document.getElementById('a2').classList[0]);
  playerPieces.black.bishops.push(document.getElementById('a3').classList[0]);
  playerPieces.black.queen = document.getElementById('a4').classList[0];
  playerPieces.black.king = document.getElementById('a5').classList[0];
  playerPieces.black.bishops.push(document.getElementById('a6').classList[0]);
  playerPieces.black.knights.push(document.getElementById('a7').classList[0]);
  playerPieces.black.rooks.push(document.getElementById('a8').classList[0]);
}
function convertSquareToCoords (square) {
  let string;
  if (document.getElementById(square) != null) {
    string = document.getElementById(square).id;
    let preY = string.charAt(0);
    let y;
    if (preY == 'a') {
      y = 1;
    } else if (preY == 'b') {
      y = 2;
    } else if (preY == 'c') {
      y = 3;
    } else if (preY == 'd') {
      y = 4;
    } else if (preY == 'e') {
      y = 5;
    } else if (preY == 'f') {
      y = 6;
    } else if (preY == 'g') {
      y = 7;
    } else {
      y = 8;
    }
    let x = string.charAt(1);
    return [parseInt(y), parseInt(x)];
  }
}
function convertCoordsToSquare (coords) {
  let letter;
  let invalid = false;
  let number = coords[1];
  if (coords[0] == 1) {
    letter = 'a';
  } else if (coords[0] == 2) {
    letter = 'b';
  } else if (coords[0] == 3) {
    letter = 'c';
  } else if (coords[0] == 4) {
    letter = 'd';
  } else if (coords[0] == 5) {
    letter = 'e';
  } else if (coords[0] == 6) {
    letter = 'f';
  } else if (coords[0] == 7) {
    letter = 'g';
  } else if (coords[0] == 8) {
    letter = 'h';
  } else {
    invalid = true;
  }
  if (number > 8) {
    invalid = true;
  }
  if (!invalid) {
    return letter.concat(number);
  } else {
    return false;
  }
}
function checkJump (from, to, selected, prevSelect, test) {
  let inter = [from[0] - to[0], from[1] - to[1]];
  let originalInter = [from[0] - to[0], from[1] - to[1]];
  if (test) {
    console.log('Inter: ' + originalInter);
  }
  let startSquare = prevSelect;
  let allowJump = "undecided";
  if (selectClassList.contains('dematerialized')) {
    allowJump = true;
  } else {
    let jumpCoords = convertSquareToCoords(selected);
    if (jumpCoords == null) {
      allowJump = false;
    } else {
      let square;
      let Y = true;
      let X = true;
      if (from[0] == to[0]) {
        Y = false;
      }
      if (from[1] == to[1]) {
        X = false;
      }
      if (inter[0] <= 1 && inter[1] <= 1 && inter[0] >= -1 && inter[1] >= -1) {
        allowJump = true;
      } else {
        if (Y == true && X == false) {
          while (from[0] != to[0]) {
            if (from[0] >= to[0]) {
              from[0] = from[0] - 1;
              jumpCoords[0] = jumpCoords[0] + 1;
            } else {
              from[0] = from[0] + 1;
              jumpCoords[0] = jumpCoords[0] - 1;
            }
            square = convertCoordsToSquare(jumpCoords);
            if (square == startSquare) {
            } else {
              if (document.getElementById(square).classList.toString().includes('white') || document.getElementById(square).classList.toString().includes('black')) {
                if (document.getElementById(square).classList.contains('dematerialized')) {
                  getClassLists(square).forEach(function(value) {
                    if (!value.contains('dematerialized')) {
                      allowJump = false;
                    }
                  });
                } else if (!document.getElementById(square).classList.toString().includes('ghoul')) {
                  if (document.getElementById(startSquare).classList.toString().includes('ghost')) {
                    if (!document.getElementById(square).classList.toString().includes(moveColor)) {
                      allowJump = false;
                    }
                  } else {
                    allowJump = false;
                  }
                } else if (!document.getElementById(square).classList.toString().includes(moveColor) || document.getElementById(square).classList.length == 0) {
                  allowJump = false;
                }
              }
            }
          }
        } else if (Y == false && X == true) {
          while (from[1] != to[1]) {
            if (from[1] > to[1]) {
              from[1] = from[1] - 1;
              jumpCoords[1] = jumpCoords[1] + 1;
            } else {
              from[1] = from[1] + 1;
              jumpCoords[1] = jumpCoords[1] - 1;
            }
            square = convertCoordsToSquare(jumpCoords);
            if (square == startSquare) {
            } else {
              if (document.getElementById(square).classList.toString().includes('white') || document.getElementById(square).classList.toString().includes('black')) {
                if (document.getElementById(square).classList.contains('dematerialized')) {
                  getClassLists(square).forEach(function(value) {
                    if (!value.contains('dematerialized')) {
                      allowJump = false;
                    }
                  });
                } else if (!document.getElementById(square).classList.toString().includes('ghoul')) {
                  if (document.getElementById(startSquare).classList.toString().includes('ghost')) {
                    if (!document.getElementById(square).classList.toString().includes(moveColor)) {
                      allowJump = false;
                    }
                  } else {
                    allowJump = false;
                  }
                } else if (!document.getElementById(square).classList.toString().includes(moveColor) || document.getElementById(square).classList.length == 0) {
                  allowJump = false;
                }
              }
            }
          }
        } else if (Y == true && X == true) {
          if (inter[0] != inter[1] && -inter[0] != inter[1] && inter[0] != -inter[1]) {
            //Its a knights move (we dont bother checking jump)
            console.log('Knights MOVE');
            allowJump = true;
          } else {
            while (from[1] != to[1]) {
              if (from[1] > to[1] && from[0] > to[0]) {
                from[1] = from[1] - 1;
                from[0] = from[0] - 1
                jumpCoords[1] = jumpCoords[1] + 1;
                jumpCoords[0] = jumpCoords[0] + 1;
              } else if (from[1] < to[1] && from[0] < to[0]) {
                from[1] = from[1] + 1;
                from[0] = from[0] + 1
                jumpCoords[1] = jumpCoords[1] - 1;
                jumpCoords[0] = jumpCoords[0] - 1;
              } else if (from[1] < to[1] && from[0] > to[0]) {
                from[1] = from[1] + 1;
                from[0] = from[0] - 1
                jumpCoords[1] = jumpCoords[1] - 1;
                jumpCoords[0] = jumpCoords[0] + 1;
              } else if (from[1] > to[1] && from[0] < to[0]) {
                from[1] = from[1] - 1;
                from[0] = from[0] + 1
                jumpCoords[1] = jumpCoords[1] + 1;
                jumpCoords[0] = jumpCoords[0] - 1;
              }
              square = convertCoordsToSquare(jumpCoords);
              if (square == startSquare) {
              } else {
                if (document.getElementById(square).classList.toString().includes('white') || document.getElementById(square).classList.toString().includes('black')) {
                  if (document.getElementById(square).classList.contains('dematerialized')) {
                    getClassLists(square).forEach(function(value) {
                      if (!value.contains('dematerialized')) {
                        allowJump = false;
                      }
                    });
                  } else if (!document.getElementById(square).classList.toString().includes('ghoul')) {
                    if (document.getElementById(startSquare).classList.toString().includes('ghost')) {
                      if (!document.getElementById(square).classList.toString().includes(moveColor)) {
                        allowJump = false;
                      }
                    } else {
                      allowJump = false;
                    }
                  } else if (!document.getElementById(square).classList.toString().includes(moveColor) || document.getElementById(square).classList.length == 0) {
                    allowJump = false;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  if (allowJump == 'undecided') {
    allowJump = true;
  }
  return allowJump;
}
let toTable = false;
function movePiece (s, ps, sc, realMove, notFromDummyCheck) {
  toTable = false;
  let select = document.getElementById(s);
  let prevSelect = document.getElementById(ps);
  let mainClass = selectClass;
  if (select.classList.contains('enPassant')) {
    console.log('En Passant');
    let coords = convertSquareToCoords(s);
    let deathSquare;
    if (moveColor == 'white') {
      deathSquare = add(coords, [1,0]);
    } else {
      deathSquare = add(coords, [-1,0]);
    }
    document.getElementById(convertCoordsToSquare(deathSquare)).classList.remove(...document.getElementById(convertCoordsToSquare(deathSquare)).classList);
  }
  let theOtherColor;
  if (moveColor == 'white') {
    theOtherColor = 'black';
  } else {
    theOtherColor = 'white';
  }
  if (fromTable) {
    //DO FROM TABLE STUFF
    removePieceStack(ps, prevSelectClass);
  }
  //Atomic Special Case
  if (getClassLists(ps).toString().includes('atomic') && select.classList.toString().includes(theOtherColor)) {
    let doExplode = true;
    specialMoves.explosionRadius.forEach(function(value) {
      let coords = convertSquareToCoords(s);
      let move = add(coords, value);
      if (document.getElementById(convertCoordsToSquare(move)) != null) {
        if (document.getElementById(convertCoordsToSquare(move)).classList.toString().includes('defuser')) {
          doExplode = false;
        }
      }
    });
    if (doExplode) {
      specialMoves.explosionRadius.forEach(function(value) {
        let coords = convertSquareToCoords(s);
        let move = add(coords, value);
        if (document.getElementById(convertCoordsToSquare(move)) != null) {
          document.getElementById(convertCoordsToSquare(move)).classList.remove(...document.getElementById(convertCoordsToSquare(move)).classList);
        }
      });
      setTimeout(function() {
        select.classList.remove(...select.classList);
      }, 100);
    }
  }
  //Reverse Atomic Special Case
  if (getClassLists(s).toString().includes('reverseAtomic')) {
    let doExplode = true;
    specialMoves.reverseExplosionRadius.forEach(function(value) {
      let coords = convertSquareToCoords(s);
      let move = add(coords, value);
      if (document.getElementById(convertCoordsToSquare(move)) != null) {
        if (document.getElementById(convertCoordsToSquare(move)).classList.toString().includes('defuser')) {
          doExplode = false;
        }
      }
    });
    if (doExplode) {
      specialMoves.explosionRadius.forEach(function(value) {
        let coords = convertSquareToCoords(s);
        let move = add(coords, value);
        if (document.getElementById(convertCoordsToSquare(move)) != null) {
          document.getElementById(convertCoordsToSquare(move)).classList.remove(...document.getElementById(convertCoordsToSquare(move)).classList);
        }
      });
      setTimeout(function() {
        select.classList.remove(...select.classList);
      }, 100);
    }
  }
  //Stacking Special Case
  if (getClassLists(ps).toString().includes('stacking')) {
    let pushMoves;
    let pawn = false;
    if (selectClass == 'whitePawn_stacking') {
      pushMoves = moves.whitePawn_stacking;
      pawn = true;
    } else if (selectClass == 'blackPawn_stacking') {
      pushMoves = moves.blackPawn_stacking;
      pawn = true;
    } else if (selectClass == 'blackRook_stacking' || selectClass == 'whiteRook_stacking') {
      pushMoves = moves.rook_stacking;
    } else if (selectClass == 'blackBishop_stacking' || selectClass == 'whiteBishop_stacking') {
      pushMoves = moves.bishop_stacking;
    } else if (selectClass == 'blackKnight_stacking' || selectClass == 'whiteKnight_stacking') {
      pushMoves = moves.knight_stacking;
    } else if (selectClass == 'blackKing_stacking' || selectClass == 'whiteKing_stacking') {
      pushMoves = moves.king_stacking;
    } else if (selectClass == 'blackKing_stacking' || selectClass == 'whiteKing_stacking') {
      pushMoves = moves.king_stacking;
    }
    getClassLists(s).forEach(function(value) {
      console.log(value);
      let stackPiece = value[0];
      if (stackPiece == 'dotted') {
        stackPiece = value[1];
      }
      console.log(stackPiece)
      if (stackPiece != null && stackPiece != 'dotted') {
        getPieceInfo(stackPiece);
        let pieceMoves = pieceInfo.checkCheckmate.possibleMoves;
        console.log(pieceMoves);
        if (stackPiece.includes('pawn') || stackPiece.includes('Pawn')) {
          if (pawn) {
            pieceMoves.one.forEach(function(value) {
              pushMoves.one.push(value);
            });
            pieceMoves.diagonal.forEach(function(value) {
              pushMoves.diagonal.push(value);
            });
          } else {
            pieceMoves.one.forEach(function(value) {
              pushMoves.push(value);
            });
            pieceMoves.diagonal.forEach(function(value) {
              pushMoves.push(value);
            });
          }
        } else {
          if (pawn) {
            pieceMoves.forEach(function(value) {
              pushMoves.one.push(value);
              pushMoves.diagonal.push(value);
            });
          } else {
            pieceMoves.forEach(function(value) {
              pushMoves.push(value);
            });
          }
        }
      }
    });
  }
  //Infinite Special Case
  if (getClassLists(s).toString().includes('infinite')) {
    //Move Infinite Piece Back to Starting Square
    let startSquare = select.dataset.startsquare;
    console.log(startSquare);
    if (document.getElementById(startSquare).classList.length == 0 || document.getElementById(startSquare).classList.length == 1 && document.getElementById(startSquare).classList.contains('dotted')) {
      document.getElementById(startSquare).classList.add(select.classList[0]);
      document.getElementById(startSquare).dataset.startsquare = document.getElementById(s).dataset.startsquare;
      document.getElementById(s).dataset.startsquare = '';
    }
  }
  //Onemove Special Case
  if (getClassLists(ps).toString().includes('onemove')) {
    let moved = document.getElementById(ps).dataset.onemove;
    if (moved == 'false') {
      setTimeout(function() { document.getElementById(s).dataset.onemove = 'true' }, 100);
    }
  }
  //Fragile Special Case
  if (getClassLists(ps).toString().includes('fragile')) {
    let random = Math.floor(Math.random() * 10);
    if (random == 0) {
      setTimeout(function() {
        removePieceStack(s, selectClass);
      }, 100);
    }
  }
  //Multiple Pieces Per Square?? ?? ?? ? ? ?
  if (select.classList.contains('dematerialized') || prevSelectClassList.contains('dematerialized') || select.classList.toString().includes('crowding') && crowding || prevSelectClassList.toString().includes('crowding') && crowding) {
    let extraClass = '';
    if (prevSelectClassList.contains('dematerialized')) {
      extraClass = 'dematerialized';
    }
    let acceptableMove = true;
    let squarePiece = document.getElementById(selected).classList[0];
    if (squarePiece == 'dotted' || squarePiece == 'dematerialized') {
      squarePiece = document.getElementById(selected).classList[1];
      if (squarePiece == 'dotted' || squarePiece == 'dematerialized') {
        squarePiece = document.getElementById(selected).classList[2];
      }
    }
    let movePiece = selectClass;
    if (squarePiece == 'dematerialized') {
      squarePiece = document.getElementById(selected).classList[1];
    }
    let amogyUS = null;
    if (document.getElementById(selected).getElementsByClassName('pieceContainer')[0] != null) {
      amogyUS = document.getElementById(selected).getElementsByClassName('pieceContainer')[0].getElementsByTagName('td');
    }
    if (amogyUS != null) {
      let a = amogyUS.length;
      if (a >= 1) {
        let squarePieceArray = document.getElementById(selected).getElementsByClassName('pieceContainer')[0].getElementsByTagName('td');
        let squarePieceArray2 = convertHTMLCollectionToArray(squarePieceArray);
        squarePieceArray2.forEach(function(value) {
          let element = document.querySelector(value.tagName + '.' + value.classList[0]);
          if (!element.classList.contains('dematerialized') && !element.classList.toString().includes('crowding')) {
            acceptableMove = false;
            if (validatePieceStackMove(selected, prevSelectClassList) == true) {
              acceptableMove = true;
            } else if (validatePieceStackMove(selected, prevSelectClassList) == 'kill') {
              killPieceStack(selected);
              acceptableMove = true;
            }
          }
        });
        if (acceptableMove) {
          addPieceStack(selected, movePiece, extraClass);
          toTable = true;
        }
      } else {
        createPieceStack(selected, movePiece, extraClass);
        toTable = true;
      }
    } else {
      if (document.getElementById(selected).classList.length == 1 || document.getElementById(selected).classList.length == 2 && document.getElementById(selected).classList.contains('dotted')) {
        console.log(document.getElementById(selected).classList);
        if (prevSelectClassList.contains('dematerialized') || prevSelectClassList.toString().includes('crowding')) {
          if (document.getElementById(selected).classList.length == 1 && document.getElementById(selected).classList.contains('dotted')) {
            document.getElementById(s).classList.remove(...document.getElementById(s).classList);
            if (mainClass != null) document.getElementById(s).classList.add(mainClass);
            document.getElementById(ps).classList.remove(mainClass);
            if (prevSelectClassList.contains('dematerialized')) {
              document.getElementById(s).classList.add('dematerialized');
            }
          } else {
            createPieceStack(selected, movePiece, extraClass);
            toTable = true;
          }
        } else {
          document.getElementById(s).classList.remove(...document.getElementById(s).classList);
          if (mainClass != null) document.getElementById(s).classList.add(mainClass);
          document.getElementById(ps).classList.remove(mainClass);
          if (prevSelectClassList.contains('dematerialized')) {
            document.getElementById(s).classList.add('dematerialized');
          }
        }
      } else {
        createPieceStack(selected, movePiece, extraClass);
        toTable = true;
      }
    }
    if (acceptableMove) {
      document.getElementById(ps).classList.remove(sc);
    } else {
      realMove = false;
    }
  } else {
    if (moveColor == 'white' && getClassLists(s).toString().includes('black') || moveColor == 'black' && getClassLists(s).toString().includes('white')) {
      let sclasslist = document.getElementById(s).classList;
      if (document.getElementById(ps).classList.toString().includes('stacking')) {
        document.getElementById(s).dataset.stackpiece = ',' + document.getElementById(ps).dataset.stackpiece + ',' + sclasslist[0] + ',' + document.getElementById(s).dataset.stackpiece + ',';
        document.getElementById(ps).dataset.stackpiece = '';
      }
      killPieceStack(s);
      document.getElementById(s).classList.remove(...document.getElementById(s).classList);
      if (mainClass != null) {
        document.getElementById(s).classList.add(mainClass);
      }
      document.getElementById(ps).classList.remove(mainClass);
      document.getElementById(s).dataset.startsquare = document.getElementById(ps).dataset.startsquare;
      document.getElementById(ps).dataset.startsquare = '';
      document.getElementById(s).dataset.cloned = document.getElementById(ps).dataset.cloned;
      document.getElementById(ps).dataset.cloned = '';
      document.getElementById(s).dataset.onemove = document.getElementById(ps).dataset.onemove;
      document.getElementById(ps).dataset.onemove = '';
      //ADD DATASET STUFF FOR STACKING SQUARES TOO
    } else if (document.getElementById(s).classList.length == 0 || document.getElementById(s).classList.contains('dotted') && document.getElementById(s).classList.length == 1) {
      document.getElementById(s).classList.remove(...document.getElementById(s).classList);
      if (mainClass != null) {
        document.getElementById(s).classList.add(mainClass);
      }
      if (document.getElementById(ps).classList.toString().includes('stacking')) {
        document.getElementById(s).dataset.stackpiece = ',' + document.getElementById(ps).dataset.stackpiece + ',';
        document.getElementById(ps).dataset.stackpiece = '';
      }
      document.getElementById(ps).classList.remove(mainClass);
      document.getElementById(s).dataset.startsquare = document.getElementById(ps).dataset.startsquare;
      document.getElementById(ps).dataset.startsquare = '';
      document.getElementById(s).dataset.cloned = document.getElementById(ps).dataset.cloned;
      document.getElementById(ps).dataset.cloned = '';
      document.getElementById(s).dataset.onemove = document.getElementById(ps).dataset.onemove;
      document.getElementById(ps).dataset.onemove = '';
      //ADD DATASET STUFF FOR STACKING SQUARES TOO
    }
  }
  let a = document.getElementById(s);
  let color;
  let otherColor;
  if (a.classList.toString().includes('white')) {
    color = 'black';
    otherColor = 'white';
  } else if (a.classList.toString().includes('black')) {
    color = 'white';
    otherColor = 'black';
  }
  if (realMove) {
    checkCheckWhiteAndBlack();
    switchMoveColor();
    if (checkCheckmate(moveColor)) {
      endGame();
    }
  }
  if (notFromDummyCheck) {
    if (document.getElementsByClassName(bkingclass)[0] == null) {
      endGame('black');
    } else if (document.getElementsByClassName(wkingclass)[0] == null) {
      endGame('white');
    }
  }
  //Phantom Dematerialize
  if (prevSelectClassList.contains('dematerialized')) {
    document.getElementById(ps).classList.remove('dematerialized');
    if (!toTable) {
      setTimeout(function() {document.getElementById(s).classList.add('dematerialized');}, 100);
    }
  }
  //Moved Primary Piece From Table
  let includesTable = document.getElementById(ps).getElementsByTagName('table')[0];
  if (includesTable != null) {
    if (!includesTable.classList.contains('arrowsContainer')) {
      if (includesTable.classList.contains('arrowsContainer')) {
        includesTable = document.getElementById(ps).getElementsByTagName('table')[1];
      }
      movePieceOffStack(ps);
    }
  }
}
function createPieceStack(value, piecePush, extraClass) {
  let square = document.getElementById(value);
  let classlist = square.classList;
  let pieceContainer = document.createElement('table');
  pieceContainer.classList.add('pieceContainer');
  pieceContainer.setAttribute('cellspacing', '0');
  let addPiece = document.createElement('td');
  pieceContainer.appendChild(addPiece);
  addPiece.classList.add(piecePush);
  if (extraClass != '') {
    addPiece.classList.add(extraClass);
  }
  square.appendChild(pieceContainer);
  /*pieceContainer.addEventListener('click', function() {
    expandPieceStack(value);
  });
  addPiece.addEventListener('click', function() {
    expandPieceStack(value);
  });*/
}
function addPieceStack(value, piecePush, extraClass) {
  let pieceContainer = document.getElementById(value).getElementsByTagName('table')[1];
  if (pieceContainer == null || pieceContainer.classList.contains('arrowsContainer')) {
    pieceContainer = document.getElementById(value).getElementsByTagName('table')[0];
  }
  let addPiece = document.createElement('td');
  pieceContainer.appendChild(addPiece);
  addPiece.classList.add(piecePush);
  if (extraClass != '') {
    addPiece.classList.add(extraClass);
  }
  /*addPiece.addEventListener('click', function() {
    expandPieceStack(value);
  });*/
}
function removePieceStack(value, piecePush) {
  let pieceContainer = document.getElementById(value).getElementsByTagName('table')[0];
    if (pieceContainer) {
      if (pieceContainer.classList.contains('arrowsContainer')) {
      pieceContainer = document.getElementById(value).getElementsByTagName('table')[1];
      if (pieceContainer.classList.contains('arrowsContainer')) {
        pieceContainer = document.getElementById(value).getElementsByTagName('table')[2];
      }
    }
    let removePiece = pieceContainer.getElementsByClassName(piecePush)[0];
    //console.log(pieceContainer.children[0].children)
    console.log(pieceContainer.children)
    if (removePiece != null) {
      removePiece.remove();
    }
    if (pieceContainer.children.length == 0) {
      pieceContainer.remove();
    }
  } else {
    document.getElementById(value).classList.remove(piecePush);
  }
}
function movePieceOffStack(value) {
  let square = document.getElementById(value);
  let pieceContainer = document.getElementById(value).getElementsByTagName('table')[0];
  if (pieceContainer.classList.contains('arrowsContainer')) {
    pieceContainer = document.getElementById(value).getElementsByTagName('table')[1];
    if (pieceContainer.classList.contains('arrowsContainer')) {
      pieceContainer = document.getElementById(value).getElementsByTagName('table')[2];
    }
  }
  let isPrimaryPiece = true;
  if (square.classList.length == 0) {
    isPrimaryPiece = false;
  } else if (square.classList.contains('dotted') && square.classList.length == 1) {
    isPrimaryPiece = false;
  }
  if (!isPrimaryPiece) {
    let pieceToMove = document.getElementById(value).getElementsByClassName('pieceContainer')[0].getElementsByTagName('td')[0].classList[0];
    //let pieceToMove = getTotalPieces(value)[0];
    square.classList.add(pieceToMove);
    if (document.getElementById(value).getElementsByClassName('pieceContainer')[0].getElementsByTagName('td')[0].classList.contains('dematerialized')) {
      square.classList.add('dematerialized');
    }
    removePieceStack(value, pieceToMove);
  }
}
function killPieceStack(value, dontKill) {
  let square = document.getElementById(value);
  let originalPiece = square.classList;
  if (!originalPiece.contains('dematerialized')) {
    if (!originalPiece.contains(dontKill)) {
      originalPiece.remove(...originalPiece);
      if (dontKill != null) {
        movePieceOffStack(value);
      }
    }
  }
  if (square.getElementsByTagName('table').length != 0) {
    let pieceContainer = square.getElementsByTagName('table')[0];
    if (pieceContainer != null) {
      if (pieceContainer.classList.contains('arrowsContainer')) {
        pieceContainer = square.getElementsByTagName('table')[1];
      }
      let children = pieceContainer.children;
      let childrenArray = convertHTMLCollectionToArray(children);
      if (childrenArray.length != 0) {
        childrenArray.forEach(function(value) {
          if (!value.classList.contains('dematerialized')) {
            if (!value.classList.contains(dontKill)) {
              value.remove();
            }
          }
        });
      }
    }
  }
}
let theChildren;
function expandPieceStack(value) {
  document.getElementById('expandPieceStack').innerHTML = '';
  let pieceContainer = document.getElementById(value).getElementsByTagName('table')[0];
  let children = pieceContainer.children;
  theChildren = [].slice.call(children);
  theChildren.forEach(function(value) {
    let element = document.querySelector(value.tagName + '.' + value.classList[0]);
    if (element != null) {
      let classlist = element.classList;
      let element2 = document.createElement('td');
      element2.classList.add(...classlist)
      document.getElementById('expandPieceStack').appendChild(element2);
    }
  });
}
function getTotalPieces(value) {
  let pieceArray = [];
  let square = document.getElementById(value);
  let originalPiece = square.classList[0];
  if (originalPiece == 'dematerialized' || originalPiece == 'dotted' || originalPiece == null) {
    originalPiece = square.classList[1];
    if (originalPiece == 'dematerialized' || originalPiece == 'dotted' || originalPiece == null) {
      originalPiece = square.classList[2];
    }
  }
  if (originalPiece != null) {
    pieceArray.push(originalPiece);
  }
  if (square.getElementsByTagName('table').length != 0) {
    let pieceContainer = square.getElementsByTagName('table')[0];
    if (pieceContainer != null) {
      if (pieceContainer.classList.contains('arrowsContainer')) {
        pieceContainer = square.getElementsByTagName('table')[1];
      }
    }
    let children = pieceContainer.children;
    let childrenArray = convertHTMLCollectionToArray(children);
    childrenArray.forEach(function(value) {
      let mainClass = value.classList[0];
      if (mainClass == 'dematerialized' || mainClass == 'dotted') {
        mainClass = value.classList[1];
        if (mainClass == 'dematerialized' || mainClass == 'dotted') {
          mainClass = value.classList[2];
        }
      }
      pieceArray.push(mainClass);
    });
  }
  return pieceArray;
}
function getClassLists(value) {
  let pieceArray = [];
  let square = document.getElementById(value);
  if (square != null) {
    let originalPiece = square.classList;
    if (originalPiece != null) {
      pieceArray.push(originalPiece);
    }
    if (square.getElementsByTagName('table').length != 0) {
      let pieceContainer = square.getElementsByTagName('table')[0];
      if (pieceContainer != null) {
        if (pieceContainer.classList.contains('arrowsContainer')) {
          pieceContainer = square.getElementsByTagName('table')[1];
        }
        if (pieceContainer != null) {
          let children = pieceContainer.children;
          let childrenArray = convertHTMLCollectionToArray(children);
          childrenArray.forEach(function(value) {
            let mainClass = value.classList;
            pieceArray.push(mainClass);
          });
        }
      }
    }
    return pieceArray;
  }
}
function validatePieceStackMove(value, pieceClassList) {
  let output = false;
  let classes = getClassLists(value);
  let i = 0;
  let length = classes.length;
  classes.forEach(function(value2) {
    if (value2.contains('dematerialized')) {
      i = i + 1;
    }
  });
  if (pieceClassList.contains('dematerialized')) {
    output = true
  } else if (length - i != 0) {
    classes.forEach(function(value2) {
      if (!value2.contains('dematerialized')) {
        if (pieceClassList.toString().includes('white') && value2.toString().includes('black') || pieceClassList.toString().includes('black') && value2.toString().includes('white')) {
          output = 'kill';
        }
      }
    });
  } else {
    output = true;
  }
  return output;
}
function switchMoveColor() {
  if (moveColor == 'white') {
    moveColor = 'black';
  } else {
    moveColor = 'white';
  }
}
function convertHTMLCollectionToArray(html) {
  return [].slice.call(html);
}
function checkKillPawn (coords, array, theMoveColor) {
  if (theMoveColor == null || theMoveColor == "") {
    theMoveColor = moveColor;
  }
  let endMoves = [];
  let includesColor;
  let otherColor;
  if (theMoveColor == 'white') {
    includesColor = 'black';
    otherColor = 'white';
  } else {
    includesColor = 'white';
    otherColor = 'black';
  }
  array.forEach(function(value) {
    let move = add(coords, value);
    let square = document.getElementById(convertCoordsToSquare(move));
    if (square == null) {
    } else {
      if (square.classList.toString().includes(includesColor)) {
        endMoves.push(move);
      } else if (square.classList.toString().includes(otherColor) && document.getElementById(selected).classList.toString().includes(otherColor) && document.getElementById(selected).classList.toString().includes('murderous')) {
        //Murderous Piece (IDK IF THIS ACTUALLY WORKS)
        endMoves.push(move);
      }
    }
  });
  return endMoves;
}
function checkEnPassant (coords, color) {
  let enpassantrow;
  let enpassantmoves = [];
  let pawnkill = [];
  let enPassant = [];
  let otherColor;
  if (color == 'white') {
    enpassantrow = 4;
    pawnkill = [[-1,1], [-1,-1]];
    otherColor = 'black';
  } else {
    enpassantrow = 5;
    pawnkill = [[1,1], [1,-1]];
    otherColor = 'white';
  }
  pawnkill.forEach(function(value) {
    if (coords[0] == enpassantrow) {
      let move = add(coords, value);
      let toSquare = convertCoordsToSquare(move);
      if(document.getElementById(toSquare) != null) {
        let classlist = document.getElementById(toSquare).classList.toString();
        if (!classlist.includes('white') && !classlist.toString().includes('black')) {
          enpassantmoves.push(value);
        }
      }
    }
  });
  enpassantmoves.forEach(function(value) {
    let check;
    if (value[1] > 0) {
      check = add(coords, [0,1]);
    } else {
      check = add(coords, [0,-1]);
    }
    if (document.getElementById(convertCoordsToSquare(check)).classList.toString().includes(otherColor) || document.getElementById(convertCoordsToSquare(check)).classList.toString().includes('pawn') || document.getElementById(convertCoordsToSquare(check)).classList.toString().includes('Pawn')) {
      enPassant.push(add(coords,value));  
    }
  });
  enPassant.forEach(function(value) {
    let a = convertCoordsToSquare(value);
    document.getElementById(a).classList.add('enPassant');
    document.getElementById('board').addEventListener('click', function() {
      document.getElementById(a).classList.remove('enPassant');
    })
    if (selectNum == 0) dot(value);
  })
  return enPassant;
}
function checkCastle(to, color, side) {
  if (to == '') {
    if (color == 'white') {
      if (side == 'king') {
        to = [8,7];
      } else if (side == 'queen') {
        to = [8,3];
      }
    } else if (color == 'black') {
      if (side == 'king') {
        to = [1,7];
      } else if (side == 'queen') {
        to = [1,3];
      }
    }
  }
  let rookSquare;
  if (color == 'white') {
    if (side == 'king') {
      rookSquare = 'h8';
    } else if (side == 'queen') {
      rookSquare = 'h3';
    }
  } else if (color == 'black') {
    if (side == 'king') {
      rookSquare = 'a8';
    } else if (side == 'queen') {
      rookSquare = 'a3';
    }
  }
  if (color == 'white') {
    if (convertCoordsToSquare(to) == 'h3' || convertCoordsToSquare(to) == 'h7') {
      if (king.white.move) {
        return false;
      } else {
        if (side == 'king') {
          if (king.white.rkmove == false) {
            if (document.getElementById('h6').classList.toString().includes('white') || document.getElementById('h6').classList.toString().includes('black')) {
              return false;
            } else {
              if (document.getElementById(rookSquare).classList.toString().includes('Rook') && document.getElementById(rookSquare).classList.toString().includes('white')) {
                return true;
              } else {
                return false;
              }
            }
          }
        } else if (side == 'queen') {
          if (king.white.rqmove == false) {
            if (document.getElementById('h4').classList.toString().includes('white') || document.getElementById('h4').classList.toString().includes('black') || document.getElementById('h2').classList.toString().includes('white') || document.getElementById('h2').classList.toString().includes('black')) {
              return false;
            } else {
              if (document.getElementById(rookSquare).classList.toString().includes('Rook') && document.getElementById(rookSquare).classList.toString().includes('white')) {
                return true;
              } else {
                return false;
              }
            }
          }
        }
      }
    }
  } else if (color == 'black') {
    if (convertCoordsToSquare(to) == 'a3' || convertCoordsToSquare(to) == 'a7') {
      if (king.black.move) {
        return false;
      } else {
        if (side == 'king') {
          if (king.black.rkmove == false) {
            if (document.getElementById('a6').classList.toString().includes('white') || document.getElementById('a6').classList.toString().includes('black')) {
              return false;
            } else {
              if (document.getElementById(rookSquare).classList.toString().includes('Rook') && document.getElementById(rookSquare).classList.toString().includes('black')) {
                return true;
              } else {
                return false;
              }
            }
          }
        } else if (side == 'queen') {
          if (king.black.rqmove == false) {
            if (document.getElementById('a4').classList.toString().includes('white') || document.getElementById('a4').classList.toString().includes('black') || document.getElementById('a2').classList.toString().includes('white') || document.getElementById('a2').classList.toString().includes('black')) {
              return false;
            } else {
              if (document.getElementById(rookSquare).classList.toString().includes('Rook') && document.getElementById(rookSquare).classList.toString().includes('black')) {
                return true;
              } else {
                return false;
              }
            }
          }
        }
      }
    }
  }
}
function getPiecesFromDataSet(dataset) {
  if (dataset != null) {
    let x = dataset.replaceAll('undefined', ',');
    let y = x.split(',');
    let z = [];
    y.forEach(function(value) {
      if (value != '') {
        z.push(value);
      }
    });
    return z;
  } else {
    return [selectClass];
  }
}
function add (a,b) {
  let newA = a[0] + b[0];
  let newB = a[1] + b[1];
  return [newA, newB];
}
function subtract (a,b) {
  let newA = a[0] - b[0];
  let newB = a[1] - b[1];
  return [newA, newB];
}
function includesWhiteOrBlack (item) {
  if (document.getElementById(item) != null) {
    if (document.getElementById(item).classList.toString().includes('white') || document.getElementById(item).classList.toString().includes('black')) {
      return true;
    } else {
      return false;
    }
  }
}
function includesColor (color, item) {
  if (document.getElementById(item) != null) {
    if (color == 'white') {
      if (document.getElementById(item).classList.toString().includes('white')) {
        return true;
      } else {
        return false;
      }
    } else if (color == 'black') {
      if (document.getElementById(item).classList.toString().includes('black')) {
        return true;
      } else {
        return false;
      }
    }
  }
}
function includesWhite (item) {
  if (document.getElementById(item) != null) {
    if (document.getElementById(item).classList.toString().includes('white')) {
      return true;
    } else {
      return false;
    }
  }
}
function includesBlack (item) {
  if (document.getElementById(item) != null) {
    if (document.getElementById(item).classList.toString().includes('black')) {
      return true;
    } else {
      return false;
    }
  }
}
function removeEventListeners(array) {
  array.forEach(function(value) {
    document.getElementById(value).replaceWith(document.getElementById(value).cloneNode(true));
  });
}
function createClone(square, piece, pieceSquare) {
  console.log(square)
  console.log(piece)
  let subPiece = null;
  if (piece == 'whitePawn_cloning') {
    subPiece = 'whitePawn';
  } else if (piece == 'whiteKnight_cloning') {
    subPiece = 'whiteKnight';
  } else if (piece == 'whiteBishop_cloning') {
    subPiece = 'whiteBishop';
  } else if (piece == 'whiteRook_cloning') {
    subPiece = 'whiteRook';
  } else if (piece == 'blackPawn_cloning') {
    subPiece = 'blackPawn';
  } else if (piece == 'blackKnight_cloning') {
    subPiece = 'blackKnight';
  } else if (piece == 'blackBishop_cloning') {
    subPiece = 'blackBishop';
  } else if (piece == 'blackRook_cloning') {
    subPiece = 'blackRook';
  }
  if (document.getElementById(pieceSquare).dataset.cloned != 'true') {
    if (subPiece != null) {
      document.getElementById(square).classList.add(subPiece);
      document.getElementById(pieceSquare).dataset.cloned = 'true';
      switchMoveColor();
    }
  }
}
function dot(value) {
  let bg = document.getElementById(convertCoordsToSquare(value));
  if (bg != null) {
    if (bg.classList.contains('dematerialized')) {
      bg.classList.remove('dematerialized');
      setTimeout(function() {
        bg.classList.add('dematerialized');
      }, 100);
    }
    bg.style.backgroundColor = 'rgba(0, 95, 25, 0.8)';
    bg.classList.add('dotted');
    setTimeout(function() {
      bg.classList.add('dotted');
      bg.style.backgroundColor = 'rgba(0, 95, 25, 0.8)';
    }, 100);
    function e () {
      board.removeEventListener('click', e);
      document.getElementById(convertCoordsToSquare(value)).style.background = '';
      bg.classList.remove('dotted');
    }
    board.addEventListener('click', e);
  }
}
function equalArray(a,b) { 
  return !!a && !!b && !(a<b || b<a);
}
function undot() {
  document.getElementById('board').click();
}
function isArrayInArray(array, item) {
  var string = JSON.stringify(item);
 
  var contains = array.some(function(a){
    return JSON.stringify(a) === string;
  });
  return contains;
}
function dummyMoveCheck(from, to) {
  if (document.getElementById(convertCoordsToSquare(from)) != null && document.getElementById(convertCoordsToSquare(to)) != null) {
    let s = convertCoordsToSquare(to);
    let ps = convertCoordsToSquare(from);
    let mainClass = document.getElementById(s).classList[0];
    if (mainClass == 'dematerialized' || mainClass == 'dotted') {
      mainClass = document.getElementById(s).classList[1];
      if (mainClass == 'dematerialized' || mainClass == 'dotted') {
        mainClass = document.getElementById(s).classList[2];
      }
    }
    let scl = getClassLists(s);
    let sc = document.getElementById(ps).classList[0];
    document.getElementById(s).classList.remove(mainClass);
    document.getElementById(s).classList.add(sc);
    let addDematerialized = false;
    if (!document.getElementById(ps).classList.contains('dematerialized') && document.getElementById(s).classList.contains('dematerialized')) {
      document.getElementById(s).classList.remove('dematerialized');
      addDematerialized = true;
    }
    document.getElementById(ps).classList.remove(sc);
    let color;
    let check;
    function reverse() {
      document.getElementById(s).classList.remove(mainClass);
      if (sc != null) document.getElementById(ps).classList.add(sc);
      document.getElementById(s).classList.remove(sc);
      if (mainClass != null) document.getElementById(s).classList.add(mainClass);
      if (addDematerialized) document.getElementById(s).classList.add('dematerialized');
    }
    dummyCheckCheckWhiteAndBlack();
    if (moveColor == 'white') {
      color = 'black';
      check = dummyWhiteInCheck;
    } else {
      color = 'white';
      check = dummyBlackInCheck;
    }
    if (check) {
      reverse();
      return true;
    } else {
      reverse();
      return false;
    }
  }
}
let whiteInCheck = false;
let blackInCheck = false;
function checkCheckWhiteAndBlack() {
  let a = checkTotalPossibleMoves('white', false);
  let b = [];
  if (document.getElementsByClassName(bkingclass)[0] != null) {
    b = convertSquareToCoords(document.getElementsByClassName(bkingclass)[0].id);
  }
  if (isArrayInArray(a,b)) {
    blackInCheck = true;
  } else {
    blackInCheck = false;
  }
  let c = checkTotalPossibleMoves('black', false);
  let d = [];
  if (document.getElementsByClassName(wkingclass)[0] != null) {
    d = convertSquareToCoords(document.getElementsByClassName(wkingclass)[0].id);
  }
  if (isArrayInArray(c,d)) {
    whiteInCheck = true;
  } else {
    whiteInCheck = false;
  }
  console.log("whiteInCheck: " + whiteInCheck);
  console.log("blackInCheck: " + blackInCheck);
}
let dummyWhiteInCheck = false;
let dummyBlackInCheck = false;
function dummyCheckCheckWhiteAndBlack() {
  let a = checkTotalPossibleMoves('white', false);
  let b = [];
  if (document.getElementsByClassName(bkingclass)[0] != null) {
    b = convertSquareToCoords(document.getElementsByClassName(bkingclass)[0].id);
  }
  if (isArrayInArray(a,b)) {
    dummyBlackInCheck = true;
  } else {
    dummyBlackInCheck = false;
  }
  let c = checkTotalPossibleMoves('black', false);
  let d = [];
  if (document.getElementsByClassName(wkingclass)[0] != null) {
    d = convertSquareToCoords(document.getElementsByClassName(wkingclass)[0].id);
  }
  if (isArrayInArray(c,d)) {
    dummyWhiteInCheck = true;
  } else {
    dummyWhiteInCheck = false;
  }
  //console.log(dummyWhiteInCheck + ' . ' + dummyBlackInCheck);
}
function dotAllMoves(piece, possibleMoves, coords, dotThis, square) {
  let allowedMoves = [];
  let jumpCheckMoves = [];
  let number = 0;
  possibleMoves.forEach(function(value) {
    let move = add(coords, value);
    if (move[0] > 0 && move[0] < 9 && move[1] > 0 && move[1] < 9) {
       if (piece.includes('stacking')) {
        let stackingPiece;
        if (piece.includes('Queen')) stackingPiece = originalMoves.queen_stacking;
        if (piece.includes('Rook')) stackingPiece = originalMoves.rook_stacking;
        if (piece.includes('Bishop')) stackingPiece = originalMoves.bishop_stacking;
        if (piece.includes('King')) stackingPiece = originalMoves.king_stacking();
        let inter = value;
        if (isArrayInArray(stackingPiece, inter)) {
          if (piece.includes('white') && getClassLists(convertCoordsToSquare(move)).toString().includes('black') || document.getElementById(convertCoordsToSquare(move)).classList.length == 0 || document.getElementById(convertCoordsToSquare(move)).classList.length == 1 && document.getElementById(convertCoordsToSquare(move)).classList.contains('dotted')) {
            jumpCheckMoves.push(move);
          } else if (piece.includes('black') && getClassLists(convertCoordsToSquare(move)).toString().includes('white') || document.getElementById(convertCoordsToSquare(move)).classList.length == 0 || document.getElementById(convertCoordsToSquare(move)).classList.length == 1 && document.getElementById(convertCoordsToSquare(move)).classList.contains('dotted')) {
            jumpCheckMoves.push(move);
          }
        } else {
          let pieceArray = getPiecesFromDataSet(document.getElementById(selected).dataset.stackpiece);
          console.log(pieceArray)
          let doTheMove = false;
          pieceArray.forEach(function(value2) {
            if (value2 == 'whiteQueen_stacking' || value2 == 'blackQueen_stacking') value2 = 'whiteQueen';
            if (value2 == 'whiteRook_stacking' || value2 == 'blackRook_stacking') value2 = 'whiteRook';
            if (value2 == 'whiteBishop_stacking' || value2 == 'blackBishop_stacking') value2 = 'whiteBishop';
            if (value2 == 'whiteKing_stacking' || value2 == 'blackKing_stacking') value2 = 'whiteKing';
            getPieceInfo(value2, coords);
            if (pieceInfo.checkCheckmate.possibleMoves.one == null) {
              if (isArrayInArray(pieceInfo.checkCheckmate.possibleMoves, value)) {
                doTheMove = true;
              }
            } else {
              if (isArrayInArray(pieceInfo.checkCheckmate.possibleMoves.one, value)) {
                doTheMove = true;
              } else if (isArrayInArray(pieceInfo.checkCheckmate.possibleMoves.diagonal, value)) {
                doTheMove = true;
              }
            }
          });
          if (doTheMove) {
            if (piece.includes('white') && getClassLists(convertCoordsToSquare(move)).toString().includes('black') || document.getElementById(convertCoordsToSquare(move)).classList.length == 0 || document.getElementById(convertCoordsToSquare(move)).classList.length == 1 && document.getElementById(convertCoordsToSquare(move)).classList.contains('dotted')) {
              jumpCheckMoves.push(move);
            } else if (piece.includes('black') && getClassLists(convertCoordsToSquare(move)).toString().includes('white') || document.getElementById(convertCoordsToSquare(move)).classList.length == 0 || document.getElementById(convertCoordsToSquare(move)).classList.length == 1 && document.getElementById(convertCoordsToSquare(move)).classList.contains('dotted')) {
              jumpCheckMoves.push(move);
            }
          }
        }
      } else if (piece.includes('white') && getClassLists(convertCoordsToSquare(move)).toString().includes('black') || document.getElementById(convertCoordsToSquare(move)).classList.length == 0 || document.getElementById(convertCoordsToSquare(move)).classList.length == 1 && document.getElementById(convertCoordsToSquare(move)).classList.contains('dotted')) {
        jumpCheckMoves.push(move);
      } else if (piece.includes('black') && getClassLists(convertCoordsToSquare(move)).toString().includes('white') || document.getElementById(convertCoordsToSquare(move)).classList.length == 0 || document.getElementById(convertCoordsToSquare(move)).classList.length == 1 && document.getElementById(convertCoordsToSquare(move)).classList.contains('dotted')) {
        jumpCheckMoves.push(move);
      } else if (piece.includes('white') && includesWhite(convertCoordsToSquare(move)) && piece.includes('murderous')) {
        jumpCheckMoves.push(move);
      } else if (piece.includes('black') && includesBlack(convertCoordsToSquare(move)) && piece.includes('murderous')) {
        jumpCheckMoves.push(move);
      } else if (document.getElementById(convertCoordsToSquare(move)).classList.contains('dematerialized')) {
        let doTheMove = true;
        getClassLists(convertCoordsToSquare(move)).forEach(function(value2) {
          if (!value2.contains('dematerialized')) {
            if (!value2.toString().includes('white') && moveColor == 'black' && !value2.toString().includes('black') && moveColor == 'white') {
              doTheMove = false;
            }
          }
        });
        if (doTheMove) {
          jumpCheckMoves.push(move);
        }
      } else if (document.getElementById(square).classList.contains('dematerialized')) {
        jumpCheckMoves.push(move);
      } else if (document.getElementById(convertCoordsToSquare(move)).classList.toString().includes('crowding') && crowding) {
        jumpCheckMoves.push(move);
      } else if (piece.includes('crowding') && crowding) {
        jumpCheckMoves.push(move);
      }
    }
  });
  jumpCheckMoves.forEach(function(value) {
    if (checkJump(convertSquareToCoords(square), value, convertCoordsToSquare(value), square)) {
      allowedMoves.push(value);
    }
  });
  allowedMoves.forEach(function(value) {
    if (document.getElementById(convertCoordsToSquare(value)) != null) {
      if (document.getElementById(selected).dataset.onemove == 'false' || document.getElementById(selected).dataset.onemove == 'undefined' || document.getElementById(selected).dataset.onemove == '' || document.getElementById(selected).dataset.onemove == null) {
        if (!dummyMoveCheck(coords, value) && piece.includes(moveColor)) {
          if (getClassLists(convertCoordsToSquare(value)) != null) {
            if (getClassLists(convertCoordsToSquare(value)).toString().includes('capturetheflag')) {
              //Trying to dot a stacking piece
              if (getClassLists(convertCoordsToSquare(value)).toString().includes('black')) {
                if (!convertCoordsToSquare(value).includes('a') && !convertCoordsToSquare(value).includes('b') && !convertCoordsToSquare(value).includes('c') && !convertCoordsToSquare(value).includes('d')) {
                  //On blacks side of the board
                  if(dotThis) { dot(value); }
                  totalPossibleMovesReal.push(value);
                  returnMoves.push(value);
                }
              } else if (getClassLists(convertCoordsToSquare(value)).toString().includes('white')) {
                if (!convertCoordsToSquare(value).includes('e') && !convertCoordsToSquare(value).includes('f') && !convertCoordsToSquare(value).includes('g') && !convertCoordsToSquare(value).includes('h')) {
                  //On blacks side of the board
                  if (dotThis) { dot(value); }
                  totalPossibleMovesReal.push(value);
                  returnMoves.push(value);
                }
              }
            } else {
              if(dotThis) { dot(value); }
              totalPossibleMovesReal.push(value);
              returnMoves.push(value);
            }
          } else {
            if(dotThis) { dot(value); }
            totalPossibleMovesReal.push(value);
            returnMoves.push(value);
          }
        }
      } 
    }
  });
}
function dotAllMovesNoJump(piece, possibleMoves, coords, dotThis, square) {
  let b = +coords.join("");
  let startSquare = document.getElementById(convertCoordsToSquare(coords));
  if (moveColor == 'white') {
    checkColor = 'black';
  } else {
    checkColor = 'white';
  }
  let allowedMoves = [];
  let jumpCheckMoves = [];
  possibleMoves.forEach(function(value) {
    let move = add(coords, value);
    if (piece.includes('stacking')) {
      let stackingPiece;
      if (piece.includes('Knight')) stackingPiece = originalMoves.knight_stacking;
      if (isArrayInArray(stackingPiece, value)) {
        if (document.getElementById(convertCoordsToSquare(move)) != null) {
          //console.log(document.getElementById(convertCoordsToSquare(move)));
          //All moves, not passing all to allowedmoves
          if (piece.includes('white') && getClassLists(convertCoordsToSquare(move)).toString().includes('black') || document.getElementById(convertCoordsToSquare(move)).classList.length == 0 || document.getElementById(convertCoordsToSquare(move)).classList.length == 1 && document.getElementById(convertCoordsToSquare(move)).classList.contains('dotted')) {
            allowedMoves.push(move);
          } else if (piece.includes('black') && getClassLists(convertCoordsToSquare(move)).toString().includes('white') || document.getElementById(convertCoordsToSquare(move)).classList.length == 0 || document.getElementById(convertCoordsToSquare(move)).classList.length == 1 && document.getElementById(convertCoordsToSquare(move)).classList.contains('dotted')) {
            allowedMoves.push(move);
          }
        }
      } else {
        let pieceArray = getPiecesFromDataSet(document.getElementById(selected).dataset.stackpiece);
        let doTheMove = false;
        pieceArray.forEach(function(value2) {
          if (value2 == 'whiteKnight_stacking' || value2 == 'blackKnight_stacking') value2 = 'whiteKnight';
          getPieceInfo(value2, coords);
          if (pieceInfo.checkCheckmate.possibleMoves.one == null) {
            if (isArrayInArray(pieceInfo.checkCheckmate.possibleMoves, value)) {
              //if (checkJump(coords, value2, convertCoordsToSquare(value2), convertCoordsToSquare(coords))) {
                doTheMove = true;
              //}
            }
          } else {
            if (isArrayInArray(pieceInfo.checkCheckmate.possibleMoves.one, value)) {
              doTheMove = true;
            } else if (isArrayInArray(pieceInfo.checkCheckmate.possibleMoves.diagonal, value)) {
              doTheMove = true;
            }
          }
        });
        if (doTheMove) {
          if (document.getElementById(convertCoordsToSquare(move)) != null) {
            if (piece.includes('white') && getClassLists(convertCoordsToSquare(move)).toString().includes('black') || document.getElementById(convertCoordsToSquare(move)).classList.length == 0 || document.getElementById(convertCoordsToSquare(move)).classList.length == 1 && document.getElementById(convertCoordsToSquare(move)).classList.contains('dotted')) {
              jumpCheckMoves.push(move);
            } else if (piece.includes('black') && getClassLists(convertCoordsToSquare(move)).toString().includes('white') || document.getElementById(convertCoordsToSquare(move)).classList.length == 0 || document.getElementById(convertCoordsToSquare(move)).classList.length == 1 && document.getElementById(convertCoordsToSquare(move)).classList.contains('dotted')) {
              jumpCheckMoves.push(move);
            }
          }
        }
      }
    } else if (piece.includes('white') && !includesWhite(convertCoordsToSquare(move))) {
      allowedMoves.push(move);
    } else if (piece.includes('black') && !includesBlack(convertCoordsToSquare(move))) {
      allowedMoves.push(move);
    } else if (piece.includes('white') && includesWhite(convertCoordsToSquare(move)) && piece.includes('murderous')) {
      allowedMoves.push(move);
    } else if (piece.includes('black') && includesBlack(convertCoordsToSquare(move)) && piece.includes('murderous')) {
      allowedMoves.push(move);
    } else if (document.getElementById(convertCoordsToSquare(move)).classList.contains('dematerialized')) {
      let doTheMove = true;
      getClassLists(convertCoordsToSquare(move)).forEach(function(value2) {
        if (!value2.contains('dematerialized')) {
          doTheMove = false;
        }
      });
      if (doTheMove) {
        allowedMoves.push(move);
      }
    } else if (startSquare.classList.contains('dematerialized')) {
      allowedMoves.push(move);
    } else if (document.getElementById(convertCoordsToSquare(move)).classList.toString().includes('crowding') && crowding) {
      allowedMoves.push(move);
    } else if (piece.includes('crowding') && crowding) {
      allowedMoves.push(move);
    }
  });
  jumpCheckMoves.forEach(function(value) {
    if (document.getElementById(convertCoordsToSquare(value)) != null) {
      if (checkJump(Array.from(b.toString()).map(Number), value, convertCoordsToSquare(value), convertCoordsToSquare(Array.from(b.toString()).map(Number)), true)) {
        if (document.getElementById(convertCoordsToSquare(value)) != null) {
          if (!dummyMoveCheck(Array.from(b.toString()).map(Number), value) && piece.includes(moveColor)) {
            if(dotThis) { dot(value); }
            totalPossibleMovesReal.push(value);
            returnMoves.push(value);
          }
        }
      }
    }
  });
  allowedMoves.forEach(function(value) {
    if (document.getElementById(convertCoordsToSquare(value)) != null) {
      if (document.getElementById(selected).dataset.onemove == 'false' || document.getElementById(selected).dataset.onemove == 'undefined' || document.getElementById(selected).dataset.onemove == '' || document.getElementById(selected).dataset.onemove == null) {
        if (!dummyMoveCheck(coords, value) && piece.includes(moveColor)) {
          if (getClassLists(convertCoordsToSquare(value)) != null) {
            if (getClassLists(convertCoordsToSquare(value)).toString().includes('capturetheflag')) {
              //Trying to dot a stacking piece
              if (getClassLists(convertCoordsToSquare(value)).toString().includes('black')) {
                if (!convertCoordsToSquare(value).includes('a') && !convertCoordsToSquare(value).includes('b') && !convertCoordsToSquare(value).includes('c') && !convertCoordsToSquare(value).includes('d')) {
                  //On blacks side of the board
                  if(dotThis) { dot(value); }
                  totalPossibleMovesReal.push(value);
                  returnMoves.push(value);
                }
              } else if (getClassLists(convertCoordsToSquare(value)).toString().includes('white')) {
                if (!convertCoordsToSquare(value).includes('e') && !convertCoordsToSquare(value).includes('f') && !convertCoordsToSquare(value).includes('g') && !convertCoordsToSquare(value).includes('h')) {
                  //On blacks side of the board
                  if(dotThis) { dot(value); }
                  totalPossibleMovesReal.push(value);
                  returnMoves.push(value);
                }
              }
            } else {
              if(dotThis) { dot(value); }
              totalPossibleMovesReal.push(value);
              returnMoves.push(value);
            }
          } else {
            if(dotThis) { dot(value); }
            totalPossibleMovesReal.push(value);
            returnMoves.push(value);
          }
        }
      }
    }
  });
}
let returnMoves = [];
function dotAllMovesPawn(pawn, piece, dotThis, coord, fromCheckMate) {
  let a = +coord.join("");
  if (!fromCheckMate) {
    checkEnPassant(coord, moveColor);
  }
  if (selected == null) {
    selected = convertCoordsToSquare(coord);
  }
  const originalCoords = coord;
  let two = pawn.two;
  let one = pawn.one;
  let attackMoves = pawn.diagonal;
  let movesToBeDotted = [];
  let moveTwoNum;
  let KILLHAHAHA;
  let num;
  if (piece.includes('white')) {
    moveTwoNum = 7;
    num = -2;
    KILLHAHAHA = 'black';
  } else {
    moveTwoNum = 2;
    num = 2;
    KILLHAHAHA = 'white';
  }
  //Two Spaces
  let dontAddCoords = Array.from(a.toString()).map(Number);
  let moveArray = [];
  one.forEach(function(value) {
    let addCoords2 = add(value, Array.from(a.toString()).map(Number));
    if (document.getElementById(convertCoordsToSquare(addCoords2)) != null) {
      if (checkJump(Array.from(a.toString()).map(Number), addCoords2, convertCoordsToSquare(addCoords2), convertCoordsToSquare(Array.from(a.toString()).map(Number)))) {
        moveArray.push(addCoords2);
        if (document.getElementById(convertCoordsToSquare(addCoords2)).classList.contains('dematerialized')) {
          movesToBeDotted.push(addCoords2);
        } else if (document.getElementById(convertCoordsToSquare(Array.from(a.toString()).map(Number))).classList.contains('dematerialized')) {
          movesToBeDotted.push(addCoords2);
        }
      } else if (document.getElementById(convertCoordsToSquare(addCoords2)).classList.contains('dematerialized')) {
        movesToBeDotted.push(addCoords2);
      } else if (document.getElementById(convertCoordsToSquare(Array.from(a.toString()).map(Number))).classList.contains('dematerialized')) {
        movesToBeDotted.push(addCoords2);
      } else if (document.getElementById(convertCoordsToSquare(addCoords2)).classList.toString().includes('crowding') && crowding) {
        movesToBeDotted.push(addCoords2);
      } else if (piece.includes('crowding') && crowding) {
        movesToBeDotted.push(addCoords2);
      }
    }
  });
  let theCoords = Array.from(a.toString()).map(Number);
  let addCoords = add(Array.from(a.toString()).map(Number), two);
  if (two[0] != 2 && two[0] != -2) {
    addCoords = add(Array.from(a.toString()).map(Number), two[0]);
  }
  if (Array.from(a.toString()).map(Number)[0] == moveTwoNum) {
    if (!includesWhiteOrBlack(convertCoordsToSquare(addCoords)) && checkJump(Array.from(a.toString()).map(Number), addCoords, convertCoordsToSquare(addCoords), convertCoordsToSquare(Array.from(a.toString()).map(Number)))) {
      movesToBeDotted.push(addCoords);
    } else if (document.getElementById(convertCoordsToSquare(addCoords)).classList.contains('dematerialized')) {
      let doTheMove = true;
      getClassLists(convertCoordsToSquare(addCoords)).forEach(function(value2) {
        if (!value2.contains('dematerialized')) {
          doTheMove = false;
        }
      });
      if (doTheMove) {
        movesToBeDotted.push(addCoords);
      }
    } else if (document.getElementById(convertCoordsToSquare(Array.from(a.toString()).map(Number))).classList.contains('dematerialized')) {
      movesToBeDotted.push(addCoords);
    }
  }
  let otherCoords;
  //One Space
  moveArray.forEach(function(value) {
    if (includesWhiteOrBlack(convertCoordsToSquare(value))) {
    } else if (document.getElementById(convertCoordsToSquare(value)).classList.contains('dematerialized')) {
      let doTheMove = true;
      getClassLists(convertCoordsToSquare(value)).forEach(function(value2) {
        if (!value2.contains('dematerialized')) {
          doTheMove = false;
        }
      });
      if (doTheMove) {
        movesToBeDotted.push(value);
      }
    } else if (document.getElementById(convertCoordsToSquare(Array.from(a.toString()).map(Number))).classList.contains('dematerialized')) {
      movesToBeDotted.push(value);
    } else {
      movesToBeDotted.push(value);
    }
  });
  //Attack!
  let attacky = checkKillPawn(Array.from(a.toString()).map(Number), pawn.diagonal);
  attacky.forEach(function(value) { 
    if (document.getElementById(convertCoordsToSquare(value)).classList.contains('dematerialized')) {
      console.log('Phantom');
    } else if (document.getElementById(convertCoordsToSquare(Array.from(a.toString()).map(Number))).classList.contains('dematerialized')) {
      console.log('Phantom');
    } else {
      movesToBeDotted.push(value);
    }
  });
  movesToBeDotted.forEach(function(value) {
    if (document.getElementById(selected).dataset.onemove == 'false' || document.getElementById(selected).dataset.onemove == '' || document.getElementById(selected).dataset.onemove == null || document.getElementById(selected).dataset.onemove == 'undefined') {
      let b = dummyMoveCheck(Array.from(a.toString()).map(Number), value);
      if (!b && piece.includes(moveColor)) {
        let reallyReallyMove = true;
        if (fromCheckMate) {
          if (moveColor == 'white') {
            if (value[0] > originalCoords[0]) {
              reallyReallyMove = false;
            } else {
              reallyReallyMove = true;
            }
          } else if (moveColor == 'black') {
            if (value[0] < originalCoords[0]) {
              reallyReallyMove = false;
            } else {
              reallyReallyMove = true;
            }
          }
        } else {
          reallyReallyMove = true;
        }
        if (reallyReallyMove) {
          if (piece.includes('stacking')) {
            let possibleMoves;
            if (piece == 'whitePawn_stacking') possibleMoves = originalMoves.whitePawn_stacking;
            if (piece == 'blackPawn_stacking') possibleMoves = originalMoves.blackPawn_stacking;
            let move = value;
            let coords = Array.from(a.toString()).map(Number);
            let inter = subtract(move, coords);
            let interA = Array.from(inter);
            function y() {
              let x = interA;
              if (x[0] == '-') {
                if (x[2] == '-') {
                  [+x[0] + x[1], +x[2] + x[3]];
                } else {
                  x = [+x[0] + x[1], x[2]];
                }
              } else if (x[1] == '-') {
                x = [x[0], +x[1] + x[2]];
              }
              return x;
            }
            if (isArrayInArray(possibleMoves.one, y()) || isArrayInArray(possibleMoves.two, y()) || isArrayInArray(possibleMoves.diagonal, y())) {
              if(dotThis) dot(value);
              totalPossibleMovesReal.push(value);
              returnMoves.push(value);
            } else {
              let piecesArray = getPiecesFromDataSet(document.getElementById(convertCoordsToSquare(Array.from(a.toString()).map(Number))).dataset.stackpiece);
              let doTheMove;
              piecesArray.forEach(function(value2) {
                if (value2 != piece) {
                  if (value2.includes('Pawn')) {
                    getPieceInfo(value2, coords);
                    let value2MovesA = pieceInfo.checkCheckmate.possibleMoves.one;
                    let value2MovesB = pieceInfo.checkCheckmate.possibleMoves.two;
                    let value2MovesC = pieceInfo.checkCheckmate.possibleMoves.diagonal;
                    if (isArrayInArray(value2MovesA, y())) {
                      doTheMove = true;
                    } else if (isArrayInArray(value2MovesB, y())) {
                      doTheMove = true;
                    } else if (isArrayInArray(value2MovesC, y())) {
                      doTheMove = true;
                    }
                  } else {
                    getPieceInfo(value2, coords);
                    let value2Moves = pieceInfo.checkCheckmate.possibleMoves;
                    if (isArrayInArray(value2Moves, y())) {
                      doTheMove = true;
                    }
                  }
                }
              });
              if (doTheMove) {
                if(dotThis) { dot(value); }
                totalPossibleMovesReal.push(value);
                returnMoves.push(value);
              }
            }
          } else {
            if (getClassLists(convertCoordsToSquare(value)) != null) {
              if (getClassLists(convertCoordsToSquare(value)).toString().includes('capturetheflag')) {
                //Trying to dot a stacking piece
                if (getClassLists(convertCoordsToSquare(value)).toString().includes('black')) {
                  if (!convertCoordsToSquare(value).includes('a') && !convertCoordsToSquare(value).includes('b') && !convertCoordsToSquare(value).includes('c') && !convertCoordsToSquare(value).includes('d')) {
                    //On blacks side of the board
                    if(dotThis) { dot(value); }
                    totalPossibleMovesReal.push(value);
                    returnMoves.push(value);
                  }
                } else if (getClassLists(convertCoordsToSquare(value)).toString().includes('white')) {
                  if (!convertCoordsToSquare(value).includes('e') && !convertCoordsToSquare(value).includes('f') && !convertCoordsToSquare(value).includes('g') && !convertCoordsToSquare(value).includes('h')) {
                    //On blacks side of the board
                    if(dotThis) { dot(value); }
                    totalPossibleMovesReal.push(value);
                    returnMoves.push(value);
                  }
                }
              } else {
                if(dotThis) { dot(value); }
                totalPossibleMovesReal.push(value);
                returnMoves.push(value);
              }
            } else {
              if(dotThis) { dot(value); }
              totalPossibleMovesReal.push(value);
              returnMoves.push(value);
            }
          }
        }
      } else {
        if (document.getElementById(convertCoordsToSquare(Array.from(a.toString()).map(Number))).classList.contains('dematerialized')) {
          if (piece.includes(moveColor)) {
            if(dotThis) { dot(value); }
            totalPossibleMovesReal.push(value);
            returnMoves.push(value);
          }
        }
      }
    }
  });
}
function checkTotalPossibleMoves(color, dotThis) { //Assumes you ARENT in Check
  let totalPossibleMoves = [];
  if (color == null) {
    color = 'white';
  }
  boardSquares.forEach(function(value) {
    let square = document.getElementById(value);
    let checkColor;
    if (moveColor == 'white') {
      checkColor = 'black';
      theCheckVar = whiteInCheck;
    } else {
      checkColor = 'white';
      theCheckVar = blackInCheck;
    }
    let piece = square.classList[0];
    if (piece) {
      getPieceInfo(piece, convertSquareToCoords(value));
    }
    let possibleMoves = pieceInfo.checkCheckmate.possibleMoves;
    let pawn = pieceInfo.checkCheckmate.possibleMoves;
    let pieceClassList = square.classList;
    if (includesColor(color, value)) {
      let coords = convertSquareToCoords(value);
      //Special Cases
      //Dont Check Jump
      //BOOKMARK
      if (piece.includes('Elephant') || piece.includes('Knight') || piece.includes('knight')) {
        let possibleMovesStep2 = [];
        if (possibleMoves) {
          if (possibleMoves.two == null) {
            possibleMoves.forEach(function(value2) {
              let move = add(coords, value2);
              if (piece.includes(color) && !includesColor(color, convertCoordsToSquare(move))) {
                possibleMovesStep2.push(move);
              } else if (piece.includes('white') && includesWhite(convertCoordsToSquare(move)) && piece.includes('murderous')) {
                possibleMovesStep2.push(move);
              } else if (piece.includes('black') && includesBlack(convertCoordsToSquare(move)) && piece.includes('murderous')) {
                possibleMovesStep2.push(move);
              }
              possibleMovesStep2.forEach(function(value2) {
                if (document.getElementById(convertCoordsToSquare(move)) != null) {
                  if (!pieceClassList.contains('dematerialized')) {
                    if (dotThis) {dot(move)}
                    totalPossibleMoves.push(move);
                  }
                }
              });
            });
          }
        }//Pawn Special Case
      } else if (piece.includes('Pawn') || piece.includes('pawn')) {
        let pawn2 = square.classList[0];
        if (pawn != null) {
          let originalCoords = coords;
          let a = +coords.join("");
          let two = pawn.two;
          let one = pawn.one;
          let attackMoves = pawn.diagonal;
          let movesToBeDotted = [];
          let moveTwoNum;
          let KILLHAHAHA;
          let num;
          if (piece.includes('white')) {
            moveTwoNum = 7;
            num = -2;
            KILLHAHAHA = 'black';
          } else {
            moveTwoNum = 2;
            num = 2;
            KILLHAHAHA = 'white';
          }
          //Two Spaces
          let dontAddCoords = coords;
          let moveArray = [];
          one.forEach(function(value2) {
            let addCoords2 = add(value2, Array.from(a.toString()).map(Number));
            if (checkJump(Array.from(a.toString()).map(Number), addCoords2, convertCoordsToSquare(addCoords2), convertCoordsToSquare(Array.from(a.toString()).map(Number)))) {
              moveArray.push(addCoords2);
            }
          });
          let theCoords = Array.from(a.toString()).map(Number);
          let addCoords = add(two, theCoords);
          let otherCoords;
          //One Space
          moveArray.forEach(function(value2) {
            if (includesWhiteOrBlack(convertCoordsToSquare(value2))) {
            } else {
              movesToBeDotted.push(value2);
            }
          });
          if (Array.from(a.toString()).map(Number)[0] != moveTwoNum) {
          } else if (!includesWhiteOrBlack(convertCoordsToSquare(addCoords)) && checkJump(Array.from(a.toString()).map(Number), addCoords, convertCoordsToSquare(addCoords), convertCoordsToSquare(Array.from(a.toString()).map(Number)))) {
            movesToBeDotted.push(addCoords);
          }
          //Attack!
          let attacky;
          if (Array.from(a.toString()).map(Number)[0] + 2 == 7 && piece.includes('white') || Array.from(a.toString()).map(Number)[0] - 2 == 2 && piece.includes('black')) {
            if (convertSquareToCoords(selected)[0] != 2 && piece.includes('black') || convertSquareToCoords(selected)[0] != 7 && piece.includes('white')) {
              attacky = checkKillPawn(Array.from(a.toString()).map(Number), pawn.diagonal);
            } else {
              attacky = checkKillPawn(Array.from(a.toString()).map(Number), pawn.diagonal);
            }
          } else {
            attacky = checkKillPawn(Array.from(a.toString()).map(Number), pawn.diagonal);
          }
          attacky.forEach(function(value2) { 
            if (document.getElementById(convertCoordsToSquare(value2)).classList.contains('dematerialized')) {
            } else if (document.getElementById(convertCoordsToSquare(Array.from(a.toString()).map(Number))).classList.contains('dematerialized')) {
            } else {
              movesToBeDotted.push(value2);
            }
          });
          movesToBeDotted.forEach(function(value2) {
            if (!pieceClassList.contains('dematerialized')) {
              if (dotThis) {dot(value2)}
              totalPossibleMoves.push(value2);
            }
          });
        }
      } else if (piece.includes('Superpawn') || piece.includes('Princess') || piece.includes('Empress') || piece.includes('Amazon')) { //Check Jump and Dont SPECIAL CASE
        let jump, noJump;
        if (piece.includes('Superpawn')) {
          jump = moves.superpawn.jump;
          noJump = moves.superpawn.noJump;
        } else if (piece.includes('Princess')) {
          jump = moves.princess.jump;
          noJump = moves.princess.noJump;
        } else if (piece.includes('Empress')) {
          jump = moves.empress.jump;
          noJump = moves.empress.noJump;
        } else if (piece.includes('Amazon')) {
          jump = moves.amazon.jump;
          noJump = moves.amazon.noJump;
        }
        let allowedMoves = [];
        let jumpCheckMoves = [];
        let number = 0;
        jump.forEach(function(value2) {
          let move = add(coords, value2);
          if (move[0] > 0 && move[0] < 9 && move[1] > 0 && move[1] < 9) {
            if (piece.includes('white') && !includesWhite(convertCoordsToSquare(move))) {
              jumpCheckMoves.push(move);
            } else if (piece.includes('black') && !includesBlack(convertCoordsToSquare(move))) {
              jumpCheckMoves.push(move);
            }
          }
        });
        jumpCheckMoves.forEach(function(value2) {
          if (checkJump(convertSquareToCoords(square.id), value2, convertCoordsToSquare(value2), square.id)) {
            allowedMoves.push(value2);
          }
        });
        allowedMoves.forEach(function(value2) {
          if (document.getElementById(convertCoordsToSquare(value2)) != null) {
            if (!pieceClassList.contains('dematerialized')) {
              totalPossibleMoves.push(value2);
              if(dotThis) { dot(value2); }
            }
          }
        });
        noJump.forEach(function(value2) {
          let move = add(coords, value2);
          if (piece.includes(color) && !includesColor(color, convertCoordsToSquare(move))) {
            if (document.getElementById(convertCoordsToSquare(move)) != null) {
              if (!pieceClassList.contains('dematerialized')) {
                totalPossibleMoves.push(move);
                if(dotThis) { dot(move); }
              }
            }
          }
        });
      } else if (piece.includes('lite')) {
        totalPossibleMoves.push();
      } else { //No Special Case (Check Jump, ect)
        let possibleMoves;
        //BOOKMARK
        let piece2 = square.classList[0];
        if (piece2 == 'dematerialized' || piece2 == 'dotted') {
          piece2 = square.classList[1];
          if (piece2 == 'dematerialized' || piece2 == 'dotted') {
            piece2 = square.classList[2];
          }
        }
        let allowedMoves = [];
        let jumpCheckMoves = [];
        let number = 0;
        if (possibleMoves) {
          if (possibleMoves.two == null) {
            possibleMoves.forEach(function(value2) {
              let move = add(coords, value2);
              if (move[0] > 0 && move[0] < 9 && move[1] > 0 && move[1] < 9) {
                if (piece.includes('white') && !includesWhite(convertCoordsToSquare(move))) {
                  jumpCheckMoves.push(move);
                } else if (piece.includes('black') && !includesBlack(convertCoordsToSquare(move))) {
                  jumpCheckMoves.push(move);
                } else if (piece.includes('white') && includesWhite(convertCoordsToSquare(move)) && piece.includes('murderous')) {
                  jumpCheckMoves.push(move);
                } else if (piece.includes('black') && includesBlack(convertCoordsToSquare(move)) && piece.includes('murderous')) {
                  jumpCheckMoves.push(move);
                }
              }
            });
          }
        }
        jumpCheckMoves.forEach(function(value2) {
          if (checkJump(convertSquareToCoords(square.id), value2, convertCoordsToSquare(value2), square.id)) {
            allowedMoves.push(value2);
          }
        });
        allowedMoves.forEach(function(value2) {
          if (document.getElementById(convertCoordsToSquare(value2)) != null) {
            if (!pieceClassList.contains('dematerialized')) {
              totalPossibleMoves.push(value2);
              if(dotThis) { dot(value2); }
            }
          }
        });
      }
    }
  });
  return totalPossibleMoves;
}
/*
function addArrows() {
  boardSquares.forEach(function(value) {
    let square = document.getElementById(value);
    let classlist = square.classList;
    let arrowsContainer = document.createElement('table');
    arrowsContainer.classList.add('arrowsContainer');
    arrowsContainer.setAttribute('cellspacing', '0');
    if (classlist.contains('whitePawn') || classlist.contains('blackPawn')) {
      arrowsContainer.innerHTML = `<tr><td class='m_f1'></td><td class='a_l1-r1'></td></tr>`;
      document.getElementById(value).appendChild(arrowsContainer);
    }
  });
} */
let totalPossibleMovesReal = [];
let pieceInfo = {
  checkCheckmate: {
    possibleMoves: null,
    checkTheJump: null,
    special: null
  }
}
function getPieceInfo(piece, coords) {
  if (piece == 'whiteRook' || piece == 'blackRook') {
    pieceInfo.checkCheckmate.possibleMoves = moves.rook;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whiteBishop' || piece == 'blackBishop') {
    pieceInfo.checkCheckmate.possibleMoves = moves.bishop;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whiteQueen' || piece == 'blackQueen') {
    pieceInfo.checkCheckmate.possibleMoves = moves.queen;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whiteKing' || piece == 'blackKing') {
    pieceInfo.checkCheckmate.possibleMoves = moves.king();
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whiteKnight' || piece == 'blackKnight') {
    pieceInfo.checkCheckmate.possibleMoves = moves.knight;
    pieceInfo.checkCheckmate.checkTheJump = false;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whitePawn') {
    pieceInfo.checkCheckmate.possibleMoves = moves.whitePawn;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'blackPawn') {
    pieceInfo.checkCheckmate.possibleMoves = moves.blackPawn;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whiteSuperpawn' || piece == 'blackSuperpawn') {
    pieceInfo.checkCheckmate.possibleMoves = moves.superpawn;
    pieceInfo.checkCheckmate.checkTheJump = false;
    pieceInfo.checkCheckmate.special = true;
  } else if (piece == 'whiteMan' || piece == 'blackMan') {
    pieceInfo.checkCheckmate.possibleMoves = moves.man(piece, coords);
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whiteElephant' || piece == 'blackElephant') {
    pieceInfo.checkCheckmate.possibleMoves = moves.elephant;
    pieceInfo.checkCheckmate.checkTheJump = false;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whiteMinister' || piece == 'blackMinister') {
    pieceInfo.checkCheckmate.possibleMoves = moves.minister;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whitePrincess' || piece == 'blackPrincess') {
    pieceInfo.checkCheckmate.possibleMoves = moves.princess;
    pieceInfo.checkCheckmate.checkTheJump = false;
    pieceInfo.checkCheckmate.special = true;
  } else if (piece == 'whiteEmpress' || piece == 'blackEmpress') {
    pieceInfo.checkCheckmate.possibleMoves = moves.empress;
    pieceInfo.checkCheckmate.checkTheJump = false;
    pieceInfo.checkCheckmate.special = true;
  } else if (piece == 'whiteAmazon' || piece == 'blackAmazon') {
    pieceInfo.checkCheckmate.possibleMoves = moves.amazon;
    pieceInfo.checkCheckmate.checkTheJump = false;
    pieceInfo.checkCheckmate.special = true;
  } else if (piece.includes('lite')) {
    pieceInfo.checkCheckmate.checkTheJump = false;
    pieceInfo.checkCheckmate.possibleMoves = [];
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whiteReverseMinister' || piece == 'blackReverseMinister') {
    pieceInfo.checkCheckmate.checkTheJump = false;
    pieceInfo.checkCheckmate.possibleMoves = moves.reverseMinister;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'white_superBishop' || piece == 'black_superBishop') {
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.possibleMoves = moves.superBishop;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'white_superRook' || piece == 'black_superRook') {
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.possibleMoves = moves.superRook;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'white_superKing' || piece == 'black_superKing') {
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.possibleMoves = moves.superKing();
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'white_superKnight' || piece == 'black_superKnight') {
    pieceInfo.checkCheckmate.checkTheJump = false;
    pieceInfo.checkCheckmate.possibleMoves = moves.superKnight;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whiteLongKnight' || piece == 'blackLongKnight') {
    pieceInfo.checkCheckmate.checkTheJump = false;
    pieceInfo.checkCheckmate.possibleMoves = moves.longKnight;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whiteFastKing' || piece == 'blackFastKing') {
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.possibleMoves = moves.fastKing();
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whiteHyperFastKing' || piece == 'blackHyperFastKing') {
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.possibleMoves = moves.hyperFastKing();
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whitePawn_mf1_al1r1f1') {
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.possibleMoves = moves.wpawn_mf1_al1r1f1;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'blackPawn_mf1_al1r1f1') {
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.possibleMoves = moves.bpawn_mf1_al1r1f1;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whiteFivePawn') {
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.possibleMoves = moves.whiteFivePawn;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'blackFivePawn') {
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.possibleMoves = moves.blackFivePawn;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whitePawn_mf1_af1') {
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.possibleMoves = moves.whitePawn_mf1_af1;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'blackPawn_mf1_af1') {
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.possibleMoves = moves.blackPawn_mf1_af1;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whitePawn_mf1_aal1ar1') {
    pieceInfo.checkCheckmate.possibleMoves = moves.whitePawn_mf1_aal1ar1;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'blackPawn_mf1_aal1ar1') {
    pieceInfo.checkCheckmate.possibleMoves = moves.blackPawn_mf1_aal1ar1;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } /* Made since split */ else if (piece == 'whitePawn_mf1_adbl1dbr1') {
    pieceInfo.checkCheckmate.possibleMoves = moves.whitePawn_mf1_adbl1dbr1;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'blackPawn_mf1_adbl1dbr1') {
    pieceInfo.checkCheckmate.possibleMoves = moves.blackPawn_mf1_adbl1dbr1;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whitePawn_mf1_al1r1dl1dr1') {
    pieceInfo.checkCheckmate.possibleMoves = moves.whitePawn_mf1_al1r1dl1dr1;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'blackPawn_mf1_al1r1dl1dr1') {
    pieceInfo.checkCheckmate.possibleMoves = moves.blackPawn_mf1_al1r1dl1dr1;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whiteOctoPawn') {
    pieceInfo.checkCheckmate.possibleMoves = moves.whiteOctoPawn;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'blackOctoPawn') {
    pieceInfo.checkCheckmate.possibleMoves = moves.blackOctoPawn;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whitePawn_mf1_af1dl1dr1') {
    pieceInfo.checkCheckmate.possibleMoves = moves.whitePawn_mf1_af1dl1dr1;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'blackPawn_mf1_af1dl1dr1') {
    pieceInfo.checkCheckmate.possibleMoves = moves.blackPawn_mf1_af1dl1dr1;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whitePawn_mf1_af1b1al1ar1') {
    pieceInfo.checkCheckmate.possibleMoves = moves.whitePawn_mf1_af1b1al1ar1;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'blackPawn_mf1_af1b1al1ar1') {
    pieceInfo.checkCheckmate.possibleMoves = moves.blackPawn_mf1_af1b1al1ar1;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whitePawn_mf1_nfaal1ar1') {
    pieceInfo.checkCheckmate.possibleMoves = moves.whitePawn_mf1_nfaal1ar1;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'blackPawn_mf1_nfaal1ar1') {
    pieceInfo.checkCheckmate.possibleMoves = moves.blackPawn_mf1_nfaal1ar1;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whitePawn_mf2_al1r1') {
    pieceInfo.checkCheckmate.possibleMoves = moves.whitePawn_mf2_al1r1;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'blackPawn_mf2_al1r1') {
    pieceInfo.checkCheckmate.possibleMoves = moves.blackPawn_mf2_al1r1;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whitePawn_mf2') {
    pieceInfo.checkCheckmate.possibleMoves = moves.whitePawn_mf2;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'blackPawn_mf2') {
    pieceInfo.checkCheckmate.possibleMoves = moves.blackPawn_mf2;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whitePawn_mf3') {
    pieceInfo.checkCheckmate.possibleMoves = moves.whitePawn_mf3;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'blackPawn_mf3') {
    pieceInfo.checkCheckmate.possibleMoves = moves.blackPawn_mf3;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whitePawn_mf2_af1') {
    pieceInfo.checkCheckmate.possibleMoves = moves.whitePawn_mf2_af1;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'blackPawn_mf2_af1') {
    pieceInfo.checkCheckmate.possibleMoves = moves.blackPawn_mf2_af1;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whiteQueen_atomic' || piece == 'blackQueen_atomic') {
    pieceInfo.checkCheckmate.possibleMoves = moves.queen_atomic;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whiteRook_atomic' || piece == 'blackRook_atomic') {
    pieceInfo.checkCheckmate.possibleMoves = moves.rook_atomic;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whiteBishop_atomic' || piece == 'blackBishop_atomic') {
    pieceInfo.checkCheckmate.possibleMoves = moves.bishop_atomic;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whiteKing_atomic' || piece == 'blackKing_atomic') {
    pieceInfo.checkCheckmate.possibleMoves = moves.king_atomic();
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whiteKnight_atomic' || piece == 'blackKnight_atomic') {
    pieceInfo.checkCheckmate.possibleMoves = moves.knight_atomic;
    pieceInfo.checkCheckmate.checkTheJump = false;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whitePawn_atomic') {
    pieceInfo.checkCheckmate.possibleMoves = moves.whitePawn_atomic;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'blackPawn_atomic') {
    pieceInfo.checkCheckmate.possibleMoves = moves.blackPawn_atomic;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whiteQueen_ghoul' || piece == 'blackQueen_ghoul') {
    pieceInfo.checkCheckmate.possibleMoves = moves.queen_ghoul;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whiteRook_ghoul' || piece == 'blackRook_ghoul') {
    pieceInfo.checkCheckmate.possibleMoves = moves.rook_ghoul;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whiteBishop_ghoul' || piece == 'blackBishop_ghoul') {
    pieceInfo.checkCheckmate.possibleMoves = moves.bishop_ghoul;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whiteKing_ghoul' || piece == 'blackKing_ghoul') {
    pieceInfo.checkCheckmate.possibleMoves = moves.king_ghoul();
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whiteKnight_ghoul' || piece == 'blackKnight_ghoul') {
    pieceInfo.checkCheckmate.possibleMoves = moves.knight_ghoul;
    pieceInfo.checkCheckmate.checkTheJump = false;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whitePawn_ghoul') {
    pieceInfo.checkCheckmate.possibleMoves = moves.whitePawn_ghoul;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'blackPawn_ghoul') {
    pieceInfo.checkCheckmate.possibleMoves = moves.blackPawn_ghoul;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whiteQueen_ghost' || piece == 'blackQueen_ghost') {
    pieceInfo.checkCheckmate.possibleMoves = moves.queen_ghost;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whiteRook_ghost' || piece == 'blackRook_ghost') {
    pieceInfo.checkCheckmate.possibleMoves = moves.rook_ghost;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whiteBishop_ghost' || piece == 'blackBishop_ghost') {
    pieceInfo.checkCheckmate.possibleMoves = moves.bishop_ghost;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whiteKing_ghost' || piece == 'blackKing_ghost') {
    pieceInfo.checkCheckmate.possibleMoves = moves.king_ghost();
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whiteKnight_ghost' || piece == 'blackKnight_ghost') {
    pieceInfo.checkCheckmate.possibleMoves = moves.knight_ghost;
    pieceInfo.checkCheckmate.checkTheJump = false;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whitePawn_ghost') {
    pieceInfo.checkCheckmate.possibleMoves = moves.whitePawn_ghost;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'blackPawn_ghost') {
    pieceInfo.checkCheckmate.possibleMoves = moves.blackPawn_ghost;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whiteQueen_murderous' || piece == 'blackQueen_murderous') {
    pieceInfo.checkCheckmate.possibleMoves = moves.queen_murderous;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whiteRook_murderous' || piece == 'blackRook_murderous') {
    pieceInfo.checkCheckmate.possibleMoves = moves.rook_murderous;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whiteBishop_murderous' || piece == 'blackBishop_murderous') {
    pieceInfo.checkCheckmate.possibleMoves = moves.bishop_murderous;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whiteKing_murderous' || piece == 'blackKing_murderous') {
    pieceInfo.checkCheckmate.possibleMoves = moves.king_murderous();
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whiteKnight_murderous' || piece == 'blackKnight_murderous') {
    pieceInfo.checkCheckmate.possibleMoves = moves.knight_murderous;
    pieceInfo.checkCheckmate.checkTheJump = false;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whitePawn_murderous') {
    pieceInfo.checkCheckmate.possibleMoves = moves.whitePawn_murderous;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'blackPawn_murderous') {
    pieceInfo.checkCheckmate.possibleMoves = moves.blackPawn_murderous;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whiteSinisterMinister' || piece == 'blackSinisterMinister') {
    pieceInfo.checkCheckmate.possibleMoves = moves.sinisterMinister;
    pieceInfo.checkCheckmate.checkTheJump = false;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whiteRoyalKnight' || piece == 'blackRoyalKnight') {
    pieceInfo.checkCheckmate.possibleMoves = moves.royalKnight;
    pieceInfo.checkCheckmate.checkTheJump = false;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whiteCamel_knight' || piece == 'blackCamel_knight') {
    pieceInfo.checkCheckmate.possibleMoves = moves.camel_knight;
    pieceInfo.checkCheckmate.checkTheJump = false;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whiteSlidingKing' || piece == 'blackSlidingKing') {
    pieceInfo.checkCheckmate.possibleMoves = moves.slidingKing();
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'blackColorChangingBishop' || piece == 'whiteColorChangingBishop') {
    pieceInfo.checkCheckmate.possibleMoves = moves.colorChangingBishop;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whiteDisabledKnight' || piece == 'blackDisabledKnight') {
    pieceInfo.checkCheckmate.possibleMoves = moves.disabledKnight;
    pieceInfo.checkCheckmate.checkTheJump = false;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whiteSpiderKnight' || piece == 'blackSpiderKnight') {
    pieceInfo.checkCheckmate.possibleMoves = moves.spiderKnight;
    pieceInfo.checkCheckmate.checkTheJump = false;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'white3Elephant' || piece == 'black3Elephant') {
    pieceInfo.checkCheckmate.possibleMoves = moves.threeElephant;
    pieceInfo.checkCheckmate.checkTheJump = false;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whitePawn_mf3') {
    pieceInfo.checkCheckmate.possibleMoves = moves.whitePawn_mf3;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'blackPawn_mf3') {
    pieceInfo.checkCheckmate.possibleMoves = moves.blackPawn_mf3;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whitePawn_mf2_af1l1r1') {
    pieceInfo.checkCheckmate.possibleMoves = moves.whitePawn_mf2_af1l1r1;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'blackPawn_mf2_af1l1r1') {
    pieceInfo.checkCheckmate.possibleMoves = moves.blackPawn_mf2_af1l1r1;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whitePawn_mf2_af1al1ar1b1') {
    pieceInfo.checkCheckmate.possibleMoves = moves.whitePawn_mf2_af1al1ar1b1;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'blackPawn_mf2_af1al1ar1b1') {
    pieceInfo.checkCheckmate.possibleMoves = moves.blackPawn_mf2_af1al1ar1b1;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whitePawn_mf3_af1') {
    pieceInfo.checkCheckmate.possibleMoves = moves.whitePawn_mf3_af1;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'blackPawn_mf3_af1') {
    pieceInfo.checkCheckmate.possibleMoves = moves.blackPawn_mf3_af1;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whitePawn_af1l1r1') {
    pieceInfo.checkCheckmate.possibleMoves = moves.whitePawn_af1l1r1;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'blackPawn_af1l1r1') {
    pieceInfo.checkCheckmate.possibleMoves = moves.blackPawn_af1l1r1;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whiteOctapawnLite') {
    pieceInfo.checkCheckmate.possibleMoves = moves.whiteOctapawnLite;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'blackOctapawnLite') {
    pieceInfo.checkCheckmate.possibleMoves = moves.blackOctapawnLite;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whiteQueen_defuser' || piece == 'blackQueen_defuser') {
    pieceInfo.checkCheckmate.possibleMoves = moves.queen_defuser;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whiteRook_defuser' || piece == 'blackRook_defuser') {
    pieceInfo.checkCheckmate.possibleMoves = moves.rook_defuser;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whiteBishop_defuser' || piece == 'blackBishop_defuser') {
    pieceInfo.checkCheckmate.possibleMoves = moves.bishop_defuser;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whiteKing_defuser' || piece == 'blackKing_defuser') {
    pieceInfo.checkCheckmate.possibleMoves = moves.king_defuser();
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whiteKnight_defuser' || piece == 'blackKnight_defuser') {
    pieceInfo.checkCheckmate.possibleMoves = moves.knight_defuser;
    pieceInfo.checkCheckmate.checkTheJump = false;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whitePawn_defuser') {
    pieceInfo.checkCheckmate.possibleMoves = moves.whitePawn_defuser;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'blackPawn_defuser') {
    pieceInfo.checkCheckmate.possibleMoves = moves.blackPawn_defuser;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whiteQueen_reverseAtomic' || piece == 'blackQueen_reverseAtomic') {
    pieceInfo.checkCheckmate.possibleMoves = moves.queen_reverseAtomic;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whiteRook_reverseAtomic' || piece == 'blackRook_reverseAtomic') {
    pieceInfo.checkCheckmate.possibleMoves = moves.rook_reverseAtomic;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whiteBishop_reverseAtomic' || piece == 'blackBishop_reverseAtomic') {
    pieceInfo.checkCheckmate.possibleMoves = moves.bishop_reverseAtomic;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whiteKing_reverseAtomic' || piece == 'blackKing_reverseAtomic') {
    pieceInfo.checkCheckmate.possibleMoves = moves.king_reverseAtomic();
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whiteKnight_reverseAtomic' || piece == 'blackKnight_reverseAtomic') {
    pieceInfo.checkCheckmate.possibleMoves = moves.knight_reverseAtomic;
    pieceInfo.checkCheckmate.checkTheJump = false;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whitePawn_reverseAtomic') {
    pieceInfo.checkCheckmate.possibleMoves = moves.whitePawn_reverseAtomic;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'blackPawn_reverseAtomic') {
    pieceInfo.checkCheckmate.possibleMoves = moves.blackPawn_reverseAtomic;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whitePawn_mf1f2_al1r1') {
    pieceInfo.checkCheckmate.possibleMoves = moves.whitePawn_mf1f2_al1r1;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'blackPawn_mf1f2_al1r1') {
    pieceInfo.checkCheckmate.possibleMoves = moves.blackPawn_mf1f2_al1r1;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whitePawn_mf1f2_af1l1r1') {
    pieceInfo.checkCheckmate.possibleMoves = moves.whitePawn_mf1f2_al1r1;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'blackPawn_mf1f2_af1l1r1') {
    pieceInfo.checkCheckmate.possibleMoves = moves.blackPawn_mf1f2_al1r1;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whitePawn_mf1f2_af1l1r1al1ar1') {
    pieceInfo.checkCheckmate.possibleMoves = moves.whitePawn_mf1f2_af1l1r1al1ar1;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'blackPawn_mf1f2_af1l1r1al1ar1') {
    pieceInfo.checkCheckmate.possibleMoves = moves.blackPawn_mf1f2_af1l1r1al1ar1;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whitePawn_mf1f2_al1r1al1ar1') {
    pieceInfo.checkCheckmate.possibleMoves = moves.whitePawn_mf1f2_al1r1al1ar1;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'blackPawn_mf1f2_al1r1al1ar1') {
    pieceInfo.checkCheckmate.possibleMoves = moves.blackPawn_mf1f2_al1r1al1ar1;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whitePawn_mf1f2_al1r1dbl1dbr1') {
    pieceInfo.checkCheckmate.possibleMoves = moves.whitePawn_mf1f2_al1r1dbl1dbr1;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'blackPawn_mf1f2_al1r1dbl1dbr1') {
    pieceInfo.checkCheckmate.possibleMoves = moves.blackPawn_mf1f2_al1r1dbl1dbr1;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whitePawn_mf1f2f3_al1r1') {
    pieceInfo.checkCheckmate.possibleMoves = moves.whitePawn_mf1f2f3_al1r1;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'blackPawn_mf1f2f3_al1r1') {
    pieceInfo.checkCheckmate.possibleMoves = moves.blackPawn_mf1f2f3_al1r1;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whitePawn_mf1f2_adb1dbl1dbr1') {
    pieceInfo.checkCheckmate.possibleMoves = moves.whitePawn_mf1f2_adb1dbl1dbr1;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'blackPawn_mf1f2_adb1dbl1dbr1') {
    pieceInfo.checkCheckmate.possibleMoves = moves.blackPawn_mf1f2_adb1dbl1dbr1;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whiteQueen_phantom' || piece == 'blackQueen_phantom') {
    pieceInfo.checkCheckmate.possibleMoves = moves.queen_phantom;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whiteRook_phantom' || piece == 'blackRook_phantom') {
    pieceInfo.checkCheckmate.possibleMoves = moves.rook_phantom;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whiteBishop_phantom' || piece == 'blackBishop_phantom') {
    pieceInfo.checkCheckmate.possibleMoves = moves.bishop_phantom;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whiteKing_phantom' || piece == 'blackKing_phantom') {
    pieceInfo.checkCheckmate.possibleMoves = moves.king_phantom();
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whiteKnight_phantom' || piece == 'blackKnight_phantom') {
    pieceInfo.checkCheckmate.possibleMoves = moves.knight_phantom;
    pieceInfo.checkCheckmate.checkTheJump = false;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whitePawn_phantom') {
    pieceInfo.checkCheckmate.possibleMoves = moves.whitePawn_phantom;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'blackPawn_phantom') {
    pieceInfo.checkCheckmate.possibleMoves = moves.blackPawn_phantom;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whiteQueen_crowding' || piece == 'blackQueen_crowding') {
    pieceInfo.checkCheckmate.possibleMoves = moves.queen_crowding;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whiteRook_crowding' || piece == 'blackRook_crowding') {
    pieceInfo.checkCheckmate.possibleMoves = moves.rook_crowding;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whiteBishop_crowding' || piece == 'blackBishop_crowding') {
    pieceInfo.checkCheckmate.possibleMoves = moves.bishop_crowding;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whiteKing_crowding' || piece == 'blackKing_crowding') {
    pieceInfo.checkCheckmate.possibleMoves = moves.king_crowding();
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whiteKnight_crowding' || piece == 'blackKnight_crowding') {
    pieceInfo.checkCheckmate.possibleMoves = moves.knight_crowding;
    pieceInfo.checkCheckmate.checkTheJump = false;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whitePawn_crowding') {
    pieceInfo.checkCheckmate.possibleMoves = moves.whitePawn_crowding;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'blackPawn_crowding') {
    pieceInfo.checkCheckmate.possibleMoves = moves.blackPawn_crowding;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whiteQueen_stacking' || piece == 'blackQueen_stacking') {
    pieceInfo.checkCheckmate.possibleMoves = moves.queen_stacking;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whiteRook_stacking' || piece == 'blackRook_stacking') {
    pieceInfo.checkCheckmate.possibleMoves = moves.rook_stacking;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whiteBishop_stacking' || piece == 'blackBishop_stacking') {
    pieceInfo.checkCheckmate.possibleMoves = moves.bishop_stacking;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whiteKing_stacking' || piece == 'blackKing_stacking') {
    pieceInfo.checkCheckmate.possibleMoves = moves.king_stacking();
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whiteKnight_stacking' || piece == 'blackKnight_stacking') {
    pieceInfo.checkCheckmate.possibleMoves = moves.knight_stacking;
    pieceInfo.checkCheckmate.checkTheJump = false;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whitePawn_stacking') {
    pieceInfo.checkCheckmate.possibleMoves = moves.whitePawn_stacking;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'blackPawn_stacking') {
    pieceInfo.checkCheckmate.possibleMoves = moves.blackPawn_stacking;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whitePawn_mf1_al1r1al1ar1') {
    pieceInfo.checkCheckmate.possibleMoves = moves.whitePawn_mf1_al1r1al1ar1;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'blackPawn_mf1_al1r1al1ar1') {
    pieceInfo.checkCheckmate.possibleMoves = moves.blackPawn_mf1_al1r1al1ar1;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whitePawn_mf1_af1al1ar1dl1dr1') {
    pieceInfo.checkCheckmate.possibleMoves = moves.whitePawn_mf1_af1al1ar1dl1dr1;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'blackPawn_mf1_af1al1ar1dl1dr1') {
    pieceInfo.checkCheckmate.possibleMoves = moves.blackPawn_mf1_af1al1ar1dl1dr1;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whiteQueen_promotion' || piece == 'blackQueen_promotion') {
    pieceInfo.checkCheckmate.possibleMoves = moves.queen_promotion;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whiteRook_promotion' || piece == 'blackRook_promotion') {
    pieceInfo.checkCheckmate.possibleMoves = moves.rook_promotion;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whiteBishop_promotion' || piece == 'blackBishop_promotion') {
    pieceInfo.checkCheckmate.possibleMoves = moves.bishop_promotion;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whiteKnight_promotion' || piece == 'blackKnight_promotion') {
    pieceInfo.checkCheckmate.possibleMoves = moves.knight_promotion;
    pieceInfo.checkCheckmate.checkTheJump = false;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whiteQueen_infinite' || piece == 'blackQueen_infinite') {
    pieceInfo.checkCheckmate.possibleMoves = moves.queen_infinite;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whiteRook_infinite' || piece == 'blackRook_infinite') {
    pieceInfo.checkCheckmate.possibleMoves = moves.rook_infinite;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whiteBishop_infinite' || piece == 'blackBishop_infinite') {
    pieceInfo.checkCheckmate.possibleMoves = moves.bishop_infinite;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whiteKnight_infinite' || piece == 'blackKnight_infinite') {
    pieceInfo.checkCheckmate.possibleMoves = moves.knight_infinite;
    pieceInfo.checkCheckmate.checkTheJump = false;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whitePawn_infinite') {
    pieceInfo.checkCheckmate.possibleMoves = moves.whitePawn_infinite;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'blackPawn_infinite') {
    pieceInfo.checkCheckmate.possibleMoves = moves.blackPawn_infinite;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whiteRook_capturetheflag' || piece == 'blackRook_capturetheflag') {
    pieceInfo.checkCheckmate.possibleMoves = moves.rook_capturetheflag;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whiteBishop_capturetheflag' || piece == 'blackBishop_capturetheflag') {
    pieceInfo.checkCheckmate.possibleMoves = moves.bishop_capturetheflag;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whiteKnight_capturetheflag' || piece == 'blackKnight_capturetheflag') {
    pieceInfo.checkCheckmate.possibleMoves = moves.knight_capturetheflag;
    pieceInfo.checkCheckmate.checkTheJump = false;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whitePawn_capturetheflag') {
    pieceInfo.checkCheckmate.possibleMoves = moves.whitePawn_capturetheflag;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'blackPawn_capturetheflag') {
    pieceInfo.checkCheckmate.possibleMoves = moves.blackPawn_capturetheflag;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whiteRook_cloning' || piece == 'blackRook_cloning') {
    pieceInfo.checkCheckmate.possibleMoves = moves.rook_cloning;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whiteBishop_cloning' || piece == 'blackBishop_cloning') {
    pieceInfo.checkCheckmate.possibleMoves = moves.bishop_cloning;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whiteKnight_cloning' || piece == 'blackKnight_cloning') {
    pieceInfo.checkCheckmate.possibleMoves = moves.knight_cloning;
    pieceInfo.checkCheckmate.checkTheJump = false;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whitePawn_cloning') {
    pieceInfo.checkCheckmate.possibleMoves = moves.whitePawn_cloning;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'blackPawn_cloning') {
    pieceInfo.checkCheckmate.possibleMoves = moves.blackPawn_cloning;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whiteQueen_onemove' || piece == 'blackQueen_onemove') {
    pieceInfo.checkCheckmate.possibleMoves = moves.queen_onemove;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whiteRook_onemove' || piece == 'blackRook_onemove') {
    pieceInfo.checkCheckmate.possibleMoves = moves.rook_onemove;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whiteBishop_onemove' || piece == 'blackBishop_onemove') {
    pieceInfo.checkCheckmate.possibleMoves = moves.bishop_onemove;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whiteKing_onemove' || piece == 'blackKing_onemove') {
    pieceInfo.checkCheckmate.possibleMoves = moves.king_onemove();
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whiteKnight_onemove' || piece == 'blackKnight_onemove') {
    pieceInfo.checkCheckmate.possibleMoves = moves.knight_onemove;
    pieceInfo.checkCheckmate.checkTheJump = false;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whitePawn_onemove') {
    pieceInfo.checkCheckmate.possibleMoves = moves.whitePawn_onemove;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'blackPawn_onemove') {
    pieceInfo.checkCheckmate.possibleMoves = moves.blackPawn_onemove;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whiteblackQueen_shared') {
    pieceInfo.checkCheckmate.possibleMoves = moves.queen_shared;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whiteblackRook_shared') {
    pieceInfo.checkCheckmate.possibleMoves = moves.rook_shared;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whiteblackBishop_shared') {
    pieceInfo.checkCheckmate.possibleMoves = moves.bishop_shared;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whiteblackKnight_shared') {
    pieceInfo.checkCheckmate.possibleMoves = moves.knight_shared;
    pieceInfo.checkCheckmate.checkTheJump = false;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whiteblackPawn_shared') {
    pieceInfo.checkCheckmate.possibleMoves = moves.whitePawn_shared;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'blackwhitePawn_shared') {
    pieceInfo.checkCheckmate.possibleMoves = moves.blackPawn_shared;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whiteQueen_fragile' || piece == 'blackQueen_fragile') {
    pieceInfo.checkCheckmate.possibleMoves = moves.queen_fragile;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whiteRook_fragile' || piece == 'blackRook_fragile') {
    pieceInfo.checkCheckmate.possibleMoves = moves.rook_fragile;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whiteBishop_fragile' || piece == 'blackBishop_fragile') {
    pieceInfo.checkCheckmate.possibleMoves = moves.bishop_fragile;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whiteKing_fragile' || piece == 'blackKing_fragile') {
    pieceInfo.checkCheckmate.possibleMoves = moves.king_fragile();
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whiteKnight_fragile' || piece == 'blackKnight_fragile') {
    pieceInfo.checkCheckmate.possibleMoves = moves.knight_fragile;
    pieceInfo.checkCheckmate.checkTheJump = false;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'whitePawn_fragile') {
    pieceInfo.checkCheckmate.possibleMoves = moves.whitePawn_fragile;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  } else if (piece == 'blackPawn_fragile') {
    pieceInfo.checkCheckmate.possibleMoves = moves.blackPawn_fragile;
    pieceInfo.checkCheckmate.checkTheJump = true;
    pieceInfo.checkCheckmate.special = false;
  }
}
function checkCheckmate(color) {
  let colorInCheck;
  if (color == 'white') {
    colorInCheck = whiteInCheck;
  } else {
    colorInCheck = blackInCheck;
  }
  totalPossibleMovesReal = [];
  boardSquares.forEach(function(value) {
    let square = value;
    let coords = convertSquareToCoords(value);
    let piece = document.getElementById(square).classList[0];
    if (piece != null) {
      let dotThis = false;
      //BOOKMARK
      pieceInfo.checkCheckmate.special = false;
      getPieceInfo(piece, coords);
      if (piece.includes(color)) {
        if (pieceInfo.checkCheckmate.checkTheJump) {
          if (piece.includes('pawn') || piece.includes('Pawn')) {
            dotAllMovesPawn(pieceInfo.checkCheckmate.possibleMoves, piece, dotThis, coords, true);
            let a = checkEnPassant(coords, color);
            a.forEach(function(value) {
              totalPossibleMovesReal.push(value);
            });
          } else {
            dotAllMoves(piece, pieceInfo.checkCheckmate.possibleMoves, coords, dotThis, square);
          }
        } else if (!pieceInfo.checkCheckmate.checkTheJump && !pieceInfo.checkCheckmate.special) {
          dotAllMovesNoJump(piece, pieceInfo.checkCheckmate.possibleMoves, coords, dotThis, square);
        }
        if (pieceInfo.checkCheckmate.special) {
          let jump = pieceInfo.checkCheckmate.possibleMoves.jump;
          let noJump = pieceInfo.checkCheckmate.possibleMoves.noJump;
          dotAllMoves(piece, jump, coords, dotThis, square);
          dotAllMovesNoJump(piece, noJump, coords, dotThis, square);
        }
      }
    }
  });
  if (totalPossibleMovesReal.length == 0 && colorInCheck) {
    return true;
  } else {
    return false;
  }
}
function endGame(lose) {
  if (lose == '' && lose == null) {
    lose = moveColor;
  }
  console.log('GAME OVER!');
  let amongus = document.createElement('div');
  let amongsBtn = document.createElement('button');
  board.appendChild(amongus);
  amongus.classList.add('amongs');
  amongus.appendChild(amongsBtn);
  amongsBtn.classList.add('amongsBtn');
  if (lose == 'white') {
    amongusColor = 'Black';
  } else {
    amongusColor = 'White';
  }
  amongus.innerHTML = `${amongusColor} Wins!`;
  amongus.appendChild(amongsBtn);
  amongsBtn.innerHTML = `Close`;
  amongsBtn.addEventListener('click', function() {
    amongus.style.display = 'none';
  });
}
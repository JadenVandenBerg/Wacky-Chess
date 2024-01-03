function superpawn(square, coords, dotThis, piece) {
  let possibleMoves = moves.superpawn.jump;
  let dontCheckJump = moves.superpawn.noJump;
  dotAllMoves(piece, possibleMoves, coords, dotThis, square);
  dotAllMovesNoJump(piece, dontCheckJump, coords, dotThis, square);
}
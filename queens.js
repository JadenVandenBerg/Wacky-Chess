function queen(square, coords, dotThis, piece) {
  let possibleMoves = moves.queen;
  dotAllMoves(piece, possibleMoves, coords, dotThis, square);
}
function minister(square, coords, dotThis, piece) {
  let possibleMoves = moves.minister;
  dotAllMoves(piece, possibleMoves, coords, dotThis, square);
}
function reverseMinister(square, coords, dotThis, piece) {
  let possibleMoves = moves.reverseMinister;
  dotAllMoves(piece, possibleMoves, coords, dotThis, square);
}
function amazon(square, coords, dotThis, piece) {
  let possibleMoves = moves.amazon.jump;
  let dontCheckJump = moves.amazon.noJump;
  dotAllMoves(piece, possibleMoves, coords, dotThis, square);
  dotAllMovesNoJump(piece, dontCheckJump, coords, dotThis, square);
}
function queen_atomic(square, coords, dotThis, piece) {
  let possibleMoves = moves.queen_atomic;
  dotAllMoves(piece, possibleMoves, coords, dotThis, square);
}
function queen_ghoul(square, coords, dotThis, piece) {
  let possibleMoves = moves.queen_ghoul;
  dotAllMoves(piece, possibleMoves, coords, dotThis, square);
}
function queen_ghost(square, coords, dotThis, piece) {
  let possibleMoves = moves.queen_ghost;
  dotAllMoves(piece, possibleMoves, coords, dotThis, square);
}
function queen_murderous(square, coords, dotThis, piece) {
  let possibleMoves = moves.queen_murderous;
  dotAllMoves(piece, possibleMoves, coords, dotThis, square);
}
function sinisterMinister(square, coords, dotThis, piece) {
  let possibleMoves = moves.sinisterMinister;
  dotAllMovesNoJump(piece, possibleMoves, coords, dotThis, square);
}
function queen_defuser(square, coords, dotThis, piece) {
  let possibleMoves = moves.queen_defuser;
  dotAllMoves(piece, possibleMoves, coords, dotThis, square);
}
/* 10 */
function queen_reverseAtomic(square, coords, dotThis, piece) {
  let possibleMoves = moves.queen_reverseAtomic;
  dotAllMoves(piece, possibleMoves, coords, dotThis, square);
}
function queen_phantom(square, coords, dotThis, piece) {
  let possibleMoves = moves.queen_phantom;
  dotAllMoves(piece, possibleMoves, coords, dotThis, square);
}
function queen_crowding(square, coords, dotThis, piece) {
  let possibleMoves = moves.queen_crowding;
  dotAllMoves(piece, possibleMoves, coords, dotThis, square);
}
function queen_stacking(square, coords, dotThis, piece) {
  let possibleMoves = moves.queen_stacking;
  dotAllMoves(piece, possibleMoves, coords, dotThis, square);
}
function queen_promotion(square, coords, dotThis, piece) {
  let possibleMoves = moves.queen_promotion;
  dotAllMoves(piece, possibleMoves, coords, dotThis, square);
}
function queen_infinite(square, coords, dotThis, piece) {
  let possibleMoves = moves.queen_infinite;
  dotAllMoves(piece, possibleMoves, coords, dotThis, square);
}
function queen_capturetheflag(square, coords, dotThis, piece) {
  let possibleMoves = moves.queen_capturetheflag;
  dotAllMoves(piece, possibleMoves, coords, dotThis, square);
}
function queen_onemove(square, coords, dotThis, piece) {
  let possibleMoves = moves.queen_onemove;
  dotAllMoves(piece, possibleMoves, coords, dotThis, square);
}
function queen_shared(square, coords, dotThis, piece) {
  let possibleMoves = moves.queen_shared;
  dotAllMoves(piece, possibleMoves, coords, dotThis, square);
}
function queen_fragile(square, coords, dotThis, piece) {
  let possibleMoves = moves.queen_fragile;
  dotAllMoves(piece, possibleMoves, coords, dotThis, square);
}
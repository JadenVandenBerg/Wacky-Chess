function bishop(square, coords, dotThis, piece) {
  let possibleMoves = moves.bishop;
  dotAllMoves(piece, possibleMoves, coords, dotThis, square);
}
function princess(square, coords, dotThis, piece) {
  let possibleMoves = moves.princess.jump;
  let dontCheckJump = moves.princess.noJump;
  dotAllMoves(piece, possibleMoves, coords, dotThis, square);
  dotAllMovesNoJump(piece, dontCheckJump, coords, dotThis, square);
}
function superBishop(square, coords, dotThis, piece) {
  let possibleMoves = moves.superBishop;
  dotAllMoves(piece, possibleMoves, coords, dotThis, square);
}
function bishop_atomic(square, coords, dotThis, piece) {
  let possibleMoves = moves.bishop_atomic;
  dotAllMoves(piece, possibleMoves, coords, dotThis, square);
}
function bishop_ghoul(square, coords, dotThis, piece) {
  let possibleMoves = moves.bishop_ghoul;
  dotAllMoves(piece, possibleMoves, coords, dotThis, square);
}
function bishop_ghost(square, coords, dotThis, piece) {
  let possibleMoves = moves.bishop_ghost;
  dotAllMoves(piece, possibleMoves, coords, dotThis, square);
}
function bishop_murderous(square, coords, dotThis, piece) {
  let possibleMoves = moves.bishop_murderous;
  dotAllMoves(piece, possibleMoves, coords, dotThis, square);
}
function colorChangingBishop(square, coords, dotThis, piece) {
  let possibleMoves = moves.colorChangingBishop;
  dotAllMoves(piece, possibleMoves, coords, dotThis, square);
}
function bishop_defuser(square, coords, dotThis, piece) {
  let possibleMoves = moves.bishop_defuser;
  dotAllMoves(piece, possibleMoves, coords, dotThis, square);
}
function bishop_reverseAtomic(square, coords, dotThis, piece) {
  let possibleMoves = moves.bishop_reverseAtomic;
  dotAllMoves(piece, possibleMoves, coords, dotThis, square);
}
/* 10 */
function bishop_phantom(square, coords, dotThis, piece) {
  let possibleMoves = moves.bishop_phantom;
  dotAllMoves(piece, possibleMoves, coords, dotThis, square);
}
function bishop_crowding(square, coords, dotThis, piece) {
  let possibleMoves = moves.bishop_crowding;
  dotAllMoves(piece, possibleMoves, coords, dotThis, square);
}
function bishop_stacking(square, coords, dotThis, piece) {
  let possibleMoves = moves.bishop_stacking;
  dotAllMoves(piece, possibleMoves, coords, dotThis, square);
}
function bishop_promotion(square, coords, dotThis, piece) {
  let possibleMoves = moves.bishop_promotion;
  dotAllMoves(piece, possibleMoves, coords, dotThis, square);
}
function bishop_infinite(square, coords, dotThis, piece) {
  let possibleMoves = moves.bishop_infinite;
  dotAllMoves(piece, possibleMoves, coords, dotThis, square);
}
function bishop_capturetheflag(square, coords, dotThis, piece) {
  let possibleMoves = moves.bishop_capturetheflag;
  dotAllMoves(piece, possibleMoves, coords, dotThis, square);
}
function bishop_cloning(square, coords, dotThis, piece) {
  let possibleMoves = moves.bishop_cloning;
  dotAllMoves(piece, possibleMoves, coords, dotThis, square);
}
function bishop_onemove(square, coords, dotThis, piece) {
  let possibleMoves = moves.bishop_onemove;
  dotAllMoves(piece, possibleMoves, coords, dotThis, square);
}
function bishop_shared(square, coords, dotThis, piece) {
  let possibleMoves = moves.bishop_shared;
  dotAllMoves(piece, possibleMoves, coords, dotThis, square);
}
function bishop_fragile(square, coords, dotThis, piece) {
  let possibleMoves = moves.bishop_fragile;
  dotAllMoves(piece, possibleMoves, coords, dotThis, square);
}
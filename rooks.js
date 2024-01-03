function rook(square, coords, dotThis, piece) {
  let possibleMoves = moves.rook;
  dotAllMoves(piece, possibleMoves, coords, dotThis, square);
}
function superRook(square, coords, dotThis, piece) {
  let possibleMoves = moves.superRook;
  dotAllMoves(piece, possibleMoves, coords, dotThis, square);
}
function empress(square, coords, dotThis, piece) {
  let possibleMoves = moves.empress.jump;
  let dontCheckJump = moves.empress.noJump;
  dotAllMoves(piece, possibleMoves, coords, dotThis, square);
  dotAllMovesNoJump(piece, dontCheckJump, coords, dotThis, square);
}
function rook_atomic(square, coords, dotThis, piece) {
  let possibleMoves = moves.rook_atomic;
  dotAllMoves(piece, possibleMoves, coords, dotThis, square);
}
function rook_ghoul(square, coords, dotThis, piece) {
  let possibleMoves = moves.rook_ghoul;
  dotAllMoves(piece, possibleMoves, coords, dotThis, square);
}
function rook_ghost(square, coords, dotThis, piece) {
  let possibleMoves = moves.rook_ghost;
  dotAllMoves(piece, possibleMoves, coords, dotThis, square);
}
function rook_murderous(square, coords, dotThis, piece) {
  let possibleMoves = moves.rook_murderous;
  dotAllMoves(piece, possibleMoves, coords, dotThis, square);
}
function rook_defuser(square, coords, dotThis, piece) {
  let possibleMoves = moves.rook_defuser;
  dotAllMoves(piece, possibleMoves, coords, dotThis, square);
}
function rook_reverseAtomic(square, coords, dotThis, piece) {
  let possibleMoves = moves.rook_reverseAtomic;
  dotAllMoves(piece, possibleMoves, coords, dotThis, square);
}
function rook_phantom(square, coords, dotThis, piece) {
  let possibleMoves = moves.rook_phantom;
  dotAllMoves(piece, possibleMoves, coords, dotThis, square);
}
/* 10 */
function rook_crowding(square, coords, dotThis, piece) {
  let possibleMoves = moves.rook_crowding;
  dotAllMoves(piece, possibleMoves, coords, dotThis, square);
}
function rook_stacking(square, coords, dotThis, piece) {
  let possibleMoves = moves.rook_stacking;
  dotAllMoves(piece, possibleMoves, coords, dotThis, square);
}
function rook_promotion(square, coords, dotThis, piece) {
  let possibleMoves = moves.rook_promotion;
  dotAllMoves(piece, possibleMoves, coords, dotThis, square);
}
function rook_infinite(square, coords, dotThis, piece) {
  let possibleMoves = moves.rook_infinite;
  dotAllMoves(piece, possibleMoves, coords, dotThis, square);
}
function rook_capturetheflag(square, coords, dotThis, piece) {
  let possibleMoves = moves.rook_capturetheflag;
  dotAllMoves(piece, possibleMoves, coords, dotThis, square);
}
function rook_cloning(square, coords, dotThis, piece) {
  let possibleMoves = moves.rook_cloning;
  dotAllMoves(piece, possibleMoves, coords, dotThis, square);
}
function rook_onemove(square, coords, dotThis, piece) {
  let possibleMoves = moves.rook_onemove;
  dotAllMoves(piece, possibleMoves, coords, dotThis, square);
}
function rook_shared(square, coords, dotThis, piece) {
  let possibleMoves = moves.rook_shared;
  dotAllMoves(piece, possibleMoves, coords, dotThis, square);
}
function rook_fragile(square, coords, dotThis, piece) {
  let possibleMoves = moves.rook_fragile;
  dotAllMoves(piece, possibleMoves, coords, dotThis, square);
}
let board = document.getElementById('board');
if (board == null) {
  board = document.getElementById('boardPuzzle');
}
let playerPieces = {
    white: {
        pawns: [],
        knights: [],
        bishops: [],
        rooks: [],
        queen: '',
        king: ''
    },
    black: {
        pawns: [],
        knights: [],
        bishops: [],
        rooks: [],
        queen: '',
        king: ''
    }
}
let boardSquares = ['a1','a2','a3','a4','a5','a6','a7','a8','b1','b2','b3','b4','b5','b6','b7','b8','c1','c2','c3','c4','c5','c6','c7','c8','d1','d2','d3','d4','d5','d6','d7','d8','e1','e2','e3','e4','e5','e6','e7','e8','f1','f2','f3','f4','f5','f6','f7','f8','g1','g2','g3','g4','g5','g6','g7','g8','h1','h2','h3','h4','h5','h6','h7','h8'];
function setUpBoardRandom() {
    boardSquares.forEach(function(value) {
        document.getElementById(value).classList.remove(...document.getElementById(value).classList);
    });
    setTimeout(function() {
        wrookclass = document.getElementById('h1').classList[0];
        brookclass = document.getElementById('a1').classList[0];
        wkingclass = document.getElementById('h5').classList[0];
        bkingclass = document.getElementById('a5').classList[0];
        getPlayerPieces();
        checkDuplicate();
    }, 1000);
    moveColor = 'white';
    let whitePawns = ['g1','g2','g3','g4','g5','g6','g7','g8'];
    whitePawns.forEach(function(value) {
        let index = Math.floor( Math.random()*totalPieces.whitePawns.length );
        console.log(totalPieces.whitePawns[index])
        document.getElementById(value).classList.add(totalPieces.whitePawns[index]);
        totalPieces.whitePawns = totalPieces.whitePawns.filter(xyzAmongUs => xyzAmongUs != totalPieces.whitePawns[index]);
    });
    let whiteRooks = ['h1','h8'];
    whiteRooks.forEach(function(value) {
        let index = Math.floor( Math.random()*totalPieces.whiteRooks.length );
        document.getElementById(value).classList.add(totalPieces.whiteRooks[index]);
        totalPieces.whiteRooks = totalPieces.whiteRooks.filter(xyzAmongUs => xyzAmongUs != totalPieces.whiteRooks[index]);
    });
    let whiteBishops = ['h3','h6'];
    whiteBishops.forEach(function(value) {
        let index = Math.floor( Math.random()*totalPieces.whiteBishops.length );
        document.getElementById(value).classList.add(totalPieces.whiteBishops[index]);
        totalPieces.whiteBishops = totalPieces.whiteBishops.filter(xyzAmongUs => xyzAmongUs != totalPieces.whiteBishops[index]);
    });
    let whiteKnights = ['h2','h7'];
    whiteKnights.forEach(function(value) {
        let index = Math.floor( Math.random()*totalPieces.whiteKnights.length );
        document.getElementById(value).classList.add(totalPieces.whiteKnights[index]);
        totalPieces.whiteKnights = totalPieces.whiteKnights.filter(xyzAmongUs => xyzAmongUs != totalPieces.whiteKnights[index]);
    });
    let kingIdx = Math.floor( Math.random()*totalPieces.whiteKings.length );
    document.getElementById('h5').classList.add(totalPieces.whiteKings[kingIdx]);
    totalPieces.whiteKings = totalPieces.whiteKings.filter(xyzAmongUs => xyzAmongUs != totalPieces.whiteKings[kingIdx]);
    let queenIdx = Math.floor( Math.random()*totalPieces.whiteQueens.length );
    document.getElementById('h4').classList.add(totalPieces.whiteQueens[queenIdx]);
    totalPieces.whiteQueens = totalPieces.whiteQueens.filter(xyzAmongUs => xyzAmongUs != totalPieces.whiteQueens[queenIdx]);

    let blackPawns = ['b1','b2','b3','b4','b5','b6','b7','b8'];
    blackPawns.forEach(function(value) {
        let index = Math.floor( Math.random()*totalPieces.blackPawns.length );
        console.log(totalPieces.blackPawns[index])
        document.getElementById(value).classList.add(totalPieces.blackPawns[index]);
        totalPieces.blackPawns = totalPieces.blackPawns.filter(xyzAmongUs => xyzAmongUs != totalPieces.blackPawns[index]);
    });
    let blackRooks = ['a1','a8'];
    blackRooks.forEach(function(value) {
        let index = Math.floor( Math.random()*totalPieces.blackRooks.length );
        document.getElementById(value).classList.add(totalPieces.blackRooks[index]);
        totalPieces.blackRooks = totalPieces.blackRooks.filter(xyzAmongUs => xyzAmongUs != totalPieces.blackRooks[index]);
    });
    let blackBishops = ['a3','a6'];
    blackBishops.forEach(function(value) {
        let index = Math.floor( Math.random()*totalPieces.blackBishops.length );
        document.getElementById(value).classList.add(totalPieces.blackBishops[index]);
        totalPieces.blackBishops = totalPieces.blackBishops.filter(xyzAmongUs => xyzAmongUs != totalPieces.blackBishops[index]);
    });
    let blackKnights = ['a2','a7'];
    blackKnights.forEach(function(value) {
        let index = Math.floor( Math.random()*totalPieces.blackKnights.length );
        document.getElementById(value).classList.add(totalPieces.blackKnights[index]);
        totalPieces.blackKnights = totalPieces.blackKnights.filter(xyzAmongUs => xyzAmongUs != totalPieces.blackKnights[index]);
    });
    let kingIdx2 = Math.floor( Math.random()*totalPieces.blackKings.length );
    document.getElementById('a5').classList.add(totalPieces.blackKings[kingIdx2]);
    totalPieces.blackKings = totalPieces.blackKings.filter(xyzAmongUs => xyzAmongUs != totalPieces.blackKings[kingIdx2]);
    let queenIdx2 = Math.floor( Math.random()*totalPieces.blackQueens.length );
    document.getElementById('a4').classList.add(totalPieces.blackQueens[queenIdx2]);
    totalPieces.blackQueens = totalPieces.blackQueens.filter(xyzAmongUs => xyzAmongUs != totalPieces.blackQueens[queenIdx2]);
}
function setUpBoard () {
  boardSquares.forEach(function(value) {
    document.getElementById(value).classList.remove(...document.getElementById(value).classList);
  });
  setTimeout(function() {
    wrookclass = document.getElementById('h1').classList[0];
    brookclass = document.getElementById('a1').classList[0];
    wkingclass = document.getElementById('h5').classList[0];
    bkingclass = document.getElementById('a5').classList[0];
    getPlayerPieces();
    checkDuplicate();
  }, 1000);
  moveColor = 'white';
  function normalSet() {
    document.getElementById('g1').classList.add('whitePawn');
    document.getElementById('g2').classList.add('whitePawn');
    document.getElementById('g3').classList.add('whitePawn');
    document.getElementById('g4').classList.add('whitePawn');
    document.getElementById('g5').classList.add('whitePawn');
    document.getElementById('g6').classList.add('whitePawn');
    document.getElementById('g7').classList.add('whitePawn');
    document.getElementById('g8').classList.add('whitePawn');
    document.getElementById('h2').classList.add('whiteKnight');
    document.getElementById('h7').classList.add('whiteKnight');
    document.getElementById('h1').classList.add('whiteRook');
    document.getElementById('h8').classList.add('whiteRook');
    document.getElementById('h5').classList.add('whiteKing');
    document.getElementById('h4').classList.add('whiteQueen');
    document.getElementById('h6').classList.add('whiteBishop');
    document.getElementById('h3').classList.add('whiteBishop');
    document.getElementById('b1').classList.add('blackPawn');
    document.getElementById('b2').classList.add('blackPawn');
    document.getElementById('b3').classList.add('blackPawn');
    document.getElementById('b4').classList.add('blackPawn');
    document.getElementById('b5').classList.add('blackPawn');
    document.getElementById('b6').classList.add('blackPawn');
    document.getElementById('b7').classList.add('blackPawn');
    document.getElementById('b8').classList.add('blackPawn');
    document.getElementById('a2').classList.add('blackKnight');
    document.getElementById('a7').classList.add('blackKnight');
    document.getElementById('a1').classList.add('blackRook');
    document.getElementById('a8').classList.add('blackRook');
    document.getElementById('a5').classList.add('blackKing');
    document.getElementById('a4').classList.add('blackQueen');
    document.getElementById('a6').classList.add('blackBishop');
    document.getElementById('a3').classList.add('blackBishop');
  }
  normalSet();
}
function checkPossibleMoves(square, dotThis, selectClass) {
  let piece = selectClass;
  //let piece = document.getElementById(square).classList[0];
  let coords = convertSquareToCoords(`${square}`);
  let theCheckColor;
  if (piece == 'whitePawn') {
    whitePawn(square, coords, dotThis, piece);
  }
  if (piece == 'blackPawn') {
    blackPawn(square, coords, dotThis, piece);
  }
  if (piece == 'whiteKnight' || piece == 'blackKnight') {
    knight(square, coords, dotThis, piece);
  }
  if (piece == 'whiteBishop' || piece == 'blackBishop') {
    bishop(square, coords, dotThis, piece);
  }
  if (piece == 'whiteRook' || piece == 'blackRook') {
    rook(square, coords, dotThis, piece);
  }
  if (piece == 'whiteQueen' || piece == 'blackQueen') {
    queen(square, coords, dotThis, piece);
  }
  if (piece == 'whiteKing' || piece == 'blackKing') {
    king_piece(square, coords, dotThis, piece);
  }
  if (piece == 'whiteSuperpawn' || piece == 'blackSuperpawn') {
    superpawn(square, coords, dotThis, piece);
  }
  if (piece == 'whiteMan' || piece == 'blackMan') {
    man(square, coords, dotThis, piece);
  }
  if (piece == 'whiteElephant' || piece == 'blackElephant') {
    elephant(square, coords, dotThis, piece);
  }
  if (piece == 'whiteMinister' || piece == 'blackMinister') {
    minister(square, coords, dotThis, piece);
  }
  if (piece == 'whitePrincess' || piece == 'blackPrincess') {
    princess(square, coords, dotThis, piece);
  }
  if (piece == 'whiteEmpress' || piece == 'blackEmpress') {
    empress(square, coords, dotThis, piece);
  }
  if (piece == 'whiteAmazon' || piece == 'blackAmazon') {
    amazon(square, coords, dotThis, piece);
  }
  if (piece == 'whiteReverseMinister' || piece == 'blackReverseMinister') {
    reverseMinister(square, coords, dotThis, piece);
  }
  if (piece == 'white_superBishop' || piece == 'black_superBishop') {
    superBishop(square, coords, dotThis, piece);
  }
  if (piece == 'white_superRook' || piece == 'black_superRook') {
    superRook(square, coords, dotThis, piece);
  }
  if (piece == 'white_superKing' || piece == 'black_superKing') {
    superKing(square, coords, dotThis, piece);
  }
  if (piece == 'white_superKnight' || piece == 'black_superKnight') {
    superKnight(square, coords, dotThis, piece);
  }
  if (piece == 'whiteLongKnight' || piece == 'blackLongKnight') {
    longKnight(square, coords, dotThis, piece);
  }
  if (piece == 'whiteFastKing' || piece == 'blackFastKing') {
    fastKing(square, coords, dotThis, piece);
  }
  if (piece == 'blackHyperFastKing' || piece == 'whiteHyperFastKing') {
    hyperFastKing(square, coords, dotThis, piece);
  }
  if (piece == 'whitePawn_mf1_al1r1f1') {
    wpawn_mf1_al1r1f1(square, coords, dotThis, piece);
  }
  if (piece == 'blackPawn_mf1_al1r1f1') {
    bpawn_mf1_al1r1f1(square, coords, dotThis, piece);
  }
  if (piece == 'blackFivePawn') {
    blackFivePawn(square, coords, dotThis, piece);
  }
  if (piece == 'whiteFivePawn') {
    whiteFivePawn(square, coords, dotThis, piece);
  }
  if (piece == 'blackPawn_mf1_af1') {
    blackPawn_mf1_af1(square, coords, dotThis, piece);
  }
  if (piece == 'whitePawn_mf1_af1') {
    whitePawn_mf1_af1(square, coords, dotThis, piece);
  }
  if (piece == 'whitePawn_mf1_aal1ar1') {
    whitePawn_mf1_aal1ar1(square, coords, dotThis, piece);
  }
  if (piece == 'blackPawn_mf1_aal1ar1') {
    blackPawn_mf1_aal1ar1(square, coords, dotThis, piece);
  }
  /* made since split */
  if (piece == 'whitePawn_mf1_adbl1dbr1') {
    whitePawn_mf1_adbl1dbr1(square, coords, dotThis, piece);
  }
  if (piece == 'blackPawn_mf1_adbl1dbr1') {
    blackPawn_mf1_adbl1dbr1(square, coords, dotThis, piece);
  }
  if (piece == 'whitePawn_mf1_al1r1dl1dr1') {
    whitePawn_mf1_al1r1dl1dr1(square, coords, dotThis, piece);
  }
  if (piece == 'blackPawn_mf1_al1r1dl1dr1') {
    blackPawn_mf1_al1r1dl1dr1(square, coords, dotThis, piece);
  }
  if (piece == 'whiteOctoPawn') {
    whiteOctoPawn(square, coords, dotThis, piece);
  }
  if (piece == 'blackOctoPawn') {
    blackOctoPawn(square, coords, dotThis, piece);
  }
  if (piece == 'whitePawn_mf1_af1dl1dr1') {
    whitePawn_mf1_af1dl1dr1(square, coords, dotThis, piece);
  }
  if (piece == 'blackPawn_mf1_af1dl1dr1') {
    blackPawn_mf1_af1dl1dr1(square, coords, dotThis, piece);
  }
  if (piece == 'whitePawn_mf1_af1b1al1ar1') {
    whitePawn_mf1_af1b1al1ar1(square, coords, dotThis, piece);
  }
  if (piece == 'blackPawn_mf1_af1b1al1ar1') {
    blackPawn_mf1_af1b1al1ar1(square, coords, dotThis, piece);
  }
  if (piece == 'whitePawn_mf1_nfaal1ar1') {
    whitePawn_mf1_nfaal1ar1(square, coords, dotThis, piece);
  }
  if (piece == 'blackPawn_mf1_nfaal1ar1') {
    blackPawn_mf1_nfaal1ar1(square, coords, dotThis, piece);
  }
  if (piece == 'whitePawn_mf2_al1r1') {
    whitePawn_mf2_al1r1(square, coords, dotThis, piece);
  }
  if (piece == 'blackPawn_mf2_al1r1') {
    blackPawn_mf2_al1r1(square, coords, dotThis, piece);
  }
  if (piece == 'whitePawn_mf2') {
    whitePawn_mf2(square, coords, dotThis, piece);
  }
  if (piece == 'blackPawn_mf2') {
    blackPawn_mf2(square, coords, dotThis, piece);
  }
  if (piece == 'whitePawn_mf3') {
    whitePawn_mf3(square, coords, dotThis, piece);
  }
  if (piece == 'blackPawn_mf3') {
    blackPawn_mf3(square, coords, dotThis, piece);
  }
  if (piece == 'whitePawn_mf2_af1') {
    whitePawn_mf2_af1(square, coords, dotThis, piece);
  }
  if (piece == 'blackPawn_mf2_af1') {
    blackPawn_mf2_af1(square, coords, dotThis, piece);
  }
  if (piece == 'blackRook_atomic' || piece == 'whiteRook_atomic') {
    rook_atomic(square, coords, dotThis, piece);
  }
  if (piece == 'blackBishop_atomic' || piece == 'whiteBishop_atomic') {
    bishop_atomic(square, coords, dotThis, piece);
  }
  if (piece == 'blackQueen_atomic' || piece == 'whiteQueen_atomic') {
    queen_atomic(square, coords, dotThis, piece);
  }
  if (piece == 'blackKing_atomic' || piece == 'whiteKing_atomic') {
    king_atomic(square, coords, dotThis, piece);
  }
  if (piece == 'blackKnight_atomic' || piece == 'whiteKnight_atomic') {
    knight_atomic(square, coords, dotThis, piece);
  }
  if (piece == 'blackPawn_atomic') {
    blackPawn_atomic(square, coords, dotThis, piece);
  }
  if (piece == 'whitePawn_atomic') {
    whitePawn_atomic(square, coords, dotThis, piece);
  }
  if (piece == 'blackQueen_ghoul' || piece == 'whiteQueen_ghoul') {
    queen_ghoul(square, coords, dotThis, piece);
  }
  if (piece == 'blackKing_ghoul' || piece == 'whiteKing_ghoul') {
    king_ghoul(square, coords, dotThis, piece);
  }
  if (piece == 'blackKnight_ghoul' || piece == 'whiteKnight_ghoul') {
    knight_ghoul(square, coords, dotThis, piece);
  }
  if (piece == 'blackPawn_ghoul') {
    blackPawn_ghoul(square, coords, dotThis, piece);
  }
  if (piece == 'whitePawn_ghoul') {
    whitePawn_ghoul(square, coords, dotThis, piece);
  }
  if (piece == 'blackRook_ghoul' || piece == 'whiteRook_ghoul') {
    rook_ghoul(square, coords, dotThis, piece);
  }
  if (piece == 'blackBishop_ghoul' || piece == 'whiteBishop_ghoul') {
    bishop_ghoul(square, coords, dotThis, piece);
  }
  if (piece == 'blackQueen_ghost' || piece == 'whiteQueen_ghost') {
    queen_ghost(square, coords, dotThis, piece);
  }
  if (piece == 'blackKing_ghost' || piece == 'whiteKing_ghost') {
    king_ghost(square, coords, dotThis, piece);
  }
  if (piece == 'blackKnight_ghost' || piece == 'whiteKnight_ghost') {
    knight_ghost(square, coords, dotThis, piece);
  }
  if (piece == 'blackPawn_ghost') {
    blackPawn_ghost(square, coords, dotThis, piece);
  }
  if (piece == 'whitePawn_ghost') {
    whitePawn_ghost(square, coords, dotThis, piece);
  }
  if (piece == 'blackRook_ghost' || piece == 'whiteRook_ghost') {
    rook_ghost(square, coords, dotThis, piece);
  }
  if (piece == 'blackBishop_ghost' || piece == 'whiteBishop_ghost') {
    bishop_ghost(square, coords, dotThis, piece);
  }
  if (piece == 'blackQueen_murderous' || piece == 'whiteQueen_murderous') {
    queen_murderous(square, coords, dotThis, piece);
  }
  if (piece == 'blackKing_murderous' || piece == 'whiteKing_murderous') {
    king_murderous(square, coords, dotThis, piece);
  }
  if (piece == 'blackKnight_murderous' || piece == 'whiteKnight_murderous') {
    knight_murderous(square, coords, dotThis, piece);
  }
  if (piece == 'blackPawn_murderous') {
    blackPawn_murderous(square, coords, dotThis, piece);
  }
  if (piece == 'whitePawn_murderous') {
    whitePawn_murderous(square, coords, dotThis, piece);
  }
  if (piece == 'blackRook_murderous' || piece == 'whiteRook_murderous') {
    rook_murderous(square, coords, dotThis, piece);
  }
  if (piece == 'blackBishop_murderous' || piece == 'whiteBishop_murderous') {
    bishop_murderous(square, coords, dotThis, piece);
  }
  if (piece == 'whiteSinisterMinister' || piece == 'blackSinisterMinister') {
    sinisterMinister(square, coords, dotThis, piece);
  }
  if (piece == 'whiteRoyalKnight' || piece == 'blackRoyalKnight') {
    royalKnight(square, coords, dotThis, piece);
  }
  if (piece == 'whiteSlidingKing' || piece == 'blackSlidingKing') {
    slidingKing(square, coords, dotThis, piece);
  }
  if (piece == 'whiteCamel_knight' || piece == 'blackCamel_knight') {
    camel_knight(square, coords, dotThis, piece);
  }
  if (piece == 'whiteColorChangingBishop' || piece == 'blackColorChangingBishop') {
    colorChangingBishop(square, coords, dotThis, piece);
  }
  if (piece == 'whiteDisabledKnight' || piece == 'blackDisabledKnight') {
    disabledKnight(square, coords, dotThis, piece);
  }
  if (piece == 'whiteSpiderKnight' || piece == 'blackSpiderKnight') {
    spiderKnight(square, coords, dotThis, piece);
  }
  if (piece == 'white3Elephant' || piece == 'black3Elephant') {
    threeElephant(square, coords, dotThis, piece);
  }
  if (piece == 'whitePawn_mf4') {
    whitePawn_mf4(square, coords, dotThis, piece);
  }
  if (piece == 'blackPawn_mf4') {
    blackPawn_mf4(square, coords, dotThis, piece);
  }
  if (piece == 'whitePawn_mf2_af1l1r1') {
    whitePawn_mf2_af1l1r1(square, coords, dotThis, piece);
  }
  if (piece == 'blackPawn_mf2_af1l1r1') {
    blackPawn_mf2_af1l1r1(square, coords, dotThis, piece);
  }
  if (piece == 'whitePawn_mf2_af1al1ar1b1') {
    whitePawn_mf2_af1al1ar1b1(square, coords, dotThis, piece);
  }
  if (piece == 'blackPawn_mf2_af1al1ar1b1') {
    blackPawn_mf2_af1al1ar1b1(square, coords, dotThis, piece);
  }
  if (piece == 'whitePawn_mf3_af1') {
    whitePawn_mf3_af1(square, coords, dotThis, piece);
  }
  if (piece == 'blackPawn_mf3_af1') {
    blackPawn_mf3_af1(square, coords, dotThis, piece);
  }
  if (piece == 'blackPawn_af1l1r1') {
    blackPawn_af1l1r1(square, coords, dotThis, piece);
  }
  if (piece == 'whitePawn_af1l1r1') {
    whitePawn_af1l1r1(square, coords, dotThis, piece);
  }
  if (piece == 'whiteOctapawnLite') {
    whiteOctapawnLite(square, coords, dotThis, piece);
  }
  if (piece == 'blackOctapawnLite') {
    blackOctapawnLite(square, coords, dotThis, piece);
  }
  if (piece == 'blackQueen_defuser' || piece == 'whiteQueen_defuser') {
    queen_defuser(square, coords, dotThis, piece);
  }
  if (piece == 'blackKing_defuser' || piece == 'whiteKing_defuser') {
    king_defuser(square, coords, dotThis, piece);
  }
  if (piece == 'blackKnight_defuser' || piece == 'whiteKnight_defuser') {
    knight_defuser(square, coords, dotThis, piece);
  }
  if (piece == 'blackPawn_defuser') {
    blackPawn_defuser(square, coords, dotThis, piece);
  }
  if (piece == 'whitePawn_defuser') {
    whitePawn_defuser(square, coords, dotThis, piece);
  }
  if (piece == 'blackRook_defuser' || piece == 'whiteRook_defuser') {
    rook_defuser(square, coords, dotThis, piece);
  }
  if (piece == 'blackBishop_defuser' || piece == 'whiteBishop_defuser') {
    bishop_defuser(square, coords, dotThis, piece);
  }
  if (piece == 'blackQueen_reverseAtomic' || piece == 'whiteQueen_reverseAtomic') {
    queen_reverseAtomic(square, coords, dotThis, piece);
  }
  if (piece == 'blackKing_reverseAtomic' || piece == 'whiteKing_reverseAtomic') {
    king_reverseAtomic(square, coords, dotThis, piece);
  }
  if (piece == 'blackKnight_reverseAtomic' || piece == 'whiteKnight_reverseAtomic') {
    knight_reverseAtomic(square, coords, dotThis, piece);
  }
  if (piece == 'blackPawn_reverseAtomic') {
    blackPawn_reverseAtomic(square, coords, dotThis, piece);
  }
  if (piece == 'whitePawn_reverseAtomic') {
    whitePawn_reverseAtomic(square, coords, dotThis, piece);
  }
  if (piece == 'blackRook_reverseAtomic' || piece == 'whiteRook_reverseAtomic') {
    rook_reverseAtomic(square, coords, dotThis, piece);
  }
  if (piece == 'blackBishop_reverseAtomic' || piece == 'whiteBishop_reverseAtomic') {
    bishop_reverseAtomic(square, coords, dotThis, piece);
  }
  if (piece == 'whitePawn_mf1f2_al1r1') {
    whitePawn_mf1f2_al1r1(square, coords, dotThis, piece);
  }
  if (piece == 'blackPawn_mf1f2_al1r1') {
    blackPawn_mf1f2_al1r1(square, coords, dotThis, piece);
  }
  if (piece == 'whitePawn_mf1f2_af1l1r1') {
    whitePawn_mf1f2_af1l1r1(square, coords, dotThis, piece);
  }
  if (piece == 'blackPawn_mf1f2_af1l1r1') {
    blackPawn_mf1f2_af1l1r1(square, coords, dotThis, piece);
  }
  if (piece == 'whitePawn_mf1f2_af1l1r1al1ar1') {
    whitePawn_mf1f2_af1l1r1al1ar1(square, coords, dotThis, piece);
  }
  if (piece == 'blackPawn_mf1f2_af1l1r1al1ar1') {
    blackPawn_mf1f2_af1l1r1al1ar1(square, coords, dotThis, piece);
  }
  if (piece == 'whitePawn_mf1f2_al1r1al1ar1') {
    whitePawn_mf1f2_al1r1al1ar1(square, coords, dotThis, piece);
  }
  if (piece == 'blackPawn_mf1f2_al1r1al1ar1') {
    blackPawn_mf1f2_al1r1al1ar1(square, coords, dotThis, piece);
  }
  if (piece == 'whitePawn_mf1f2_al1r1dbl1dbr1') {
    whitePawn_mf1f2_al1r1dbl1dbr1(square, coords, dotThis, piece);
  }
  if (piece == 'blackPawn_mf1f2_al1r1dbl1dbr1') {
    blackPawn_mf1f2_al1r1dbl1dbr1(square, coords, dotThis, piece);
  }
  if (piece == 'whitePawn_mf1f2_adb1dbl1dbr1') {
    whitePawn_mf1f2_adb1dbl1dbr1(square, coords, dotThis, piece);
  }
  if (piece == 'blackPawn_mf1f2_adb1dbl1dbr1') {
    blackPawn_mf1f2_adb1dbl1dbr1(square, coords, dotThis, piece);
  }
  if (piece == 'whitePawn_mf1f2f3_al1r1') {
    whitePawn_mf1f2f3_al1r1(square, coords, dotThis, piece);
  }
  if (piece == 'blackPawn_mf1f2f3_al1r1') {
    blackPawn_mf1f2f3_al1r1(square, coords, dotThis, piece);
  }
  if (piece == 'blackQueen_phantom' || piece == 'whiteQueen_phantom') {
    queen_phantom(square, coords, dotThis, piece);
  }
  if (piece == 'blackKing_phantom' || piece == 'whiteKing_phantom') {
    king_phantom(square, coords, dotThis, piece);
  }
  if (piece == 'blackKnight_phantom' || piece == 'whiteKnight_phantom') {
    knight_phantom(square, coords, dotThis, piece);
  }
  if (piece == 'blackPawn_phantom') {
    blackPawn_phantom(square, coords, dotThis, piece);
  }
  if (piece == 'whitePawn_phantom') {
    whitePawn_phantom(square, coords, dotThis, piece);
  }
  if (piece == 'blackRook_phantom' || piece == 'whiteRook_phantom') {
    rook_phantom(square, coords, dotThis, piece);
  }
  if (piece == 'blackBishop_phantom' || piece == 'whiteBishop_phantom') {
    bishop_phantom(square, coords, dotThis, piece);
  }
  if (piece == 'whitePawn_crowding') {
    whitePawn_crowding(square, coords, dotThis, piece);
  }
  if (piece == 'blackPawn_crowding') {
    blackPawn_crowding(square, coords, dotThis, piece);
  }
  if (piece == 'whiteKnight_crowding' || piece == 'blackKnight_crowding') {
    knight_crowding(square, coords, dotThis, piece);
  }
  if (piece == 'whiteBishop_crowding' || piece == 'blackBishop_crowding') {
    bishop_crowding(square, coords, dotThis, piece);
  }
  if (piece == 'whiteRook_crowding' || piece == 'blackRook_crowding') {
    rook_crowding(square, coords, dotThis, piece);
  }
  if (piece == 'whiteQueen_crowding' || piece == 'blackQueen_crowding') {
    queen_crowding(square, coords, dotThis, piece);
  }
  if (piece == 'whiteKing_crowding' || piece == 'blackKing_crowding') {
    king_crowding(square, coords, dotThis, piece);
  }
  if (piece == 'whitePawn_stacking') {
    whitePawn_stacking(square, coords, dotThis, piece);
  }
  if (piece == 'blackPawn_stacking') {
    blackPawn_stacking(square, coords, dotThis, piece);
  }
  if (piece == 'whiteKnight_stacking' || piece == 'blackKnight_stacking') {
    knight_stacking(square, coords, dotThis, piece);
  }
  if (piece == 'whiteBishop_stacking' || piece == 'blackBishop_stacking') {
    bishop_stacking(square, coords, dotThis, piece);
  }
  if (piece == 'whiteRook_stacking' || piece == 'blackRook_stacking') {
    rook_stacking(square, coords, dotThis, piece);
  }
  if (piece == 'whiteQueen_stacking' || piece == 'blackQueen_stacking') {
    queen_stacking(square, coords, dotThis, piece);
  }
  if (piece == 'whiteKing_stacking' || piece == 'blackKing_stacking') {
    king_stacking(square, coords, dotThis, piece);
  }
  /* LAST UPDATED CATALOGUE */
  if (piece == 'whitePawn_mf1_al1r1al1ar1') {
    whitePawn_mf1_al1r1al1ar1(square, coords, dotThis, piece);
  }
  if (piece == 'blackPawn_mf1_al1r1al1ar1') {
    blackPawn_mf1_al1r1al1ar1(square, coords, dotThis, piece);
  }
  if (piece == 'whitePawn_mf1_af1al1ar1dl1dr1') {
    whitePawn_mf1_af1al1ar1dl1dr1(square, coords, dotThis, piece);
  }
  if (piece == 'blackPawn_mf1_af1al1ar1dl1dr1') {
    blackPawn_mf1_af1al1ar1dl1dr1(square, coords, dotThis, piece);
  }
  if (piece == 'whiteKnight_promotion' || piece == 'blackKnight_promotion') {
    knight_promotion(square, coords, dotThis, piece);
  }
  if (piece == 'whiteBishop_promotion' || piece == 'blackBishop_promotion') {
    bishop_promotion(square, coords, dotThis, piece);
  }
  if (piece == 'whiteRook_promotion' || piece == 'blackRook_promotion') {
    rook_promotion(square, coords, dotThis, piece);
  }
  if (piece == 'whiteQueen_promotion' || piece == 'blackQueen_promotion') {
    queen_promotion(square, coords, dotThis, piece);
  }
  if (piece == 'whitePawn_infinite') {
    whitePawn_infinite(square, coords, dotThis, piece);
  }
  if (piece == 'blackPawn_infinite') {
    blackPawn_infinite(square, coords, dotThis, piece);
  }
  if (piece == 'whiteKnight_infinite' || piece == 'blackKnight_infinite') {
    knight_infinite(square, coords, dotThis, piece);
  }
  if (piece == 'whiteBishop_infinite' || piece == 'blackBishop_infinite') {
    bishop_infinite(square, coords, dotThis, piece);
  }
  if (piece == 'whiteRook_infinite' || piece == 'blackRook_infinite') {
    rook_infinite(square, coords, dotThis, piece);
  }
  if (piece == 'whiteQueen_infinite' || piece == 'blackQueen_infinite') {
    queen_infinite(square, coords, dotThis, piece);
  }
  if (piece == 'whitePawn_capturetheflag') {
    whitePawn_capturetheflag(square, coords, dotThis, piece);
  }
  if (piece == 'blackPawn_capturetheflag') {
    blackPawn_capturetheflag(square, coords, dotThis, piece);
  }
  if (piece == 'whiteKnight_capturetheflag' || piece == 'blackKnight_capturetheflag') {
    knight_capturetheflag(square, coords, dotThis, piece);
  }
  if (piece == 'whiteBishop_capturetheflag' || piece == 'blackBishop_capturetheflag') {
    bishop_capturetheflag(square, coords, dotThis, piece);
  }
  if (piece == 'whiteRook_capturetheflag' || piece == 'blackRook_capturetheflag') {
    rook_capturetheflag(square, coords, dotThis, piece);
  }
  if (piece == 'whiteQueen_capturetheflag' || piece == 'blackQueen_capturetheflag') {
    queen_capturetheflag(square, coords, dotThis, piece);
  }
  if (piece == 'whitePawn_cloning') {
    whitePawn_cloning(square, coords, dotThis, piece);
  }
  if (piece == 'blackPawn_cloning') {
    blackPawn_cloning(square, coords, dotThis, piece);
  }
  if (piece == 'whiteKnight_cloning' || piece == 'blackKnight_cloning') {
    knight_cloning(square, coords, dotThis, piece);
  }
  if (piece == 'whiteBishop_cloning' || piece == 'blackBishop_cloning') {
    bishop_cloning(square, coords, dotThis, piece);
  }
  if (piece == 'whiteRook_cloning' || piece == 'blackRook_cloning') {
    rook_cloning(square, coords, dotThis, piece);
  }
  if (piece == 'whitePawn_onemove') {
    whitePawn_onemove(square, coords, dotThis, piece);
  }
  if (piece == 'blackPawn_onemove') {
    blackPawn_onemove(square, coords, dotThis, piece);
  }
  if (piece == 'whiteKnight_onemove' || piece == 'blackKnight_onemove') {
    knight_onemove(square, coords, dotThis, piece);
  }
  if (piece == 'whiteBishop_onemove' || piece == 'blackBishop_onemove') {
    bishop_onemove(square, coords, dotThis, piece);
  }
  if (piece == 'whiteRook_onemove' || piece == 'blackRook_onemove') {
    rook_onemove(square, coords, dotThis, piece);
  }
  if (piece == 'whiteQueen_onemove' || piece == 'blackQueen_onemove') {
    queen_onemove(square, coords, dotThis, piece);
  }
  if (piece == 'whiteKing_onemove' || piece == 'blackKing_onemove') {
    king_onemove(square, coords, dotThis, piece);
  }
  if (piece == 'whiteblackPawn_shared') {
    whitePawn_shared(square, coords, dotThis, piece);
  }
  if (piece == 'blackwhitePawn_shared') {
    blackPawn_shared(square, coords, dotThis, piece);
  }
  if (piece == 'whiteblackKnight_shared') {
    knight_shared(square, coords, dotThis, piece);
  }
  if (piece == 'whiteblackBishop_shared') {
    bishop_shared(square, coords, dotThis, piece);
  }
  if (piece == 'whiteblackRook_shared') {
    rook_shared(square, coords, dotThis, piece);
  }
  if (piece == 'whiteblackQueen_shared') {
    queen_shared(square, coords, dotThis, piece);
  }
  if (piece == 'whitePawn_fragile') {
    whitePawn_fragile(square, coords, dotThis, piece);
  }
  if (piece == 'blackPawn_fragile') {
    blackPawn_fragile(square, coords, dotThis, piece);
  }
  if (piece == 'whiteKnight_fragile' || piece == 'blackKnight_fragile') {
    knight_fragile(square, coords, dotThis, piece);
  }
  if (piece == 'whiteBishop_fragile' || piece == 'blackBishop_fragile') {
    bishop_fragile(square, coords, dotThis, piece);
  }
  if (piece == 'whiteRook_fragile' || piece == 'blackRook_fragile') {
    rook_fragile(square, coords, dotThis, piece);
  }
  if (piece == 'whiteQueen_fragile' || piece == 'blackQueen_fragile') {
    queen_fragile(square, coords, dotThis, piece);
  }
  if (piece == 'whiteKing_fragile' || piece == 'blackKing_fragile') {
    king_fragile(square, coords, dotThis, piece);
  }
  if (moveColor == 'black') {
    theCheckColor == 'white';
  } else {
    theCheckColor == 'black';
  }
}
let king = {
  white: {
    move: false,
    rkmove: false,
    rqmove: false
  },
  black: {
    move: false,
    rkmove: false,
    rqmove: false
  }
}
let selectNum = 0;
let selectClass;
let prevSelectClass;
let prevSelect;
let selected;
let moveColor = 'white';
let moved, fromTable, crowding = false;
let wrookclass, brookclass, wkingclass, bkingclass;
let selectIsAmongus;
let selectClassList = document.getElementById('a1').classList, prevSelectClassList = document.getElementById('a1').classList;
board.addEventListener('click', function(event) {
  selected = event.target.id;
  selectAMONGUS = event.target;
  if (selected === '') {
    selected = event.target.parentElement.id;
    if (selected == '') {
      selected = event.target.parentElement.parentElement.id;
      if (selected == '') {
        selected = event.target.parentElement.parentElement.parentElement.id;
        if (selected == '') {
          selected = event.target.parentElement.parentElement.parentElement.parentElement.id;
        }
      }
    }
    selectIsAmongus = true;
  } else if (selected === 'board') {
  } else {
    selected = event.target.id;
    selectIsAmongus = false;
  }
  if (selectNum == 0) {
    //console.log('Selected ' + selected);
    if (prevSelect === '') {
      console.log("prevSelect == ''");
      fromTable = true;
      prevSelect = event.target.parentElement.id;
      if (prevSelect == '') {
        console.log("prevSelect == ''2");
        fromTable = true;
        prevSelect = event.target.parentElement.parentElement.id;
        if (prevSelect == '') {
          console.log("prevSelect == ''3");
          fromTable = true;
          prevSelect = event.target.parentElement.parentElement.parentElement.id;
          if (prevSelect == '') {
            console.log("prevSelect == ''4");
            fromTable = true;
            prevSelect = event.target.parentElement.parentElement.parentElement.parentElement.id;
          }
        }
      }
      selectIsAmongus = true;
    } else if (selected === 'board') {
    } else {
      fromTable = false;
      prevSelect = event.target.id;
      if (prevSelect == 'board') {
        prevSelect = null;
      }
    }
    if (selectIsAmongus) {
      selectClass = selectAMONGUS.classList[0];
      selectClassList = selectAMONGUS.classList;
    } else {
      selectClass = document.getElementById(selected).classList[0];
      selectClassList = document.getElementById(selected).classList;
    }
    if (selectClass == 'dematerialized') {
      document.getElementById(selected).classList.remove('dematerialized');
      document.getElementById(selected).classList.add('dematerialized');
      selectClass = document.getElementById(selected).classList[0];
    }
    if (moveColor == 'white' && selectClass.includes('white') || moveColor == 'black' && selectClass.includes('black')) {
      console.log(selected + ' . ' + selectClass)
      checkPossibleMoves(selected, true, selectClass);
      selectNum = 1;
    }
    if (selectClass.includes('phantom')) {
      //Dematerialize Phantoms
      if (selectClass.includes('white') && moveColor == 'white' || selectClass.includes('black') && moveColor == 'black') {
        let element;
        if (selectClass != document.getElementById(selected).classList[0] && selectClass != document.getElementById(selected).classList[1]) {
          element = document.getElementById(selected).querySelectorAll(document.getElementById(selected).children[0].children[0].tagName + '.' + document.getElementById(selected).children[0].children[0].classList[0])[0];
        } else {
          element = document.getElementById(selected);
        }
        let arrowsContainer = document.createElement('table');
        arrowsContainer.classList.add('arrowsContainer');
        arrowsContainer.setAttribute('cellspacing', '0');
        arrowsContainer.innerHTML = `<tr><td><img style='width: 100%; height: 100%;' src='symbols/phantom.png'></td></tr>`;
        document.getElementById(selected).appendChild(arrowsContainer);
        arrowsContainer.addEventListener('click', function() {
          switchMoveColor();
          if (element.classList.contains('dematerialized')) {
            element.classList.remove('dematerialized');
            killPieceStack(selected, selectClass);
          } else {
            element.classList.add('dematerialized');
          }
          arrowsContainer.remove();
        });
        function arrowsNoDisplay() {
          document.removeEventListener('click', arrowsNoDisplay);
          selected = element.id;
          arrowsContainer.remove();
        }
        setTimeout( function() { document.addEventListener('click', arrowsNoDisplay); }, 10);
      }
    }
    if (selectClass.includes('crowding')) {
      if (selectClass.includes('white') && moveColor == 'white' || selectClass.includes('black') && moveColor == 'black') {
        let element;
        if (selectClass != document.getElementById(selected).classList[0] && selectClass != document.getElementById(selected).classList[1]) {
          element = document.getElementById(selected).querySelectorAll(document.getElementById(selected).children[0].children[0].tagName + '.' + document.getElementById(selected).children[0].children[0].classList[0])[0];
        } else {
          element = document.getElementById(selected);
        }
        let arrowsContainer = document.createElement('table');
        arrowsContainer.classList.add('arrowsContainer');
        arrowsContainer.setAttribute('cellspacing', '0');
        arrowsContainer.innerHTML = `<tr><td><img style='width: 100%; height: 100%;' src='symbols/crowding.png'></td></tr>`;
        document.getElementById(selected).appendChild(arrowsContainer);
        arrowsContainer.addEventListener('click', function() {
          if (!crowding) {
            crowding = true;
          } else {
            crowding = false;
          }
          arrowsContainer.remove();
        });
        function arrowsNoDisplay() {
          document.removeEventListener('click', arrowsNoDisplay);
          selected = element.id;
          arrowsContainer.remove();
        }
        setTimeout( function() { document.addEventListener('click', arrowsNoDisplay); }, 10);
      }
    }
    if (selectClass.includes('cloning')) {
      if (document.getElementById(selected).dataset.cloned != 'true') {
          if (selectClass.includes('white') && moveColor == 'white' || selectClass.includes('black') && moveColor == 'black') {
            let element;
            if (selectClass != document.getElementById(selected).classList[0] && selectClass != document.getElementById(selected).classList[1]) {
              element = document.getElementById(selected).querySelectorAll(document.getElementById(selected).children[0].children[0].tagName + '.' + document.getElementById(selected).children[0].children[0].classList[0])[0];
            } else {
              element = document.getElementById(selected);
            }
            let arrowsContainer = document.createElement('table');
            arrowsContainer.classList.add('arrowsContainer');
            arrowsContainer.setAttribute('cellspacing', '0');
            arrowsContainer.innerHTML = `<tr><td><img style='width: 100%; height: 100%;' src='symbols/cloning.png'></td></tr>`;
            document.getElementById(selected).appendChild(arrowsContainer);
            arrowsContainer.addEventListener('click', function() {
                let listenerArray = [];
                specialMoves.cloningRadius.forEach(function(value) {
                    if (document.getElementById(convertCoordsToSquare(add(convertSquareToCoords(selected), value))) != null) {
                        if (document.getElementById(convertCoordsToSquare(add(convertSquareToCoords(selected), value))).classList.toString().includes('dotted') && document.getElementById(convertCoordsToSquare(add(convertSquareToCoords(selected), value))).classList.length == 1 || document.getElementById(convertCoordsToSquare(add(convertSquareToCoords(selected), value))).classList.length == 0) {
                            setTimeout(function() { dot(add(convertSquareToCoords(selected), value)) }, 100);
                            listenerArray.push(convertCoordsToSquare(add(convertSquareToCoords(selected), value)));
                            document.getElementById(convertCoordsToSquare(add(convertSquareToCoords(selected), value))).addEventListener('click', function(e) {
                                let s = e.target.id;
                                if (s === '') {
                                    s = e.target.parentElement.id;
                                    if (s == '') {
                                        s = e.target.parentElement.parentElement.id;
                                        if (s == '') {
                                            s = e.target.parentElement.parentElement.parentElement.id;
                                            if (s == '') {
                                                s = e.target.parentElement.parentElement.parentElement.parentElement.id;
                                            }
                                        }
                                    }
                                }
                                createClone(s, selectClass, selected);
                                removeEventListeners(listenerArray);
                            });
                        }
                    }
                });
                arrowsContainer.remove();
            });
            function arrowsNoDisplay() {
              document.removeEventListener('click', arrowsNoDisplay);
              selected = element.id;
              arrowsContainer.remove();
            }
            setTimeout( function() { document.addEventListener('click', arrowsNoDisplay); }, 10);
          }
      }
    }
  } else {
    prevSelectClass = selectClass;
    prevSelectClassList = selectClassList;
    selectNum = 0;
    moved = true;
    /*console.log('S: ' + selected);
    console.log('PS: ' + prevSelect);
    console.log('SC: ' + selectClass);
    console.log('SCL: ' + selectClassList);
    console.log('PSC: ' + prevSelectClass);*/
    if (document.getElementById(selected) != null) {
        if (document.getElementById(selected).classList.contains('dotted')) {
          let reallyMove = false;
          //White & Black King
          let e = document.getElementById(prevSelect).classList;
          if (e.contains(wkingclass) || e.contains(bkingclass)) {
            let from = convertSquareToCoords(`${prevSelect}`);
            let to = convertSquareToCoords(`${selected}`);
            let move = false;
            if (checkCastle(to, 'white', 'king')) {dot([8,7]);}
            if (checkCastle(to, 'black', 'king')) {dot([1,7]);}
            if (checkCastle(to, 'black', 'queen')) {dot([1,3]);}
            if (checkCastle(to, 'white', 'queen')) {dot([8,3]);}
            if (checkCastle(to, 'white', 'king') && moveColor == 'white' || checkCastle(to, 'black', 'king') && moveColor == 'black' || checkCastle(to, 'white', 'queen') && moveColor == 'white' || checkCastle(to, 'black', 'queen') && moveColor == 'black') {
              if (from[1] + 2 == to[1]  && from[0] == to[0]) {
                if (document.getElementById(prevSelect).classList.toString().includes('white')) {
                  if (checkCastle(to, 'white', 'king')) {
                    document.getElementById('h6').classList.add(wrookclass);
                    document.getElementById('h8').classList.remove(wrookclass);
                    document.getElementById('h7').classList.add(wkingclass);
                    document.getElementById('h5').classList.remove(wkingclass);
                    switchMoveColor();
                  }
                } else if (document.getElementById(prevSelect).classList.toString().includes('black')) {
                  if (checkCastle(to, 'black', 'king')) {
                    document.getElementById('a6').classList.add(brookclass);
                    document.getElementById('a8').classList.remove(brookclass);
                    document.getElementById('a7').classList.add(bkingclass);
                    document.getElementById('a5').classList.remove(bkingclass);
                    switchMoveColor();
                  }
                }
              } else if (from[1] - 2 == to[1]  && from[0] == to[0]) {
                if (document.getElementById(prevSelect).classList.toString().includes('white')) {
                  if (checkCastle(to, 'white', 'queen')) {
                    document.getElementById('h4').classList.add(wrookclass);
                    document.getElementById('h1').classList.remove(wrookclass);
                    document.getElementById('h3').classList.add(wkingclass);
                    document.getElementById('h5').classList.remove(wkingclass);
                    switchMoveColor();
                  }
                } else if (document.getElementById(prevSelect).classList.toString().includes('black')) {
                  if (checkCastle(to, 'black', 'queen')) {
                    document.getElementById('a4').classList.add(brookclass);
                    document.getElementById('a1').classList.remove(brookclass);
                    document.getElementById('a3').classList.add(bkingclass);
                    document.getElementById('a5').classList.remove(bkingclass);
                    switchMoveColor();
                  }
                }
              } else {
                move = true;
              }
            } else {
              move = true;
            }
            if (move) {
              if (document.getElementById(prevSelect).classList.toString().includes('black')) {
                king.black.move = true;
                reallyMove = true;
              } else if (document.getElementById(prevSelect).classList.toString().includes('white')) {
                king.white.move = true;
                reallyMove = true;
              }
            }
          } else if (e.contains(wrookclass) || e.contains(brookclass)) {
            //White & Black Rook
            let from = convertSquareToCoords(`${prevSelect}`);
            let to = convertSquareToCoords(`${selected}`);
            let move = false;
            if (from[0] != to[0] || from[1] != to[1]) {
              move = true;
            }
            if (move) {
              if (document.getElementById(prevSelect).classList.toString().includes('black')) {
                if (document.getElementById(prevSelect).id == 'a8') {
                  king.black.rkmove = true;
                } else if (document.getElementById(prevSelect).id == 'a1') {
                  king.black.rkqmove = true;
                }
                movePiece(selected, prevSelect, selectClass, true, true);
              } else if (document.getElementById(prevSelect).classList.toString().includes('white')) {
                if (document.getElementById(prevSelect).id == 'h8') {
                  king.white.rkmove = true;
                } else if (document.getElementById(prevSelect).id == 'h1') {
                  king.white.rkqmove = true;
                }
                reallyMove = true;
              }
            }
          } else {
            reallyMove = true;
          }
          if (reallyMove) {
            if (prevSelect == 'board') {
              prevSelect == '';
            }
            movePiece(selected, prevSelect, selectClass, true, true);
            if (document.getElementById(selected).classList.toString().includes('Pawn') && selected.includes('a')) {
              document.getElementById(selected).classList.remove(...document.getElementById(selected).classList);
              document.getElementById(selected).classList.add('whiteSuperpawn');
            } else if (document.getElementById(selected).classList.contains('Pawn') && selected.includes('h')) {
              document.getElementById(selected).classList.remove(...document.getElementById(selected).classList);
              document.getElementById(selected).classList.add('blackSuperpawn');
            }
            //Promotion Pieces
            if (document.getElementById(selected).classList.toString().includes('promotion') && selected.includes('a') && document.getElementById(selected).classList.toString().includes('white')) {
                if (document.getElementById(selected).classList.toString().includes('Knight') || document.getElementById(selected).classList.toString().includes('Bishop')) {
                    document.getElementById(selected).classList.remove(...document.getElementById(selected).classList);
                    document.getElementById(selected).classList.add('whiteRook');
                } else if (document.getElementById(selected).classList.toString().includes('Rook')) {
                    document.getElementById(selected).classList.remove(...document.getElementById(selected).classList);
                    document.getElementById(selected).classList.add('whiteQueen');
                } else if (document.getElementById(selected).classList.toString().includes('Queen')) {
                    document.getElementById(selected).classList.remove(...document.getElementById(selected).classList);
                    document.getElementById(selected).classList.add('whiteKing');
                }
            } else if (document.getElementById(selected).classList.toString().includes('promotion') && selected.includes('h') && document.getElementById(selected).classList.toString().includes('black')) {
                if (document.getElementById(selected).classList.toString().includes('Knight') || document.getElementById(selected).classList.toString().includes('Bishop')) {
                    document.getElementById(selected).classList.remove(...document.getElementById(selected).classList);
                    document.getElementById(selected).classList.add('blackRook');
                } else if (document.getElementById(selected).classList.toString().includes('Rook')) {
                    document.getElementById(selected).classList.remove(...document.getElementById(selected).classList);
                    document.getElementById(selected).classList.add('blackQueen');
                } else if (document.getElementById(selected).classList.toString().includes('Queen')) {
                    document.getElementById(selected).classList.remove(...document.getElementById(selected).classList);
                    document.getElementById(selected).classList.add('blackKing');
                }
            }
          }
        }
    }
  }
});
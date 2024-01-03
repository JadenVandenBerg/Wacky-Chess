
// Unfinished
let whiteMoves = {
}
let blackMoves = {
}
function getAllMoves(color) {
	whiteMoves = {}
	blackMoves = {}
	boardSquares.forEach(function(value) {
		getClassLists(value).forEach(function(value2) {
			returnMoves = [];
			if (value2[0] != null && value2[0] != '') {
				getPieceInfo(value2[0], convertSquareToCoords(value));
				if (color == 'white' && value2[0].includes('white')) {
					if (value2[0].includes('Pawn') || value2[0].includes('pawn')) {
						dotAllMovesPawn(pieceInfo.checkCheckmate.possibleMoves, value2[0], false, convertSquareToCoords(value), false);
						whiteMoves[value2[0]] = returnMoves;
					} else if (value2[0].includes('Knight') || value2[0].includes('knight') || value2[0].includes('Camel') || value2[0].includes('Elephant')) {
						dotAllMovesNoJump(value2[0], pieceInfo.checkCheckmate.possibleMoves, convertSquareToCoords(value), false, value);
						whiteMoves[value2[0]] = returnMoves;
					} else {
						dotAllMoves(value2[0], pieceInfo.checkCheckmate.possibleMoves, convertSquareToCoords(value), false, value);
						whiteMoves[value2[0]] = returnMoves;
					}
				} else if (color == 'black' && value2[0].includes('black')) {
					if (value2[0].includes('Pawn') || value2[0].includes('pawn')) {
						dotAllMovesPawn(pieceInfo.checkCheckmate.possibleMoves, value2[0], false, convertSquareToCoords(value), false);
						blackMoves[value2[0]] = returnMoves;
					} else if (value2[0].includes('Knight') || value2[0].includes('knight') || value2[0].includes('Camel') || value2[0].includes('Elephant')) {
						dotAllMovesNoJump(value2[0], pieceInfo.checkCheckmate.possibleMoves, convertSquareToCoords(value), false, value);
						blackMoves[value2[0]] = returnMoves;
					} else {
						dotAllMoves(value2[0], pieceInfo.checkCheckmate.possibleMoves, convertSquareToCoords(value), false, value);
						blackMoves[value2[0]] = returnMoves;
					}
				}
			}
		});
	});
}
//Overwrites array element if double exists

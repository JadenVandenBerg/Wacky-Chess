let puzzle1 = function() {
	// Set Up Board
	document.getElementById('a1').classList.add('whitePawn');
	/*document.getElementById('a2').classList.add('');
	document.getElementById('a3').classList.add('');
	document.getElementById('a4').classList.add('');
	document.getElementById('a5').classList.add('');
	document.getElementById('a6').classList.add('');
	document.getElementById('a7').classList.add('');
	document.getElementById('a8').classList.add('');

	document.getElementById('b1').classList.add('');
	document.getElementById('b2').classList.add('');
	document.getElementById('b3').classList.add('');
	document.getElementById('b4').classList.add('');
	document.getElementById('b5').classList.add('');
	document.getElementById('b6').classList.add('');
	document.getElementById('b7').classList.add('');
	document.getElementById('b8').classList.add('');

	document.getElementById('c1').classList.add('');
	document.getElementById('c2').classList.add('');
	document.getElementById('c3').classList.add('');
	document.getElementById('c4').classList.add('');
	document.getElementById('c5').classList.add('');
	document.getElementById('c6').classList.add('');
	document.getElementById('c7').classList.add('');
	document.getElementById('c8').classList.add('');

	document.getElementById('d1').classList.add('');
	document.getElementById('d2').classList.add('');
	document.getElementById('d3').classList.add('');
	document.getElementById('d4').classList.add('');
	document.getElementById('d5').classList.add('');
	document.getElementById('d6').classList.add('');
	document.getElementById('d7').classList.add('');
	document.getElementById('d8').classList.add('');

	document.getElementById('e1').classList.add('');
	document.getElementById('e2').classList.add('');
	document.getElementById('e3').classList.add('');
	document.getElementById('e4').classList.add('');
	document.getElementById('e5').classList.add('');
	document.getElementById('e6').classList.add('');
	document.getElementById('e7').classList.add('');
	document.getElementById('e8').classList.add('');

	document.getElementById('f1').classList.add('');
	document.getElementById('f2').classList.add('');
	document.getElementById('f3').classList.add('');
	document.getElementById('f4').classList.add('');
	document.getElementById('f5').classList.add('');
	document.getElementById('f6').classList.add('');
	document.getElementById('f7').classList.add('');
	document.getElementById('f8').classList.add('');

	document.getElementById('g1').classList.add('');
	document.getElementById('g2').classList.add('');
	document.getElementById('g3').classList.add('');
	document.getElementById('g4').classList.add('');
	document.getElementById('g5').classList.add('');
	document.getElementById('g6').classList.add('');
	document.getElementById('g7').classList.add('');
	document.getElementById('g8').classList.add('');

	document.getElementById('h1').classList.add('');
	document.getElementById('h2').classList.add('');
	document.getElementById('h3').classList.add('');
	document.getElementById('h4').classList.add('');
	document.getElementById('h5').classList.add('');
	document.getElementById('h6').classList.add('');
	document.getElementById('h7').classList.add('');
	document.getElementById('h8').classList.add('');*/
}
let puzzle2 = function() {}
const puzzles = [puzzle1, puzzle2];
function puzzle() {
	boardSquares.forEach(function(value) {
		document.getElementById(value).classList.remove(...document.getElementById(value).classList);
	});
	let puzzle = puzzles[Math.floor(Math.random() * puzzles.length)];
	setTimeout(puzzle, 1);
}
document.getElementById('puzzleBtn').addEventListener('click', puzzle);
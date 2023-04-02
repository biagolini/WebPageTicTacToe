const board = document.getElementById('board')
const cells = document.querySelectorAll('[data-cell]')
const resetButton = document.getElementById('resetButton')

let currentPlayer = 'X'

function handleClick(e) {
  const cell = e.target
  if (cell.textContent !== '') return

  cell.textContent = currentPlayer
  if (checkWinner(currentPlayer)) {
    alert(`${currentPlayer} wins!`)
    resetBoard()
    return
  }

  currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
}

function checkWinner(player) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // Horizontal
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // Vertical
    [0, 4, 8],
    [2, 4, 6] // Diagonal
  ]

  return lines.some(line =>
    line.every(index => cells[index].textContent === player)
  )
}

function resetBoard() {
  cells.forEach(cell => (cell.textContent = ''))
  currentPlayer = 'X'
}

board.addEventListener('click', handleClick)
resetButton.addEventListener('click', resetBoard)

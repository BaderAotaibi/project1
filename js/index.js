function init(){ 
  const grid = document.querySelector('.grid') 
  const player = document.querySelector('.player')
  const currentPlayerDiv  = document.querySelector('.currentPlayer')
  const body = document.querySelector('body')
  const restart = document.querySelector('#restart')
  const col = 6
  const row = 7
  const gridCount = col * row
  let currentPlayer = 1 
  player.innerHTML = currentPlayer 
  let grids
  const winningArray = [ 
    [0, 1, 2, 3], [41, 40, 39, 38],[7, 8, 9, 10], [34, 33, 32, 31], [14, 15, 16, 17], [27, 26, 25, 24], 
    [21, 22, 23, 24], [20, 19, 18, 17], [28, 29, 30, 31], [13, 12, 11, 10], [35, 36, 37, 38], [6, 5, 4, 3], 
    [0, 7, 14, 21], [41, 34, 27, 20], [1, 8, 15, 22],  [40, 33, 26, 19], [2, 9, 16, 23], [39, 32, 25, 18], 
    [3, 10, 17, 24], [38, 31, 24, 17], [4, 11, 18, 25],  [37, 30, 23, 16], [5, 12, 19, 26], [36, 29, 22, 15], 
    [6, 13, 20, 27], [35, 28, 21, 14], [0, 8, 16, 24],  [41, 33, 25, 17], [7, 15, 23, 31], [34, 26, 18, 10], 
    [14, 22, 30, 38], [27, 19, 11, 3], [35, 29, 23, 17],  [6, 12, 18, 24], [28, 22, 16, 10], [13, 19, 25, 31], 
    [21, 15, 9, 3], [20, 26, 32, 38], [36, 30, 24, 18], [5, 11, 17, 23], [37, 31, 25, 19], [4, 10, 16, 22], 
    [2, 10, 18, 26], [39, 31, 23, 15], [1, 9, 17, 25], [40, 32, 24, 16], [9, 7, 25, 33], [8, 16, 24, 32], 
    [11, 7, 23, 29], [12, 18, 24, 30], [1, 2, 3, 4],[5, 4, 3, 2], [8, 9, 10, 11], [12, 11, 10, 9],[15, 16, 17, 18], [19, 18, 17, 16], [22, 23, 24, 25], 
    [26, 25, 24, 23], [29, 30, 31, 32], [33, 32, 31, 30], [36, 37, 38, 39], [40, 39, 38, 37], [7, 14, 21, 28], 
    [8, 15, 22, 29], [9, 16, 23, 30], [10, 17, 24, 31], [11, 18, 25, 32], [12, 19, 26, 33], [13, 20, 27, 34],
    [41,35,29,23], [17,35,29,23], [17,11,29,23], [17,11,5,23],[40,34,28,22], [16,34,28,22], [16,10,28,22], [16,10,4,22],
    [39,33,27,21], [15,33,27,21], [15,9,27,21], [15,9,3,21], [8,14,20,26],[8,14,20,2],[7,13,19,25],[7,13,19,1]
  ]

  function createGrid(){ 
    for (let i = 0; i < gridCount; i++){ 
      const div = document.createElement('div') 
      div.setAttribute('data-id', i) 
      div.classList.add('grid-item')
      if (i >= 42){ 
        div.classList.add('taken') 
      } 
      grid.appendChild(div) 
      grids = document.querySelectorAll('.grid div') 
    } 
  }
  createGrid() 

  function clickHandle(event){ 
    const id  = parseInt(event.target.dataset.id) 
    let bottom = id % col + 36
    if (currentPlayer === 1){
      while (grids[bottom].classList.contains('red') || grids[bottom].classList.contains('yellow')){
        bottom = bottom - col
      }
      currentPlayer = 2 
      player.innerHTML = currentPlayer
      grids[bottom].classList.add('red', 'taken')
      player.style.backgroundColor = '#f9c74f'
      currentPlayerDiv.style.border = '2px solid #f9c74f'
      checkWinning() 
      
    } else if (currentPlayer === 2){
      while (grids[bottom].classList.contains('red') || grids[bottom].classList.contains('yellow')){
        bottom = bottom - col
      }
      currentPlayer = 1
      player.innerHTML = currentPlayer
      grids[bottom].classList.add('yellow', 'taken')
      player.style.backgroundColor = '#e63946'
      currentPlayerDiv.style.border = '2px solid #e63946'
      checkWinning()  
    }
  }
  grids.forEach(grid=> grid.addEventListener('click', clickHandle))

  function checkWinning(){
    for (let i = 0; i < winningArray.length; i++){

      const grid = winningArray[i]
      if (grid.every(q=>grids[q].classList.contains('red'))){
        currentPlayerDiv.innerHTML = 'The Winner is Player 1 (Red)'
        currentPlayerDiv.style.backgroundColor = 'white'
        currentPlayerDiv.style.width = '210px'
        body.style.backgroundColor = '#e63946'
        currentPlayerDiv.style.border = 'none'
        restart.style.display = 'inline-block'

          
      } else if (grid.every(q=>grids[q].classList.contains('yellow'))){
        currentPlayerDiv.innerHTML = 'The Winner is Player 2 (Yellow)'
        currentPlayerDiv.style.backgroundColor = 'white'
        currentPlayerDiv.style.width = '210px'
        body.style.backgroundColor = '#f9c74f'
        currentPlayerDiv.style.border = 'none'
        restart.style.display = 'inline-block'
          
      }
    }
  }
  function restartHandle(){
    const divs = document.querySelectorAll('.grid div')
    divs.forEach(div=> div.classList.remove('red', 'yellow','taked'))
    currentPlayerDiv.innerHTML = `<p> The current player is </p> <span class="player">${currentPlayer}</span>`
    currentPlayerDiv.style.backgroundColor = 'white'
    currentPlayerDiv.style.width = '270px'
    body.style.backgroundColor = '#f3f3f3'
    restart.style.display = 'none'
    
  }
  restart.addEventListener('click', restartHandle)

}
window.addEventListener('DOMContentLoaded', init)
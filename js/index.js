function init(){
  let player = 1
  const grid = document.querySelector('.grid')
  const gridRow = 7
  const gridCol = 6
  const gridCount = gridRow * gridCol
  let gridItems

  
  
  function makeGrid(){
    for (let i = 0; i < gridCount; i++){
      const div = document.createElement('div')
      div.setAttribute('data-id', i)
      div.classList.add('grid-item')
      grid.appendChild(div)
      gridItems = document.querySelectorAll('.grid-item')
      
    }
    
  }
  
  makeGrid()
  
  function clickHandle(event){
    const id = parseInt(event.target.dataset.id)
    if (!gridItems[id].classList.contains('red') && !gridItems[id].classList.contains('yellow')){ 
      if (player === 1){ 
        event.target.classList.add('red')
        checkWinning() 
        player = 2 
      } else if (player === 2){ 
        event.target.classList.add('yellow')
        checkWinning() 
        player = 1 
      }
    } 


  }

  function checkWinning(){
    console.log('checking winning')
  }
  gridItems.forEach(gridItem => gridItem.addEventListener('click', clickHandle)) 
  console.log(gridItems) 
  
}
window.addEventListener('DOMContentLoaded', init)
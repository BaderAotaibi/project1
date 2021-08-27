function init(){
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
    event.target.style.backgroundColor = 'black' 

  }
  gridItems.forEach(gridItem => gridItem.addEventListener('click', clickHandle)) 
  console.log(gridItems) 
  
}
window.addEventListener('DOMContentLoaded', init)
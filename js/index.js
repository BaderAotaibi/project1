function init(){
  const grid = document.querySelector('.grid')
  const gridRow = 7
  const gridCol = 6
  const gridCount = gridRow * gridCol
  const gridItems = document.querySelectorAll('.grid-item')

  
  
  function makeGrid(){
    for (let i = 0; i < gridCount; i++){
      const div = document.createElement('div')
      div.setAttribute('data-id', i)
      div.classList.add('grid-item')
      grid.appendChild(div)
      
    }
    
  }
  

  function clickHandle(event){
    event.target.style.backgroundColor = 'black' // not working

  }
  gridItems.forEach(gridItem => gridItem.addEventListener('click', clickHandle))
  console.log(gridItems) // not working

  makeGrid()
  
}
window.addEventListener('DOMContentLoaded', init)
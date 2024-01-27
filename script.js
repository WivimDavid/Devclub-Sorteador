
const buttonDraw = document.querySelector(".button-draw")

function drawerNumber(){
  const valueMin = Math.ceil(document.querySelector(".input-min").value)
  const valueMax = Math.floor(document.querySelector(".input-max").value)
  const result =  Math.floor(Math.random()* (valueMax-valueMin + 1)+ valueMin)

  alert(result)
  
}


buttonDraw.addEventListener("click",drawerNumber)
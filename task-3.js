document.getElementById('btn-bold').addEventListener('click', function(){
    const boldColor = document.getElementById('condition') 
    boldColor.style.fontWeight = 'bold'
    boldColor.style.fontSize = '1.1rem'
    boldColor.style.textDecoration = 'none'
    boldColor.style.fontStyle = 'normal'
})

document.getElementById('btn-underline').addEventListener('click', function(){
    const underline= document.getElementById('condition') 
    underline.style.textDecoration = 'underline'
    underline.style.fontSize = '1.1rem'
    underline.style.fontStyle = 'normal'

    
})
function italic(event){
    const italicElement = document.getElementById('condition')
    italicElement.style.fontStyle = 'italic'
    italicElement.style.textDecoration = 'none'
    return event
}

function positionElementByid(position){
    const leftChild = document.getElementById('condition') 
   leftChild.style.textAlign = 'left' ;
  return position ;
}
document.getElementById('center').addEventListener('click', function(){
    const leftChild = document.getElementById('condition') 
   leftChild.style.textAlign = 'center' ;
})
document.getElementById('right').addEventListener('click', function(){
    const leftChild = document.getElementById('condition') 
   leftChild.style.textAlign = 'right' ;
})

// input color set 

const fontSizeElement = document.getElementById('font-size') ;
fontSizeElement.addEventListener('input', function(font){
    const fontSize =`${font.target.value}px` ;
    // const fontSize = `${font.target.value}px`;
    console.log(fontSize)
    leftChild.style.fontSize = fontSize
})
const targetElement = document.getElementById('input-color')
const leftChild = document.getElementById('condition') 
targetElement.addEventListener('input', function(event){
    console.log(event)
    const targetValue = event.target.value ;
    leftChild.style.color = targetValue
})

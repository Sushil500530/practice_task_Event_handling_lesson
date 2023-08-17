document.getElementById('input-field').addEventListener('keyup', function(event){
    const textElement = event.target.value ;
    // console.log(textElement)
    textElement.value = ''
    const apply = document.getElementById('btn-apply') ;
     if(textElement === "DISC30"){
        apply.style.backgroundColor = 'green'
        apply.style.color = 'white'
        apply.removeAttribute('disabled')
       
     }
     else{
        apply.style.backgroundColor = 'red'
        apply.style.color = 'black'
        apply.setAttribute('disabled', true )
     }
 
     document.getElementById('btn-apply').addEventListener('click',function(){
        const element = document.getElementById('element-create') 
        const create = element.innerText = ' 700 tk'
       
     })
})


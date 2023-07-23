

function create_elements(element_name,class_name, text, parant_name){
    const element = document.createElement(element_name) 
    element.className = class_name
    element.innerText = text
    parant_name.appendChild(element)
    return element
}

let choice = 'X'
let first_play = true
let second_play = false
const btn = []
const btn_object =  []

// Creating the main div container
let main_container = create_elements('div', 'container', '', document.body)
let board_container = create_elements('div', 'board', '', main_container)

for(let i = 0; i < 9; i++){
    const button  = create_elements('button', 'btn', '', board_container)
    btn_object.push(button)
}
    

btn_object.forEach(function(btn){
    btn.addEventListener('click', function (){
        btn.innerText = choice
        if(first_play){
            choice = 'O'
            first_play = false
            second_play = true
        }else if(second_play){
            choice = 'X'
            first_play = true
            second_play = false
        }
    })
})


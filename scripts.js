

function create_elements(element_name,class_name, text, parant_name){
    const element = document.createElement(element_name) 
    element.className = class_name
    element.innerText = text
    element.count += 1
    parant_name.appendChild(element)
    return element
}


// 0, 1, 2
// 3, 4, 5
// 6, 7, 8

function check_win(arr){
    const wins = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [2, 4, 6], [0, 4, 8]]
    let count = 0
    for(let i = 0; i < wins.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(arr[j] == wins[i][j]){
                count += 1
                console.log(`Count is ${count}`)
            }
            else{
                count = 0
            }
        }
        if(count == 3){
            break
        }
    }
    return count
}

function anoounce_win(){
    if(x_play.length == 3){
        if(check_win(x_play) == 3){
            alert('X Wins')
        }
    }else if(o_play.length == 3){
        if(check_win(x_play) == 3){
            alert('O Wins')
        }
    }
}

let choice = 'X'
let first_play = true
let second_play = false
const btn_object =  []
const x_play = []
const o_play = []

// Creating the main div container
let main_container = create_elements('div', 'container', '', document.body)
let board_container = create_elements('div', 'board', '', main_container)

for(let i = 0; i < 9; i++){
    const button  = create_elements('button', 'btn', '', board_container)
    btn_object.push(button)
}
    

btn_object.forEach(function callback(btn, index){
    btn.addEventListener('click', function (){
        btn.innerText = choice
        btn.disabled = true
        if(first_play){
            choice = 'O'
            first_play = false
            second_play = true
            x_play.push(index)
            anoounce_win()
            console.log(x_play)
        }else if(second_play){
            choice = 'X'
            first_play = true
            second_play = false
            o_play.push(index)
            console.log(o_play)
        }
    })
})






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
    const wins = { 0: [0, 1, 2], 1: [3, 4, 5], 2: [6, 7, 8]}
    let count = 0
    for(let j = 0; j <= 2; j++){
        for(let i = 0; i < arr.length; i++){
            if(arr[i] in wins[`${j}`]){
                count += 1
                console.log(`Count is ${count}`)
            }
        }
        if(count == 3){
            break
        }
        count = 0
        console.log(`Iterated ${j+1}`)
    }
    return count
}

function anoounce_win(){
    if(x_play.length >= 3){
        if(check_win(x_play) == 3){
            win_board.innerText = 'X WINS'
        }
    }
    if(o_play.length >= 3){
        if(check_win(o_play) == 3){
            win_board.innerText = 'O WINS'
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
let announcement_cont = create_elements('div', 'announce', '', main_container)
let board_container = create_elements('div', 'board', '', main_container)
let win_board = create_elements('p', 'winner', '', announcement_cont)

for(let i = 0; i < 9; i++){
    const button  = create_elements('button', 'btn', '', board_container)
    btn_object.push(button)
}

// Looping through each button object added as an item in btn_object list
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
            anoounce_win()
            console.log(o_play)
        }
    })
})




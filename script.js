console.log("connected")

const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");
const resetBtn = document.getElementById("reset-btn");
const timerDisplay = document.getElementById("timer-display");
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');
const addBtn = document.getElementById('add-btn');

let timer;
let seconds = 1500;
let tasks = [];

function startTimer(){
    timer = setInterval(function(){
        seconds--
        updateDisplay()
    }, 1000)
}

function updateDisplay(){
    let minutes = Math.floor(seconds / 60)
    let secs = seconds % 60

    if(secs < 10){
        secs = '0' + secs;
    }

    timerDisplay.textContent = minutes + ':' + secs;
}

function pauseTimer() {
    clearInterval(timer)
}

function resetTimer(){
    clearInterval(timer)
        seconds = 1500;
        updateDisplay()
}

function addTask(){
    newTask = taskInput.value;

    if(newTask){
        tasks.push(newTask);
        let li = document.createElement('li')
        let label = document.createElement('label')
        let checkbox = document.createElement('input')
        
        checkbox.type = 'checkbox'
        label.textContent = newTask
        
        label.prepend(checkbox)
        li.appendChild(label)
        taskList.appendChild(li)

        checkbox.addEventListener('change', function() {
    if (checkbox.checked) {
        label.style.textDecoration = 'line-through'
        label.style.opacity = '0.5'
    } else {
        label.style.textDecoration = 'none'
        label.style.opacity = '1'
    }
})
    }

    taskInput.value = '';

}

    

startBtn.addEventListener('click', startTimer)
stopBtn.addEventListener('click', pauseTimer)
resetBtn.addEventListener('click', resetTimer)
addBtn.addEventListener('click', addTask)





const list = document.getElementById("tf_list")
let TodoList = []

function createTodo(text) {
    const ele = document.createElement('div')
    ele.classList.add('todo')
    ele.innerHTML = '<p>' + text + '</p>' + '<button onclick="remove(' + "'" + text + "'" + ')">x</button>'
    return ele;
}

function render() {
    list.innerHTML = ''
    for (let index = 0; index < TodoList.length; index++) {
        const element = TodoList[index];
        list.innerHTML += createTodo(element).outerHTML
    }
    document.cookie = JSON.stringify(TodoList)
}

function newTodo() {
    let name = prompt("Name the todo.")
    if (name.length > 0) {
        TodoList.unshift(name)
        render()
    }
}

function remove(text) {
    let yes = confirm('Are you sure to remove')
    if (yes) {
        TodoList = TodoList.filter((a) => a != text)
        render()
    }
}

window.onload = function () {
    let save = document.cookie;
    if (save.length > 0) {
        TodoList = JSON.parse(save)
        render()
    }
}
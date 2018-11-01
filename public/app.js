var url = "http://localhost:3001/api/todos";
var list = document.getElementsByClassName("list")[0];


window.onload = function() {
    initialFetching();
}

/// initial fetching

function initialFetching() {
    axios(url)
    .then(function(res) {
        renderingTodos(res.data)
    })
    .catch(function(err) {
        errorHandler(err)
    })
}

// error handilng

function errorHandler(err) {
    if (err.response) {
        console.log("Error with response")
    } else if (err.request) {
        console.log("Error with request")
    } else {
        console.log(err.message)
    }
}

// rendering lists in DOM

function renderingTodos(todos) {
    todos.forEach(function(todo) {
        var li = document.createElement("li");
        li.innerText = todo.name;
        list.appendChild(li);
    })
}
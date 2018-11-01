var url = "/api/todos";
var list = document.getElementsByClassName("list")[0];
var input = document.getElementById("todoInput");




/// initial fetching

function initialFetching() {
    axios(url)
        .then(renderingTodos)
        .catch(errorHandler)
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
    list.innerHTML = "";
    todos.data.forEach(function (todo) {
        var li = document.createElement("li");
        li.id = todo._id;
        var button = "<button class=\"btn\">X</button>";
        if (todo.completed) {
            li.classList.add("done")
        }
        li.innerHTML = todo.name + button;
        list.appendChild(li);
    })
}

/// adding event listener to the list

list.addEventListener("click", function (event) {
    if (!event.target.matches("button")) {
        toggleTodoClass(event);
        comletedOrNot(event);
    } else if (event.target.matches("button")) {
        deleteTodo(event);
    }
})


// setting todo to be completed/not completed

function toggleTodoClass(event) {
    event.target.classList.toggle("done");
}

// sending get request to change completed/not completed
function comletedOrNot(event) {
    var id = event.target.id;
    if ( event.target.classList.contains("done")) {
        axios.put(url + "/" + id, {
            completed: true,
        })
        .then(initialFetching)
        .catch(errorHandler)
    } else {
        axios.put(url + "/" + id, {
            completed: false,
        })
        .then(initialFetching)
        .catch(errorHandler)
    }
    
}

// crete new todo

input.addEventListener("keypress", function (event) {
    if (event.which == 13) {
        axios.post(url, {
            name: event.target.value
        })
            .then(initialFetching)
            .catch(errorHandler)
        event.target.value = "";
    }
})

/// delete

function deleteTodo(event) {
    var id = event.target.parentNode.id;
    axios.delete(url + "/" + id)
    .then(initialFetching)
    .catch(errorHandler)
}


/////////////////////////////

window.onload = function () {
    initialFetching();
}


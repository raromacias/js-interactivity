// console.log("Hello world")




//Step 1 : Grab html element

const message = document.querySelector("#message")





//step 2: Write the function

const deleteMovie =(event) => {
    event.target.parentNode.remove()
    message.textContent = "Movie deleted"
    
}

const crossOffMovie = (event) => {
    event.target.classList.toggle("checked")
    if(event.target.classList.contains("checked") ){
        message.textContent = "Movie watched!"
    }else {
        message.textContent = "Movie added back!"
    }
}



const  addMovie = (event) => {
    event.preventDefault();
    let inputField = document.querySelector("input")
let movie = document.createElement("li")
let movieTitle = document.createElement("span")
movieTitle.textContent = inputField.value
movieTitle.addEventListener("click", crossOffMovie)
// console.log(inputField)
movie.appendChild(movieTitle)
const deleteBtn = document.createElement("button")
deleteBtn.textContent= "X"
deleteBtn.addEventListener("click", deleteMovie)
movie.appendChild(deleteBtn)
const ul1 = document.querySelector("ul")
ul1.appendChild(movie)
    inputField.value = ' ' 
    
}

document.querySelector("form").addEventListener("submit", addMovie)


//Step 3 : Combine step 1 and 2 using an Event Listener

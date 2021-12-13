
let addButton = document.querySelector("#liveToastBtn")
let addList = document.querySelector("#list")
let addTask = document.querySelector("#task")


// addButton.addEventListener("click", function(){
    
//     let liDOM = document.createElement('li')
//     liDOM.innerHTML = addTask.value
//     addList.append(liDOM)

// })

// to add element in list
function newElement(){
    let addList = document.querySelector("#list");
    let addTask = document.querySelector("#task");

    addTask.value = addTask.value.replaceAll(' ','');

    if(addTask.value === "" || addTask.value === null){
        $('#liveError').toast('show');
    }else{
        let liDOM = document.createElement('li')
        liDOM.innerHTML =addTask.value
        addList.append(liDOM)
        $('#liveToast').toast('show');
    }
}

// to delete element in list

function deleteElement(){
    let addList = document.querySelector("#list")
    addList.removeChild(addList.childNodes[0])
}

// to done
    let liDOM = document.querySelectorAll("li")
    for(let i= 0; i< liDOM.length ; i++){
        liDOM[i].addEventListener("click", function(){
        this.classList.toggle("done");
        //this.style.textDecoration = "line-through";
        
    })
}




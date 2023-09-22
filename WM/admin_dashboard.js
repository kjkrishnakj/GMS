const inputBox= document.getElementById("input_box"); 
const listConatiner= document.getElementById("list-container"); 
function addTask(){
    if(inputBox.value===''){
        alert("You must write something");

    }
    else{
        let li  = document.createElement("li");
        li.innerHTML = inputBox.value;
        listConatiner.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\uf1f8";
        li.appendChild(span);

    }
    inputBox.value = "";
    saveData()
}  
listConatiner.addEventListener("click",function(e){
    e.target.parentElement.remove();
    saveData() 
    
})
function saveData(){
    localStorage.setItem("data",listConatiner.innerHTML);
}
function showTask(){
    listConatiner.innerHTML = localStorage.getItem("data");
}
showTask();
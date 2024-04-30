var input = document.getElementById("inp")
var container = document.getElementById("ahmad")

function answer(){
    if(input.value === ''){
        alert("pls input your wish-list!");
    }
    else{
        var li = document.createElement("li")
        li.innerHTML = input.value
        container.appendChild(li)
    }
    input.value = ""
}
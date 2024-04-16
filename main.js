var input = document.getElementById("inp")
var container = document.getElementById("ahmad")

function answer(){
    if(input.value === ""){
        alert("pls insert a word!")
    }
    else{
        var li = document.createElement("li")
        li.innerHTML = input.value
        container.appendChild(li)
    }
    input.value = ""
}
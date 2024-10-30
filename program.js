function dark(){
    let element = document.body;
    element.classList.toggle("dark-mode");
}

function cross(x){
    x.classList.toggle("change");
    
    if(menuBox.style.display == "block"){
        menuBox.style.display = "none";
       }else{
        menuBox.style.display = "block";
       }
}
let menuBox = document.getElementById("content-menu");
cross();

function newElement() { // eleman ekleme
    let newTask = document.getElementById('task');
    let ulDOM = document.querySelector('#list');
    let liDOM = document.createElement('li');
    let tasklist ="";
    
    
    
    if (newTask.value=='') {
        var myToast = new bootstrap.Toast(document.getElementById("liveToast2"));
        myToast.show();
    }else{
        liDOM.innerHTML = `${newTask.value}<i class="bi bi-x-octagon float-right close"></i>`
        ulDOM.appendChild(liDOM);
       
        
        
        var myToast = new bootstrap.Toast(document.getElementById("liveToast"));

        myToast.show();
        
        newTask.value = "";
        newTask.focus();
        
    }
    liDOM.onclick = () => {
        liDOM.classList.contains("checked") ? 
        liDOM.classList.remove("checked") : 
        liDOM.classList.add("checked");
    };
 

    var close = document.getElementsByClassName("close");
    for (var i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
   
}




console.log(localStorage.getItem("lidom"))





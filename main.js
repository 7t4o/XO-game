let boxes = document.querySelectorAll(".box");
let chkBox = document.getElementById("chkBox");
let auto = false;
let indx = 0;

// Probabilities of winning
function check(){
    // X
    if(boxes[0].textContent == "X" && boxes[1].textContent == "X" && boxes[2].textContent == "X"){
        boxes[0].style.cssText = "background-color: green;";
        boxes[1].style.cssText = "background-color: green;";
        boxes[2].style.cssText = "background-color: green;";
        indx = 9;
    }
    
    else if(boxes[3].textContent == "X" && boxes[4].textContent == "X" && boxes[5].textContent == "X"){
        boxes[3].style.cssText = "background-color: green;";
        boxes[4].style.cssText = "background-color: green;";
        boxes[5].style.cssText = "background-color: green;";
        indx = 9;
    }
    else if(boxes[6].textContent == "X" && boxes[7].textContent == "X" && boxes[8].textContent == "X"){
        boxes[6].style.cssText = "background-color: green;";
        boxes[7].style.cssText = "background-color: green;";
        boxes[8].style.cssText = "background-color: green;";
        indx = 9;
    }
    else if(boxes[0].textContent == "X" && boxes[3].textContent == "X" && boxes[6].textContent == "X"){
        boxes[0].style.cssText = "background-color: green;";
        boxes[3].style.cssText = "background-color: green;";
        boxes[6].style.cssText = "background-color: green;";
        indx = 9;
    }
    else if(boxes[1].textContent == "X" && boxes[4].textContent == "X" && boxes[7].textContent == "X"){
        boxes[1].style.cssText = "background-color: green;";
        boxes[4].style.cssText = "background-color: green;";
        boxes[7].style.cssText = "background-color: green;";
        indx = 9;
    }
    else if(boxes[2].textContent == "X" && boxes[5].textContent == "X" && boxes[8].textContent == "X"){
        boxes[2].style.cssText = "background-color: green;";
        boxes[5].style.cssText = "background-color: green;";
        boxes[8].style.cssText = "background-color: green;";
        indx = 9;
    }
    else if(boxes[0].textContent == "X" && boxes[4].textContent == "X" && boxes[8].textContent == "X"){
        boxes[0].style.cssText = "background-color: green;";
        boxes[4].style.cssText = "background-color: green;";
        boxes[8].style.cssText = "background-color: green;";
        indx = 9;
    }
    else if(boxes[2].textContent == "X" && boxes[4].textContent == "X" && boxes[6].textContent == "X"){
        boxes[2].style.cssText = "background-color: green;";
        boxes[4].style.cssText = "background-color: green;";
        boxes[6].style.cssText = "background-color: green;";
        indx = 9;
    }

    // O
    if(boxes[0].textContent == "O" && boxes[1].textContent == "O" && boxes[2].textContent == "O"){
        boxes[0].style.cssText = "background-color: green;";
        boxes[1].style.cssText = "background-color: green;";
        boxes[2].style.cssText = "background-color: green;";
        indx = 9;
    }
    
    else if(boxes[3].textContent == "O" && boxes[4].textContent == "O" && boxes[5].textContent == "O"){
        boxes[3].style.cssText = "background-color: green;";
        boxes[4].style.cssText = "background-color: green;";
        boxes[5].style.cssText = "background-color: green;";
        indx = 9;
    }
    else if(boxes[6].textContent == "O" && boxes[7].textContent == "O" && boxes[8].textContent == "O"){
        boxes[6].style.cssText = "background-color: green;";
        boxes[7].style.cssText = "background-color: green;";
        boxes[8].style.cssText = "background-color: green;";
        indx = 9;
    }
    else if(boxes[0].textContent == "O" && boxes[3].textContent == "O" && boxes[6].textContent == "O"){
        boxes[0].style.cssText = "background-color: green;";
        boxes[3].style.cssText = "background-color: green;";
        boxes[6].style.cssText = "background-color: green;";
        indx = 9;
    }
    else if(boxes[1].textContent == "O" && boxes[4].textContent == "O" && boxes[7].textContent == "O"){
        boxes[1].style.cssText = "background-color: green;";
        boxes[4].style.cssText = "background-color: green;";
        boxes[7].style.cssText = "background-color: green;";
        indx = 9;
    }
    else if(boxes[2].textContent == "O" && boxes[5].textContent == "O" && boxes[8].textContent == "O"){
        boxes[2].style.cssText = "background-color: green;";
        boxes[5].style.cssText = "background-color: green;";
        boxes[8].style.cssText = "background-color: green;";
        indx = 9;
    }
    else if(boxes[0].textContent == "O" && boxes[4].textContent == "O" && boxes[8].textContent == "O"){
        boxes[0].style.cssText = "background-color: green;";
        boxes[4].style.cssText = "background-color: green;";
        boxes[8].style.cssText = "background-color: green;";
        indx = 9;
    }
    else if(boxes[2].textContent == "O" && boxes[4].textContent == "O" && boxes[6].textContent == "O"){
        boxes[2].style.cssText = "background-color: green;";
        boxes[4].style.cssText = "background-color: green;";
        boxes[6].style.cssText = "background-color: green;";
        indx = 9;
    }

    if(auto && indx%2 == 1 && indx != 9){
        let rand;
        do{
            rand = Math.floor(Math.random() * 9) + 1;
        }while(document.getElementById(rand).textContent != "");
        setTimeout(() => {document.getElementById(rand).click()}, 1000);
        
    }
}

// Reset the panel
function reset(){
    boxes.forEach((ele) => {ele.textContent = ""; ele.style.cssText = "background-color: #E68369"; indx = 0;})
}

// Click events
boxes.forEach((ele) => {
    ele.onclick = () => {
        if(indx === 9){
            reset();
        }
        else if(indx%2 ==0 && ele.textContent ===""){
            ele.append("X");
            indx++;
            check();
        }else if(indx%2 ==1 && ele.textContent ===""){
            ele.append("O");
            indx++;
            check();
        } 
    }
})

// Control from keyboard
document.addEventListener("keydown", (ele) => {
    document.getElementById(`${ele.key}`).click();
})

// Auto play
chkBox.addEventListener("change", () => {
    auto = chkBox.checked;
    check();
})
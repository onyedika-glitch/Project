const button = document.querySelector("#btn");
const backGround= document.querySelector(".background-body");

function ColorChanger(){
       if (backGround.style.backgroundColor === "purple"){
        button.addEventListener("click", ()=>{
        backGround.style.backgroundColor = "blue";
    });
    }else{
        button.addEventListener("click", ()=>{
        backGround.style.backgroundColor = "purple";
        });
    }
}

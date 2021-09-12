const date_input= document.querySelector("#date-input");
const btn_check = document.querySelector("#btn-check");

btn_check.addEventListener("click",function clickEventHandler(){
    console.log(typeof(date_input.value));
    console.log("check")
});


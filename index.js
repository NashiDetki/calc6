let plus = document.querySelector(".plus");
let minus = document.querySelector(".minus");
let proizvedenie = document.querySelector(".proizvedenie");
let delenie = document.querySelector(".delenie");
let res = document.querySelector(".res")

plus.addEventListener("click",function(){
    let num1 = +document.querySelector(".num1").value;
    let num2 = +document.querySelector(".num2").value;
    console.log(num1,num2);
    res.innerText = num1 + num2;
})
minus.addEventListener("click",function(){
    let num1 = +document.querySelector(".num1").value;
    let num2 = +document.querySelector(".num2").value;
    console.log(num1,num2);
    res.innerText = num1 - num2;
})
proizvedenie.addEventListener("click",function(){
    let num1 = +document.querySelector(".num1").value;
    let num2 = +document.querySelector(".num2").value;
    console.log(num1,num2);
    res.innerText = num1 * num2;
})
delenie.addEventListener("click",function(){
    let num1 = +document.querySelector(".num1").value;
    let num2 = +document.querySelector(".num2").value;
    console.log(num1,num2);
    if (num2 == 0){
        res.innerText = "На 0 делить нельзя!"
    } else {
        res.innerText = num1 / num2;
    }
})


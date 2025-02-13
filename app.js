let dil = document.querySelector("div");
let ul = document.querySelector("ul");
let lis = document.querySelectorAll("li");

dil.addEventListener("click",function(){
   console.log("Div was clicked");
});

ul.addEventListener("click",function(){
   console.log("ul was clicked");
});

for(li of lis){
   li.addEventListener("click",function(){
   console.log("li was clicked");
   });
}
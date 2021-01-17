const button = document.getElementById("btn");
const code = document.getElementById("code");

const eleman = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

button.addEventListener("click",function(){
    let str ="#";
    for(var i=0; i<6; i++){
      str = str + eleman[Math.floor(Math.random() * 16)];
    }
    console.log(str);
    document.body.style.backgroundColor=str;
    code.innerHTML = "Color code : " + str;
});

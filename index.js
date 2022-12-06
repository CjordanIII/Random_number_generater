let passwordgen = document.getElementById("password-gen")
let passwordspace = document.getElementById("randompass1")
let passwordspace2=document.getElementById("randompass2")
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


const nonspecial=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8"]












function randompassword(){
    let character=[ ]
    let character2=[]
    for(let i=0;i<15;i++){
        let indexnum =Math.floor(Math.random()*characters.length)
        let indexnum2 = Math.floor(Math.random()*nonspecial.length)
        let char=characters[indexnum]
        let char2=nonspecial[indexnum2]
        character.unshift(char)
        character2.unshift(char2)
    }
   passwordspace.textContent = character.join("");
   passwordspace2.textContent = character2.join("");

}


var icon = document.getElementById("moon")
icon.onclick= function(){
    document.body.classList.toggle("dark-theme")
    if(document.body.classList.contains("dark-theme")){
        icon.src ="icons/brightness-high-fill.svg"
    }
    else{
        icon.src ="icons/moon-fill.svg"
    }
}







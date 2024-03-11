let msg = document.getElementById("message");
let str = document.getElementById("strength");

const passwordBox =document.getElementById( "password" );
const length = 20;
const upperCase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase ="abcdefghijklmnopqrstuvwxyz";
let number="1234567890", specialChars="@#$%&()_-+?/|~`!^<>{}[]:,.";
let Allchar = upperCase + lowerCase + number + specialChars;
function genPassword(){
    let pass="" ;
    //generate a random number to decide which type of character set will be used
   pass += upperCase[Math.floor( Math.random() * upperCase.length )] ;
   pass += lowerCase[Math.floor( Math.random()* lowerCase.length)] ;
   pass += number [Math.floor (Math.random()* number.length)];
   pass += specialChars[Math.floor(Math.random()* specialChars.length) ] ;
   
   while(length > pass.length){
    pass +=Allchar[Math.floor(Math.random()* Allchar.length) ] ;
    // jab tak 20 char hote nahi hai tab tak character type karo as per user depends
   }

   // show password strength
   passwordBox.value = pass;
  
   if(passwordBox.value.length < 4){
    str.innerHTML= "Weak";
    str.style.display='block';
   passwordBox.style.borderColor="#e84118";
   msg.style.color="red";
}else if(passwordBox.value.length >= 4 && passwordBox.value.length < 8) {
    str.innerHTML= "Medium";
    passwordBox.style.borderColor="yellow";
   msg.style.color="yellow";
}
else if(passwordBox.value.length >= 8){
    str.innerHTML= "Strong";
    passwordBox.style.borderColor="green";
   msg.style.color="green";
}
}
//copy button 
function copyPassword(){
    passwordBox.select();
    document.execCommand("Copy");
    alert("Copied Password!");
}



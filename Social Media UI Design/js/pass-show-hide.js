const passfield=document.querySelector(".form input[type='password']"),
togglebtn=document.querySelector(".form .field img");


/////////////////CHANGING TEXT TO PASSSOWRD DOTS//////////////
togglebtn.onclick=()=>{
    if(passfield.type=="password"){
        passfield.type="text";
        togglebtn.classList.add("active");
    }else{
        passfield.type="password"
        togglebtn.classList.remove("active");
    }
}
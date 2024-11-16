let passwords=document.getElementById("password")
let icon=document.getElementById("icon")


function pswd(a){
    if(passwords.type==="password"){
        passwords.type="text"
        icon.className=`fa-regular fa-eye`
    }else{
        passwords.type="password"
        icon.className=`fa-regular fa-eye-slash`
    }

}


const logbtn=document.getElementById("logbtn");
const username=document.getElementById("username");
const password=document.getElementById("password");
const userwrong=document.getElementById("userwrong");
const passwordwrong=document.getElementById("passwordwrong");
const logincontddis=document.getElementById("logincontddis");
const welcomecontddis=document.getElementById("welcomecontddis");
const logoutbtn=document.getElementById("logoutbtn");
if(localStorage.getItem("username")!=null &&localStorage.getItem("password")!=null)
{
    logincontddis.style.display="none";
    welcomecontddis.style.display="block";
}
function containsUppercase(str) {
    return /[A-Z]/.test(str);
}
logbtn.addEventListener("click",()=>{
    userwrong.innerHTML="";
    passwordwrong.innerHTML="";
    console.log(username.value);
    console.log(password.value);
    const user=username.value;
    let txt=false;
    var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if(format.test(user))
    {
        userwrong.innerHTML="Special Characters not allowed";
        txt=true;
    }
    const pass=password.value;
    if(!format.test(pass))
    {
        txt=true;
        let li1=document.createElement("li");
        li1.appendChild(document.createTextNode("Special Character Missing"));
        passwordwrong.appendChild(li1);
    }
    if(pass.length<8)
    {
        txt=true;
        let li2=document.createElement("li");
        li2.appendChild(document.createTextNode("Minimum 8 charaters required"));
        passwordwrong.appendChild(li2);
    }
    if(!containsUppercase(pass))
    {
        txt=true;
        let li3=document.createElement("li");
        li3.appendChild(document.createTextNode("Atleast one Uppercase character required"));
        passwordwrong.appendChild(li3);
    }
    if(!containsLowercase(pass))
    {
        txt=true;
        let li4=document.createElement("li");
        li4.appendChild(document.createTextNode("Atleast one Lowercase character required"));
        passwordwrong.appendChild(li4);
    }
    if(!containsNumber(pass))
    {
        txt=true;
        let li5=document.createElement("li");
        li5.appendChild(document.createTextNode("Atleast one Number  required"));
        passwordwrong.appendChild(li5);
    }
    if(txt==false)
    {
        localStorage.setItem("username",user);
        localStorage.setItem("password",pass);
        logincontddis.style.display="none";
        welcomecontddis.style.display="block";
    }
});
function containsLowercase(str) {
    return /[a-z]/.test(str);
}
function containsNumber(str) {
    return /[0-9]/.test(str);
}
logoutbtn.addEventListener("click",()=>{
    localStorage.clear();
    document.location.reload();
})
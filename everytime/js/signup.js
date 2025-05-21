const username = document.getElementById("username");
const nickname = document.getElementById("nickname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const button = document.getElementById("submitBtn");
const inputs = [username, nickname, email, password, password2];//입력요소 배열로

function checkInput(){
    const usernameValue = username.value.trim();
    const nicknameValue = nickname.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    const pwdlengthValue = password.value.length; //비밀번호재입력했을때, pwd와 pwd2가 같게
    


    if(usernameValue !== "" && nicknameValue !== "" && emailValue !== "" && pwdlengthValue >= 8 && passwordValue == password2Value){
        button.classList.add("active");
    }
    else{
        button.classList.remove("active");
    }
    console.log("usernameValue: "+usernameValue);
    console.log("nicknameValue: "+nicknameValue);
    console.log("emailValue: "+emailValue);
    console.log("password.value.length: "+password.value.length);
    console.log("passwordValue: "+passwordValue);
    console.log("password2Value: "+password2Value);
    console.log("button.classList: "+button.classList);
}

// inputs.forEach(input => input.addEventListener("input", checkInput));

inputs.forEach(input => {
    input.addEventListener("input", checkInput);
})

// password.addEventListener("input", checkInput);

// button.classList.add("active");
// console.log(button.classList);











// git pull upstream 김지우 하고 git 풀리퀘하기 무조건!


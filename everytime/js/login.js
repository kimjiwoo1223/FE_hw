const username = document.getElementById("usernameEx");
const password = document.getElementById("passwordEx");
const button = document.getElementById("submitBtn");

function checkInput() {
    // let isPasswordValid = password.value.length >= 8;
    // const pwdlengthValue = password.value.length();
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();
    const pwdlengthValue = password.value.length;

    // passwordValue !== "" && 
    if(usernameValue !== "" && pwdlengthValue >= 8){
        button.classList.add("active");
    }
    else{
        button.classList.remove("active");
    }
    console.log("password.value.length: "+password.value.length);
    console.log("passwordValue: "+passwordValue);
    console.log("button.classList: "+button.classList);
}

password.addEventListener("input", checkInput);


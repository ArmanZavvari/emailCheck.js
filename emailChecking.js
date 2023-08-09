const registeredEmail = "user.test@gmail.com";
function checkEmail(email){
    const signUpEmail = email.toLowerCase().trim();
    const username = signUpEmail.split("@")[0];
    
    if (registeredEmail == signUpEmail) return "Email Already exist !";
    return `Wellcome , this is your username : ${username}`;
}
console.log(checkEmail("user.test@gmail.com"));
console.log(checkEmail(" user.test@gmail.com"));
console.log(checkEmail("User.test@gmail.com"));
console.log(checkEmail("newuser@gmail.com")); 
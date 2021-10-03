function generateRandomPassword() {
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
        
    var passwordLength = 10;
    const password = "";
   for (var i = 0;  n = charset.passwordLength; i <= passwordLength ; i++) {
     
     password += charset.charAt(Math.floor(Math.random() * n));
    }
    
    return password;
}

//Use RegEx to validate form

// I wanted to experiment with regular expressions and how to use them, that's why the function logs to the console and gives a message to the "user" based on the input in the form. Regular expressions are pretty cool!

function validate() {
    
//Variables to get values from the users input
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var phoneNumber = document.getElementById("number").value;
    var eMail = document.getElementById("email").value;
    
//Regular expressions to test input value
    var firstNameRegex = /[a-zA-Z]/;
    var lastNameRegex = /[a-zA-Z]/;
    var phoneRegex = /\d\d\d\d\d\d\d\d/;
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    
//Get the result
    var firstNameResult = firstNameRegex.test(firstName);
    var lastNameResult = lastNameRegex.test(lastName);
    var phoneResult = phoneRegex.test(phoneNumber);
    var emailResult = emailRegex.test(eMail); 
 
//Message user if first name is valid or not
    if (firstNameResult === false) {
        document.getElementById("firstNameP").innerHTML = "Your first name must include at least one character";
    } else {
        document.getElementById("firstNameP").innerHTML = "Good"   
    }
//Console log if first name is valid or not      
    if (firstNameResult === false) {        console.log("First name is NOT valid");  
    }  else {
       console.log("First name is valid");
}
 
//Message user if last name is valid or not    
    if (lastNameResult === false) {
        document.getElementById("lastNameP").innerHTML = "Your last name must include at least one character";
    } else {
       document.getElementById("lastNameP").innerHTML = "Good"; 
};
//Console log if last name is valid or not     
    if (lastNameResult === false) {
        console.log("Last name is NOT valid");
    } else {
       console.log("Last name is valid"); 
};
//Message user if Norwiegian phone number is valid or not
    if (phoneResult === false) {
        document.getElementById("phoneP").innerHTML = "Your phone number must consist of eight digits";    
    } else {
       document.getElementById("phoneP").innerHTML = "Good"; 
}
//Console log if Norwiegian phone number is valid or not 
    if (phoneResult === false) {
        console.log("Phone number is NOT valid");
    } else {
       console.log("Phone number is valid"); 
};
//Message user if email is valid or not    
    if (emailResult === false) {
        document.getElementById("emailP").innerHTML = "Please submit a valid email adress";
    } else {
       document.getElementById("emailP").innerHTML = "Good"; 
};
//Console log email name is valid or not    
    if (emailResult === false) {
       console.log("email is NOT valid");    
    } else {
       console.log("email is valid"); 
  };
};
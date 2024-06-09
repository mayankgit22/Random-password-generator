// random password generator
function passwordgenerator( passwordlength,includelowerCase,includeupperCase,includeNumber,includeSymbol){
    const generatedpassword=document.getElementById("generatedpassword");
    const lowerCase="abcdefghijklmnopqrstuvwxyz";
    const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const Number="1234567890";
    const Symbol="!@#$%^&*()_+=";
    let allowedChars='';
    let password='';
    allowedChars+=includelowerCase?lowerCase: ""; 
    allowedChars+=includeupperCase?upperCase: "";
    allowedChars+=includeNumber?Number: "";
    allowedChars+= includeSymbol?Symbol: "";
    // console.log(allowedChars)/
    
   
    if(passwordlength<=0){
        return "please enter some length of the password";
    }
    if(allowedChars.length==0){
        return "please select some characters of the password";
    }
    let i=0;
    for( i=0; i<passwordlength;i++){
    const radompassword=Math.floor(Math.random()*allowedChars.length);
    password+=allowedChars[radompassword];
    }
    // generatedpassword.textContent=password
    return password;


}
document.getElementById("mybutton").onclick = function() {
    const passwordlength = document.getElementById("myinput").value;
    const includelowerCase = document.getElementById("includelowerCase").checked;
    const includeupperCase = document.getElementById("includeupperCase").checked;
    const includeNumber = document.getElementById("includeNumber").checked;
    const includeSymbol = document.getElementById("includeSymbol").checked;
    const password = passwordgenerator(passwordlength, includelowerCase, includeupperCase, includeNumber, includeSymbol);
document.getElementById("generatedpassword").textContent = password;
};
document.getElementById("generatedpassword").textContent = password;

//  const passwordlength=document.getElementById("myinput").value;
// const passwordlength=10;
// const includelowerCase= document.getElementById("includelowerCase").checked
// const includeupperCase= document.getElementById("includeupperCase").checked
// const includeNumber= document.getElementById("includeNumber").checked
// const includeSymbol= document.getElementById("includeSymbol").checked
// includelowerCase.checked?true:false;
//  includeupperCase.checked? true:false;
//  includeNumber.checked? true:false;
//  includeSymbol.checked? true:false;
const  password= passwordgenerator(passwordlength,
                                    includelowerCase,
                                    includeupperCase,
                                    includeNumber,
                                    includeSymbol);
    

    

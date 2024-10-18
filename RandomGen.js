//RANDOM NUMBER GENERATOR//

const passwordLenght =  document.getElementById("length");
let IncludeNumber =  document.getElementById("IncludeNumber");
const IncludeLowercase = document.getElementById("IncludeLower");
const IncludeSymbols = document.getElementById("IncludeSymbol");
const IncludeUppercase =document.getElementById("IncludeUpper");
let GeneratePas = document.getElementById("GeneratePas");
let PassW =  document.getElementById("PassW");
let generatedPass = document.getElementById("generatedPass");
GeneratePas.onclick = function(){
    const passwordLenght =  document.getElementById("length").value;

function generatePassword(Lenght, IncludeNumber, IncludeLowercase, IncludeSymbols, IncludeUppercase){
    
    if(IncludeNumber.checked){
        IncludeNumber = true;
    }
    else{
        IncludeNumber = false; 
    }

     
    if(IncludeLowercase.checked){
        IncludeLowercase  = true;
    }
    else{
        IncludeLowercase  = false; 
    }

     
    if(IncludeSymbols.checked){
        IncludeSymbols = true;
    }
    else{
        IncludeSymbols = false; 
    }

     
    if(IncludeUppercase.checked){
        IncludeUppercase = true;
    }
    else{
        IncludeUppercase = false; 
    }

    
    const LowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const UppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const Numbers = "0123456789";
    const Symbols = "!@#$%^&*()_+?/\-*";

    let allowedChars = "";
    let password = "";

    allowedChars += IncludeNumber ? Numbers : "";  // to check if includeNumber is true or false but if true add Number if false add nothing
    allowedChars += IncludeLowercase ? LowercaseChars: "";
    allowedChars += IncludeSymbols ? Symbols : "";
    allowedChars += IncludeUppercase ? UppercaseChars : "";
    
 if(Lenght<= 0){
    return `Password must be atleast one`;
    }

if (allowedChars.length === 0){
    return `Atleast 1 set of character needs to be selected`;
    
}

else{
    PassW.value = password ;
}

for(let i = 0; i < Lenght; i++){
    const randomGen = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomGen];
}

return password;


}


const password = generatePassword(passwordLenght, 
                                  IncludeNumber, 
                                  IncludeLowercase, 
                                  IncludeSymbols, 
                                  IncludeUppercase);
                                    if(passwordLenght <= 0 ){  
                                        generatedPass.textContent =  `${password}` ;

                                    }

                                   else if(generatePassword){

                                   }

                                    else{
                                        generatedPass.textContent = ''; 
                                    }
                                  PassW.value = `${password}` ;
                                  

  
  
}




function copyText() {
    const textToCopy = document.getElementById('PassW');
    textToCopy.select();  // Select the text inside the input field
    textToCopy.setSelectionRange(0, 99999);  // For mobile devices

    // Copy the text inside the text field to the clipboard
    navigator.clipboard.writeText(textToCopy.value)
        .then(() => {
            document.getElementById('copyStatus').innerText = 'Text copied successfully!';
        })
        .catch(err => {
            document.getElementById('copyStatus').innerText = 'Failed to copy text!';
            console.error('Error:', err);
        });
}


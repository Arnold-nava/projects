const PasswordLength = 16;
const IncludeUpper = true;
const IncludeLower = true;
const IncludeNumber = true;
const IncludeSymbol = true;


function generatePassword(length, IncludeUpper, IncludeLower, IncludeNumber, IncludeSymbol) {
    const myPassword = document.getElementById("myPassword")

    const Upperchar = "ABCDEFGHIJKLMNOPQRSTULVWXYZ"
    const Lowerchar = "abcdefghijklmnopqrstuvwxyz"
    const Numchar = "1234567890"
    const Symbolchar ="!@#$%^&*()_+"

    let Char = ""
    let Pass = ""

    Char += IncludeUpper ? Upperchar: "";
    Char += IncludeLower ? Lowerchar : "";
    Char += IncludeNumber ? Numchar : "";
    Char += IncludeSymbol ? Symbolchar : "";

    if (length <= 0){
        myPassword.placeholder = "Passowrd length must be Atleast 1"
        myPassword.style.fontSize = "14px"
        return;
    }
    if (Char.length === 0){
        myPassword.placeholder = "You Must select Atleast one option"
        myPassword.style.fontSize = "14px"
        return;
    }

    for (let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * Char.length);
        Pass += Char[randomIndex];
        myPassword.value = Pass
    } 
    
}

document.getElementById("generate").addEventListener("click", () => generatePassword(PasswordLength, IncludeUpper,IncludeLower,IncludeNumber,IncludeSymbol))
const LENGTH=12;

const UPPERCASE="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWERCASE="abcdefghijklmnopqrstuvwxyz";
const NUMBERS="0123456789";
const SPECIALSCHARACTERS="!@#$%^&*()_+[]{}-=;:.,<>|";
const ALLCHARACTERS= UPPERCASE+LOWERCASE+NUMBERS+SPECIALSCHARACTERS;

const passwordBox= document.getElementById("password");

function generatePassword(){
    let password="";
    password=password+UPPERCASE[Math.floor(Math.random()*UPPERCASE.length)];
    console.log(`uc: ${password}`);
    password=password+LOWERCASE[Math.floor(Math.random()*LOWERCASE.length)];
    console.log(`lc: ${password}`);
    password=password+NUMBERS[Math.floor(Math.random()*NUMBERS.length)];
    console.log(`num: ${password}`);
    password=password+SPECIALSCHARACTERS[Math.floor(Math.random()*SPECIALSCHARACTERS.length)];
    console.log(`sc: ${password}`);
    
    while(password.length<LENGTH)
    {
        password=password+ALLCHARACTERS[Math.floor(Math.random()*ALLCHARACTERS.length)];
        console.log(`ac: ${password}`);
    }
    passwordBox.value=password;
}

async function copyPassword() {
    // old deprecated way of copying text
    // passwordBox.select();
    // document.execCommand("copy");

    try {
        await navigator.clipboard.writeText(passwordBox.value);
        alert('Text copied to clipboard');
    }
    catch (err){
        alert(`Text couldn't be copied to clipboard`);
    }
}
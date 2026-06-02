const inputSlider=document.querySelector("[data-lengthSlider]");
const lengthDisplay=document.querySelector("[data-lengthNumber]");

const passwordDisplay=document.querySelector("[data-passwordDisplay]");
const copyBtn=document.querySelector("[data-copy]");
const copyMsg=document.querySelector("[data-copyMsg]");
const  uppercaseCheck=document.querySelector("#uppercase");
const  lowercaseCheck=document.querySelector("#lowercase");
const  numbersCheck=document.querySelector("#numbers");
const symbolsCheck=document.querySelector("#symbols");
const indicator=document.querySelector("[data-indicator]");
const generateBtn=document.querySelector(".generate-button");
const allCheckbox=document.querySelectorAll("input[type=checkbox]");
const symbols='~`!@#$%^&*(){}|":;<,>?/';

//INITIAL VALUES OF PASSWORD
let password="";
let passwordLength=10;
let checkCount=0;
//CALLING FUNCTION handleSlider()=>to display the password length to UI
handleSlider();
setIndicator("#ccc")

//set password length
function handleSlider(){
    inputSlider.value=passwordLength;
    lengthDisplay.innerText=passwordLength;
    //to show the left part of sider from thumb with dark background color and right with light
    const min=inputSlider.min;
    const max=inputSlider.max;
    inputSlider.style.backgroundSize=((passwordLength-min)*100/(max-min))+"% 100%"
}
//set the color of indicator to strength of password
function setIndicator(color){
    indicator.style.backgroundColor=color;
    //shadow
    indicator.style.boxShadow=`0px 0px 12px 1px ${color}`;
}
//function to generate random integer
function getRndInteger(min,max){
    return Math.floor(Math.random()*(max-min)+min);//range if min to max
}
//random number between 0 to 9
function generateRandomNumber(){
    return getRndInteger(0,9);//function is called to get random integer between 0 to 9
}
//random char between atoz
function generateLowerCase(){
    return String.fromCharCode(getRndInteger(97,123));//converting the random integer between 97 to 123 to char
}
//random chat bt AtoZ
function genrateUpperCase(){
    return String.fromCharCode(getRndInteger(65,91));
}
//symbol
function generateSymbol(){
    const randNum=getRndInteger(0,symbols.length);
    return symbols.charAt(randNum);
}


//strength calculation based on input
function calcStrength(){
     let hasUpper=false;
     let hasLower=false;
     let hasNum=false;
     let hasSym=false;
     if(uppercaseCheck.checked) hasUpper=true;
     if(lowercaseCheck.checked) hasLower=true;
     if(numbersCheck.checked) hasNum=true;
     if(symbolsCheck.checked) hasSym=true;

     if(hasUpper && hasLower && (hasNum||hasSym)&& passwordLength>=8){
         setIndicator("#0f0");
     }
     else if(
        (hasLower||hasUpper) &&
        (hasNum || hasSym) &&
        passwordLength>=6
     ){
        setIndicator("#ffff00");
     }
     else{
        setIndicator('#f00');
     }
}

//copy content function
async function copyContent(){
    try{
         navigator.clipboard.writeText(passwordDisplay.value);//writes avalue on clipboard
         copyMsg.innerText="copied";
    }
    catch(e){
        copyMsg.innerText="Failed";
    }
    //to MAKE copy wala span visible
    copyMsg.classList.add("active");

    setTimeout(()=> {
        copyMsg.classList.remove("active")
    },2000);
}


//slider action setup variation
 inputSlider.addEventListener('input',(e)=>{
    passwordLength=e.target.value;
    handleSlider();
 })


 //event listener to show copy function
 copyBtn.addEventListener('click',()=>{
    if(passwordDisplay.value)//we can copy the content if there is some content filled in the content box
        copyContent();
 })


 //handling all the checkboxes on clicking
 function handleCheckBoxChange(){
    checkCount=0;
    allCheckbox.forEach((checkbox)=>{
        if(checkbox.checked){
            checkCount++;//increasing the count of checked checkbox
        }
        //special condition
        if(password.length<checkCount){
            passwordLength=checkCount;
            handleSlider();//since password length is changed so we called handleslider function to adjust the slider
        }
    })
 }
 //adding event listener to all checkboxes to update the count of marked check boxes on making any change in marking of chexkboxes
 allCheckbox.forEach((checkbox)=>{
    checkbox.addEventListener('change',handleCheckBoxChange);
 })

 //GENERATE BUTTON event listener
 generateBtn.addEventListener('click',()=>{
    //none of the checkbox are selected
    if(checkCount==0) 
        return;

    if(passwordLength<checkCount){
        passwordLength=checkCount;
        handleSlider();
    }
    //lets start the journey to find new password
    console.log("starting the journey");
    //remove old password
    password="";

    //lets put the stuff mentioned by checkboxes
    // if(uppercaseCheck.checked){
    //     password+=genrateUpperCase();
    // }
    // if(lowercaseCheck.checked){
    //     password+=generateLowerCase();
    // }
    // if(numbersCheck.checked){
    //     password+=generateRandomNumber();
    // }
    // if(numbersCheck.checked){
    //     password+=generateSymbol();
    // }

    //METHOD-2
    let funcArray=[];
    if(uppercaseCheck.checked){
        funcArray.push(genrateUpperCase);
    }
    if(lowercaseCheck.checked){
        funcArray.push(generateLowerCase);
    }
    if(numbersCheck.checked){
        funcArray.push(generateRandomNumber);
    }
    if(symbolsCheck.checked){
        funcArray.push(generateSymbol);
    }

    //compulsory addition
    for(let i=0;i<funcArray.length;i++){
        password+=funcArray[i]();
    }
     console.log('comp done');
    //remaining addtion
    for(let i=0;i<passwordLength-funcArray.length;i++){
        let randidx=getRndInteger(0,funcArray.length);
        password+=funcArray[randidx]();
    }
    console.log('rem done');
    //shufflePassword
    function shufflePassword(array){
        //fisher yates method
        for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    let str = "";
    array.forEach((el) => (str += el));
    return str;
    }
    //shuffle password called
    password=shufflePassword(Array.from(password));
    console.log('shuff done');
    //show in UI
    passwordDisplay.value=password;
    console.log('UI done');
    //calculate streangth
    calcStrength();
    console.log('strength done');
 })  


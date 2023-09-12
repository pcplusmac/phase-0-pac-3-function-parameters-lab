function introduction(name){
    
    const msg = (`Hi, my name is ${name}.`);
    return msg;
    console.log(msg);
    
}

// create a funciton to take 2 parameters
function introductionWithLanguage(name, language){
    const msg = `Hi, my name is ${name} and I am learning to program in ${language}.`;
    return msg;

}

//create a function contain parameter with default value
function introductionWithLanguageOptional(name, language = "JavaScript"){
    const msg = `Hi, my name is ${name} and I am learning to program in ${language}.`;
    return msg;
}



introduction("Aki");
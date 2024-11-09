let myHeading = document.getElementById("title");
function setUserName() {
   let myName = prompt("What's your name ?")
    localStorage.setItem("nameToBeStored",myName)
    console.log(myName);
    myHeading.textContent =` Hello  my name is  ${myName} `
    
}



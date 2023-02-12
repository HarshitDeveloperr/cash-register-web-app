const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");

var availableNotes = [2000,500,100,50,20,10,5,1];

checkButton.addEventListener("click", function validateBillAndGivenAmount(){
  message.style.display="none";
if(billAmount.value >= 0){
    if(cashGiven.value>=billAmount.value){
          const amountToBeReturned = cashGiven.value - billAmount.value;
          calculateChange(amountToBeReturned);
    }else{
      showMessage("Do you want to wash Plates?");
    }
 
}else{
    
  showMessage("Enter Valid Amount!");
}


});


function calculateChange(amountToBeReturned){
  
    for (let i = 0; i < availableNotes.length; i++) {
        // no of notes need for the denomination
        const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
        // 2010 / 2000 = 1 || 10 / 500 = 0
    
        // amount left after calculating the number of notes needed
        amountToBeReturned = amountToBeReturned % availableNotes[i];
        // 2010 % 2000 = 10 || 10 % 500 = 10
    
        // updating the no of notes in the table for the current amount
        noOfNotes[i].innerText = numberOfNotes;
      }
}

function showMessage(msg){
console.log("Here");
message.style.display="block";
message.innerText = msg;

}
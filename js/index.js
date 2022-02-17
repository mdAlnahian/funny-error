// // js started from here
// //input error hamndeling
// function firstInputFunc1() {
//   let nahian = document.getElementById("first-input");
//   let nahianBhai = nahian.value;
//   let nahianBhaiValueFloat = parseFloat(nahianBhai);
//   nahian.value = nahianBhaiValueFloat;
//   if (typeof nahian.value !== "number") {
//         let fDaka = document.getElementById("income-error1");
//         fDaka.style.display = "block";
//     return erre
//     let fDaka = document.getElementById("income-error1");
//     fDaka.style.display = "block";
//   } else {
//     return nahian.value;
//   }
//   //**************** */
// }
// function firstInputFunc2() {
//   let nahian = document.getElementById("second-input");
//   let nahianBhai = nahian.value;
//   let nahianBhaiValueFloat = parseFloat(nahianBhai);
//   nahian.value = nahianBhaiValueFloat;
//   if (typeof nahian.value !== "number") {
//     let fDaka = document.getElementById("income-error2");
//     fDaka.style.display = "block";
//   } else {
//     return nahian.value;
//   }
// }
// //****************** */
// function firstInputFunc3() {
//   let nahian = document.getElementById("third-input");
//   let nahianBhai = nahian.value;
//   let nahianBhaiValueFloat = parseFloat(nahianBhai);
//   nahian.value = nahianBhaiValueFloat;
//   if (typeof nahian.value !== "number") {
//     let fDaka = document.getElementById("income-error3");
//     fDaka.style.display = "block";
//   } else {
//     return nahian.value;
//   }
// }
// //*************** */
// function firstInputFunc4() {
//   let nahian = document.getElementById("fourth-input");
//   let nahianBhai = nahian.value;
//   let nahianBhaiValueFloat = parseFloat(nahianBhai);
//   nahian.value = nahianBhaiValueFloat;
//   if (typeof nahian.value !== "number") {
//     let fDaka = document.getElementById("income-error4");
//     fDaka.style.display = "block";
//   } else {
//     return nahian.value;
//   }
// }
// //********** */
// function firstInputFunc5() {
//   let nahian = document.getElementById("fifth-input");
//   let nahianBhai = nahian.value;
//   let nahianBhaiValueFloat = parseFloat(nahianBhai);
//   nahian.value = nahianBhaiValueFloat;
//   if (typeof nahian.value !== "number") {
//     let fDaka = document.getElementById("income-error5");
//     fDaka.style.display = "block";
//   } else {
//     return nahian.value;
//   }
// }
// //*********** */

// // let nahian = document.getElementById("first-input");
// // let nahianBhai = nahian.value;
// // if (typeof nahianBhai !== "number") {
// //   let fDaka = document.getElementById("input-error1");
// //   fDaka.style.display = "block";
// // }
// ////////////**main function***************** */
// // function inputDataCollection(serial) {
// //   let firstInput = document.getElementById(serial + "-input");
// //   let firstInputValue = firstInput.value;
// //   //erroe check
// //   if (firstInput.value > 0) {
// //     let firstInputValueFloat = parseFloat(firstInputValue);
// //     firstInput.value = firstInputValueFloat;
// //     console.log(firstInput.value);
// //     return firstInputValueFloat;
// //   }

// //   // if (firstInput.value > 0) {
// //   //   let firstInputValueFloat = parseFloat(firstInputValue);
// //   //   firstInput.value = firstInputValueFloat;
// //   //   console.log(firstInput.value);
// //   //   return firstInputValueFloat;
// //   // } else {
// //   //   console.log("error");
// //   // }

// //   //eikhane rak
// //   //
// //   let firstInputValueFloat = parseFloat(firstInputValue);
// //   firstInput.value = firstInputValueFloat;
// //   // console.log(firstInput.value);
// //   return firstInputValueFloat;
// // }

// // calculate button click event handeling
// document
//   .getElementById("calculate-button")
//   .addEventListener("click", function () {
//     //total primary expenses calling
//     totalExpenses();
//     // initial bance
//     initialBalance();
//   });

// //total expenses calculating************//
// function totalExpenses() {
//   let primaryExpenses = document.getElementById("total-expenses");
//   let primaryExpensesText = primaryExpenses.innerText;
//   let primaryExpensesTextFloat = parseFloat(primaryExpensesText);
//   //******main */
//   // primaryExpenses.innerText =
//   //   inputDataCollection("second") +
//   //   inputDataCollection("third") +
//   //   inputDataCollection("fourth");
//   // using-condition
//   // if (primaryExpenses.innerText <= inputDataCollection("first")) {
//   //   // primaryExpenses.innerText = primaryExpenses.innerText;
//   //   return primaryExpenses.innerText;
//   // } else {
//   //   let error1 = document.getElementById("error1");
//   //   error1.style.display = "block";
//   // }
//   primaryExpenses.innerText =
//     firstInputFunc2() + firstInputFunc3() + firstInputFunc4();
//   if (primaryExpenses.innerText <= firstInputFunc1()) {
//     return primaryExpenses.innerText;
//   } else {
//     let error1 = document.getElementById("error1");
//     error1.style.display = "block";
//   }
// }
// //initial balance after giving the value of income
// function initialBalance() {
//   let initialBalanceAmount = document.getElementById("balance");
//   let initialBalanceAmountData = initialBalanceAmount.innerText;
//   let initialBalanceAmountDataFloat = parseFloat(initialBalanceAmountData);
//   // initialBalanceAmount.innerText =
//   //   inputDataCollection("first") - totalExpenses();
//   initialBalanceAmount.innerText = firstInputFunc1() - totalExpenses();

//   return initialBalanceAmount.innerText;
// }

// // save button click handeling
// document.getElementById("save-button").addEventListener("click", function () {
//   //amount saved from income by given percentage
//   saveYourMoney();
//   //money available after savings
//   remainingMoneyAfterSavings();
// });
// // function for getting saving percentage
// function savingPercentageAmount() {
//   let savingPercentage = document.getElementById("fifth-input");
//   let savingPercentageText = savingPercentage.value;
//   let savingPercentageTextFloat = parseFloat(savingPercentageText);
//   return savingPercentageTextFloat;
// }
// // save amount function with error
// function saveYourMoney() {
//   let moneyInput = document.getElementById("money-saved");
//   let moneyInputData = moneyInput.innerText;
//   let moneyInputDataFloat = parseFloat(moneyInputData);
//   // let savingMoney =
//   //   (savingPercentageAmount() * inputDataCollection("first")) / 100;
//   // moneyInput.innerText = savingMoney;
//     let savingMoney = (savingPercentageAmount() * firstInputFunc1()) / 100;
//     moneyInput.innerText = savingMoney;

//   // return moneyInput.innerText;
//   //error2 msg
//   if (savingMoney > initialBalance()) {
//     let error1 = document.getElementById("error2");
//     error1.style.display = "block";
//   } else {
//     return moneyInput.innerText;
//   }
// }
// //remaining money after savings
// function remainingMoneyAfterSavings() {
//   let remainingMoney = document.getElementById("remaining-balance");
//   let remainingMoneyData = remainingMoney.innerText;
//   let remainingMoneyDataFloat = parseFloat(remainingMoneyData);
//   remainingMoney.innerText = initialBalance() - saveYourMoney();
//   return remainingMoney.innerText;
// }
/////**********started */
// js started from here
function inputDataCollection(serial) {
  let firstInput = document.getElementById(serial + "-input");
  let firstInputValue = firstInput.value;
  if (firstInput.value > 0) {
    let firstInputValueFloat = parseFloat(firstInputValue);
    firstInput.value = firstInputValueFloat;
    return firstInputValueFloat;
  }
}

// calculate button click event handeling
document
  .getElementById("calculate-button")
  .addEventListener("click", function () {
    //total primary expenses calling
    totalExpenses();
    // initial bance
    initialBalance();
  });

//total expenses calculating************//
function totalExpenses() {
  let primaryExpenses = document.getElementById("total-expenses");
  let primaryExpensesText = primaryExpenses.innerText;
  let primaryExpensesTextFloat = parseFloat(primaryExpensesText);
  primaryExpenses.innerText =
    inputDataCollection("second") +
    inputDataCollection("third") +
    inputDataCollection("fourth");
  // using-condition
  if (primaryExpenses.innerText <= inputDataCollection("first")) {
    // primaryExpenses.innerText = primaryExpenses.innerText;
    return primaryExpenses.innerText;
  } else {
    let error1 = document.getElementById("error1");
    error1.style.display = "block";
  }
}
//initial balance after giving the value of income
function initialBalance() {
  let initialBalanceAmount = document.getElementById("balance");
  let initialBalanceAmountData = initialBalanceAmount.innerText;
  let initialBalanceAmountDataFloat = parseFloat(initialBalanceAmountData);
  initialBalanceAmount.innerText =
    inputDataCollection("first") - totalExpenses();
  return initialBalanceAmount.innerText;
}

// save button click handeling
document.getElementById("save-button").addEventListener("click", function () {
  //amount saved from income by given percentage
  saveYourMoney();
  //money available after savings
  remainingMoneyAfterSavings();
});
// function for getting saving percentage
function savingPercentageAmount() {
  let savingPercentage = document.getElementById("fifth-input");
  let savingPercentageText = savingPercentage.value;
  if (savingPercentage.value > 0) {
    let savingPercentageTextFloat = parseFloat(savingPercentageText);
    return savingPercentageTextFloat;
  }
}
// save amount function with error
function saveYourMoney() {
  let moneyInput = document.getElementById("money-saved");
  let moneyInputData = moneyInput.innerText;
  let moneyInputDataFloat = parseFloat(moneyInputData);
  let savingMoney =
    (savingPercentageAmount() * inputDataCollection("first")) / 100;
  moneyInput.innerText = savingMoney;

  // return moneyInput.innerText;
  //error2 msg
  if (savingMoney > initialBalance()) {
    let error1 = document.getElementById("error2");
    error1.style.display = "block";
  } else {
    return moneyInput.innerText;
  }
}
//remaining money after savings
function remainingMoneyAfterSavings() {
  let remainingMoney = document.getElementById("remaining-balance");
  let remainingMoneyData = remainingMoney.innerText;
  let remainingMoneyDataFloat = parseFloat(remainingMoneyData);
  remainingMoney.innerText = initialBalance() - saveYourMoney();
  return remainingMoney.innerText;
}

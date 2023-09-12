// window.addEventListener('DOMContentLoaded', function() {
//   const form = document.getElementById("calc-form");
//   if (form) {
//     setupIntialValues();
//     form.addEventListener("submit", function(e) {
//       e.preventDefault();
//       update();
//     });
//   }
// });

// function getCurrentUIValues() {
//   return {
//     amount: +(document.getElementById("loan-amount").value),
//     years: +(document.getElementById("loan-years").value),
//     rate: +(document.getElementById("loan-rate").value),
//   }
// }

// // Get the inputs from the DOM.
// // Put some default values in the inputs
// // Call a function to calculate the current monthly payment
// function setupIntialValues() {
//   return {
//     amount: 1000,
//     years: 2,
//     rate: 4.5,
//   }
// }

// // Get the current values from the UI
// // Update the monthly payment
// // 
// function update() {
// }

// // Given an object of values (a value has amount, years and rate ),
// // calculate the monthly payment.  The output should be a string
// // that always has 2 decimal places.
// function calculateMonthlyPayment(values) {
// }

// // Given a string representing the monthly payment value,
// // update the UI to show the value.
// function updateMonthly(monthly) {
// }


window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

function setupIntialValues() {
  const values  = { amount: 100000, years: 90, rate: 6 };
  const amountUI = document.getElementById("loan-amount");
  amountUI.value = values.amount;
  const yearsUI = document.getElementById("loan-years");
  yearsUI.value = values.years;
  const rateUI = document.getElementById("loan-rate");
  rateUI.value = values.rate;
  update();
}

function update() {
  const currentUIValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentUIValues));
}

function calculateMonthlyPayment(values) {
  const monthlyRate = (values.rate / 100) / 12;
  const n = Math.floor(values.years * 12);
  return (
    (monthlyRate * values.amount) /
    (1 - Math.pow((1 + monthlyRate), -n))
  ).toFixed(2);
}

function updateMonthly(monthly) {
  const monthlyUI = document.getElementById("monthly-payment");
  monthlyUI.innerText = "$" + monthly;
}
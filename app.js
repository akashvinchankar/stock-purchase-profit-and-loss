var initalPrice = document.querySelector("#initial-price");
var stocksQuantity = document.querySelector("#stocks-quantity");
var currentPrice = document.querySelector("#current-price");
var submitBtn = document.querySelector("#submit-btn");
var outputBox = document.querySelector("#output-box");

submitBtn.addEventListener("click", submitHandler);

function submitHandler() {
  var ip = initalPrice.value;
  var qty = stocksQuantity.value;
  var curr = currentPrice.value;

  if (ip < 0 || qty < 0 || curr < 0) {
    showOutput("Enter positive values");
  } else {
    calculateProfitAndLoss(ip, qty, curr);
  }
}

function calculateProfitAndLoss(initial, quantity, current) {
  if (initial > current) {
    var loss = (initial - current) * quantity;
    var lossPercentage = (loss / (initial * quantity)) * 100;

    showOutput(
      `Hey the loss is ${loss} and the percent is ${lossPercentage.toFixed(2)}%`
    );
  } else if (current > initial) {
    var profit = (current - initial) * quantity;
    var profitPercentage = (profit / (initial * quantity)) * 100;

    showOutput(
      `Hey the profit is ${profit} and the percent is ${profitPercentage.toFixed(
        2
      )}%`
    );
  } else {
    showOutput(`No pain no gain and no gain no pain`);
  }
}

function showOutput(message) {
  outputBox.innerHTML = message;
}

class calculator {
  constructor() {
    setInterval(function () {
      useme();
    }, 30000);
  }
  start() {
    let first = Number(document.getElementById("first").value);
    let operator = document.getElementById("operator").value;
    let second = Number(document.getElementById("second").value);
    if ((operator == "/" || operator == "%") && second == 0) {
      alert("It's over 9000!");
      console.log("It's over 9000!");
    } else if (first >= 0 && second >= 0) {
      if (operator == "+") {
        alert(first + second);
        console.log(first + second);
      } else if (operator == "-") {
        alert(first - second);
        console.log(first - second);
      } else if (operator == "*") {
        alert(first * second);
        console.log(first * second);
      } else if (operator == "/") {
        alert(Number(first) / Number(second));
        console.log(Number(first) / Number(second));
      } else if (operator == "%") {
        alert(first % second);
        console.log(first % second);
      }
    } else {
      alert("Error :(");
    }
    return first;
  }

  reset() {
    document.getElementById("first").reset();
    document.getElementById("operator").reset();
    document.getElementById("second").reset();
  }

  useme() {
    alert("Please, use me...");
  }
}

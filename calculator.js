

  const display = document.getElementsByName("display")[0];
  const buttons = document.querySelectorAll("input[type='button']");

  
  buttons.forEach(button => {
    button.addEventListener("click", function () {
      const value = this.value;

      if (value === "AC") {
        display.value = "";
      } 
	  else if (value === "DEL") {
        display.value = display.value.slice(0, -1);
      } 
	  else if (value === "=") {
        try {
          display.value = eval(display.value);
        } catch (e) {
          display.value = "Error";
        }
      } 
	  else if (value === "%") {
        try {
          display.value = eval(display.value) / 100;
        } catch (e) {
          display.value = "Error";
        }
      }
	   else {
        display.value += value;
      }
    });
  });

 
  document.addEventListener("keydown", function (event) {
    const key = event.key;

    // Allow digits and operators
    if (
      (key >= "0" && key <= "9") || 
      ["+", "-", "*", "/", "."].includes(key)
    ) {
      display.value += key;
    } 
    else if (key === "Enter") {
      try {
        display.value = eval(display.value);
      } catch (e) {
        display.value = "Error";
      }
    } 
    else if (key === "Backspace") {
      display.value = display.value.slice(0, -1);
    } 
    else if (key === "Escape") {
      display.value = "";
    }
  });

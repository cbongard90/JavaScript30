const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;
const handleCheck = (event) => {
  let inBetween = false;
  if (event.shiftKey && event.currentTarget.checked) {
    checkboxes.forEach((checkbox) => {
      console.log(checkbox);
      if (checkbox === event.currentTarget || checkbox === lastChecked) {
        inBetween = !inBetween;
        console.log('checking in between');
      }

      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }
  lastChecked = event.currentTarget;
};

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("click", handleCheck);
});

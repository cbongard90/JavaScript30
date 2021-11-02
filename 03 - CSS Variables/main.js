const inputs = document.querySelectorAll(".controls input");

const handleUpdate = (event) => {
  const input = event.target;
  const suffix = input.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${input.name}`, `${input.value}${suffix}`);
};

inputs.forEach((input) => {
  input.addEventListener("change", handleUpdate);
  input.addEventListener("mousemove", handleUpdate);
});

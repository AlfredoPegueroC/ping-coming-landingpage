const btn = document.querySelector(".btn");
const form = document.querySelector(".form");
const input = document.querySelector("#email");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  if (!input.value || emailRegex.test(input.value)) {
    input.classList.add("error");
    form.classList.add("error");
  }
});

document
  .getElementById("enter-btn")
  .addEventListener("click", function (event) {
    const num = parseInt(document.querySelector("#num").value);
    const p = document.createElement("p");
    p.classList.add("p", "text-2xl", "text-white");
    if (num) {
      const result = 0.05 * num;
      p.innerText = `Your CGPA is ${result.toFixed(2)}`;
    } else {
      p.innerText = `Please Enter Number`;
    }
    const div = document.querySelector(".div");
    div.appendChild(p);
  });

document.getElementById("num").addEventListener("keydown", function (event) {
  const num = parseInt(document.querySelector("#num").value);
  const p = document.createElement("p");
  if (event.key === "Enter") {
    const num = parseInt(document.querySelector("#num").value);
    const p = document.createElement("p");
    p.classList.add("p", "text-2xl", "text-white");
    if (num) {
      const result = 0.05 * num;
      p.innerText = `Your CGPA is ${result.toFixed(2)}`;
    } else {
      p.innerText = `Please Enter Number`;
    }
    const div = document.querySelector(".div");
    div.appendChild(p);
  }
});

document
  .getElementById("clear-btn")
  .addEventListener("click", function (event) {
    const p = document.querySelector(".p");
    document.querySelector(".div").removeChild(p);
  });

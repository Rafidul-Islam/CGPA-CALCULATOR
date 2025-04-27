document
  .getElementById("enter-btn")
  .addEventListener("click", function (event) {
    const num = parseInt(document.getElementById("num").value);
    const p = document.createElement("p");
    p.classList.add("p", "text-xl");
    if (num) {
      const result = 0.05 * num;
      p.innerText = `Your CGPA is ${result.toFixed(2)}`;
      const div2 = document.getElementById("div2");
      div2.append(p);
    } else {
      p.innerText = `Please Enter Number`;
      const div2 = document.getElementById("div2");
      div2.appendChild(p);
    }
    document.getElementById("div2").style.display = "block";
  });
document.getElementById("num").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    const num = parseInt(document.getElementById("num").value);
    const p = document.createElement("p");
    p.classList.add("p", "text-xl");
    if (num) {
      const result = 0.05 * num;
      p.innerText = `Your CGPA is ${result.toFixed(2)}`;
      const div2 = document.getElementById("div2");
      div2.append(p);
    } else {
      p.innerText = `Please Enter Number`;
      const div2 = document.getElementById("div2");
      div2.appendChild(p);
    }
    document.getElementById("div2").style.display = "block";
  }
});

document
  .getElementById("clear-btn")
  .addEventListener("click", function (event) {
    const div2 = document.getElementById("div2");

    const p = document.querySelector(".p");
    p.innerText = "";
  });

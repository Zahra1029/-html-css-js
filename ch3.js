const all = document.getElementById("all");
const right = document.getElementById("right");
const wronge = document.getElementById("wrong");
const submit = document.getElementById("submit");
const p = document.querySelector(".answer");
submit.addEventListener("click", handler);
function handler(event) {
  if (all.value && right.value && wronge.value) {
    let allnum = all.value;
    let rightnum = right.value;
    let wrongnum = wronge.value;

    if (Number(rightnum) + Number(wrongnum) <= Number(allnum)) {
      let answer = `${((3 * rightnum - wrongnum) / (3 * allnum)) * 100}`;
      p.innerHTML = Number(answer).toFixed(2);
      p.classList.add("active");
    } else {
      p.innerHTML = "";
      p.classList.remove("active");
      alert("مجموع سوالات درست و غلط بیشتر از تعداد کل سوالات است ");
      event.preventDefault();
    }
  } else {
    alert("پر کردن تمام فیلدها الزامی است");
  }
}

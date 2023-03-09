const bill = document.getElementById("bill");
const serviceQuality = document.getElementById("service-quality");
const numOfPeople = document.getElementById("people");
const submit = document.getElementById("submit");
const totalTips = document.getElementById("tips-total");
const tip = document.getElementById("tip");
const each = document.getElementById("each");

totalTips.style.display = "none";

submit.onclick = calculateTip;

function calculateTip(event) {
  event.preventDefault();
  if (bill.value == "" || serviceQuality.value == "") {
    alert("Please fill in the required fields.");
    return;
  }

  if (numOfPeople.value > 1) {
    totalTips.style.display = "block";
    each.style.display = "inline";
  } else {
    totalTips.style.display = "block";
    each.style.display = "none";
  }

  let total = ((bill.value * serviceQuality.value) / numOfPeople.value).toFixed(
    2
  );
  tip.innerHTML = total;
}

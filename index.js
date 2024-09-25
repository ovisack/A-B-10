const donationButton = document.getElementById("btn-donation");
const historyButton = document.getElementById("btn-history");
const historySection = document.getElementById("history-section");
const cards = document.getElementById("cards");
// Toggle Button Donate
document.getElementById("btn-donation").addEventListener("click", function () {
  // donationButton.classList.add("bg-primary-color");
  // donationButton.classList.remove("btn-outline");
  // historyButton.classList.remove("bg-primary-color");
  // historyButton.classList.add("btn-outline");
  historySection.classList.add("hidden");
  cards.classList.remove("hidden");
  activeButton("btn-donation");
  disableButton("btn-history");
});
// Toggle Button History
document.getElementById("btn-history").addEventListener("click", function () {
  // historyButton.classList.add("bg-primary-color");
  // historyButton.classList.remove("btn-outline");
  // donationButton.classList.remove("bg-primary-color");
  // donationButton.classList.add("btn-outline");
  cards.classList.add("hidden");
  historySection.classList.remove("hidden");
  activeButton("btn-history");
  disableButton("btn-donation");
});
// Noakhali card
document
  .getElementById("noakhli-donate-now")
  .addEventListener("click", function () {
    let donateAmount = document.getElementById("input-noakhali").value;
    const cardAmount = getTextValueById("amount-noakhali");
    const mainBalance = getTextValueById("main-balance");
    if (isNaN(donateAmount) || donateAmount <= 0) {
      alert("Please Type a valid amount ");
      onclickDisable("noakhli-donate-now");
      return;
    }
    if (donateAmount > mainBalance) {
      document.getElementById("noakhli-donate-now").removeAttribute("onclick");
      alert("Failed to Donate ");
      return;
    }
    donateAmount = getInputValueById("input-noakhali");
    const totalDonateAmount = cardAmount + donateAmount;
    document.getElementById("amount-noakhali").innerText = totalDonateAmount;
    document.getElementById("input-noakhali").value = "";
    document.getElementById("main-balance").innerText =
      mainBalance - donateAmount;
    my_modal_5.showModal();
    //history add
    historyTitle = document.getElementById("noakhali-title").innerText;
    history(donateAmount, historyTitle);
  });
//Feni Card
document
  .getElementById("feni-donate-now")
  .addEventListener("click", function () {
    let donateAmount = document.getElementById("input-feni").value;
    const cardAmount = getTextValueById("amount-feni");
    const mainBalance = getTextValueById("main-balance");
    if (isNaN(donateAmount) || donateAmount <= 0) {
      alert("Please Type a valid amount ");
      onclickDisable("feni-donate-now");
      return;
    }
    if (donateAmount > mainBalance) {
      onclickDisable("feni-donate-now");
      alert("Failed to Donate ");
      return;
    }
    donateAmount = getInputValueById("input-feni");
    const totalDonateAmount = cardAmount + donateAmount;
    document.getElementById("amount-feni").innerText = totalDonateAmount;
    document.getElementById("input-feni").value = "";
    document.getElementById("main-balance").innerText =
      mainBalance - donateAmount;
    my_modal_5.showModal();
    //history add
    historyTitle = document.getElementById("title-feni").innerText;
    history(donateAmount, historyTitle);
  });
//Quota Card
document
  .getElementById("quota-donate-now")
  .addEventListener("click", function () {
    let donateAmount = document.getElementById("input-quota").value;
    const cardAmount = getTextValueById("amount-quota");
    const mainBalance = getTextValueById("main-balance");
    if (isNaN(donateAmount) || donateAmount <= 0) {
      alert("Please Type a valid amount ");
      onclickDisable("quota-donate-now");
      return;
    }
    if (donateAmount > mainBalance) {
      onclickDisable("quota-donate-now");
      alert("Failed to Donate ");
      return;
    }
    donateAmount = getInputValueById("input-quota");
    const totalDonateAmount = cardAmount + donateAmount;
    document.getElementById("amount-quota").innerText = totalDonateAmount;
    document.getElementById("input-quota").value = "";
    document.getElementById("main-balance").innerText =
      mainBalance - donateAmount;
    my_modal_5.showModal();
    //history add
    historyTitle = document.getElementById("title-quota").innerText;
    history(donateAmount, historyTitle);
  });
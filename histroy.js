function activeButton(id) {
    const color = document.getElementById(id).classList.add("bg-primary-color");
    const outline = document.getElementById(id).classList.remove("btn-outline");
  
    return color, outline;
  }
  
  function disableButton(id) {
    const outline = document.getElementById(id).classList.add("btn-outline");
    const color = document
      .getElementById(id)
      .classList.remove("bg-primary-color");
    return color, outline;
  }
  
  function getInputValueById(id) {
    return parseFloat(document.getElementById(id).value);
  }
  function getTextValueById(id) {
    return parseFloat(document.getElementById(id).innerText);
  }
  
  function onclickDisable(id) {
    document.getElementById(id).onclick = false;
  }
  
  function history(id, title) {
    const historyContainer = document.getElementById("history-section");
    const historyItem = document.createElement("div");
    historyItem.classList.add(
      "border-2",
      "border-gray-300",
      "rounded-lg",
      "md:p-6",
      "mb-4"
    );
  
    historyItem.innerHTML = `
  <p class="text-xl font-bold mb-2"> 
           ${id} Taka is Donated for ${title}
          </p>
          <p class="text-sm text-gray-500">
         
          ${new Date().toLocaleDateString()}  ${new Date().toTimeString()}
         
           
          </p>
    
    `;
  
    // historyContainer.appendChild(historyItem);
  
    
  
    historyContainer.insertBefore(historyItem, historyContainer.children[1]);
  }
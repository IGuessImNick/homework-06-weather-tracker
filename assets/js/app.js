// brings both the fetch and UI portion together

const ft = new Fetch();
const ui = new UI();

//Event Listeners//

function clear() {
    uiContainer.remove()
  }

const search = document.getElementById("searchUser");
const button = document.getElementById("submit");
button.addEventListener("click", () => {
  const currentVal = search.value;

  ft.getCurrent(currentVal).then((data) => {

    ui.populateUI(data);

  });
});
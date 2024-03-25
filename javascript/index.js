function index(){
  const renderTable = (row) => {
    const card = document.querySelector(".card");
    card.appendChild(row)
  };

  const modal = document.querySelector(".modal");
  const btnModal = document.querySelector("#btn-modal");
  const closeModal = document.querySelector("#close-modal");

  btnModal.addEventListener('click', () => {
    modal.style.display = 'block';
  });

  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  const form = document.querySelector("#form");
  const registeredData = [];

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const element = e.target;
    const firstName = element.querySelector('input[name="first-name"]');
    const lastName = element.querySelector('input[name="last-name"]');
    const weight = element.querySelector('input[name="weight"]');
    const height = element.querySelector('input[name="height"]');
    registeredData.push(
      {
        firstName: firstName.value,
        lastName: lastName.value,
        weight: weight.value,
        height: height.value,
      }
    );
    modal.style.display = 'none';
  })

  renderTable();

};

index();

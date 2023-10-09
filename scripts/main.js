const openmenu = () => {
  const burger = document.getElementById('burger');
  const menuClassList = document.getElementById('navigate').classList;
  const items = document.getElementById('navigateList').children;

  Array.from(items).forEach((element) => {
    element.addEventListener('click', () => {
      menuClassList.toggle('hidden');
      document.body.classList.toggle('overflow-hidden');
    });
  });

  burger.addEventListener('click', () => {
    menuClassList.toggle('hidden');
    menuClassList.toggle('block');
    document.body.classList.toggle('overflow-hidden');
  });
};
const clearInput = () => {
  const nameBtn = document.getElementById('clear_name');
  const numberBtn = document.getElementById('clear_number');

  const nameInput = document.querySelector('[name="name"]');
  const numberInput = document.querySelector('[name="number"]');

  nameBtn.addEventListener('click', () => {
    nameInput.value = '';
    setTimeout(() => {
      nameInput.focus();
    }, 0);
  });
  numberBtn.addEventListener('click', () => {
    numberInput.value = '';
    setTimeout(() => {
      numberInput.focus();
    }, 0);
  });
};
clearInput();
openmenu();

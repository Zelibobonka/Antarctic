const input = document.querySelectorAll('[data-input]');

const saveFormData = () => {
  input.forEach((e) => {
    e.value = localStorage.getItem(e.id);
    e.oninput = () => {
      localStorage.setItem(e.id, e.value);
    };
  });
};

export {saveFormData};

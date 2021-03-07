import outsideClick from './outsideclick.js';

export default function initDropDownMenu() {
  const dropdownMenus = document.querySelectorAll('[data-dropdown]');

  function handleClick(event) {
    event.preventDefault();
    this.classList.add('active');
    outsideClick(this, ['touchstart', 'click'], () => {
      this.classList.remove('active');
    });
  }

  if (dropdownMenus) {
    dropdownMenus.forEach((item) => {
      ['touchstart', 'click'].forEach((userEvent) => {
        item.addEventListener(userEvent, handleClick);
      });
    });
  }
}

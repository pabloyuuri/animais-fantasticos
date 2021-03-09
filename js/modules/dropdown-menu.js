import outsideClick from './outsideclick.js';

export default class DropDownMenu {
  constructor(dropdownMenus, events) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);

    // define touchstart e click como argumento padrão, caso o usuário não defina.
    if (this.events === undefined) {
      this.events = ['touchstart', 'click'];
    } else {
      this.events = events;
    }

    this.activeClass = 'active';
    this.activeDropDownMenus = this.activeDropDownMenus.bind(this);
  }

  // Ativa o dropdownMenu e adiciona a função que observa o clique fora dele.
  activeDropDownMenus(event) {
    event.preventDefault();
    const element = event.currentTarget;

    element.classList.add(this.activeClass);
    outsideClick(element, this.events, () => {
      element.classList.remove(this.activeClass);
    });
  }

  // Adiciona os eventos ao dropDownMenu
  addEventDropDownMenusEvent() {
    this.dropdownMenus.forEach((item) => {
      this.events.forEach((userEvent) => {
        item.addEventListener(userEvent, this.activeDropDownMenus);
      });
    });
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addEventDropDownMenusEvent();
    }
    return this;
  }
}

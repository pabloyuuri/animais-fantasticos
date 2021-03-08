export default class TabNav {
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(content);
    this.activeClass = 'ativo';
  }

  // ativa a tab de acordo com o index da mesma
  activeTab(index) {
    this.tabContent.forEach((item) => {
      item.classList.remove(this.activeClass);
    });
    this.tabContent[index].classList.add(this.activeClass, this.tabContent[index].dataset.anime);
  }

  // adiciona os eventos na tab
  addTabNevEvent() {
    this.tabMenu.forEach((item, index) => {
      item.addEventListener('click', () => {
        this.activeTab(index); // posição do item-elemento.
      });
    });
  }

  init() {
    if (this.tabContent.length && this.tabMenu.length) {
      // adiciona primeira tab.
      this.activeTab(0);
      this.addTabNevEvent();
    }
  }
}

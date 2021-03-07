export default function initTabNav() {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  // console.log(tabMenu.length);
  const tabContent = document.querySelectorAll('[data-tab="content"] section');

  function activeTab(index) { // -> meu Callback
    tabContent.forEach((item) => {
      item.classList.remove('ativo');
    });
    tabContent[index].classList.add('ativo', tabContent[index].dataset.anime);
  }

  if (tabContent.length && tabMenu.length) {
    tabContent[0].classList.add('ativo');
    tabMenu.forEach((item, index) => {
      item.addEventListener('click', () => {
        activeTab(index); // posição do item-elemento.
      });
    });
  }
}

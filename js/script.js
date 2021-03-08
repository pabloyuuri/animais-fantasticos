import ScrollSuave from './modules/scroll-suave.js';
import initAnimacaoScroll from './modules/scroll-animacao.js';
import Accordion from './modules/accordion.js';
import initTabNav from './modules/tabnav.js';
import iniTooltip from './modules/tooltip.js';
import initModal from './modules/modal.js';
import initDropDownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initFuncionamento from './modules/funcionamento.js';
import initFetchAnimais from './modules/fetch-animais.js';
import initFetchBitcoin from './modules/fetch-bitcoin.js';

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordionList = new Accordion('[data-menu="accordion] dt');
accordionList.init();

initFuncionamento();
initMenuMobile();
initModal();
iniTooltip();
initTabNav();
initDropDownMenu();
initFetchAnimais();
initFetchBitcoin();
initAnimacaoScroll();

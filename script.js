const buttonMenu = document.querySelector('button.menuButton');
const header = document.querySelector('nav.nav');
const bodyProject = document.querySelector('section.body-project');
const footer = document.querySelector('footer');
const menuMobile = document.querySelector('div.menu-mobile');
const closeButton = document.querySelector('button.closeButton');

buttonMenu.addEventListener('click', ()=>{
    header.classList.add('invisible');
    bodyProject.classList.add('invisible');
    footer.classList.add('invisible');
    menuMobile.setAttribute('style', 'display:flex;');
    closeButton.setAttribute('style', 'display:block;');
});
closeButton.addEventListener('click', ()=>{
    header.classList.remove('invisible');
    bodyProject.classList.remove('invisible');
    footer.classList.remove('invisible');
    menuMobile.setAttribute('style', 'display:none;');
    closeButton.setAttribute('style', 'display:none;');
})
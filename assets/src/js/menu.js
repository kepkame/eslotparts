/**
 * Open/close mobile menu
 */
if(document.querySelector('#mfp-menu') && document.querySelector('#burger-menu')) {
  var menuBtnToggle = document.querySelector('#burger-menu');
  var mfpMenu = document.querySelector('#mfp-menu');
  var mfpMenuBg = mfpMenu.querySelector('.mfp-menu__bg');
  var mfpMenuWrap = mfpMenu.querySelector('.mfp-menu__wrapper');
  var mfpMenuBtnClose = mfpMenu.querySelector('#mfp-menu-close');
  var mfpMenuBtnCallback = mfpMenu.querySelector('.mfp-menu__btn-callback');

  function openMobMenu(e) {
    e.preventDefault();
    document.body.style.paddingRight = window.innerWidth - document.documentElement.clientWidth + 'px';
    document.body.style.overflow = 'hidden';
    mfpMenu.classList.add('mfp-menu--show');
    setTimeout(function() {
      mfpMenu.classList.add('mfp-menu--open');
    }, 100);
    document.querySelector('#mfp-menu').focus();
  }

  function closeMobMenu(e) {
    e.preventDefault();
    mfpMenu.classList.remove('mfp-menu--open');
    setTimeout(function() {
      mfpMenu.classList.remove('mfp-menu--show');
      document.body.removeAttribute('style');
    }, 360);
    menuBtnToggle.focus();
  }

  // Events
  menuBtnToggle.addEventListener('click', function(event) {openMobMenu(event);});
  mfpMenuBtnClose.addEventListener('click', function(event) {closeMobMenu(event);});
  mfpMenuBg.addEventListener('click', function(event) {closeMobMenu(event);});
  mfpMenuBtnCallback.addEventListener('click', function(event) {
    closeMobMenu(event);
  });



  /**
   * Open submenu in mobile menu
   */
  var mobileMenu = document.querySelector('#mobile-menu');
  var mobMenuArrow = document.querySelectorAll('#mfp-menu .menu-item__arrow');
  Array.prototype.forEach.call(mobMenuArrow, function(item){
    item.addEventListener('click', function(event) {
      event.preventDefault();
      item.parentElement.classList.toggle('active');
    });
  });
}
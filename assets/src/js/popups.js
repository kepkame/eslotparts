/**
 * Popup callback
 */
if (document.querySelector('#popup-eslots-callback')) {
  let btnPopupCallback = document.querySelectorAll('.btn-open-callback');
  let popupCallback = document.querySelector("#popup-eslots-callback");
  let popupCallbackWrap = popupCallback.querySelector('.popup-eslots__wrapper');
  let popupCallbackBg = popupCallback.querySelector('#popup-eslots-callback__bg');
  let popupCallbackBtnClose = popupCallback.querySelector('#popup-eslots-callback-close');

  let formCallbackFieldName = popupCallback.querySelector('#field-hidden-product-name');
  let formCallbackFieldNameInitialValue = (formCallbackFieldName) ? formCallbackFieldName.value : '';
  let formCallbackFieldUrl = popupCallback.querySelector('#field-hidden-product-url');
  let formCallbackFieldUrlInitialValue = (formCallbackFieldUrl) ? formCallbackFieldUrl.value : '';

  // Close popup Callback
  function closePopup() {
    popupCallbackWrap.classList.add('popup-eslots__wrapper--hidden');
    popupCallbackBg.classList.add('popup-eslots__bg--hidden');

    document.body.removeAttribute('style');
    if(document.body.classList.contains('hidden-fields-form-callback')) {
      document.body.classList.remove('hidden-fields-form-callback');
      formCallbackFieldName.value = formCallbackFieldNameInitialValue;
      formCallbackFieldUrl.value = formCallbackFieldUrlInitialValue;
    }

    setTimeout(function() {
      popupCallback.classList.remove('popup-eslots--show');
      // document.body.classList.remove('compensate-for-scrollbar');

      popupCallbackWrap.classList.remove('popup-eslots__wrapper--show');
      popupCallbackWrap.classList.remove('popup-eslots__wrapper--hidden');

      popupCallbackBg.classList.remove('popup-eslots__bg--show');
      popupCallbackBg.classList.remove('popup-eslots__bg--hidden');
    }, 700);
  }

  Array.prototype.forEach.call(btnPopupCallback, function(item){
    item.addEventListener('click', function(event) {
      event.preventDefault();

      popupCallback.classList.add('popup-eslots--show');
      popupCallbackBg.classList.add('popup-eslots__bg--show');
      popupCallbackWrap.classList.add('popup-eslots__wrapper--show');
      document.body.style.paddingRight = window.innerWidth - document.documentElement.clientWidth + 'px';
      document.body.style.overflow = 'hidden';
    });
  });

  popupCallbackBtnClose.addEventListener('click', function() {
    if(this.parentElement.parentElement.parentElement.classList.contains('popup-eslots--show')) {
      closePopup();
    }
  });

  popupCallbackBg.addEventListener('click', function() {
    if(this.parentElement.classList.contains('popup-eslots--show')) {
      closePopup();
    }
  });

  document.addEventListener('keydown', function(e) {
    var keyCode = e.keyCode;
    if (keyCode === 27) {
      if(popupCallback.classList.contains('popup-eslots--show')) {
        closePopup();
      }
    }
  });
}
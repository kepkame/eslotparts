/**
 * Form Agree - Simple AntiSpam
 */
 if(document.querySelector("input.agree")) {
  setTimeout(function() {
    let inputAgreeInvert = document.querySelectorAll("input.agree");

    Array.prototype.forEach.call(inputAgreeInvert, function(item) {
      item.checked = false;
      item.removeAttribute('checked');
    });
  }, 100);

  // Do not submit the form if anti-spam worked
  let formSubmit = document.querySelector('.wpcf7-submit');

  formSubmit.addEventListener('click', function(event) {
    if (document.querySelector("input.agree").checked) {
      event.preventDefault();
    }
  });
}


/**
 * Form Callback – Demonstration of successful form submission
 */
 if (document.querySelector('#popup-form-callback')) {
  let form = document.querySelector('#popup-form-callback');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    if (form.querySelector(".simple-form__col--asseptance input").checked) {
      // Instead of submitting a form

      if (!form.classList.contains('sent')) {
        // Sent form
        let response = form.querySelector('.wpcf7-response-output');
        let inputs = form.querySelectorAll('.simple-form__input');
        
        Array.prototype.forEach.call(inputs, function(item) {
          item.value = "";
        });

        // Add class and text        
        setTimeout(function() { 
          form.classList.add('sent');
          response.innerText = 'Thank you for your message. It has been sent.';
        }, 100);

        // Remove class and text
        if(form.classList.contains('sent')) {
          setTimeout(function() {
            form.classList.remove('sent');
            response.innerText = '';
          }, 5000);
        }
      }
    } else {
      // If the box for agreeing to terms and conditions is not checked
      if (!form.querySelector('.agree-notice')) {
        let label = form.querySelector(".simple-form__col--asseptance .wpcf7-list-item-label");
        let text = 'Please agree to our terms';
  
        let agree = document.createElement('div');
        agree.classList.add('agree-notice');
        agree.innerHTML = text;
  
        label.appendChild(agree);
  
        setTimeout(function() {
          agree.classList.add('agree-notice--show');
        }, 100);
  
        setTimeout(function() {
          agree.remove();
        }, 4000);
      }
    }

  });
}
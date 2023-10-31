const btn = document.getElementById('button');

document.getElementById('form').addEventListener('submit', function(event) {
  
  event.preventDefault();

  if(validateForm()) {

    btn.disabled = true;
    btn.textContent = 'ENVIANDO...';
  
    const serviceID = 'default_service';
    const templateID = 'template_y6rl60q';

    emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      const toastLiveExample = document.getElementById('liveToast');
      
      // Define toastTrigger
      const toastTrigger = document.getElementById('yourToastTriggerID');
      
      const toastBootstrap = new bootstrap.Toast(toastLiveExample);
      toastBootstrap.show();

      btn.disabled = false;
      btn.textContent = 'ENVIAR';
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
  }
});
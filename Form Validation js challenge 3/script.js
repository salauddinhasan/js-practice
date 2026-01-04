 

 const formInput = document.getElementById('form');
 const nameInput = document.getElementById('name');
 const emailInput = document.getElementById('email');
 const formMessage = document.getElementById('form-message')


 formInput.addEventListener('submit', function(e) {
  e.preventDefault();

  if(nameInput.value === '' || emailInput.value === '') {
    formMessage.style.color = 'red';
    formMessage.innerText = 'Please fill in all fields!';
  } else {
    formMessage.style.color = 'green';
    formMessage.innerText = `Thanks, ${nameInput.value}! We received your message`;

    formInput.reset ();
  }
 });
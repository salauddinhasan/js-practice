 const heroText = document.getElementById('heroText');
 const heroBtn = document.getElementById('hero-btn');

 heroBtn.addEventListener('click', function() {
    heroText.innerText = "You just clicked the button!";
 });
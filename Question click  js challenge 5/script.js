 const questions = document.querySelectorAll('.question');

 questions.forEach(function (q) {
  q.addEventListener('click', function () {
    const answer = q.nextElementSibling;
    answer.classList.toggle('active');
  });
 });
 

 const searchInput = document.getElementById('search');
 const courses = document.querySelectorAll('.course');


 searchInput.addEventListener('keyup', function() {
    const value = searchInput.value.toLowerCase();

    courses.forEach(function(course) {
        const text = course.innerText.toLowerCase();

        if(text.includes(value)) {
            course.style.display = 'block';
        } else {
            course.style.display = 'none';
        }
    });
 });
document.addEventListener('DOMContentLoaded', function () {
    const block1 = document.querySelectorAll('.block-1');
    const block2 = document.querySelectorAll('.block-2');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__pulse');
                observer.unobserve(entry.target);
            }
        });
    });
    const observer2 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__zoomIn');
                observer.unobserve(entry.target);
            }
        });
    });

    block1.forEach(block => {
        observer.observe(block);
    });
    block2.forEach(block => {
        observer2.observe(block);
    });
    let eduSelect = document.getElementById("select-edu")
    let eduBlock = document.getElementById("education-block")
    let workSelect = document.getElementById("select-work")
    let workBlock = document.getElementById("work-block")
    eduSelect.addEventListener('click', function() {
      eduBlock.style.display = 'block';
      workBlock.style.display = 'none';
      eduSelect.style.color ='#34AFCB'
      workSelect.style.color ='#A3AFB2'
    });
    workSelect.addEventListener('click', function() {
      eduBlock.style.display = 'none';
      workBlock.style.display = 'block';
      eduSelect.style.color ='#A3AFB2'
      workSelect.style.color ='#34AFCB'
    });
});

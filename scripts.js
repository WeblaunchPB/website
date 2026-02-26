const accordion = document.getElementsByClassName('content-container');

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener('click', function () {

    const isActive = this.classList.contains('active');

    for (let j = 0; j < accordion.length; j++) {
      accordion[j].classList.remove('active');
    }

    if (!isActive) {
      this.classList.add('active');
    }

  });
}
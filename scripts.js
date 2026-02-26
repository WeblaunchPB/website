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

document.addEventListener('click', function (event) {

  const navbarCollapse = document.getElementById('navbarNavAltMarkup');
  const navbarToggler = document.querySelector('.navbar-toggler');

  const isClickInsideNavbar = navbarCollapse.contains(event.target);
  const isClickOnToggler = navbarToggler.contains(event.target);

  const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);

  if (!isClickInsideNavbar && !isClickOnToggler && navbarCollapse.classList.contains('show')) {
    bsCollapse.hide();
  }

});
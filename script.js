var parentLi = document.querySelectorAll('nav ul li');
for (var i = 0; i < parentLi.length; i++) {
  parentLi[i].addEventListener('mouseenter', function() {
    // Toggle the "active" class on the child ul element
    var childUl = this.querySelector('.dropdown');
    if (childUl) {
      childUl.classList.toggle('active');
    }
  });
  parentLi[i].addEventListener('mouseleave', function() {
    // Toggle the "active" class on the child ul element
    var childUl = this.querySelector('.dropdown');
    if (childUl) {
      childUl.classList.toggle('active');
    }
  });
}
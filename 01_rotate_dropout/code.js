window.addEventListener('load', function() {
  // get all images
  var nodes = this.document.querySelectorAll('.dropout > img');

  var i, n;
  for(i = 0; i < nodes.length; i++) {
    nodes[i].style.zIndex = i;
    nodes[i].addEventListener('click', function() {
      this.classList.add('closing');
    });
    //step 4
    nodes[i].addEventListener('animationend', function() {
      var children = this.parentNode.children;
      console.log(children)
      for(n = 0; n < children.length; n++) {
        var index = parseInt(children[n].style.zIndex) +1;
        children[n].style.zIndex = index;
      }
      this.style.zIndex = 0;
      this.classList.remove('closing');
    });
  }
})
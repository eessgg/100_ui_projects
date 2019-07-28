window.addEventListener('load', function() {
  var time = 0;

  var nodes = this.document.querySelectorAll('nav.foldout > a');
  this.console.log(nodes)
  var top = nodes[0].previousElementSibling.offsetHeight;

  for(var i = 0; i < nodes.length; i++) {
    this.console.log(nodes[i]);
    nodes[i].style.transitionDelay = time + 's';
    nodes[i].style.top = top + 'px';
    nodes[i].style.zIndex = (nodes.length - i);
    time += 0.2;
    top += nodes[i].offsetHeight;
  }
  var nodes = this.document.querySelectorAll('nav.foldout > *:first-child');
  for(var i=0; i<nodes.length; i++){
    console.log(nodes[i])
    nodes[i].addEventListener('click',function(){
    this.parentNode.classList.toggle('open');
    });
  }
});
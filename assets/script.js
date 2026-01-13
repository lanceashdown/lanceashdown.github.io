function setActive(){
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('header a[data-nav]').forEach(a=>{
    if(a.getAttribute('href') === path) a.classList.add('active');
  });
}
document.addEventListener('DOMContentLoaded', setActive);
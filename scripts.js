// Highlight active nav links based on current path
(function(){
  const path = location.pathname.replace(/\/$/, '');
  // find all nav links in topbar and header
  const links = Array.from(document.querySelectorAll('.nav-tile, header nav a'));
  links.forEach(a=>{
    try{
      const href = a.getAttribute('href');
      if(!href) return;
      // normalize
      const normalized = href.replace(/^[.\/]+/, '');
      if(path.endsWith(normalized) || (normalized === 'index.html' && (path === '' || path === '/'))){
        a.classList.add('active');
      }
    }catch(e){}
  });
})();

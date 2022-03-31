///Goal is to pull everything through JS, NOT CSS!!


var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '/catalog'},
  {text: 'orders', href: '/orders'},
  {text: 'account', href: '/account'},
];

//T1
var mainEl = document.querySelector('main');

//T1.1
mainEl.style.backgroundColor = 'var(--main-bg)';

//T1.2
mainEl.innerHTML = '<h1>SEI Rocks!</h1>';

//T1.3
mainEl.classList.add('flex-ctr');

//T2
var topMenuEl = document.getElementById('top-menu');

//T2.1
topMenuEl.style.height = '100%'

//T2.2
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

//T2.2
topMenuEl.classList.add('flex-around');

//T3.1
menuLinks.forEach(function(link) {
  var linkEl = document.createElement('a');
  linkEl.setAttribute('href',link.href);
  linkEl.textContent = link.text;
  topMenuEl.appendChild(linkEl);

});

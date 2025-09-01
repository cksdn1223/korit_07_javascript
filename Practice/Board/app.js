const listView = document.getElementById('listView');
const writeView = document.getElementById('writeView');
const detailView = document.getElementById('detailView');



window.addEventListener('hashchange', () => {
  if(location.hash === '#/posts'){
    listView.style.backgroundColor = 'yellowgreen';
    writeView.style.backgroundColor = 'transparent';
  }
  if(location.hash === '#/write'){
    listView.style.backgroundColor = 'transparent';
    writeView.style.backgroundColor = 'green';
  }
});
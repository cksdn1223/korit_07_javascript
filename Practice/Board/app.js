const listView = document.getElementById('listView');
const writeView = document.getElementById('writeView');
const detailView = document.getElementById('detailView');



window.addEventListener('hashchange', () => {
  if(location.hash === '#/posts'){
    listView.style.backgroundColor = 'yellowgreen';
    writeView.style.backgroundColor = 'transparent';
    detailView.style.backgroundColor = 'transparent';
  }
  if(location.hash === '#/write'){
    listView.style.backgroundColor = 'transparent';
    writeView.style.backgroundColor = 'green';
    detailView.style.backgroundColor = 'transparent';
  }
  if(location.hash === '#/posts/:id'){
    listView.style.backgroundColor = 'transparent';
    writeView.style.backgroundColor = 'transparent';
    detailView.style.backgroundColor = 'red';
  }
});
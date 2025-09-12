const startBtn = document.getElementById('click-text');

startBtn.addEventListener('click', ()=>{
  const doInput = document.getElementById('do').value;
  const trainingInput = document.getElementById('training').value;
  if (doInput=="" || trainingInput=="") return alert('비어있습니다.')
  document.getElementById('result').classList.remove('a11y-hidden');
  
  
  setTimeout(() => {
    document.getElementById('result').classList.add('a11y-hidden');
  
    document.getElementById('result_loading').classList.remove('a11y-hidden');
    document.getElementById('p-do').innerText = doInput;
    document.getElementById('p-training').innerText = Math.floor(10000 / trainingInput);
  }, 2000);
});

document.getElementById('train').addEventListener('click',()=>{
  // 훈련하러가기 눌렀을떄 나오는 흰색 고정 창
  document.getElementById('sticker').classList.remove('a11y-hidden');
});
document.getElementById('close').addEventListener('click',() => {
  document.getElementById('sticker').classList.add('a11y-hidden');
});

document.getElementById('share').addEventListener('click',()=>{
  navigator.clipboard.writeText("사이트 링크");
  alert('URL이 복사되었습니다')
});
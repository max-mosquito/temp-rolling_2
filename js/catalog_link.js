//-------------
const mainBtn = document.querySelector('.main_btn');

mainBtn.addEventListener('click', (e) => {
   if(window.screen.width > 767){
      mainBtn.href = 'catalog.html'
   }else{
      mainBtn.href = 'pre_catalog.html'
   }
})
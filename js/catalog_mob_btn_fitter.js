const mobFilterBtn = document.getElementById('catalog_main_showcase_saidbar_filterBtn');
const mobFiltersContent = document.querySelector('.catalog_main_showcase_saidbar_filters');
const catalogSaidbarBtn = document.querySelector('.catalog_saidbar_btn');

mobFilterBtn.addEventListener('click', () => {
   mobFiltersContent.classList.toggle('active');
})

catalogSaidbarBtn.addEventListener('click', () => {
   mobFiltersContent.classList.remove('active');
})
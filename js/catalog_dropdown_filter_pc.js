const asaidFilterItemHeaders = document.querySelectorAll('.catalog_saidbar_filters_item_content_header');

asaidFilterItemHeaders.forEach(item => {
   item.addEventListener('click', () => {
      item.nextElementSibling.classList.toggle('active');
   })
})

asaidFilterItemHeaders.forEach(item => {
   item.nextElementSibling.addEventListener("click", () => {
      item.nextElementSibling.classList.remove('active');
   })
})
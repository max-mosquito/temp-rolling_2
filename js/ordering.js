// stage 1--------------------
const orderingBtnsOne = document.querySelectorAll('.ordering_stage_btn');
const orderingFormsOne = document.querySelectorAll('.ordering_inputs');

function reset1() {
   orderingBtnsOne.forEach((item, i) => {
         item.classList.remove('active');
   })

   orderingFormsOne.forEach((item, i) => {
      item.classList.remove('active');
})
}

orderingBtnsOne.forEach((item, i) => {
   item.addEventListener('click', () => {
      reset1();
      item.classList.add('active');
      orderingFormsOne[i].classList.add('active');
   })
})

//stage 2---------------------------
const orderingBtnsTwo = document.querySelectorAll('.ordering_stage_btn_geo');
const orderingGeoTwo = document.querySelectorAll('.ordering_stage_geo_item');

function reset2() {
   orderingBtnsTwo.forEach((item, i) => {
         item.classList.remove('active');
   })

   orderingGeoTwo.forEach((item, i) => {
      item.classList.remove('active');
})
}

orderingBtnsTwo.forEach((item, i) => {
   item.addEventListener('click', () => {
      reset2();
      item.classList.add('active');
      orderingGeoTwo[i].classList.add('active');
   })
})
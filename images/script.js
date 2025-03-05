 const tabsBtns = document.querySelectorAll(".tabs__nav button")
 // console.log(tabsBtns);
 const tabsItems = document.querySelectorAll(".tabs__item")
 // console.log(tabsItems);

 // Функція ховає таби та прибирає active у кнопок
 function  hideTabs() {
   tabsItems.forEach(item => item.classList.add("hide"));
   tabsBtns.forEach(item => item.classList.remove(active));
 }

 // Функція демонструє переданий номер таба і робить відповідну йому кнопку активною
  function showTab(index) {
 tabsItems[index].classList.remove("hide");
 tabsBtns[index].classList.add("active");
  }

 hideTabs()
 showTab(0)

 tabsBtns.forEach((btn, index) => btn.addEventListener("click", () => {
  hideTabs();
  
 }));
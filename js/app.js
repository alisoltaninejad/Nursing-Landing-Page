// -------------------------------------------- submenu icon handler ------------------------------------------
let navItems = document.querySelectorAll(".nav-item");
navItems.forEach((item) => {
  if (item.querySelector(".nav-submenu") !== null) {
    item.querySelector(".nav-link").insertAdjacentHTML(
      "beforeend",
      `
      <i class="fas fa-chevron-down" ></i>
      `
    );
  }
});
let submenuItems = document.querySelectorAll(".nav-submenu-item");
submenuItems.forEach((item) => {
  if (item.querySelector(".nav-submenu") !== null) {
    item.querySelector(".nav-submenu-link").insertAdjacentHTML(
      "beforeend",
      `
        <i class="fas fa-chevron-left" ></i>
        `
    );
  }
});
// -------------- responsive submenu icon handler ---------------------
document.addEventListener("DOMContentLoaded", function () {
  let responsive_menu = document.querySelectorAll(".responsive-menu__list > ul li");
  
  // تابع برای بستن تمام زیرمنوهای سطح بالا
  function closeAllSubMenus(parent = null) {
    let scope = parent ? parent.querySelectorAll("ul.show") : document.querySelectorAll(".responsive-menu__list > ul ul.show");
    
    scope.forEach((menu) => {
      menu.classList.remove("show");
      let icon = menu.previousElementSibling?.querySelector(".fa-chevron-down");
      if (icon) icon.classList.remove("rotate");
    });
  }
  
  // مدیریت باز و بسته شدن زیرمنوها
  responsive_menu.forEach((item) => {
    if (item.querySelector("ul") !== null) {
      item.querySelector("a").insertAdjacentHTML("beforeend", `<i class="fas fa-chevron-down d-lg-none"></i>`);
      const icon = item.querySelector(".fa-chevron-down");
      
      icon.addEventListener("click", function (e) {
        e.preventDefault();
        let subMenu = icon.parentElement.nextElementSibling;
        let isOpen = subMenu.classList.contains("show");
        
        // بستن فقط زیرمنوهای سطح همین منو
        closeAllSubMenus(item.parentElement);
        
        // باز یا بسته کردن زیرمنو
        subMenu.classList.toggle("show", !isOpen);
        icon.classList.toggle("rotate", !isOpen);
      });
    }
  });
  
  // بستن تمام زیرمنوها هنگام بسته شدن offcanvas
  let offcanvas = document.getElementById("mobileMenu");
  offcanvas.addEventListener("hidden.bs.offcanvas", function () {
    closeAllSubMenus();
  });
});

// --------------------------------------------------- services ----------------------------------------------------------
const services=document.querySelectorAll('.services__item')
services.forEach((service,index)=>{
service.addEventListener('mouseover',()=>{
  if(!service.classList.contains('services__item--selected')){
    service.classList.add('services__item--selected')
  }
  services.forEach((elem,indox)=>{
    if(index!==indox){
      if (elem.classList.contains('services__item--selected')) {
        elem.classList.remove('services__item--selected')
      }
    }
  })
})
})
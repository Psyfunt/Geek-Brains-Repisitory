// Проверка на поддержку webp

function testWebP(callback) {

   var webP = new Image();
   webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
   };
   webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

   if (support == true) {
      document.querySelector('body').classList.add('webp');
   } else {
      document.querySelector('body').classList.add('no-webp');
   }
});


// Выпадашка у Browse

function myFunction() {
   document.getElementById("myDropdown").classList.toggle("show");
}
function myFunctionCart() {
   document.getElementById("myDropdownCart").classList.toggle("open");
}
function myFunctionMega() {
   document.getElementById("myDropdownMega").classList.toggle("drop");
}
function openBurger() {
   document.getElementById("burgerControl").classList.toggle("burger-open");
}

function checkout() {
   document.getElementById("itemDropdown").classList.toggle("checkout__dropdown");
}

window.onclick = function (event) {
   if (!event.target.matches('.dropbtn')) {

      var dropdowns = document.getElementsByClassName("browse__dropdown");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
         var openDropdown = dropdowns[i];
         if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
         }
      }
   }
}

// Выпадашка Cart





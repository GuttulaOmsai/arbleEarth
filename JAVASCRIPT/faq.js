function openNav() {
  document.getElementById("mySidenav").style.display = "block";
     }
  
  function closeNav() {
    document.getElementById("mySidenav").style.display = "none";
    
  }

  document.addEventListener('scroll', function(event) {
    var mySidenav = document.getElementById('mySidenav');
    var spanNav = document.querySelector('.span-nav');

    
    if (event.target !== mySidenav && !mySidenav.contains(event.target) && event.target !== spanNav && !spanNav.contains(event.target)) {
       
        closeNav();
    }
    });
    document.addEventListener('click', function(event) {
      var mySidenav = document.getElementById('mySidenav');
      var spanNav = document.querySelector('.span-nav');
 
      if (event.target !== mySidenav && !mySidenav.contains(event.target) && event.target !== spanNav && !spanNav.contains(event.target)) {
          
          closeNav();
      }
      });
  




// function openNav() {
//   document.getElementById("mySidenav").style.width = "300px";
//   document.getElementById("span-nav").style.marginLeft = "300px";
// }

// function closeNav() {
//   document.getElementById("mySidenav").style.width = "0";
//   document.getElementById("span-nav").style.marginRight = "0";
// }

// document.addEventListener('scroll', function(event) {
//   var mySidenav = document.getElementById('mySidenav');
//   var spanNav = document.querySelector('.span-nav');

  
//   if (event.target !== mySidenav && !mySidenav.contains(event.target) && event.target !== spanNav && !spanNav.contains(event.target)) {
     
//       closeNav();
//   }
//   });


//   document.addEventListener('click', function(event) {
//     var mySidenav = document.getElementById('mySidenav');
//     var spanNav = document.querySelector('.span-nav');

    
//     if (event.target !== mySidenav && !mySidenav.contains(event.target) && event.target !== spanNav && !spanNav.contains(event.target)) {
        
//         closeNav();
//     }
//     });

// faqjs

const faqs = document.querySelectorAll(".faq");
faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
      faqs.forEach(function(qtn){
          if(qtn!==faq){
            qtn.classList.remove("active");
          }
      })
        faq.classList.toggle("active");
    });
});

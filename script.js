const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');
const logo_text = document.querySelector('.logo-text');
const brand = document.querySelector('.brand');
var opct = 0;

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active')
    mobile_menu.classList.toggle('active')
});

document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
        
    // if (scroll_position >= 500) return
    opct = scroll_position/350;
    if (opct >= 1) {
        changeOpacity(1);
        logo_text.style.color = 'var(--base)';
        logo_text.style.borderColor = 'var(--base)';
        brand.style.pointerEvents = 'all';
        
    }   /* return changeOpacity(1);   */  
    else {
        logo_text.style.color = 'var(--bg)';
        logo_text.style.borderColor = 'var(--bg)';
        brand.style.pointerEvents = 'none';
    console.log(opct);
    changeOpacity(opct);
    }
/*     header.style.backgroundColor = `rgba(41,50,60, ${opct})`;
 */
   /*  if (scroll_position > 250){
        header.style.backgroundColor = "#29323c";
    }else {
        header.style.backgroundColor = "transparent";
    } */
})

function changeOpacity(opac) {
    header.style.backgroundColor = `rgba(242, 242, 233, ${opac})`;
    brand.style.opacity = opac;
    
}



menu_item.forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('active')
        mobile_menu.classList.toggle('active')        
    })
})



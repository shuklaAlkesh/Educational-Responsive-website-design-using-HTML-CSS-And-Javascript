// change the navbar styleon scroll 

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
});

//show/hide/

const faq = document.querySelectorAll('.faqs');

faq.forEach(faqs => {
    faqs.addEventListener('click', () => {
        faqs.classList.toggle('open');
        // change icon
        const icon=faqs.querySelector('.faqs_icon i');
        if(icon.className === 'uil uil-plus'){
            icon.className= "uil uil-minus";
        } else {
            icon.className = "uil uil-plus";
        }
    })
})

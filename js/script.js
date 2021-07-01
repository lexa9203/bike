'use struct'
//СЛАЙДЕР
$(document).ready(function(){
    $('.slider').slick({
        dots:true
    });
});

//ПОЯВЛЕНИЕ ТЕКСТА
const animBlock = document.querySelectorAll('.block');

if(animBlock.length>0){
    window.addEventListener('scroll', animScrol);
    function animScrol() {
        for (let index = 0; index < animBlock.length; index++) {
            const elementAnim = animBlock[index];
            const elementAnimHeight = elementAnim.offsetHeight;
            const elementAnimOffset = offset(elementAnim).top;
            const animStart = 3;

            let animBlockPoint = window.innerHeight - elementAnimHeight / animStart;
            if (elementAnimHeight > window.innerHeight) {
                animBlockPoint = window.innerHeight - window.innerHeight / animStart;
            }
            if ((pageYOffset > elementAnimOffset - animBlockPoint) && (pageYOffset < elementAnimOffset + elementAnimHeight)) {
                elementAnim.classList.add('_active');
            } else {
                elementAnim.classList.remove('_active');
            }

        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
              scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
              scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        return { top:rect.top + scrollTop, left:rect.left + scrollLeft };
    }
}


//плавная прокрутка

$(document).ready(function(){
    	$('a[href^="#"]').bind('click.smoothscroll',function (e) {
    		e.preventDefault();
    
    		var target = this.hash,
    		$target = $(target);
    
    		$('html, body').animate({
    			'scrollTop': $target.offset().top-100
    		}, 800);
    	});
    
    });



//modal
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}



const modalBtnOpen = document.querySelector('.form__btn');
const modal = document.querySelector('.modal');
const modalBtnClose = document.querySelector('.modal_close');
const inputMail = document.getElementById('input_mail');



modalBtnClose.addEventListener('click',closeModal);

modal.addEventListener('click', (el) => {
    if (el.target === modal) {
        closeModal();
    }
});

modalBtnOpen.addEventListener('click', () => {
    if (validateEmail(inputMail.value) == false) {
        inputMail.style.border = '3px solid red';
        inputMail.style.borderRadius = '3px';

        setTimeout(() => {
            inputMail.style.border = '2px solid #d6d3d3';
            inputMail.style.borderRadius = '';
        }, 1000);
    }else{
        openModal();
        inputMail.value = '';
    }
});

function openModal() {
    modal.classList.add('modal__show');
    modal.classList.remove('modal__hide');
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
       closeModal(); 
    }, 2000);
}

function closeModal() {
    modal.classList.add('modal__hide');
    modal.classList.remove('modal__show');
    document.body.style.overflow = 'auto'; 
}



//burger

const burgerBtn = document.querySelector('.burger');
const menuBody = document.querySelector('.menu');
const menuLink = document.querySelectorAll('.menu__link');

burgerBtn.addEventListener('click', () => {
    menuBody.classList.add('_active');
    document.body.style.overflow = 'hidden';
});

menuLink.forEach((el) => {
    el.addEventListener('click', () => {
        menuBody.classList.remove('_active');
        document.body.style.overflow = 'auto';
    });
});

menuBody.addEventListener('click', () => {
    menuBody.classList.remove('_active');
    document.body.style.overflow = 'auto';
});












// 1  toggle button click to toggle navigation container
// 2  click in any section to close navigation container



/*     toggle button click to show/hide nav box  ----------- 1
 */

// toggler button 
let Toggler_Btn = document.getElementById('Toggler_Btn');

// toggled box 
let toggled_box = document.getElementById('toggled_box');

Toggler_Btn.addEventListener('click', () => {

    Toggler_Btn.classList.toggle('Toggler_Btn_script');
    toggled_box.classList.toggle('toggled_box_SCRIPT');

});



/*     Close Nav function  --------------------------- 1
 */

function Close_Nav() {

    Toggler_Btn.classList.remove('Toggler_Btn_script');
    toggled_box.classList.remove('toggled_box_SCRIPT');

}



/*     in nav search icon click to show nav search input ----------- 1
 */


var nav_side_search_input_animater = document.querySelector('.nav_side_search_input_animater');
var nav_side_search_input_animater_closer = document.querySelector('.nav_side_search_input_animater_closer');
document.querySelector('.nav-side-search-icon').addEventListener('click', () => {
    nav_side_search_input_animater.classList.add("nav_side_search_input_animater_SCRIPT");
    nav_side_search_input_animater_closer.classList.add('nav_side_search_input_animater_closer_SCRIPT');

    /*     in nav right icon click to close nav search input ----------- 1
     */

    nav_side_search_input_animater_closer.addEventListener('click', () => {
        nav_side_search_input_animater.classList.remove("nav_side_search_input_animater_SCRIPT");
        nav_side_search_input_animater_closer.classList.remove('nav_side_search_input_animater_closer_SCRIPT');
    });
});



/*     Click in any section to close navigation box  ----------- 2
 */


// section el html 
let sections_wrraper = document.querySelector('.sections_wrraper').addEventListener('click', () => {
    Toggler_Btn.classList.remove('Toggler_Btn_script');
    toggled_box.classList.remove('toggled_box_SCRIPT');

});



/*     click  btns to slide swiper and close nav   ----------- 2
 */

// nav_template_btn
document.querySelector('.nav_signup_ancor').addEventListener('click', () => {
    swiper.slidePrev();
    Toggler_Btn.classList.remove('Toggler_Btn_script');
    toggled_box.classList.remove('toggled_box_SCRIPT');
});
// hero_template_btn
document.querySelector('.signup_ancor').addEventListener('click', () => {
    swiper.slidePrev();
    Toggler_Btn.classList.remove('Toggler_Btn_script');
    toggled_box.classList.remove('toggled_box_SCRIPT');

});


/*      LOGO MOUSE OVER EV  ----------- 2
 */

let header_logo_hover_box = document.querySelector('.header_logo_hover_box');
document.querySelector('.logo').addEventListener('mouseover', () => {
    header_logo_hover_box.classList.add("header_logo_hover_box_SCRIPT");
});

document.querySelector('.logo').addEventListener('mouseout', () => {
    header_logo_hover_box.classList.remove("header_logo_hover_box_SCRIPT");
});



/*      SIGNUP SECTION PH / EMAIL CHNANGE   ----------- 2
 */

let signup_email_input_box = document.querySelector('.signup_email_input_box');
let signup_number_input_box = document.querySelector('.signup_number_input_box');

let change_to_email = document.querySelector('.change_to_email');
let change_to_num = document.querySelector('.change_to_num');
let btn_transform_box = document.querySelector('.account-form-btn-section-num-email-change-inner');

change_to_email.addEventListener('click', () => {

    btn_transform_box.classList.add('account-form-btn-section-num-email-change-inner_SCRIPT')
    signup_email_input_box.style.display = 'none';
    signup_number_input_box.style.display = 'block';

    change_to_num.addEventListener('click', () => {

        btn_transform_box.classList.remove('account-form-btn-section-num-email-change-inner_SCRIPT')
        signup_email_input_box.style.display = 'block';
        signup_number_input_box.style.display = 'none';

    });
});



/*      SIGNUP SECTION PH / EMAIL CHNANGE   ----------- 2
 */

let signup_email_input_box_2 = document.querySelector('.signup_email_input_box');
let signup_number_input_box_2 = document.querySelector('.signup_number_input_box');

let change_to_email_2 = document.querySelector('.change_to_email');
let change_to_num_2 = document.querySelector('.change_to_num');
let btn_transform_box_2 = document.querySelector('.account-form-btn-section-num-email-change-inner_2');

change_to_email.addEventListener('click', () => {

    btn_transform_box.classList.add('account-form-btn-section-num-email-change-inner_SCRIPT')
    signup_email_input_box.style.display = 'none';
    signup_number_input_box.style.display = 'block';

    change_to_num.addEventListener('click', () => {

        btn_transform_box.classList.remove('account-form-btn-section-num-email-change-inner_SCRIPT')
        signup_email_input_box.style.display = 'block';
        signup_number_input_box.style.display = 'none';

    });
});


/*      CGANGE IN LOGIN FORM  ----------- 2
 */


let text_changeTo_signup_login = document.querySelector('.text_changeTo_signup_login');
let heading_changeTo_signup_login = document.querySelector('.heading_changeTo_signup_login');

text_changeTo_signup_login.innerHTML = 'login';

function change_inLogin_form() {

    if (text_changeTo_signup_login.innerHTML == 'login') {

        text_changeTo_signup_login.innerHTML = 'sign-up';
        heading_changeTo_signup_login.innerHTML = 'login';

    } else {
        text_changeTo_signup_login.innerHTML = 'login';
        heading_changeTo_signup_login.innerHTML = 'signup';
    }

}
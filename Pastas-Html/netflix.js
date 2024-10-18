
    let cxemail = document.querySelector('input#caixa-email');
    

    function email() {
    if (cxemail.value == 0) {
        const avisocxemail = document.querySelector('p#aviso-cx-email').style.display = 'block';
        cxemail.style.border = '1px solid #EB3942';
        cxemail.style.background = '#27304391';

    }
    }
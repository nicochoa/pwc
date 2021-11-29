hamMenu.addEventListener('click', ()=>{
    console.log('hola');
    if (hamburguer.classList.contains('open-menu')) {
        console.log(1);
        hamburguer.classList.remove('open-menu');
        searchIcon.classList.remove('hide');
        header.classList.remove('mobile-header');
        nav.classList.remove('mobile');
        mainLogo.setAttribute('src' ,'https://www.pwc.com/etc.clientlibs/pwc/clientlibs/rebrand-clientlibs/components-colors/resources/images/slim-header-v2/PwC-logo.svg' );
    } else {
        console.log(2);
        hamburguer.classList.add('open-menu');
        searchIcon.classList.add('hide');
        header.classList.add('mobile-header');
        nav.classList.add('mobile');
        mainLogo.setAttribute('src' ,'https://www.pwc.com/etc.clientlibs/pwc/clientlibs/rebrand-clientlibs/components-colors/resources/images/slim-header-v2/PwC-logo-white.svg' );
    }
})

signinBtn.addEventListener('click', ()=>{
    location.href = "./login.html"
});

registerBtn.addEventListener('click', ()=>{
    location.href = "login.html"
});


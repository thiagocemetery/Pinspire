document.getElementById('loginPage').style.transitionDuration="0.45s"; //definindo o tempo de transição da página de login

function openLogin() {
    let divLogin = document.getElementById('loginPage');
    divLogin.classList.add('loginNew');
    
    setTimeout(function(){
        divLogin.style.display="block" // tirando o display none
    
        setTimeout(function(){
    
            divLogin.style.opacity = "1" //mostrando a página de login
    
        }, 400)
    
    }, 0);
}
function closeLogin() {
    let divLogin = document.getElementById('loginPage');

    setTimeout(function(){

        divLogin.style.opacity = "0" //fazendo login ficar invisível
        setTimeout(function(){
    
            divLogin.style.display="none" //deixando login com display none
    
        }, 400)
    }, 100);
}

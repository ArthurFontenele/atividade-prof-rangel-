// mostrar senha
const ver_senha_cadastro = document.getElementById('ver_senha_cadastro')
ver_senha_cadastro.addEventListener('click', (senha) => {
    senha = document.getElementById('senha_cadastro')
    if(ver_senha_cadastro.className == 'fas fa-eye'){
        ver_senha_cadastro.className = 'fas fa-eye-slash'
        senha.type = 'text'
    } else {
        ver_senha_cadastro.className = 'fas fa-eye'
        senha.type = 'password'
    }
})
//alternar o fas fa-eye
const ver_senha_login = document.getElementById('ver_senha_login')
ver_senha_login.addEventListener('click', (senha) => {
    senha = document.getElementById('senha_login')
    if(ver_senha_login.className == 'fas fa-eye'){
        ver_senha_login.className = 'fas fa-eye-slash'
        senha.type = 'text'
    } else {
        ver_senha_login.className = 'fas fa-eye'
        senha.type = 'password'
    }
})

// limpar username e password
document.getElementsByClassName('clean-answer')[0].addEventListener('click', () => {
    document.getElementById('Username_cadastro').value = ''
    document.getElementById('senha_cadastro').value = ''
    document.getElementById('email_cadastro').value = ''
})

document.getElementsByClassName('clean-answer')[1].addEventListener('click', () => {
    document.getElementById('Username_login').value = ''
    document.getElementById('senha_login').value = ''
})

// abrir aba de cadastrar
document.getElementsByClassName('btn_cadastrar_translate')[0].addEventListener('click', () => {
    const translate = document.getElementsByClassName('translate')[0]
    const content_box_cadastro = document.getElementsByClassName('content-box')[0]
    const content_box_login = document.getElementsByClassName('content-box')[1]
    const flex_box = document.getElementsByClassName('flex-box')[0]
    
    if (translate.className == 'translate') {
        translate.classList.add('mudança')

        content_box_login.classList.add('login-box')
        content_box_login.style.display = 'none'

        content_box_cadastro.style.display = 'block'

        flex_box.classList.add('container-box')
        
        // informações da tela de cadastro
        document.getElementsByClassName('text_cad')[0].innerHTML = 'OLÁ AMIGO!'
        document.getElementsByClassName('text_cad')[1].innerHTML = 'Você já possui uma conta?'
        document.getElementsByClassName('text_cad')[2].innerHTML = 'Conecte-se com ela e deixe'
        document.getElementsByClassName('text_cad')[3].innerHTML = 'todas as suas informações salvas.'

        document.getElementsByClassName('btn_cadastrar_translate')[0].innerHTML = 'LOGIN'
    } else {
        translate.classList.remove('mudança')

        content_box_login.classList.remove('login-box')
        content_box_login.style.display = 'block'

        content_box_cadastro.style.display = 'none'

        flex_box.classList.remove('container-box')

        // informações da tela de cadastro
        document.getElementsByClassName('text_cad')[0].innerHTML = 'SEJA BEM-VINDO!'
        document.getElementsByClassName('text_cad')[1].innerHTML = 'Não possui uma conta?'
        document.getElementsByClassName('text_cad')[2].innerHTML = 'Cadastre-se agora'
        document.getElementsByClassName('text_cad')[3].innerHTML = 'e tenha acesso completo a nosso site!'

        document.getElementsByClassName('btn_cadastrar_translate')[0].innerHTML = 'CADASTRAR-SE'
    }
})

let switchCtn = document.querySelector("#switch-cnt");
let switchC1 = document.querySelector("#switch-c1");
let switchC2 = document.querySelector("#switch-c2");
let switchCircle = document.querySelectorAll(".switch__circle");
let switchBtn = document.querySelectorAll(".switch-btn");
let aContainer = document.querySelector("#a-container");
let bContainer = document.querySelector("#b-container");
let allButtons = document.querySelectorAll(".submit");

let getButtons = (e) => e.preventDefault()

let changeForm = (e) => {

    switchCtn.classList.add("is-gx");
    setTimeout(function(){
        switchCtn.classList.remove("is-gx");
    }, 1500)

    switchCtn.classList.toggle("is-txr");
    switchCircle[0].classList.toggle("is-txr");
    switchCircle[1].classList.toggle("is-txr");

    switchC1.classList.toggle("is-hidden");
    switchC2.classList.toggle("is-hidden");
    aContainer.classList.toggle("is-txl");
    bContainer.classList.toggle("is-txl");
    bContainer.classList.toggle("is-z200");
}

let mainF = (e) => {
    for (var i = 0; i < allButtons.length; i++)
        allButtons[i].addEventListener("click", getButtons );
    for (var i = 0; i < switchBtn.length; i++)
        switchBtn[i].addEventListener("click", changeForm)
}

window.addEventListener("load", mainF);


document.addEventListener('DOMContentLoaded', function () {
    const aContainer = document.getElementById('a-container');
    const bContainer = document.getElementById('b-container');
    const switchBtns = document.querySelectorAll('.switch-btn');
    const switchC1 = document.getElementById('switch-c1');
    const switchC2 = document.getElementById('switch-c2');
    const cursosContainer = document.getElementById('cursos-container');
    const videoContainer = document.getElementById('video-container');
    const cursosList = document.getElementById('cursos-list');
    const videosList = document.getElementById('videos-list');
    const notaInput = document.getElementById('nota');
    const loginEmailInput = document.getElementById('login-email');
    const loginSenhaInput = document.getElementById('login-senha');
    const signupNomeInput = document.getElementById('signup-nome');
    const signupEmailInput = document.getElementById('signup-email');
    const signupSenhaInput = document.getElementById('signup-senha');
    const loginButton = document.getElementById('login-button');
    const signupButton = document.getElementById('signup-button');

    const usuarios = [
        { id: 1, nome: 'Usuário 1', email: 'usuario1@example.com', senha: 'senha1' },
        { id: 2, nome: 'Usuário 2', email: 'usuario2@example.com', senha: 'senha2' }
    ];

    const cursos = [
        { id: 1, nome: 'Curso 1', usuarioId: 1 },
        { id: 2, nome: 'Curso 2', usuarioId: 2 }
    ];

    const videos = [
        { id: 1, nome: 'Vídeo 1', cursoId: 1 },
        { id: 2, nome: 'Vídeo 2', cursoId: 1 },
        { id: 3, nome: 'Vídeo 1', cursoId: 2 }
    ];

    function registrarUsuario(nome, email, senha) {
        const newUser = { id: usuarios.length + 1, nome, email, senha };
        usuarios.push(newUser);
        return true;
    }

    function autenticarUsuario(email, senha) {
        const user = usuarios.find(u => u.email === email && u.senha === senha);
        return user ? { ...user } : null;
    }

    function buscarCursosDoUsuario(usuarioId) {
        return cursos.filter(curso => curso.usuarioId === usuarioId);
    }

    function buscarVideosDoCurso(cursoId) {
        return videos.filter(video => video.cursoId === cursoId);
    }

    function limparListas() {
        cursosList.innerHTML = '';
        videosList.innerHTML = '';
    }

    switchBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            aContainer.classList.toggle('active');
            bContainer.classList.toggle('active');
        });
    });

    switchC1.addEventListener('click', () => {
        switchC1.classList.add('is-hidden');
        switchC2.classList.remove('is-hidden');
    });

    switchC2.addEventListener('click', () => {
        switchC1.classList.remove('is-hidden');
        switchC2.classList.add('is-hidden');
    });

    loginButton.addEventListener('click', function () {
        const email = loginEmailInput.value;
        const senha = loginSenhaInput.value;

        if (email && senha) {
            const usuario = autenticarUsuario(email, senha);

            if (usuario) {
                
                window.location.href = 'videos.html';
            } else {
                alert('Credenciais inválidas');
            }
        } else {
            alert('Preencha todos os campos de login.');
        }
    });

    signupButton.addEventListener('click', function () {
        const nome = signupNomeInput.value;
        const email = signupEmailInput.value;
        const senha = signupSenhaInput.value;

        if (nome && email && senha) {
            const sucesso = registrarUsuario(nome, email, senha);

            if (sucesso) {
               
                window.location.href = 'areadoaluno.html';
            } else {
                alert('Erro no registro de usuário. Verifique seus dados.');
            }
        } else {
            alert('Preencha todos os campos de cadastro.');
        }
    });
});

        
    

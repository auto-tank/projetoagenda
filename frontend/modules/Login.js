import validator from 'validator';

// Validação por parte do Front-end.
// O Back-end também vai fazer essas validações, mas aqui é outra forma de validar que é mais simples:
/*
* Essa validação ela é mais otimizada por evita requisições desnecessárias para o servidor, onde em vez
* de eu enviar o formulário e então obter a informação dos dados presentes neles estarem inválidos pelo Back-end,
* eu nem faria esse envio, logo poupando recursos fazendo que o front-end já estivese preparado para lidar com esses
* erros e otimizando o tempo de resposta e simplificando a construção da minha aplicação.
*/
export default class Login {
    constructor(formClass) {
        this.form = document.querySelector(formClass);
    }

    init() {
        this.events();
    }

    events() {
        if (!this.form) return;
        this.form.addEventListener('submit', e => {
            e.preventDefault();
            this.validate(e);
        });
    }

    // ! Idealmente isso seria feito por uma mensagem elemento em HTML e não por um alert()
    validate(e) {
        const el = e.target;
        const emailInput = el.querySelector('input[name="email"]');
        const passwordInput = el.querySelector('input[name="password"]');
        let error = false;

        if (!validator.isEmail(emailInput.value)) {
            alert('Email inválido');
            error = true;
        }

        if (passwordInput.value.length < 3 || passwordInput.value.length >= 50) {
            alert('Senha precisa ter entre 3 e 50 caracteres');
            error = true;
        }

        if (!error) el.submit();
    }
}
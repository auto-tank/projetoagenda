import validator from 'validator';

export default class Contato {
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

    validate(e) {
        const el = e.target;
        const nameInput = el.querySelector('input[name="nome"]');
        const emailInput = el.querySelector('input[name="email"]');
        const phoneInput = el.querySelector('input[name="telefone"]');
        let error = false;

        if (!nameInput.value) {
            alert("Nome é um campo obrigatório");
            error = true;
        }

        if (emailInput.value && !validator.isEmail(emailInput.value)) {
            alert("Email inválido");
            error = true;
        }

        if (!emailInput.value && !phoneInput.value) {
            alert("Um contato precisa existir: Email ou Telefone");
            error = true;
        }

        if (!error) el.submit();
    }
}
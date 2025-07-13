const Contato = require('../models/ContatoModel')

exports.index = async (req, res) => {
    const contatos = await Contato.buscaContatos();
    res.render('index', { contatos });
};

exports.pageNotFound = (req, res) => {
    res.render('404');
};
//Isso tudo retorna um objeto, então associar por desestruturação
//aonde estiver sendo importado

// O Express vai utilizar esses Middlewares para toda rota,
// assim permitindo transferir variáveis de controles locais
// para controle de sessão e tokens, como o CSRF
exports.middlewareGlobal = (req, res, next) => {
    res.locals.errors = req.flash('errors');
    res.locals.success = req.flash('success');
    res.locals.user = req.session.user;
    next();
};

exports.outroMiddleware = (req, res, next) => {
    next();
};

exports.checkCSRFError = (err, req, res, next) => {
    if (err) return res.render('404');
    next();
};

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
};

exports.loginRequired = (req, res, next) => {
    if (!req.session.user) {
        req.flash('errors', 'Você precisa fazer login.');
        req.session.save(() => res.redirect('/'));
        return;
    }

    next();
};

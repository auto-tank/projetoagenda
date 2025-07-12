exports.index = (req, res) => {
    res.render('index');
};

exports.pageNotFound = (req, res) => {
    res.render('404');
};
function loginout(req,res) {
    res.clearCookie();
    delete req.session.userid;
    delete req.session.username;
    res.redirect('./login');
    res.end();
}

module.exports = loginout;
function home(req, res) {
  res.json('home.ejs');
}

module.exports = {
  home: home
}
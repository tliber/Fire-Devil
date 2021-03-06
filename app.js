var express = require('express');
var app = require('./server/server.js');
var googleCal = require('./googleCal.js')
var passport = require('passport')

app.use(passport.initialize())
app.use(passport.session())
app.use('/',express.static(__dirname + '/client'));
app.use(express.static(__dirname + '/client'));
//asks google for permissions of specific items defined in scopes
app.get('/login',
  passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/userinfo.profile',
                                            'https://www.googleapis.com/auth/userinfo.email',
                                            'https://www.googleapis.com/auth/calendar.readonly'] }),
  function(req, res){
    console.log('inside passport function')
    // The request will be redirected to Google for authentication, so this
    // function will not be called.
  });
app.use('/data-view',express.static(__dirname +'/app'));
app.use('google-cal',express.static(__dirname + '/google-cal'));
//callback defined in project, goes here to authenticate after route to login
app.get('/data-view/callback', 
  passport.authenticate('google', { failureRedirect: '/data-view' }),
  function(req, res) {
    res.redirect('/data-view');
  });
  //does work fix later
  app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
  });
console.log('listening on 8000');
app.listen(8000);

var ensureAuthenticated = function(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/login');
}
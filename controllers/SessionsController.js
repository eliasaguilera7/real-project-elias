const User = require('../models/User');
const passport = require('passport');
const viewPath = 'sessions';

exports.new = (req, res) => {
  res.render(`${viewPath}/login`, {
    pageTitle: 'Login'
  });
};

// Step 1: Create an action that will authenticate the user using Passport
exports.create = (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/resources',
    successFlash: 'You are logged in now!.',
    failureRedirect: '/login',
    failureFlash: 'Invalid login. Please try again.'
  })(req, res, next); 
};

// Step 2: Log the user out
exports.delete = (req, res) => {
  req.logout();
  req.flash('success', 'You were logged now.');
  res.redirect('/');

};
const { new: _new, index, show, create, edit, update, delete: _delete } = require('../controllers/ResourceController');

// Step 1: Write an authentication function to identify if a request is authenticated
function auth (req, res, next) {
  if (!req.isAuthenticated()) {
    return res.status(401).json({message: "Well, You need to authenticate first"});
  }
  next();
}

// Step 2: Add the authentication function to all the routes below

module.exports = router => {
  router.get('/resources', index);
  router.get('/resources/new', auth, _new);
  router.post('/resources',auth, create); 
  router.post('/resources/update',auth, update); 
  router.post('/resources/delete',auth, _delete); 
  router.get('/resources/:id/edit',auth, edit); 
  router.get('/resources/:id', show);
};
const {create,login, viewAllusers}  = require('../../services/user/index');
const allowRoles = require('../../middlewares/rolesMiddleware')
const exppress = require('express');

const router = exppress.Router();


router.post('/register',create);
router.post('/login',login);

//------------- Admin view all users -------------//
router.get('/users',allowRoles('admin'),viewAllusers)

module.exports = router
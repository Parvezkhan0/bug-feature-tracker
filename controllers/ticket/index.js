const {createTicket,getAll, getById, updateTicket, remove, viewOurTicket, updateStatus} = require('../../services/ticket/index')
const allowRoles = require('../../middlewares/rolesMiddleware')
const router = require('express').Router();

router.post('/create-ticket/:id',allowRoles('manager'),createTicket);
router.get('/all-tickets',allowRoles('manager'),getAll);
router.get('/get-ticket/:id',allowRoles('manager'),getById);
router.put('/update-ticket/:id',allowRoles('manager'),updateTicket);
router.delete('/delete-ticket/:id',allowRoles('manager'),remove);

// ----------- User role ticket -------------//
router.get('/view-my-tickets',allowRoles('user'),viewOurTicket);
router.put('/update-status/:id',allowRoles('user'),updateStatus);



module.exports = router
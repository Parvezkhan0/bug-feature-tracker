const router = require('express').Router();
const {create,getByTicket,updateComment,remove} = require("../../services/comments/index");

router.post('/comment',create);
router.get('/comment/:id',getByTicket);
router.put('/comment/:id',updateComment)
router.delete('/comment/:id',remove)

module.exports = router
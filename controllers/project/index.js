const {create, getAll, getById, updateProject, remove} = require('../../services/project/index');
const allowRoles = require("../../middlewares/rolesMiddleware")
const router = require('express').Router();


router.post('/add-project',allowRoles('manager'),create);
router.get('/all-projects',allowRoles('admin','manager'),getAll);
router.get('/get-project/:id',allowRoles('admin','manager'),getById);
router.put('/update-project/:id',allowRoles('manager'),updateProject);
router.delete('/delete-project/:id',allowRoles('manager'),remove)


module.exports = router
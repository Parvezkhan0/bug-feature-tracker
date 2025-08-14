const router = require('express').Router();

router.use(require('./../controllers/user/index'));
router.use(require('./../controllers/project/index'));
router.use(require('./../controllers/ticket/index'));
router.use(require('./../controllers/commints/index'))




module.exports = router
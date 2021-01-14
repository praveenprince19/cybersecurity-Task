const router = require("express").Router();
const bodyParser = require("body-parser");
const UserController = require('../controllers/tblusersController');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.get("/healthcheck", (req, res) => {
    res.sendStatus(200); 
});

router.get("/getUserList", UserController.getUserList); 

router.post("/CheckUser", UserController.CheckUser); 

module.exports = router;

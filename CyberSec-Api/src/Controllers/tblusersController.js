
const UserList = require('../tableContent.json');
const config = require('../config');

const getUserList = async (req, res) => { 
    return res.send({ 'status': 200, "statusMsg": 'success', UserList: UserList[0]});
}


const CheckUser = async (req, res) => { 
    // console.log(req.body);
    const { email,  password} = req.body;
    const validUser = config.userlistArr.includes(email);
    if(validUser && password === config.userPasswordlistArr) {
        return res.send({ 'status': 200,"statusMsg": 'success', ValidUserData: req.body });
    }else {
        return res.send({ 'status': 404,"statusMsg": 'Failed' });
    }
    
}

module.exports = {
    getUserList,
    CheckUser
}
